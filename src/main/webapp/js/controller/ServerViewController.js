app.controller('ServerViewController', function ($scope, Oboe, $mdToast, $animate, $http) {

    $scope.selected = null;
    $scope.selectedsServerID = null;
    $scope.showForm = false;
    
    //Input value
    $scope.ser_name = null;
    $scope.ser_ip = null;
    $scope.ser_doc_status = null;

    $scope.servers = [];
  
    $scope.setSelected = function (index, selectedID) {
        $scope.selected = index;
        $scope.selectedsServerID = selectedID;
    }

    $scope.deleteServer = function () {
        if ($scope.selected == null) {
            $mdToast.show(
                $mdToast.simple()
                    .content('Server is not selected!')
                    .position('top right')
                    .hideDelay(3000)
            );
        } else {
            $http.get("deleteServer/" + $scope.selectedsServerID).
                success(function (response) {
                    $mdToast.show(
                        $mdToast.simple()
                            .content('Server removed successfully!')
                            .position('top right')
                            .hideDelay(3000)
                    );
                    $scope.servers = [];
                    callServerslist();
                }).error(function () {
                    console.log('error');
                });
        }
    }
    
    $scope.addServer = function () {
        $scope.showForm = true;
    }
    
    $scope.cancel = function() {
        $scope.showForm = false;
    }
    
    $scope.addServerToDB = function () {
        //Check if all field are inserted
        if($scope.ser_name && $scope.ser_ip && $scope.ser_doc_status != null ){
            $http.get("addServer/" + $scope.ser_name + "/" + $scope.ser_ip + "/" + $scope.ser_doc_status).
                success(function (response) {
                    $mdToast.show(
                        $mdToast.simple()
                            .content('Server successfully saved!')
                            .position('top right')
                            .hideDelay(3000)
                    );
                    $scope.servers = [];
                    callServerslist();
                }).error(function () {
                    console.log('error');
                });
        } else {
            $mdToast.show(
                $mdToast.simple()
                    .content('You have empty fields!')
                    .position('top right')
                    .hideDelay(3000)
            );
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

