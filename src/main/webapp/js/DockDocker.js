/* 
 * DockDocker Dashboard Application
 * @author: DockDocker development team
 * @created: 9-6-2015
 */

var app = angular.module('DockDocker', ['ngRoute', 'ngOboe', 'ngMaterial', 'ngAnimate', 'angular.ping']);

app.controller('main', function ($scope) {
    $scope.menu = [
        {
            titel: "Servers",
            display: false,
            link:   "/API/#/servers"
        },{
            titel: "Images",
            display: false,
            link:   "/API/#/images"
        },{
            titel: "Containers",
            display: false,
            link:   "/API/#/containers"
        }, {
            titel: "Statistics",
            display: false,
            link:   "/API/#/statistics"
        }, {
            titel: "Logbook",
            display: false,
            link:   "/API/#/logbook"
        }
    ];
});

app.config(function ($routeProvider) {
    $routeProvider.when('/', {templateUrl: 'pages/serverview.html', controller: 'ContainerViewController'})
    .when('/servers', {templateUrl: 'pages/serverview.html', controller: 'ServerViewController'})
    .when('/images', {templateUrl: 'pages/imageview.html', controller: 'ImageViewController'})
    .when('/containers', {templateUrl: 'pages/containerview.html', controller: 'ContainerViewController'})
    .when('/logbook', {templateUrl: 'pages/logview.html', controller: 'LogViewController'})
    .otherwise({redirectTo: '/'});
});
