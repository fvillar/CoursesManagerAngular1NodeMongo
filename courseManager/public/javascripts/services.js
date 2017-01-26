'use strict';

angular.module('app')
    .constant("baseURL", "http://localhost:7776/")

    .factory('coursesFactory', ['$resource', 'baseURL', function ($resource, baseURL) {

        return $resource(baseURL + "courses", null, {
            'query': { method: 'GET', isArray: true }
        });
    }])

    .factory('courseFactory', ['$resource', 'baseURL', function ($resource, baseURL) {

        return $resource(baseURL + "courses/:id", {}, {
            'query': { method: 'GET', isArray: true },
            'save':   {method:'POST'},
            'update': { method: 'PUT', params: { id: '@id' } },
            'delete': { method: 'DELETE', params: { id: '@id' } }
        });
    }])

    .factory('authorsFactory', ['$resource', 'baseURL', function ($resource, baseURL) {

        return $resource(baseURL + "authors", null, {
            'query': { method: 'GET', isArray: true }
        });
    }])

