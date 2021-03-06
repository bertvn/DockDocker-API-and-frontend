/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

app.controller('LogViewController', function ($scope, Oboe) {

    $scope.selected = null;
    
    $scope.log = [];
    $scope.logupdate = function(index, file){
        $scope.selected = index;
        $scope.log = [];
        Oboe({
            url: 'read/'+file,
            pattern: '{LogLine}'
        }).then(function () {
            //Finished loading
        }, function (error) {
            //handle errors
            console.log(error);
        }, function (node) {
            //Node received
            $scope.log.push(node);
        });
    }

    $scope.files = [];
        Oboe({
           url: 'loglist',
           pattern: '{File}'
        }).then(function () {
           // Finished loading
        }, function (error) {
           // handle errors
           console.log(error);
        }, function (node) {
        // Node received
        $scope.files.push(node);
        });
    });