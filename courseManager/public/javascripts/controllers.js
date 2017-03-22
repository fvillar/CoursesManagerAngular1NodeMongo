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

            $scope.deleteCourse = (id) => {
                courseFactory.delete(id,
                    (response) => {
                        $scope.courses = coursesFactory.query();
                    },
                    (response) => {
                        $scope.message = "Error: " + response.status + " " + response.statusText;
                    }
                );
            };

        }])

    .controller('UpdateController', ['$scope', '$state', '$stateParams', 'courseFactory', 'coursesFactory', 'authorsFactory',
        function ($scope, $state, $stateParams, courseFactory, coursesFactory, authorsFactory) {

            $scope.message = "Loading Course...";
            $scope.loading = true;

            $scope.regex = '\\d+:?\\d*';

            $scope.course =
                courseFactory.query({
                    id: $stateParams.id
                }).$promise.then(
                    (response) => {
                        $scope.course = response[0];
                        $scope.loading = false;
                    },
                    (response) => {
                        $scope.message = "Error: " + response.status + " " + response.statusText;
                    }
                    );

            $scope.authors =
                authorsFactory.query(
                    (response) => {
                        $scope.authors = response;
                    },
                    (response) => {
                        $scope.message = "Error: " + response.status + " " + response.statusText;
                    }
                );

            $scope.updateCourse = () => {

                courseFactory.update({ id: $stateParams.id }, $scope.course,
                    (response) => {
                        $scope.courses = coursesFactory.query();
                    },
                    (response) => {
                        $scope.message = "Error: " + response.status + " " + response.statusText;
                    }
                );

                $state.go('app');

            };
        }])

    .controller('AddController', ['$scope', '$state', '$stateParams', 'courseFactory', 'coursesFactory', 'authorsFactory',
        function ($scope, $state, $stateParams, courseFactory, coursesFactory, authorsFactory) {

            $scope.course = {
                "title": '',
                "authorId": 0,
                "length": '',
                "category": ''
            };

            $scope.regex = '\\d+:?\\d*';

            $scope.authors =
                authorsFactory.query(
                    (response) => {
                        $scope.authors = response;
                    },
                    (response) => {
                        $scope.message = "Error: " + response.status + " " + response.statusText;
                    }
                );

            $scope.addCourse = () => {

                courseFactory.save($scope.course,
                    (response) => {
                        $scope.courses = coursesFactory.query();
                    },
                    (response) => {
                        $scope.message = "Error: " + response.status + " " + response.statusText;
                    }
                );

                $state.go('app');

            };
        }])

    .controller('LoginController', ['$scope', '$state', '$stateParams', 'loginFactory',
        function ($scope, $state, $stateParams, loginFactory) {
            $scope.username='';
            $scope.password=''

            $scope.register = () => {

                registerFactory.save({username: $scope.username, password:$scope.password},
                    (response) => {
                        $state.go('app.home');
                    },
                    (response) => {
                        $scope.message = "Error: " + response.status + " " + response.statusText;
                    }
                );
            }

        }])

    .controller('RegisterController', ['$scope', '$state', 'registerFactory',
        function ($scope, $state, registerFactory) {

            $scope.user = {
                "firstName": '',
                "lastName": '',
                "username": '',
                "password": ''
            };

            $scope.register = () => {

                registerFactory.save($scope.user,
                    (response) => {
                        $state.go('app');
                    },
                    (response) => {
                        $scope.message = "Error: " + response.status + " " + response.statusText;
                    }
                );
            }
        }])
