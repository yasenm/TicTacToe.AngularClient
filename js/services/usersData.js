'use strict';

tictactoeApp.factory('usersData', function ($http, $window, baseUrl, identity) {

    return {
        login: function (user, success) {
            return $http.post(baseUrl + 'Token',  {
                    username: user.UserName,
                    password: user.Password,
                    grant_type: "password"
                },
                {
                    transformRequest: function (obj) {
                        var str = [];
                        for (var p in obj)
                            str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                        return str.join("&");
                    },
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                });
        },
        register: function (user) {
            return $http.post(baseUrl + 'api/Account/Register',
                {
                    Email: user.Email,
                    Password: user.Password,
                    ConfirmPassword: user.Password
                },
                {
                    transformRequest: function (obj) {
                        var str = [];
                        for (var p in obj)
                            str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                        return str.join("&");
                    },
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                });
        },
        update: function (score) {
            var username = identity.user.userName;

            return $http.post(baseUrl + 'UpdateScore',
                {
                    username: username,
                    score: score
                },
                {
                    transformRequest: function (obj) {
                        var str = [];
                        for (var p in obj)
                            str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                        return str.join("&");
                    },
                    headers: {
                        'Authorization' : 'Bearer ' + identity.sessionKey,
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                });
        }
    }
});