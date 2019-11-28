angular.module("institutions").controller("institutionReviewModalController", ["$scope", "$http", "$route", "institution", function ($scope, $http, $route, institutions){
    
    const init = function () {
        console.log(institution);
        $scope.institution = institution;
    };
    
    init();
}]);