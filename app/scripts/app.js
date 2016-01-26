//'use strict';

/**
 * @ngdoc overview
 * @name myYoAngularApp
 * @description
 * # myYoAngularApp
 *
 * Main module of the application.
 */

define([
    "angular",
    "angular-ui-router"
],  function(angular){
    var app = angular.module('myYoAngularApp', ['ui.router']);

    return app;
});
