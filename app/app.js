var myApp = angular.module('myApp', ['ngRoute','ngResource']);

myApp.config(function ($routeProvider) {
   
    $routeProvider
    
    .when('/', {
        templateUrl: '/components/home/home.html',
        controller:  'HomeCtrl'
    })
    .otherwise('/');
});