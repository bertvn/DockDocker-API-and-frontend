app.controller('ServerViewController', function ($scope, Oboe, $http) {
    $scope.selected = null;
    
    $scope.servers = [];
    
    
    $scope.setSelected = function(index){
        $scope.selected = index;
        //console.log(index);
    }
    
    $scope.setName = function(getName){
        $scope.selectedServerName = getName;
        //console.log(getName);
    }
          
    Oboe({
        url: 'serverslist',
        pattern: '{ID}'
    }).then(function () {
        // Finished loading
    }, function (error) {
        // handle errors
        console.log(error);
    }, function (node) {
        // Node received
        $scope.servers.push(node);
    });
});

