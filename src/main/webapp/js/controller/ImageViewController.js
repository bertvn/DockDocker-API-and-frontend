/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
ImageViewController = {
    
    addImage: function() {
        console.log('pressed');
        $scope.showPopUp = true;
    }
    
}

app.controller('ImageViewController', function ($scope, Oboe) {

    $scope.selected = 0;
    $scope.showForm = false;
    
    $scope.img_name = null;
    $scope.selectedImage = null;

    $scope.setSelected = function (index, selectedId) {
        $scope.selected = index;
        $scope.selectedImage = selectedId;
        $scope.showForm = false;
    };
    
    $scope.addImage = function () {
        $scope.showPopUp = true;
        $("#overlay").show();
    };
    
    $scope.deleteServer = function () {
        if ($scope.selected == null) {
            $mdToast.show(
                $mdToast.simple()
                    .content('Image is not selected!')
                    .position('top right')
                    .hideDelay(3000)
            );
        } else {
            $http.get("/image/del/" + $scope.selectedsServerID).
                success(function (response) {
                    $mdToast.show(
                        $mdToast.simple()
                            .content('Image removed!')
                            .position('top right')
                            .hideDelay(3000)
                    );
                    $scope.images = [];
                    callServerslist();
                }).error(function () {
                    console.log('error');
                });
        }
    }

    $scope.images = [];
    
    var getImages = function () {
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
    }
    
    $("#search-image-form").submit(function () {
        var name = $("input#name").val();
        $scope.searchresults = [];
        
        Oboe({
            url: 'searchimage/'+name,
            pattern: '{name}'
        }).then(function () {
            // Finished loading
        }, function (error) {
            // handle errors
            console.log(error);
        }, function (node) {
            // Node received
            console.log(node);
            $scope.searchresults.push(node);
        });
        // Stop the browser from reloading the page
        return false;
    });
    
    getImages();
});
