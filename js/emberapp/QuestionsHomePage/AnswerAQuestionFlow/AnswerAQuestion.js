/**
    This handles all the answering to the questions
**/

App.AnsweraquestionIndexRoute = Ember.Route.extend({
    renderTemplate: function () {
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

        readQuestions(model);
    },

    deactivate: function () {
        var controller = this;
        //change all the new answers to read
        this.store.find('questionsothersask').then(function (questionList) {
            questionList.forEach(function (item) {
                //console.log(item.get('id'));
                item.set('seen', true);
                item.save();
            });
        });
        //have to do this here as the observer pattern is not working with the computed property
        this.store.find("questionsothersask").then(function (results) {
            var newQuestions = 0;
            results.forEach(function (question) {
                if (question.get('seen') == false) {
                    newQuestions++;
                }
            });
            //set the number of unread messages
            if (newQuestions > 0) {
                controller.controllerFor('questionshomepage').set('newQuestions', '(' + newQuestions + ')');
            } else {
                controller.controllerFor('questionshomepage').set('newQuestions', '');
            }
        });
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
    setupController : function(controller, model){
        controller.set('model', model);
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
    qbody: DS.attr('string'),
    seen: DS.attr('boolean')
});

App.Questionsothersask.FIXTURES = [];



