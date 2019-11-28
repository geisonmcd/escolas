angular.module("institutionsApp", ['ngRoute']).config(['$routeProvider', function($routeProvider){
   
    $routeProvider.when('/', {
        name: "institutions",
        templateUrl: "view/institutions.html",
        controller: "institutionsController",
        resolve: {
            institutions: ["$http", function ($http) {
                return $http.get("/institutions");
            }]
        }
    });   
    
}]);
