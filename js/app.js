App = Ember.Application.create();

App.ApplicationAdapter = DS.RESTAdapter.extend({
    host : "https://operly.azure-mobile.net",
    namespace : "api"
});


App.Router.map(function () {
    this.resource('login');
    this.resource('register');
    this.resource('askaquestion', function () {
        
    });
});

//class that handles authentication, not secure
//though, as it is just using local storage, but ok 
//for now, as it is not storing any important information
App.AuthManager = Ember.Object.extend({
    init: function () {
        this._super(); //ember specific

        //get the token from local storage, if it exists,
        //authenticate the user
        var accessToken = localStorage.token;
        var idUser = localStorage.idUser;
        if (!Ember.isEmpty(accessToken) && !Ember.isEmpty(idUser)) {
            this.authenticate(accessToken);
        }
    },

    //set up all subsequent ajax calls so that
    //it sends through the token in the headers.
    authenticate: function (accessToken) {
        $.ajaxSetup({
            //headers: { "X-ZUMO-AUTH": localStorage.token },
            //dataType: 'json'
        });
    },

    //returns true if there is a token in 
    //localstorage
    isAuthenticated: function () {
        return !Ember.isEmpty(localStorage.token) && !Ember.isEmpty(localStorage.idUser);
    }
});

//create a new authmanager instance to handle authentication
var manager = App.AuthManager.create();

//in the index route checks if the client is authenticated,
//if so, transition to asking a question, if not go to login
App.IndexRoute = Ember.Route.extend({

    redirect: function () {
        if (manager.isAuthenticated()) {
            console.log(localStorage.idUser);
            console.log(localStorage.token);
            this.transitionTo('askaquestion');
        }
        else {
            console.log(localStorage.idUser);
            console.log(localStorage.token);
            //just to make sure for now
            localStorage.removeItem('token');
            localStorage.removeItem('idUser');

            console.log('notauth');
            this.transitionTo('login');
        }
    }
});

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

            $.ajax({ type: 'POST',
                url: "https://operly.azure-mobile.net/api/login",
                data: { emailAddress: this.get('email'), password: this.get('password') }
            }).done(function (data) {
                //store authentication info in localstorage
                localStorage.token = data.token;
                localStorage.idUser = data.idUser;
                manager.authenticate(data.token);
                router.transitionToRoute('askaquestion');
            }).fail(function () {
                alert('error');
            });
        },

        register: function () {
            var router = this;
            console.log('register');
            // $(".question").transition({ opacity: 0 }, function(){
            router.transitionToRoute('register');
            // });
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
        register: function () {
            var router = this;
            $.ajax({ type: 'POST',
                url: 'https://operly.azure-mobile.net/api/register',
                data: {
                    password: this.get('password'),
                    emailAddress: this.get('email'),
                    firstName: 'Jeff',
                    lastName: 'TheDude',
                    skills : [JavaScript, CSS]
                }
            }).done(function (data) {
                console.log('REGISTERED');
                localStorage.token = data.token;
                localStorage.idUser = data.idUser;
                router.transitionToRoute('askaquestion');
            }).fail(function () {
                alert('error');
            });
        }
    }
});


App.PollForMessages = Ember.Object.extend({
    start: function () {
        console.log("init Poll");
        this.timer = setInterval(this.onPoll, 10000);
    },
    stop: function () {
        clearInterval(this.timer);
    },
    onPoll: function () {
        console.log("polling");  
    }
});

//ask a question route, do long polling as we need to
//properly set up a web server so we can use Socket.io
App.AskaquestionRoute = Ember.Route.extend({

    model: function () {
    //return this.store.find('message', { idUser: localStorage.idUser });
    var store = this.store;

    return store.filter('message', { idUser: localStorage.idUser }, function(message) {
       return message;
    });
    
    },

    setupController: function (controller, model) {
        //this needs to be here!!! otherwise the model is not set correctly!!     
        this._super(controller, model);

        if (Ember.isNone(this.get('poller'))) {
            var route = this;
            this.set('poller', App.PollForMessages.create({

                onPoll: function () {
                    $.ajax({
                        type: "GET",
                        url: "https://operly.azure-mobile.net/api/messages",
                        data: "idUser=" + localStorage.idUser,
                        success: function (data) {
                            var messages = data.message;
                            for (var i = 0; i < messages.length; i++) {
                                route.get('store').push('message', {
                                    id: messages[i].id,
                                    message: messages[i].message
                                });
                            }
                        }
                    });
                }
            }));


            this.get('poller').start();
        }
    },

    deactivate: function () {
        this.get('poller').stop();
    }

});

App.Message = DS.Model.extend({
    message : DS.attr('string')
});

App.AskaquestionController = Ember.ArrayController.extend({

    contentArrayDidChange: function (array, start, removeAmt, addAmt) {
        console.log("add");
        return this;
    },

    actions: {
        askquestion: function () {

            $.ajax({ type: 'POST',
                url: 'https://operly.azure-mobile.net/api/askquestion',
                data: {
                    question: this.get('question'),
                    idUser: localStorage.idUser
                }
            }).done(function (data) {
                console.log(data.message);
            }).fail(function () {
                alert('error');
            });

        },

        logout: function () {
            localStorage.removeItem('token');
            localStorage.removeItem('idUser');
            var route = App.AskaquestionRoute;
            this.transitionTo('index');
        }
    }

});

//$(document).ajaxStart(function(){ $( "#loading" ).show})
//$(document).ajaxStop(function() {$( "#loading" ).hide})