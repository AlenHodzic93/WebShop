shopApp.controller(`loginController`, function ($rootScope, $scope, $location) {
    $rootScope.loggedUser = {};

    $scope.login = function () {

        var users = JSON.parse(localStorage.getItem(`users`)) || [];
        for (var user of users) {
            if ($rootScope.loggedUser.email === user.email &&
                $rootScope.loggedUser.password === user.password) {
                $rootScope.loggedUser = user;
                localStorage.setItem(`loggedUser`, JSON.stringify(user))
                return $location.path(`/`)
            }
            alert(`Pokušajte opet`)
        }
    }
})