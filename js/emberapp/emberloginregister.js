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

            $.ajax({
                url: "http://localhost:80/login",
                type: "post",
                data: { email: this.get('email'), password: this.get('password') },
                statusCode: {
                    200: function (data) {
                        localStorage.token = data.token;
                        router.transitionToRoute('expertise');
                    },
                    400: function () {
                        console.log("Invalid Username or Password");
                    }
                }
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

App.ExpertiseController = Ember.ObjectController.extend({
    actions: {

        submit: function () {
            this.transitionToRoute('ask');
        },

        bang: function () {
            console.log('bang');
        }
    }
});

//this is the ember view that handles the light bulb helper
App.LightbulbhelperView = Ember.View.extend({
    templateName: 'lightbulbhelper',

   click: function(evt) {
        $('.lightbulb-help > div').fadeToggle('slow');
   }



});