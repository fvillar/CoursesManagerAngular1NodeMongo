'use strict';

angular.module('app')

    .controller('HomeController', ['$scope', '$state', '$stateParams', 'coursesFactory', 'courseFactory',
        function ($scope, $state, $stateParams, coursesFactory, courseFactory) {
            $scope.message = "Loading ...";
            $scope.courses = [];
            $scope.loading = true;

            coursesFactory.query(
                function (response) {
                    $scope.courses = response;
                    $scope.loading = false;
                },
                function (response) {
                    $scope.message = "Error: " + response.status + " " + response.statusText;
                }
            );

            $scope.deleteCourse = function (id) {
                courseFactory.delete(id,
                    function (response) {
                        coursesFactory.query(
                            function (response) {
                                $scope.courses = response;
                                $scope.loading = false;
                            },
                            function (response) {
                                $scope.message = "Error: " + response.status + " " + response.statusText;
                            }
                        );
                    },
                    function (response) {
                        $scope.message = "Error: " + response.status + " " + response.statusText;
                    }
                );
            };

        }]);