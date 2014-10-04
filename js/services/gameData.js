'use strict';

tictactoeApp.factory('gameData', function ($http, $window, identity, baseUrl, authorization) {
    var headers = authorization.getAuthorizationHeader();

    return {
        createGame: function (success) {
            $http.post(baseUrl + 'api/games/create', {},
                {
                    headers: headers
                })
                .success(function (data, status, headers, config) {
                    success(data);
                })
                .error(function (error) {
                    console.log(error);
                });
        },
        joinGame: function (success) {
            $http.post(baseUrl + 'api/games/join', {}, {
                headers: headers
            })
                .success(function (data, status, headers, config) {
                    success(data);
                })
                .error(function (error) {
                    console.log(error);
                });
        },
        getGameStatus: function (success) {
            var currentGameId = JSON.parse($window.sessionStorage.getItem('currentGameId'));

            $http.get(baseUrl + 'api/games/status?gameId=' + currentGameId, {
                headers: headers
            })
                .success(function (data, status, headers, config) {
                    success(data);
                })
                .error(function (error) {
                    console.log(error);
                });
        },
        playTurn: function (turn, success) {
            var currentGameId = JSON.parse($window.sessionStorage.getItem('currentGameId'));
            turn.GameId = currentGameId;

            $http.post(baseUrl + 'api/games/play',
                turn,
                {
                    headers: headers
                })
                .success(function (data, status, headers, config) {
                    success(data);
                })
                .error(function (error) {
                    console.log(error);
                });
        }
    }
});