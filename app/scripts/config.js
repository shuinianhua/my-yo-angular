"use strict";

require.config({
	baseUrl: 'scripts/',
	paths: {
		"jquery": '../../bower_components/jquery/dist/jquery.min',
		"angular" : "../../bower_components/angular/angular",
		"angular-ui-router" : "../../bower_components/angular-ui-router/release/angular-ui-router.min",
	},
	shim: {
		"angular":{
			deps : ["jquery"],
            exports:"angular"
        },
		"angular-ui-router" : {
			deps : ["angular"],
            exports:"angular-ui-router"
		}

	}
});


require(["app", "initRoute"], function(app, initRoute){

	app.config(function($locationProvider, $controllerProvider, $compileProvider, $filterProvider, $provide, $stateProvider, $urlRouterProvider){
		app.controller = $controllerProvider.register;
        app.directive  = $compileProvider.directive;
        app.filter     = $filterProvider.register;
        app.factory    = $provide.factory;
        app.service    = $provide.service;

		initRoute($locationProvider, $stateProvider, $urlRouterProvider);
	});
    angular.bootstrap(document, ['myYoAngularApp']);

	//console.log(app);
});