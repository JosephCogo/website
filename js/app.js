App = Ember.Application.create();

App.ApplicationAdapter = DS.RESTAdapter.extend({
    //host : "https://operly.azure-mobile.net",
    //namespace : "api"
});

//define the routes
App.Router.map(function () {
    this.resource('login');
    this.resource('register');
    this.resource('questions', function () {
        
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
        //if the user is authenticated transfer to ask a question
        if (manager.isAuthenticated()) {
            console.log(localStorage.idUser);
            console.log(localStorage.token);
            this.transitionTo('questions');
        }
        //if there is no token, go to login
        else {
            console.log(localStorage.idUser);
            console.log(localStorage.token);
            //just to make sure for now
            localStorage.removeItem('token');
            localStorage.removeItem('idUser');

            console.log('notauth');
            this.transitionTo('questions');
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

App.Message = DS.Model.extend({
    message : DS.attr('string')
});

//ask a question route, do long polling as we need to
//properly set up a web server so we can use Socket.io
App.QuestionsRoute = Ember.Route.extend({

    model: function () {
    //return this.store.find('message', { idUser: localStorage.idUser });
    var store = this.store;

    //return store.filter('message', { idUser: localStorage.idUser }, function(message) {
    //   return message;
    //});
    
    },

    setupController: function (controller, model) {
        //this needs to be here!!! otherwise the model is not set correctly!!     
        this._super(controller, model);
    },

    deactivate: function () {
        this.get('poller').stop();
    }

});

App.Message = DS.Model.extend({
    message : DS.attr('string')
});

App.QuestionsController = Ember.ArrayController.extend({

    templateName: 'questions', 

    contentArrayDidChange: function (array, start, removeAmt, addAmt) {
        console.log("add");
        return this;
    },

    actions: {
        askquestion: function () {

        },

        logout: function () {
            localStorage.removeItem('token');
            localStorage.removeItem('idUser');
            var route = App.AskaquestionRoute;
            this.transitionTo('index');
        }
    }

});
