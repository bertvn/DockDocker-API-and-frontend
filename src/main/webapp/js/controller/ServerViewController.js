app.controller('ServerViewController', function ($scope, Oboe, $http) {

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
                    alert("The server is added into the database!");
                    $scope.servers = [];
                    callServerslist();
                }).error(function () {
                    console.log('error');
                });
        } else {
            alert("You have empty field!");
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

