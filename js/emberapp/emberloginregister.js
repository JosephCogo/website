App.LoginRoute = Ember.Route.extend({
    //if user is already authenticated, go back to ask a question,
    //little hack to make sure user doesn't go back to login
   model : function(){
     return {};  
   }
});


App.LoginController = Ember.ObjectController.extend({
    actions: {
        //will create a post request to login, if successful, login and store token
        login: function () {
            var router = this;
            //fill out
            $.ajax({

            });
        },

        register: function () {
            var router = this;
            console.log('register');
            router.transitionToRoute('register');
        }
    }
});

App.RegisterRoute = Ember.Route.extend({
   model: function() {
    return {};
   }
});

App.RegisterController = Ember.ObjectController.extend({
    actions: {
        //if user chooses to do registration
        register: function () {

        }
    }
});