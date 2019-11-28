angular.module('institutions').controller("institutionsController", ["$scope", "$http", "$route", "institutions", function ($scope, $http, $route, institutions){
    
    const init = function () {
        $scope.editMode = false;
        $scope.institutions = institutions.data;
    };
    
    $scope.saveInstitution = function (institution) {
        if (!institution) return;
        if (institution.idInstitution) {
            $http.put(`institutions/${$scope.institution.idInstitution}`, institution).then(function (response) {
                $route.reload();
            }, function (error){
            });
        } else {
            $http.post(`institutions`, institution).then(function (response) {
                $route.reload();
            }, function (error){
            });
        }
    };

    $scope.deleteInstitution = function (institution) {
        $http.delete(`institutions/${institution.idInstitution}`).then(function (response) {
            $route.reload();
        }, function (error){
        });
    };

    $scope.editInstitution = function (institution) {
        $scope.editMode = true;
        $scope.institution = angular.copy(institution);
    }

    init();
}]);