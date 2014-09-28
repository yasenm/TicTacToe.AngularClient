'use strict';

tictactoeApp.controller('SignUpCtrl',
    function ($scope, $http, $location, usersData, notifier){

        $scope.signup = function(user){
            var newUser = {
                "Email": user.Email,
                "Password": user.Password,
                "ConfirmPassword": user.Password
            };

            console.log(newUser);
            usersData.register(newUser).success(function (res) {
                console.log(res);
                notifier.success("Successfully registered !");
            });
            $scope.registered = true;
        }
    });