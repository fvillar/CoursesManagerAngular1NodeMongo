'use strict';

angular.module('app')
    .constant("baseURL", "https://localhost:7776/api/")
    .factory('coursesFactory', ['$resource', 'baseURL', function ($resource, baseURL) {
        
        // return $resource(baseURL + "courses/:id", null, {
        //     'query':  {method:'GET', isArray:true}
        // });
        let coursefac = {};
        let courses = [
            {
                "_id": "5859309f3188b5cbab814dde",
                "Id": 2216,
                "title": "Computer System Engineering",
                "authorName": "John Smith",
                "authorId": 2,
                "length": "10:10",
                "category": "Computer Science"
            },
            {
                "_id": "5859309f3188b5cbab814ddf",
                "Id": 2217,
                "title": "Introduction to Algorithms",
                "authorName": "John Smith",
                "authorId": 2,
                "length": "10:10",
                "category": "Computer Science"
            }];

        coursefac.getCourses = function () {
            return courses;
        };

        return coursefac;

    }])