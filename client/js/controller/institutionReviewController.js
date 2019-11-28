angular.module("institutions").controller("institutionReviewController", ["$scope", "$http", "$route", "institution", function ($scope, $http, $route, institution){
    
    const init = function () {
        $scope.institution = institution.data;
    };

    $scope.saveReview = function (review) {
        if (review.idReview) {
            $http.put(`institutions/${$scope.institution.idInstitution}/users/${1}/review/${review.idReview}`, review).then(function (response) {
                // console.log(success);
            }); 
        } else {
            $http.post(`institutions/${$scope.institution.idInstitution}/users/${1}/review/`, review).then(function (response) {
                // console.log(success);
            });
        }
    };  
    
    init();
}]);