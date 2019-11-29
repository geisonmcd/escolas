angular.module("institutions").controller("institutionUserReviewController", ["$scope", "$http", "$route", "review", function ($scope, $http, $route, review){
    
    const init = function () {
        $scope.review = review.data;
    };

    $scope.saveReview = function (review) {
        if (review.idReview) {
            $http.put(`institutions/${$scope.review.idInstitution}/users/${1}/reviews/${review.idReview}`, review).then(function (response) {
            }); 
        } else {
            $http.post(`institutions/${$route.current.params.idInstitution}/users/${1}/reviews/`, review).then(function (response) {
            });
        }
    };  
    
    init();
}]);