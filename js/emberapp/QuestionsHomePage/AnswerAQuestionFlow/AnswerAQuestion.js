/**
    This handles all the answering to the questions
**/

App.AnsweraquestionIndexRoute = Ember.Route.extend({
    renderTemplate : function(){
      this.render('answeraquestionindex');  
    },
    
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

App.AnsweraquestionIndexController = Ember.ArrayController.extend({
    actions: {
        answerquestion: function (questionsothersask) {
            this.transitionToRoute('answeraquestion.inputanswer', questionsothersask);
        }
    }
});

App.AnsweraquestionInputanswerRoute = Ember.Route.extend({
    renderTemplate: function () {
        this.render('inputanswer');
    },
    //if the user decides to refresh, this hook is called,
    //and will make it so that the model is loaded before 
    //anything happens
    model: function (params) {
        console.log(params);
        return this.store.find('questionsothersask', params.question_id);
    },

    setupController: function (controller, model) {
        controller.set('model', model);
        this.controllerFor('questionshomepage').set('answer', 'active-link');
        this.controllerFor('questionshomepage').set('ask', false);
    }

});

App.AnsweraquestionInputanswerController = Ember.ObjectController.extend({

    actions: {
        //action controller for answering a question. Passes in the current model
        //as well as the answer and its id to send to the server
        answer: function () {
            answerQuestion($('#answerText').val(), this.get('id'), this.get('model'));
            this.replaceRoute('answersuccess');
        }
    }

});

App.AnswerSuccessRoute = Em.Route.extend({
    setupController : function(){
        this.controllerFor('questionshomepage').set('answer', 'active-link');
        this.controllerFor('questionshomepage').set('ask', false);
    }
});

App.AnswerQuestionView = Ember.View.extend({

    didInsertElement: function () {
        $('.solvedAnswersParagraph').fadeTo(500, 1);
    }

});


App.Questionsothersask = DS.Model.extend({
    qbody : DS.attr('string'),
    seen : DS.attr('boolean') 
});

App.Questionsothersask.FIXTURES = [];



