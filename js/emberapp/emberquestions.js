App.QuestionspageRoute = Ember.Route.extend({

});

App.Question = DS.Model.extend({
    question : DS.attr('string')
});

App.Question.FIXTURES = [
    {id : 1, question : "Ok so this is the first question Ok so this is the first question Ok so this is the first question Ok so this is the first question Ok so this is the first question Ok so this is the first question Ok so this is the first question Ok so this is the first question Ok so this is the first question Ok so this is the first question"},
    {id : 2, question : "THIS IS THE SECOND QUESTION"},
    {id : 3, question : "Ok so this is the third question Ok so this is the third question Ok so this is the third questionOk so this is the third question Ok so this is the third question Ok so this is the third question Ok so this is the third questionOk so this is the third questionOk so this is the third question Ok so this is the third question"},
];

//ask a question route, do long polling as we need to
//properly set up a web server so we can use Socket.io
App.AskaquestionRoute = Ember.Route.extend({

    model: function () {
        //return this.store.find('message', { idUser: localStorage.idUser });
        var store = this.store;

        //return store.filter('message', { idUser: localStorage.idUser }, function(message) {
        //   return message;
        //});
        return store.find('question');
    },

    setupController: function (controller, model) {
        //this needs to be here!!! otherwise the model is not set correctly!!     
        this._super(controller, model);
    },

    deactivate: function () {
        
    }
});

App.AskaquestionController = Ember.ArrayController.extend({

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