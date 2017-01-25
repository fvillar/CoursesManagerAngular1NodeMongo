'use strict';

angular.module('app', ['ui.router','ngResource'])
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
                        templateUrl: 'views/home.html',
                        controller: 'HomeController'
                    },
                    'footer': {
                        templateUrl: 'views/footer.html',
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
                url: 'course/:id',
                views: {
                    'content@': {
                        templateUrl: 'views/course.html'
                    }
                }
            })

        $urlRouterProvider.otherwise('/');
    });