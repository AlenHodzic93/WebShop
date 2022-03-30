shopApp.controller(`registerController`, function ($scope) {

    $scope.newUser = {};

    $scope.registerUser = function (e) {
        console.log($scope.newUser);
        console.log(e);
        if (!$scope.newUser.username || !$scope.newUser.password ||
            !$scope.newUser.fullName || !$scope.newUser.email) {
            return alert(`Form is not valid`);
        }
        var users = JSON.parse(localStorage.getItem(`users`)) || [];
        users.push($scope.newUser);
        $scope.newUser = {};
        localStorage.setItem(`users`, JSON.stringify(users));
        alert(`User uspješno registrovan`)
    }
})