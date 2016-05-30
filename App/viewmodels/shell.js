﻿define(['plugins/router', 'durandal/app'], function (router, app) {

    
    var selectedSubMenu = ko.observable('');
    var selectedMainMenu = ko.observable('main');
    var version = app.version;
    var lang = ko.observable('he');

    this.toggleLanguage = function()
    {
        if (lang() == 'en') {
            lang('he');
        }
        else if (lang() == 'he') {
            lang('en');
        }
    }
    
    return {
        selectedSubMenu: selectedSubMenu,
        selectedMainMenu: selectedMainMenu,
        version: version,
        router: router,
        lang:lang,
        activate: function () {
            router.map([
                { route: 'Dashboard', title: 'Dashboard', moduleId: 'viewmodels/dashboard', nav: true },
                { route: '', title: 'Main', moduleId: 'viewmodels/sections', nav: true }
            ]).buildNavigationModel();

            return router.activate();
        },
        compositionComplete: function () {
            
        }
    };
});