/* 
 * DockDocker Dashboard Application
 * @author: DockDocker development team
 * @created: 9-6-2015
 */

var app = angular.module('DockDocker', ['ngRoute', 'ngOboe']);

app.controller('main', function ($scope) {
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
        }
    ];
});

app.config(function ($routeProvider) {
    $routeProvider.when('/', {templateUrl: 'pages/containerview.html', controller: 'ContainerViewController'}),
    $routeProvider.when('/servers', {templateUrl: 'pages/serverview.html', controller: 'ServerViewController'})
    $routeProvider.when('/logbook', {templateUrl: 'pages/logview.html', controller: 'LogViewController'})
    .otherwise({redirectTo: '/'});
});