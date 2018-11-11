angular.module("Restaurant", ["ngRoute"])
    .config(config)
    .run(run);

run.$inject = ["$rootScope", "$location"];
config.$inject = ["$routeProvider"];

function config($routeProvider) {
    $routeProvider.
    when("/", {
        templateUrl: "/app/pages/login.html"
    }).
    when("/reservar", {
        templateUrl: "/app/pages/reservar.html",
        controller: "listarMesasController"
    }).
    when("/sobre", {
        templateUrl: "/app/pages/sobre.html"
    })
    .otherwise({
        redirectTo: "/"
    }); 

}

function run($rootScope, $location) {
    $rootScope.dataReservadas = ["20/04/2018", "31/02/2019", "25/05/2019"];
}