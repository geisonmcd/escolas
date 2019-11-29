angular.module("institutions").controller("institutionUserReviewController", ["$scope", "$http", "$route", "review", function ($scope, $http, $route, review){
    
    const init = function () {
        $scope.review = review.data;
    };

    $scope.saveReview = function (review) {
        if (review.idReview) {
            $http.put(`institutions/${$scope.review.idInstitution}/users/${1}/reviews/${review.idReview}`, review).then(function (response) {
                saveSuccess();
            }); 
        } else {
            $http.post(`institutions/${$route.current.params.idInstitution}/users/${1}/reviews/`, review).then(function (response) {
                saveSuccess();
            });
        }
    };  

    const saveSuccess = function () {
        $scope.saved = true;
        setTimeout(function () {
            $route.reload();
        }, 2000)
    }
    
    init();
}]);