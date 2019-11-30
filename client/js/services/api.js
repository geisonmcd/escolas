angular.module('institutions').factory('api', [ '$http', function ($http) {
    return    {
        institutions: {
            list: function () {
                return $http.get(`/institutions`);
            },
            post: function (institution) {
                return $http.post(`institutions`, institution)
            },
            put: function (idInstitution, institution) {
                return $http.put(`institutions/${idInstitution}`, institution);
            },
            delete: function (idInstitution) {
                return $http.delete(`institutions/${idInstitution}`)
            },
            users: {
                reviews: {
                    get: function (idInstitution, idUser) {
                        return $http.get(`institutions/${idInstitution}/users/${idUser}/reviews`);
                    },
                    post: function (idInstitution, idUser, review) {
                        return $http.post(`institutions/${idInstitution}/users/${idUser}/reviews/`, review);
                    },
                    put: function (idInstitutions, idUser, idReview, review) {
                        return $http.put(`institutions/${idInstitutions}/users/${idUser}/reviews/${idReview}`, review);
                    }
                }
            }
        }
    }
}]);
