/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
app.controller('ContainerViewController', function ($scope, Oboe) {

    $scope.selected = 0;
    $scope.showForm = false;

    $scope.setSelected = function (index, selectedID) {
        $scope.selected = index;
        $scope.selectedsServerID = selectedID;
        $scope.showForm = false;
    };

    $scope.executeTask = function (What, Id) {
        Oboe({
            url: "containers/" + Id + "/" + What,
            pattern: '{Id}'
        }).then(function () {
            // Finished loading
        }, function (error) {
            // handle errors
            console.log(error);
        }, function (node) {
        });
        window.setTimeout(refresh(),10000);
    };
    
    var refresh = function() {
        $scope.containers = [];
        getContainers();
    };

    $scope.containers = [];
    var getContainers = function() {
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
    };
    getContainers();
});
