'use strict';

tictactoeApp.factory('scoreData', function ($http, $window, baseUrl, authorization) {
    return {
        getData: function (success) {
            var headers = authorization.getAuthorizationHeader();
            $http.get(baseUrl + 'api/high-scores',{
                headers: headers
            }).success(function(data, status, headers,config){
                success(data);
            });
        }
    }
});