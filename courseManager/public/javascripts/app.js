'use strict';

angular.module('app', ['ui.router', 'ngResource'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider

            // route for the home page
            .state('app', {
                url: '/',
                views: {
                    'header': {
                        templateUrl: 'views/header.html'
                    },
                    'content': {
                        templateUrl: 'views/login.html',
                        controller: 'LoginController'
                    },
                    'footer': {
                        templateUrl: 'views/footer.html',
                    }
                }
            })

            // route for the home page
            .state('app.register', {
                url: 'register',
                views: {
                    'content@': {
                        templateUrl: 'views/register.html',
                        controller: 'RegisterController'
                    }
                }
            })

            // route for the home page
            .state('app.home', {
                url: 'home',
                views: {
                    
                    'content@': {
                        templateUrl: 'views/home.html',
                        controller: 'HomeController'
                    }
                }
            })

            // route for the aboutus page
            .state('app.aboutus', {
                url: 'aboutus',
                views: {
                    'content@': {
                        templateUrl: 'views/aboutUs.html'
                    }
                }
            })

            // route for the updateCourse page
            .state('app.course', {
                url: 'courses/:id',
                views: {
                    'content@': {
                        templateUrl: 'views/course.html',
                        controller: 'UpdateController'
                    }
                }
            })

             // route for the newCourse page
            .state('app.newCourse', {
                url: 'course/',
                views: {
                    'content@': {
                        templateUrl: 'views/newCourse.html',
                        controller: 'AddController'
                    }
                }
            })

             // route for the newAuthor page
            .state('app.newAuthor', {
                url: 'author/',
                views: {
                    'content@': {
                        templateUrl: 'views/newAuthor.html',
                        controller: 'AddAuthorController'
                    }
                }
            })

        $urlRouterProvider.otherwise('/');
    });