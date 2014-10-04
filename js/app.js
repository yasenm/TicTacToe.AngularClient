'use strict';

var tictactoeApp = angular
    .module('tictactoeApp', ['ngResource', 'ngRoute', 'ngCookies'])
    .config(function ($routeProvider) {

        $routeProvider
            .when('/home', {
                templateUrl: 'views/home.html'
            })
            .when('/play-game', {
                templateUrl: 'views/play-game.html'
            })
            .when('/signup', {
                templateUrl: 'views/signup.html'
            })
            .when('/high-scores', {
                templateUrl: 'views/high-scores.html'
            })
            .otherwise({
                redirectTo: '/home'
            });

    })
    .constant('toastr', toastr)
    .constant('baseUrl', 'http://localhost:33257/')
    .constant('author', 'yasenm')
    .constant('copyright', 'Telerik Academy');