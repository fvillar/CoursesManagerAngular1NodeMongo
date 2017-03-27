'use strict';

angular.module('app')

    .controller('HomeController', ['$scope', '$rootScope', '$state', '$stateParams', 'coursesFactory', 'courseFactory',
        function ($scope, $rootScope, $state, $stateParams, coursesFactory, courseFactory) {
            $scope.message = "Loading ...";
            $scope.courses = [];
            $scope.loading = true;

            coursesFactory.query({
                username: $rootScope.username
            }).$promise.then(
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
                        $scope.courses = coursesFactory.query({
                            username: $rootScope.username
                        });
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

                $state.go('app.home');

            };
        }])

    .controller('AddController', ['$scope', '$rootScope', '$state', '$stateParams', 'courseFactory', 'coursesFactory', 'authorsFactory',
        function ($scope, $rootScope, $state, $stateParams, courseFactory, coursesFactory, authorsFactory) {

            $scope.course = {
                "title": '',
                "authorId": 0,
                "length": '',
                "category": '',
                "username": $rootScope.username
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

                $state.go('app.home');

            };
        }])

    .controller('LoginController', ['$scope', '$rootScope', '$state', '$stateParams', 'loginFactory',
        function ($scope, $rootScope, $state, $stateParams, loginFactory) {
            $scope.username = '';
            $scope.password = '';
            $scope.showAlert = false;
            $scope.message = 'Username or password is incorrect';

            $scope.login = () => {

                loginFactory.query({
                    username: $scope.username
                }).$promise.then(
                    (response) => {
                        if (response.length > 0) {
                            if (response[0].password == $scope.password) {
                                $state.go('app.home');
                                $rootScope.username = $scope.username;
                            } else
                                $scope.showAlert = true;
                        } else {
                            $scope.showAlert = true;
                        }
                    },
                    (response) => {
                        $scope.showAlert = true
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

    .controller('AddAuthorController', ['$scope', '$rootScope', '$state', '$stateParams', 'authorsFactory',
        function ($scope, $rootScope, $state, $stateParams, authorsFactory) {

            $scope.author = {
                "firstName": '',
                "lastName": ''
            };
           
            $scope.addAuthor = () => {

                authorsFactory.save($scope.author,
                    (response) => {
                        $scope.authors = authorsFactory.query();
                    },
                    (response) => {
                        $scope.message = "Error: " + response.status + " " + response.statusText;
                    }
                );

                $state.go('app.home');

            };
        }])
