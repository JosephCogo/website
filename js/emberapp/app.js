App = Ember.Application.create();

//var socket = io.connect('http://localhost:80', {
           // query: 'token=' + token
//});

App.ApplicationAdapter = DS.FixtureAdapter;

//define the routes
App.Router.map(function () {
    this.resource('login');
    this.resource('register');
    this.resource('questions', function () {
        this.resource('askaquestion');
        this.resource('answeraquestion');
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

