/* 
 * DockDocker Dashboard Application
 * @author: DockDocker development team
 * @created: 9-6-2015
 */
ContainerView = {
    
    /*
    * Initializes the Overview object
    * Prepares the functions needed and sets the state
    */
    initialize: function () {
        console.log("initializing");
        
    },

    /*
    * On select event
    *   Deselects previous element and selects current
    */
    containerSelected: function (elem) {
        // Deselect previous selected
        $("ul li.selected").removeClass("selected");
        
        // Update container view
        var id = $(elem).find("a").attr("id");
        console.log(id);
        
        // Update the container view
        
        
        // Set current selected
        $(elem).addClass("selected");
    }
}