<?php
class BettertooltipPlugin extends StudIPPlugin implements SystemPlugin {

    public function __construct() {
        parent::__construct();
        self::addStylesheet('/assets/style.less');
        PageLayout::addScript($this->getPluginURL().'/assets/application.js');
    }
}
