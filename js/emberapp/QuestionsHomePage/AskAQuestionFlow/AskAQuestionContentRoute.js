App.AskaquestioncontentRoute = Ember.Route.extend({

        model: function () {
            var store = this.store;
            //store.find('answer');
            return store.find('questionsyouask');
        },

        setupController: function (controller, model) {
            this._super(controller, model);
            $('.questions-content-area').fadeTo(200, 1);
            this.controllerFor('askaquestioncontent').set('ask', 'active-link');
            this.controllerFor('askaquestioncontent').set('answer', false);
        }
});

App.AskaquestioncontentController = Ember.ArrayController.extend({
    askSelected: "selected",
    solvedSelected: false,
    solved: "(2)",

    actions: {

        logout: function () {
            localStorage.removeItem('token');
            localStorage.removeItem('idUser');
            var route = App.AskaquestionRoute;
            this.transitionTo('index');
        },

        ask: function () {
            var cont = this;
            $('.questionsOutlet').fadeTo(200, 0, function () {
                cont.transitionToRoute('askaquestion');
            });
        },

        solved: function () {
            var cont = this;
            $('.questionsOutlet').fadeTo(200, 0, function () {
                cont.transitionToRoute('yourquestions');
            });
        }
    }
});

//this is embedded at the top of the askcontroller view
App.QuestionsnavView = Ember.View.extend({

    templateName: 'questionsnav'

});