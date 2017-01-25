'use strict';

angular.module('app')

    .controller('HomeController', ['$scope', '$state', '$stateParams', 'coursesFactory',
        function ($scope, $state, $stateParams, coursesFactory) {
            $scope.message = "Loading ...";
            $scope.courses = [];

            coursesFactory.query(
                function (response) {
                    $scope.courses = response;
                },
                function (response) {
                    $scope.message = "Error: " + response.status + " " + response.statusText;
                }
            );

        }]);