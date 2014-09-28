'use strict';

tictactoeApp.controller('LoginCtrl',
    function ($scope, $rootScope, $location, $window, identity, usersData, notifier) {

        $scope.identity = identity;
        $scope.logged = false;

        $scope.login = function (user) {
            usersData.login(user)
                .success(function (data) {
                    // authentication OK
                    $window.sessionStorage.setItem("user", JSON.stringify(data));
                    $scope.user = data;
                    $scope.logged = true;
                    notifier.success("Welcome !");
                })
                .error(function (error) {
                    notifier.error("Check you input! Couldn't log in");
                })
        };

        $scope.logout = function () {
            $scope.logged = false;
            $window.sessionStorage.clear();
        };

    });