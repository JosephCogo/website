ChromepermissionsRoute = Ember.Route.extend({

});


ChromepermissionsController = Ember.Controller.extend({

    actions : {
        
        requestPermission : function(){
            
        },

        skip : function(){
            
        }

    }
    
});

$("#requestpermission").click(function () {
    //set the permissions for ember
    var havePermission = window.webkitNotifications.checkPermission();
    console.log("permission " + havePermission);
    if (havePermission != 0) {
        console.log(havePermission);
        window.webkitNotifications.requestPermission();
    }
});