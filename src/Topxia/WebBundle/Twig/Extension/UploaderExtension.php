<?php
namespace Topxia\WebBundle\Twig\Extension;

use Topxia\WebBundle\Util\UploaderToken;

class UploaderExtension extends \Twig_Extension
{
    protected $container;

    protected $pageScripts;

    public function __construct($container)
    {
        $this->container = $container;
    }

    public function getFilters()
    {
        return array(

        );
    }

    public function getFunctions()
    {
        return array(
            'uploader_token'   => new \Twig_Function_Method($this, 'makeUpoaderToken'),
            'uploader_process' => new \Twig_Function_Method($this, 'getProcessMode'),
            'uploader_accept'  => new \Twig_Function_Method($this, 'getUploadFileAccept')
        );
    }

    public function makeUpoaderToken($targetType, $targetId, $bucket, $ttl = 86400)
    {
        $maker = new UploaderToken();
        return $maker->make($targetType, $targetId, $bucket, $ttl);
    }

    public function getProcessMode($targetType)
    {
        $modes = array(
            'courselesson'   => 'auto',
            'coursematerial' => 'none',
            'materiallib'    => 'auto'
        );

        if (isset($modes[$targetType])) {
            return $modes[$targetType];
        }

        return 'none';
    }

    public function getUploadFileAccept($targetType, $only = '')
    {
        $targetAcceptTypes = array(
            'courselesson'   => array('video', 'audio', 'flash', 'ppt', 'cloud_document'),
            'coursematerial' => array('video', 'audio', 'flash', 'ppt', 'document', 'zip', 'image', 'text'),
            'materiallib'    => array('video', 'audio', 'flash', 'ppt', 'document', 'zip', 'image', 'text')
        );

        $availableAccepts = array(
            'video'          => array(
                'extensions' => array('mp4', 'avi', 'flv', 'f4v', 'mpg', 'wmv', 'mov', 'vob', 'rmvb', 'mkv', 'm4v'),
            ),
            'audio'          => array(
                'extensions' => array('mp3'),
            ),
            'flash'          => array(
                'extensions' => array('swf'),
            ),
            'ppt'            => array(
                'extensions' => array('ppt', 'pptx'),
            ),
            'cloud_document' => array(
                'extensions' => array('doc', 'docx', 'pdf'),
            ),
            'document'       => array(
                'extensions' => array('doc', 'docx', 'pdf', 'xls', 'xlsx', 'wps', 'odt'),
            ),
            'zip'            => array(
                'extensions' => array('zip', 'rar', 'gz', 'tar', '7z'),
            ),
            'image'          => array(
                'extensions' => array('jpg', 'jpeg', 'png', 'gif', 'bmp'),
            ),
            'text'           => array(
                'extensions' => array('txt', 'html', 'js', 'css'),
            ),
            'all'            => array(
                'extensions' => array('*'),
            )
        );

        $types = array();

        $only = explode(',', $only);

        if ($only && !empty($only[0])) {
            $types = $only;
        } elseif (isset($targetAcceptTypes[$targetType])) {
            $types = $targetAcceptTypes[$targetType];
        } else {
            $types = array('all');
        }

        $accept = array('extensions' => array());

        foreach ($types as $type) {
            if (isset($availableAccepts[$type])) {
                $accept['extensions'] = array_merge($accept['extensions'], $availableAccepts[$type]['extensions']);
            }
        }

        return $accept;
    }

    public function getName()
    {
        return 'topxia_uploader_twig';
    }
}
