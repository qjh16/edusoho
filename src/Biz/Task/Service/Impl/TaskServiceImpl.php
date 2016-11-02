<?php

namespace Biz\Task\Service\Impl;

use Biz\BaseService;
use Biz\Task\Dao\TaskDao;
use Topxia\Common\ArrayToolkit;
use Biz\Task\Service\TaskService;
use Biz\Activity\Service\ActivityService;
use Topxia\Common\Exception\AccessDeniedException;

class TaskServiceImpl extends BaseService implements TaskService
{
    public function getTask($id)
    {
        return $this->getTaskDao()->get($id);
    }

    public function createTask($fields)
    {
        if ($this->invalidTask($fields)) {
            throw new \InvalidArgumentException('task is invalid');
        }

        if (!$this->canManageCourse($fields['fromCourseId'])) {
            throw new AccessDeniedException();
        }

        $activity                = $this->getActivityService()->createActivity($fields);
        $fields['activityId']    = $activity['id'];
        $fields['createdUserId'] = $this->getCurrentUser()->getId();
        $fields['courseId']      = $activity['fromCourseId'];

        $fields = $this->filterFields($fields);

        return $this->getTaskDao()->create($fields);
    }

    public function updateTask($id, $fields)
    {
        $savedTask = $this->getTask($id);

        if (!$this->canManageCourse($savedTask['courseId'])) {
            throw new AccessDeniedException();
        }

        $activity = $this->getActivityService()->updateActivity($savedTask['activityId'], $fields);

        $fields = $this->filterFields($fields);

        return $this->getTaskDao()->update($id, $fields);
    }

    public function deleteTask($id)
    {
        $task = $this->getTask($id);

        if (!$this->canManageCourse($task['courseId'])) {
            throw new AccessDeniedException();
        }

        $result = $this->getTaskDao()->delete($id);
        $this->getActivityService()->deleteActivity($task['activityId']);

        return $result;
    }

    public function findTasksByCourseId($courseId)
    {
        return $this->getTaskDao()->findByCourseId($courseId);
    }

    protected function filterFields($fields)
    {
        $fields = ArrayToolkit::parts($fields, array(
            'courseId',
            'preTaskId',
            'courseChapterId',
            'activityId',
            'title',
            'isFree',
            'isOptional',
            'startTime',
            'endTime',
            'status',
            'createdUserId'
        ));

        if (!empty($fields['startTime']) && $fields['startTime'] != 0) {
            $fields['startTime'] = strtotime($fields['startTime']);
        }

        if (!empty($fields['endTime']) && $fields['endTime'] != 0) {
            $fields['endTime'] = strtotime($fields['endTime']);
        }

        return $fields;
    }

    /**
     * @return TaskDao
     */
    protected function getTaskDao()
    {
        return $this->createDao('Task:TaskDao');
    }

    protected function canManageCourse($courseId)
    {
        return true;
    }

    protected function invalidTask($task)
    {
        if (!ArrayToolkit::requireds($task, array(
            'title',
            'fromCourseId'
        ))
        ) {
            return true;
        }

        return false;
    }

    /**
     * @return ActivityService
     */
    protected function getActivityService()
    {
        return $this->biz->service('Activity:ActivityService');
    }
}
