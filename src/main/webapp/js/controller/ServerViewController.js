app.controller('ServerViewController', function ($scope, Oboe, $http) {

    $scope.selected = null;
    $scope.selectedsServerID = null;

    $scope.servers = [];
    
    $scope.setSelected = function (index, selectedID) {
        $scope.selected = index;
        $scope.selectedsServerID = selectedID;
    }

    $scope.deleteServer = function () {
        if ($scope.selected == null) {
            alert("Please select a server.")
        } else {
            $http.get("deleteServer/" + $scope.selectedsServerID).
                success(function (response) {
                    $scope.servers = [];
                    callServerslist();
                }).error(function () {
                    console.log('error');
                });
        }
    }

    var callServerslist = function () {
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
    };
    
    callServerslist();
});

