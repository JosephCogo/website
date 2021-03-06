App.LoginRoute = Ember.Route.extend({
    //if user is already authenticated, go back to ask a question,
    //little hack to make sure user doesn't go back to login
    model: function () {
        return {};
    },

    setupController: function () {
        $(".application-content").fadeTo(500, 1);
    }
});


App.LoginController = Ember.Controller.extend({
    actions: {
        //will create a post request to login, if successful, login and store token
        login: function () {
            var router = this;

            var btn = $('.submit');
            btn.button('loading');

            $.ajax({
                url: "https://babblefishes.com:8083/login",
                type: "post",

                data: { email: this.get('email'), password: this.get('password') },
                statusCode: {
                    200: function (data) {
                        localStorage.token = data.token;
                        //is it the users first time logging in?
                        var firstTime = data.firsttime;
                        
                        localStorage.firstname = data.firstname;
                        localStorage.lastname = data.lastname;
                        localStorage.firsttime = data.firsttime;

                        console.log(localStorage.firstname);

                        initSocket(router.store, function () {
                            console.info("Sockets connected");

                            $(".application-content").fadeTo(500, 0, function () {
                                router.set('email', '');
                                router.set('password', '');
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