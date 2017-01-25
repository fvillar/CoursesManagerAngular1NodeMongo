'use strict';

angular.module('app')

    .controller('HomeController', ['$scope', '$state', '$stateParams', 'coursesFactory', 'courseFactory',
        function ($scope, $state, $stateParams, coursesFactory, courseFactory) {
            $scope.message = "Loading ...";
            $scope.courses = [];
            $scope.loading = true;

            coursesFactory.query(
                (response) => {
                    $scope.courses = response;
                    $scope.loading = false;
                },
                (response) => {
                    $scope.message = "Error: " + response.status + " " + response.statusText;
                }
            );

            $scope.deleteCourse =  (id) => {
                courseFactory.delete(id,
                    (response) => {
                        $scope.courses = coursesFactory.query();                            
                    },
                    (response) => {
                        $scope.message = "Error: " + response.status + " " + response.statusText;
                    }
                );
            };

        }]);