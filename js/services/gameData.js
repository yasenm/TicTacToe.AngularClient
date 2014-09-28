'use strict';

tictactoeApp.factory('gameData', function ($http, $window, identity, baseUrl) {

    return {
        createGame: function (success) {
            var user = JSON.parse($window.sessionStorage.getItem('user'));
            var sessionKey = user.access_token;

            $http.post(baseUrl + 'api/games/create',{},
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + sessionKey
                    }
                })
                .success(function (data, status, headers, config) {
                    success(data);
                })
                .error(function (error) {
                    console.log(error);
                });
        },
        joinGame: function (success) {
            var user = JSON.parse($window.sessionStorage.getItem('user'));
            var sessionKey = user.access_token;

            $http.post(baseUrl + 'api/games/join',{}, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + sessionKey
                }
            })
                .success(function (data, status, headers, config) {
                    success(data);
                })
                .error(function (error) {
                    console.log(error);
                });
        },
        getGameStatus: function (success) {
            var user = JSON.parse($window.sessionStorage.getItem('user'));
            var sessionKey = user.access_token;
            var currentGameId = JSON.parse($window.sessionStorage.getItem('currentGameId'));

            $http.get(baseUrl + 'api/games/status?gameId=' + currentGameId, {
                headers: {
                    'Authorization': 'Bearer ' + sessionKey
                }
            })
                .success(function (data, status, headers, config) {
                    success(data);
                })
                .error(function (error) {
                    console.log(error);
                });
        },
        playTurn: function (turn, success) {
            var user = JSON.parse($window.sessionStorage.getItem('user'));
            var sessionKey = user.access_token;
            var currentGameId = JSON.parse($window.sessionStorage.getItem('currentGameId'));
            turn.GameId = currentGameId;

            $http.post(baseUrl + 'api/games/play',
                turn,
                {
                    headers: {
                        'Authorization': 'Bearer ' + sessionKey
                }
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