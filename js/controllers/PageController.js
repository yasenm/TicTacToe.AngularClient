'use strict';

tictactoeApp.controller('PageController',
    function PageController($scope, author, copyright) {
        $scope.author = author;
        $scope.copyright = copyright;
    }
);