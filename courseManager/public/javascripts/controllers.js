'use strict';

angular.module('app')

    .controller('HomeController', ['$scope', 'coursesFactory', 
    function($scope, coursesFactory) {        
            $scope.courses = coursesFactory.getCourses();
    }]);