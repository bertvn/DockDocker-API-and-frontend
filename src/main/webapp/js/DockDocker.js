/* 
 * DockDocker Dashboard Application
 * @author: DockDocker development team
 * @created: 9-6-2015
 */
DockDocker = {
    // Overall settings and variables
    angular: angular.module('article', ['ngRoute', 'ngOboe']),
    
    /*
     * Prepares the angular controllers
     * 
     * @see: DoDockDocker.angular
     */
    initializeControllers: function() {
        DockDocker.angular.config(function ($routeProvider) {
            $routeProvider.when('/', {templateUrl: 'pages/containerview.html', controller: 'container-view'})
                    .otherwise({redirectTo: '/'});
        });
        
        DockDocker.angular.controller('main', function ($scope) {
            $scope.menu = [
            {
                titel: "Servers",
                display: false
            },{
                titel: "Containers",
                display: false
            }, {
                titel: "Statistics",
                display: false
            }, {
                titel: "Logbook",
                display: false
            }];
        });

        DockDocker.angular.controller('container-view', function ($scope, Oboe) {
            // Initialize the container view
            ContainerView.initialize();
            
            $scope.containers = [];
            Oboe({
                url: 'containerslist',
                pattern: '{Id}'
            }).then(function () {
                // Finished loading
            }, function (error) {
                // handle errors
                console.log(error);
            }, function (node) {
                // Node received
                $scope.containers.push(node);
            });
        });
    },
    
    /*
    * Initializes the Overview object
    * Prepares the functions needed and sets the state
    */
    initialize: function () {
        DockDocker.initializeControllers();
    }
}

// Initialize the application
DockDocker.initialize();
