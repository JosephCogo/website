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
                        console.info("Logged In");
                        initSocket(this.store, function () {
                            console.info("Sockets connected");
                            router.transitionToRoute('expertise');
                        });
                    },
                    400: function () {
                        console.log("Invalid Username or Password");
                        var btn = $('.submit');
                        btn.button('reset');
                        $('#loginerror').removeClass("hide");
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

App.ExpertiseRoute = Ember.Route.extend({
    setupController: function () {
        //reset the connection on refresh
        if (Ember.isEmpty(getSocket())) {
            initSocket(this.store, function () {
                console.info("Successfully Reconnected");
            });
        }
    }

});

App.ExpertiseController = Ember.ObjectController.extend({
    actions: {

        test : function(){
          $("#expertise").tagit("tagInput");  
        },

        submit: function () {
            this.transitionToRoute('ask');
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

App.SubmitButtonView = Ember.View.extend({

    click: function (evt) {
        console.log("yus");
        var btn = $('.submit');
        btn.button('loading');
    }

});

App.ExpertiseView = Ember.View.extend({

    didInsertElement: function () {
        console.log("bang");

        $('#tokenfield-typeahead').tokenfield({
            typeahead: {
                minLength: 1,
                source: function (query, cb) {
                    console.log("ok");
                    getSkills(function () {
                        cb(autoSkills());
                    });
                }
            }
        });
    }
});

App.AlertView = Ember.View.extend({

    didInsertElement: function () {
        $(".alert").find(".close").on("click", function (e) {
            $('#loginerror').addClass("hide");
        });
    }

});



