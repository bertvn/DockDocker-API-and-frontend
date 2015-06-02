var app = angular.module('article', ['ngRoute', 'ngOboe']);

app.controller('main', function ($scope) {
    $scope.menu = [{
            titel: "hoofd",
            sub: [{
                    subtitel: "pagina 1",
                    link: "#/page1"
                }, {
                    subtitel: "pagina 2",
                    link: "#/page2"
                }
            ],
            display: false

        }, {
            titel: "extra",
            sub: [{
                    subtitel: "pagina 3",
                    link: "#/page3"
                }],
            display: false
        }];



});

app.config(function ($routeProvider) {
    $routeProvider.when('/', {templateUrl: 'page1.html', controller: 'page1Controller'})
            .when('/page2', {templateUrl: 'page2.html', controller: 'page2Controller'})
            .when('/page3', {templateUrl: 'page3.html'})
            .otherwise({redirectTo: '/'});
});

app.controller('page1Controller', function ($scope, Oboe) {

    //$scope.tekst = "not yet available greeting";
    //$scope.tekst = [];
    //$scope.tekst.push(Search({schema: 'hello/bert'}));

    /*
     $http({method: "GET", url: "hello/bert"}).succes(function (data) {
     // this callback will be called asynchronously
     // when the response is available
     $scope.tekst = data;
     });
     */

    $scope.tekst = [];

    Oboe({
        url: 'list',
        pattern: '{index}'
    }).then(function () {
        // finished loading
    }, function (error) {
        // handle errors
    }, function (node) {
        // node received
        console.log(node);
        $scope.tekst.push(node);
    });

});

app.controller('page2Controller', function ($scope, Oboe) {
    $scope.tekst = [];

    Oboe({
        url: 'cyvan',
        pattern: '{Containers}'
    }).then(function () {
        // finished loading
        console.log("finished loading");
    }, function (error) {
        // handle errors
        console.log("we oopsed");
        console.log(error);
    }, function (node) {
        // node received
        console.log(node);
        $scope.tekst.push(node);
    });
});

app.controller('page3Controller', function ($scope) {

});