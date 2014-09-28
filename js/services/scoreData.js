'use strict';

tictactoeApp.factory('scoreData', function ($http, $window, baseUrl, identity) {
    return {
        getData: function (success) {
            var user = JSON.parse($window.sessionStorage.getItem('user'));
            var sessionKey = user.access_token;

            $http.get(baseUrl + 'api/high-scores',{
                headers: {
                    'Authorization': 'Bearer ' + sessionKey
                }
            }).success(function(data, status, headers,config){
                success(data);
            });
        }
    }
});