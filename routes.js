shopApp.config([`$routeProvider`, function ($routeProvider) {
    $routeProvider.when(`/`, {
        templateUrl: `src/pages/home/home.html`,
        controller: `homeController`
    })
        .when(`/login`, {
            templateUrl: `src/pages/login/login.html`,
            controller: `loginController`
        })
        .when(`/register`, {
            templateUrl: `src/pages/register/register.html`,
            controller: `registerController`
        })
        .when(`/products`, {
            templateUrl: `src/pages/products/products.html`,
            controller: `productsController`
        })

        .otherwise(`/`)
}]);
