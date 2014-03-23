App = Ember.Application.create();

App.ApplicationAdapter = DS.FixtureAdapter;

App.Router.map(function () {
    this.resource('login');
    this.resource('register');
    this.resource('askaquestion', function () {
        
    });
});


App.AuthManager = Ember.Object.extend({
  
  init: function() {
    this._super();
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
    console.log(sessionStorage.token);
    return !Ember.isEmpty(sessionStorage.token);
  }
    
});

//create a new authmanager instance to handle authentication
var manager = App.AuthManager.create();
manager.init();

App.IndexRoute = Ember.Route.extend({
  redirect: function() {
           if(manager.isAuthenticated()){
               console.log('auth');
               router.transitionToRoute('askaquestion');  
           }
           else{
               console.log('notauth');
               router.transitionToRoute('login');
           }
  }

});


App.LoginController = Ember.ObjectController.extend({    
    actions: {
        login: function () {
            print();
            var router = this;
            $.post('https://momentum.azure-mobile.net/api/login', {
             emailAddress: 'joemilsom@gmail.com', password: 'password'
            }, function(data) {
            sessionStorage.token = data.token;
            manager.authenticate(data.token);
                
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

