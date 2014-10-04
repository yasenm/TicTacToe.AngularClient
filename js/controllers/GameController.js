tictactoeApp.controller('GameController',
    function ($scope, $window, gameData, identity) {
        $scope.currentlyInGame = false;
        $scope.something = 'Hello there';
        $scope.game = {};
        $scope.board = ['-', '-', '-', '-', '-', '-', '-', '-', '-'];
        $scope.currentTurn = {
            chosenRow: 1,
            chosenCol: 1
        };
        $scope.currentTurnFor = '';
        $scope.identity = identity;
        setInterval(UpdateGameBoard($scope.board), 2000);

        $scope.createGame = function () {
            gameData.createGame(
                function (data) {
                    $window.sessionStorage.setItem('currentGameId', data);
                    $scope.currentlyInGame = true;
                });
        };

        $scope.joinGame = function () {
            gameData.joinGame(
                function (data) {
                    $window.sessionStorage.setItem('currentGameId', data);
                    $scope.currentlyInGame = true;
                    $scope.getGameStatus();
                });
        };

        $scope.getGameStatus = function() {
            gameData.getGameStatus(
                function (data) {
                    var user = identity.getCurrentUser();
                    var currentGameId = JSON.parse($window.sessionStorage.getItem('currentGameId'));
                    $scope.game = data;

                    UpdateGameBoard(data.Board);
                    if ($scope.game.State == 1) {
                        $scope.currentTurnFor = 'Turn X';
                        if ($scope.game.FirstPlayerName == user.userName) {
                            $scope.currentPlayerTurn = true;
                        }
                    }
                    else if ($scope.game.State == 2) {
                        $scope.currentTurnFor = 'Turn O';
                        if ($scope.game.SecondPlayerName == user.userName) {
                            $scope.currentPlayerTurn = true;
                        }
                    }
                    else if ($scope.game.State == 3) {
                        if ($scope.game.FirstPlayerName == user.userName) {
                            alert('Congrats you won the game!');
                        }
                        else{
                            alert('You lost the game try again!');
                        }
                        $scope.currentlyInGame = false;
                    }
                    else if ($scope.game.State == 4) {
                        if ($scope.game.SecondPlayerName == user.userName) {
                            alert('Congrats you won the game!');
                        }
                        else{
                            alert('You lost the game try again!');
                        }
                        $scope.currentlyInGame = false;
                    }
                }
            );
        };

        $scope.makeTurn = function (turn) {
            gameData.playTurn(turn,
                function () {
                    $scope.currentPlayerTurn = false;
                    $scope.getGameStatus();
                }
            )
        };

        function UpdateGameBoard(newBoard) {
            $scope.board = [];

            for (var i = 0; i < newBoard.length; i += 1) {
                $scope.board[i] = newBoard[i];
            }
        }
    });