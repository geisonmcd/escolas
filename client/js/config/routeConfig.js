angular.module("institutions", ['ngRoute']).config(['$routeProvider', function($routeProvider){
   
    $routeProvider.when('/institutions', {
        name: "institutions",
        templateUrl: "view/institutions.html",
        controller: "institutionsController",
        resolve: {
            institutions: ["api", function (api) {
                return api.institutions.list();
            }]
        }
    });   

    $routeProvider.when('/institutions/:idInstitution/users/:idUser/review', {
        name: "institutionsReview",
        templateUrl: "view/institution_user_review.html",
        controller: "institutionUserReviewController",
        resolve: {
            review: ["$route", "api", function ($route, api) {
                return api.institutions.users.reviews.get($route.current.params.idInstitution, 1);
            }]
        }
    });
    
    $routeProvider.otherwise({ redirectTo: "/institutions" });
    
}]);
