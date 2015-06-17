/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
app.controller('ImageViewController', function ($scope, Oboe) {

    $scope.selected = 0;

    $scope.setSelected = function (index) {
        $scope.selected = index;
    };

    $scope.images = [];
    Oboe({
        url: 'imagelist',
        pattern: '{Id}'
    }).then(function () {
        // Finished loading
    }, function (error) {
        // handle errors
        console.log(error);
    }, function (node) {
        // Node received
        $scope.images.push(node);
    });
});
