/* 
 * Angular controller for container view
 *      Handels all containerview action
 */
app.controller('ContainerViewController', function ($scope, Oboe) {
    
    // State variables
    $scope.selected = 0;
    $scope.showForm = false;
    $scope.containers = [];

    /**
     * Updates $scope.selected with selected container information
     * 
     * @param index: index of container
     * @param selectedID
     */
    $scope.setSelected = function (index, selectedID) {
        $scope.selected = index;
        $scope.selectedsServerID = selectedID;
        $scope.showForm = false;
    };
    
    /**
     * Executes container management tasks
     * @param What (action):
     *      * start: starts selected container
     *      * stop: stops selected container
     *      * restart: restarts selected container
     * @param Id: container id
     */
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
        });
        window.setTimeout(refresh(),10000);
    };
    
    /**
     * Refreshes the container information
     */
    var refresh = function() {
        $scope.containers = [];
        getContainers();
    };
    
    /**
     * Shows the add container elements
     */
    $scope.addContainer = function () {
        $scope.showForm = true;
        $scope.selected = null;
    }

    /**
     * Retrieves container information
     * appends container information to list with containers
     */
    var getContainers = function() {
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
    };
    
    // Called on load
    getContainers();
});
