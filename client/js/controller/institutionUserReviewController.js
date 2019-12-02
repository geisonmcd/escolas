angular.module("institutions").controller("institutionUserReviewController", ["$scope", "api", "$route", "review", function ($scope, api, $route, review){
    
    const init = function () {
        $scope.review = review.data;
    };

    $scope.saveReview = function (review) {
        if (review.idReview) {
            api.institutions.users.reviews.put($scope.review.idInstitution, 1, review.idReview, review).then(saveSuccess);
        } else {
            api.institutions.users.reviews.post($route.current.params.idInstitution, 1, review).then(saveSuccess());
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