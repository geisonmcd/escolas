angular.module("institutions").controller("institutionUserReviewController", ["$scope", "api", "$route", "review", function ($scope, api, $route, review){
    
    const init = function () {
        console.log(review);
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
        console.log('saveSuccess');
        $scope.saved = true;
        setTimeout(function () {
            $route.reload();
        }, 2000)
    }
    
    init();
}]);