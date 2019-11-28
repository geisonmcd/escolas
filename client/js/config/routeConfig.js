angular.module("institutions", ['ngRoute']).config(['$routeProvider', function($routeProvider){
   
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

    $routeProvider.when('/institutions/:idInstitution', {
        name: "institutionsReview",
        templateUrl: "view/institution_review.html",
        controller: "institutionReviewController",
        resolve: {
            institution: ["$route", "$http", function ($route, $http) {
                return $http.get(`/institutions/${$route.current.params.idInstitution}/users/${1}/review`);
            }]
        }
    });   
    
}]);
