angular.module("institutionsApp").controller("institutionsController", ["$scope", "$http", "institutions", function ($scope, $http, institutions){
    
    const init = function () {
        $scope.institutions = institutions.data;
    };
    
    $scope.addInstitution = function(institution) {
        if (!institution) return;
        console.log(institution);
        $http.post(`institutions`, institution).then(function (response) {
            console.log('response: ' + response);
        }, function (error){
            console.log(error);
        });
        $scope.institutions.push(angular.copy(institution));
        delete $scope.institution;
    };

    init();
}]);