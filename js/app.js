// ---------------------------------------------------------------------------------------------------------------------
// SkewedAspect Studios App
//
// @module app.js
// ---------------------------------------------------------------------------------------------------------------------

angular.module('sa', [
        'ngRoute',
        'sa.controllers'
    ])
    .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider)
    {
        $locationProvider.html5Mode(true);

        $routeProvider
            .when('/', { templateUrl: 'partials/home.tpl.html', controller: 'HomeController'})
            .when('/contact', { templateUrl: 'partials/contact.tpl.html', controller: 'ContactController' })
            .otherwise('/');
    }])
    .run(['$rootScope', '$location', function($rootScope, $location)
    {
        Object.defineProperty($rootScope, 'path', {
            get: function()
            {
                return $location.path();
            }
        });
    }]);

// ---------------------------------------------------------------------------------------------------------------------
// Modules
// ---------------------------------------------------------------------------------------------------------------------

angular.module('sa.controllers', []);

// ---------------------------------------------------------------------------------------------------------------------