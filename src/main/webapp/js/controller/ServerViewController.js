app.controller('ServerViewController', function ($scope, Oboe) {
    $scope.selected = null;
    
    $scope.servers = [
        {   id: 1, 
            serverName: "ubuntu", 
            serverIP: "192.168.1.1", 
            dockerStatus: "ready"
        },
        {   id: 2, 
            serverName: "windows", 
            serverIP: "127.0.0.1", 
            dockerStatus: "config"
        }];
    
    
    $scope.setSelected = function(index){
        $scope.selected = index;
        //console.log(index);
    }
    
    $scope.setName = function(getName){
        $scope.selectedServerName = getName;
        //console.log(getName);
    }
          
    /*
    Oboe({
        url: 'serverslist',
        pattern: '{Id}'
    }).then(function () {
        // Finished loading
    }, function (error) {
        // handle errors
        console.log(error);
    }, function (node) {
        // Node received
        $scope.servers.push(node);
    });
    */
});

