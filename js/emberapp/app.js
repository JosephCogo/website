/**
File which sets up the ember application and the routes. Also handles the initial redirect of the application;
either to the login screen or to the home page of the application
**/

App = Ember.Application.create();

App.ApplicationAdapter = DS.FixtureAdapter;

//define the routes
App.Router.map(function () {
    this.resource('login');
    this.resource('expertise');

    this.resource('questionshomepage', function () {
        //answer a question and its sub routes
        this.resource('askaquestioncontent', function () {
            this.resource('askaquestion');
            this.resource('asksuccess');
            this.resource('yourquestions', function () {
                this.route('answersprovided', { path: '/:question_id' });
            });
        });

        this.resource('answeraquestion', function () {
            //should be a route
            this.resource('inputanswer', { path: '/:question_id' });
        });
    });
});

//in the index route checks if the client is authenticated,
//if so, transition to asking a question, if not go to login
App.IndexRoute = Ember.Route.extend({

    redirect: function () {
        var router = this;
        var store = this.store;
        //if there is no token in the localstorage, then transition to login
        if (Ember.isEmpty(localStorage.token)) {
            router.transitionTo("login");
        }
        //if there is a token, try to refresh it. If the token is
        //expired, then transition to login, else set the new token 
        //to the localStorage
        else {
            $.ajax({
                url: "http://babblefishes.cloudapp.net:3000/refreshtoken",
                type: "post",
                data: { token: localStorage.token },
                statusCode: {
                    200: function (data) {
                        //set the new token
                        localStorage.token = data.token;
                        initSocket(store, function () {
                            router.transitionTo("askaquestion");
                        });
                    },
                    401: function () {
                        console.log("ERROR");
                        router.transitionTo("login");
                    }
                }
            });
        }
    }
}); 

