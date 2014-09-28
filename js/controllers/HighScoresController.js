'use strict';

tictactoeApp.controller('HighScoresController',
    function ($scope, scoreData) {

        scoreData.getData(
            function (data){
                $scope.scores = data;
                console.log(data);
            });
    }
);