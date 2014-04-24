App = Ember.Application.create();

App.ApplicationAdapter = DS.FixtureAdapter;

//define the routes
App.Router.map(function () {
    this.resource('login');
    this.resource('register');
    this.resource('expertise');

    this.resource('questionspage', function () {
        //answer a question and its sub routes
        this.resource('askaquestion', function () {
            this.resource('ask');
            this.resource('asksuccess');
            this.resource('solved', function () {
                //should be a route
                this.resource('solvedanswer', { path: '/:question_id' });
            });
            
            this.resource('unsolved', function(){
                this.resource('unsolvedanswer', { path: '/:question_id' });
            });
        });

        this.resource('answeraquestion', function () {
            //should be a route
            this.resource('answer', { path: '/:question_id' });
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
                url: "http://localhost:80/refreshtoken",
                type: "post",
                data: { token: localStorage.token },
                statusCode: {
                    200: function (data) {
                        //set the new token
                        localStorage.token = data.token;

                        initSocket(store, function () {
                            console.info("Successfully Connected. Transitioning to Ask a question");
                            router.transitionTo("ask");
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

