app.controller('ServerViewController', function ($scope, Oboe, $mdToast, $animate, $http) {

    $scope.selected = null;
    $scope.selectedsServerID = null;
    $scope.showForm = false;
    
    //Input value
    $scope.ser_username = "";
    $scope.ser_password = "";
    $scope.ser_name = "";
    $scope.ser_ip = "";
    $scope.ser_doc_status = "";
    $scope.searchText = "";

    $scope.servers = [];
  
    $scope.setSelected = function (index, selectedID) {
        $scope.selected = index;
        $scope.selectedsServerID = selectedID;
        $scope.showForm = false;
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
                    $scope.selected = null;
                    $scope.servers = [];
                    callServerslist();
                }).error(function () {
                    console.log('error');
                });
        }
    }
    
    $scope.addServer = function () {
        $scope.showForm = true;
        $scope.ser_username = "";
        $scope.ser_password = "";
        $scope.ser_name = "";
        $scope.ser_ip = "";
        $scope.ser_doc_status = "";
    }
    
    $scope.cancel = function() {
        $scope.showForm = false;
    }
    
    $scope.addServerToDB = function () {
        //Check if all field are inserted
        if($scope.ser_username && $scope.ser_password && $scope.ser_name && $scope.ser_ip && $scope.ser_doc_status != null ){
            var new_username = $scope.ser_username.replace(", ", "{comma}").replace("/", "{slash}");
            var new_password = $scope.ser_password.replace(", ", "{comma}").replace("/", "{slash}");
            var new_name = $scope.ser_name.replace(", ", "{comma}").replace("/", "{slash}");
            var new_ip = $scope.ser_ip.replace(", ", "{comma}").replace("/", "{slash}");
            var new_status = $scope.ser_doc_status.replace(", ", "{comma}").replace("/", "{slash}");
            
            $http.get("addServer/" + 
                    new_username + "/"  + 
                    new_password + "/" + 
                    new_name + "/" + 
                    new_ip + "/" + 
                    new_status).
                success(function (response) {
                    $scope.servers = [];
                    callServerslist();
                    $mdToast.show(
                        $mdToast.simple()
                            .content('Server successfully saved!')
                            .position('top right')
                            .hideDelay(3000)
                    );
                }).error(function (response) {
                    console.log(response);
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