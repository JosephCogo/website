
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
    actions : {
        toSolvedAnswer : function(yourQuestion){
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
        console.log(params);
        /*
        //need to merge 2 promises into one
        return Ember.RSVP.hash({
        solvedquestion: this.store.find('questionsyouask', params.question_id),
        answers : this.store.find('answer', [1,2])
        });*/

        // this.store.find('answer');

        return this.store.find('questionsyouask', params.question_id);
    },

    setupController: function (controller, model) {
        controller.set('model', model);
    }
});

App.YourquestionsAnswersprovidedController = Ember.ObjectController.extend({


});

App.QuestionView = Ember.View.extend({

    didInsertElement: function () {
        $('.questionParagraph').fadeTo(500, 1);
    }

});

App.Answer = DS.Model.extend({
    abody : DS.attr('string')
});

App.Questionsyouask = DS.Model.extend({
    qbody : DS.attr('string'),
    answers : DS.hasMany('answer')
});

App.Questionsyouask.FIXTURES = [];

App.Answer.FIXTURES = [{id : 1, abody : "I'm afraid you are misunderstanding the term double-entry.  It does not mean that every item is recorded twice. That would be crazy, needlessly redundant and grossly inefficient.  Double-entry simply means that every action has a corresponding and equal reaction.\nLife is about balance.  So is accounting.\nExample:  I receive a check for $1,000,000  Single entry:  Okay, I'm done.  Huh? What? Did you borrow it?  Did a customer pay you?  Did you sell something for cash?  Did you collect on a loan?  Did it fall from the sky? Explain, damn it!"},
{id : 2, abody : "Other Awesome answer 1"},
{id : 3, abody : "Other Awesome answer 1"},
{id : 4, abody : "Other Awesome answer 1"}];