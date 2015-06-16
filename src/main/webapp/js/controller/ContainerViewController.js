/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
app.controller('ContainerViewController', function ($scope, Oboe) {

    $scope.selected = 0;

    $scope.setSelected = function (index) {
        $scope.selected = index;
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
                $scope.containers = (node);
            });
        });
    };

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
