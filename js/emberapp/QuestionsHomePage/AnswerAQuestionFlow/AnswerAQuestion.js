App.AnsweraquestionRoute = Ember.Route.extend({
    model: function () {
        var store = this.store;
        
        return store.find('questionsothersask');
    },

    setupController: function (controller, model) {
        this._super(controller, model);
        $('.content').fadeTo(300, 1);
        this.controllerFor('questionshomepage').set('answer', 'active-link');
        this.controllerFor('questionshomepage').set('ask', false);
    }
});

App.AnsweraquestionController = Ember.ArrayController.extend({
    actions: {
        answer: function () {
            console.log(this.get('answerText'));
        }
    }
});

App.InputanswerRoute = Ember.Route.extend({

    setupController: function () {

    }

});

App.InputanswerController = Ember.ObjectController.extend({

    actions: {
        answer: function () {
            answerQuestion(this.get('answerText'), this.get('id'));
        }
    }

});

App.YourAnswersView = Ember.View.extend({

    didInsertElement: function () {
        $('.solvedAnswersParagraph').fadeTo(500, 1);
    }

});

App.Questionsothersask = DS.Model.extend({
    qbody : DS.attr('string') 
});

App.Questionsothersask.FIXTURES = [];



