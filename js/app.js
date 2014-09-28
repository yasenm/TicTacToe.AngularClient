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
    .constant('baseUrl', 'http://tictactoewebapi.apphb.com/')
    .constant('author', 'Unnamed')
    .constant('copyright', 'Telerik Academy');