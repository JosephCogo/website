App.DesktoppermissionsRoute = Ember.Route.extend({

    setupController : function(){
        $(".application-content").fadeTo(500, 1);
    }

});


App.DesktoppermissionsController = Ember.Controller.extend({

    actions: {

        request: function () {
            var controller = this;
            notify.requestPermission(function () {
                $(".application-content").fadeTo(500, 0, function () {
                    controller.replaceWith('askaquestion');
                });
            });
        },

        skip: function () {
            var controller = this;
            $(".application-content").fadeTo(500, 0, function () {
                controller.replaceWith('askaquestion');
            });
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