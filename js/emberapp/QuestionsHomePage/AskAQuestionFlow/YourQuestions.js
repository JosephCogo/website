
App.YourquestionsIndexRoute = Ember.Route.extend({
    renderTemplate: function () {
        this.render('yourquestionsindex');
    },

    model: function () {
        var store = this.store;    
        return store.find('questionsyouask');
    },

    setupController: function (controller, model) {
        this._super(controller, model);
        $('.questionsOutlet').fadeTo(200, 1);
        this.controllerFor('askaquestioncontent').set('askSelected', false);
        this.controllerFor('askaquestioncontent').set('solvedSelected', 'selected');
    }
});

App.YourquestionsIndexController = Ember.ArrayController.extend({
    actions: {
        toSolvedAnswer: function (yourQuestion) {

            var controller = this;
            controller.transitionToRoute('yourquestions.answersprovided', yourQuestion);
        }
    }
});

App.YourquestionsAnswersprovidedRoute = Ember.Route.extend({
    renderTemplate: function () {
        this.render('yourquestionsanswersprovided');
    },

    model: function (params) {
        return this.store.find('questionsyouask', params.question_id);
    },

    setupController: function (controller, model) {
        console.log(model.qbody);
        controller.set('model', model);

    }
});

App.YourquestionsAnswersprovidedController = Ember.ObjectController.extend({


});

//these are purely here to make each view fade in, be careful of annoying bugs!
App.QuestionView = Ember.View.extend({

    didInsertElement: function () {
        $('.questionParagraph').fadeTo(500, 1);
    }

});

App.YourAnswersView = Ember.View.extend({

    didInsertElement: function () {
        $('.solvedAnswersParagraph').fadeTo(500, 1);
    }

});

App.Answer = DS.Model.extend({
    abody: DS.attr('string')
});

App.Questionsyouask = DS.Model.extend({
    qbody: DS.attr('string'),
    answers: DS.hasMany('answer', {async: true})
});

App.Questionsyouask.FIXTURES = [{id : 1, qbody : "Other Awesome question 1", answers : []}];

App.Answer.FIXTURES = [{id : 1, abody : "nothing"}]


