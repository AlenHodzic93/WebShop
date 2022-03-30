var shopApp = angular.module(`shopApp`, [`ngRoute`]);

shopApp.controller(`mainController`, function ($rootScope, $scope) {

    $rootScope.loggedUser = JSON.parse(localStorage.getItem(`loggedUser`)) || {};

    $scope.logout = function () {
        $rootScope.loggedUser = {};
        localStorage.removeItem(`loggedUser`);
    }
})