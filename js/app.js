App = Ember.Application.create();

App.ApplicationAdapter = DS.FixtureAdapter;

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
  init: function() {
    this._super();//ember specific
    var accessToken = sessionStorage.token;
    if (!Ember.isEmpty(accessToken)) {
      this.authenticate(accessToken);
    }
  },
    
  authenticate: function(accessToken) {
    $.ajaxSetup({
      headers: { "X-ZUMO-AUTH" : sessionStorage.token},
      dataType: 'json'
    });
  },
      
  isAuthenticated: function() {
    return !Ember.isEmpty(sessionStorage.token);
  }
});

//create a new authmanager instance to handle authentication
var manager = App.AuthManager.create();


//in the index route checks if the client is authenticated,
//if so, transition to asking a question, if not go to login
App.IndexRoute = Ember.Route.extend({
    redirect: function () {
        print();
        if (manager.isAuthenticated()) {
            console.log('auth');
            this.transitionTo('askaquestion');
        }
        else {
            console.log('notauth');
            this.transitionTo('login');
        }
    }
});

App.LoginRoute = Ember.Route.extend({
    //if user is already authenticated, go back to ask a question,
    //little hack to make sure user doesn't go back to login
    redirect: function() {
           if(manager.isAuthenticated()){
               console.log('auth');
               this.transitionTo('askaquestion');  
           }
  }
});


App.LoginController = Ember.ObjectController.extend({
    actions: {
        //will create a post request to login, if successful, login and store token
        login: function () {
            var router = this;
            $.post('https://momentum.azure-mobile.net/api/login', {
                emailAddress: 'joemilsom@gmail.com', password: 'password'
            }, function (data) {
                sessionStorage.token = data.token;
                manager.authenticate(data.token);

                router.transitionToRoute('askaquestion');
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
            $.post('https://momentum.azure-mobile.net/api/register', {
                password: this.get('password'),
                emailAddress: this.get('email'),
                birthday: 11 / 11 / 11,
                Gender_idGender: 1,
                firstName: 'Jeff',
                lastName: 'TheDude'
            },
            function (data) {
                console.log('REGISTERED');
                router.transitionToRoute('askaquestion');
            });
        }
    }
});


App.Team = DS.Model.extend({
    name : DS.attr('string'),
    description : DS.attr('string')
});

function print(){
    console.log(sessionStorage.token);
}

