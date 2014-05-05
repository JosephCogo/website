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
                url: "http://babblefishes.cloudapp.net:3000/login",
                type: "post",
                data: { email: this.get('email'), password: this.get('password') },
                statusCode: {
                    200: function (data) {
                        localStorage.token = data.token;
                        //is it the users first time logging in?
                        var firstTime = data.firsttime;

                        initSocket(router.store, function () {
                            console.info("Sockets connected");

                            $(".application-content").fadeTo(500, 0, function () {
                                //transition to inputting user expertise 
                                if (firstTime) {
                                    router.replaceRoute('expertise');
                                }
                                //go straight to replace route if logged in before
                                else {
                                    router.replaceRoute('askaquestion');
                                }
                            });
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
        }
    }
});