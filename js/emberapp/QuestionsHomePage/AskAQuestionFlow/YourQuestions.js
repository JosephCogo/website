
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
        this.controllerFor('questionshomepage').set('ask', 'active-link');
        this.controllerFor('questionshomepage').set('answer', false);
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
        //console.log(model.qbody);
        controller.set('model', model);
        this.controllerFor('askaquestioncontent').set('askSelected', false);
        this.controllerFor('askaquestioncontent').set('solvedSelected', 'selected');
        this.controllerFor('questionshomepage').set('ask', 'active-link');
        this.controllerFor('questionshomepage').set('answer', false);


    },

    deactivate: function () {
        this.store.find('questionsyouask', this.currentModel.get('id')).then(function (question) {
            question.get('answers').then(function (answerList) {
                answerList.forEach(function (item) {
                    console.log(item.get('id'));
                    item.set('read', true);
                });
            });
        });
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
    abody: DS.attr('string'),
    read : DS.attr('boolean')
});

App.Questionsyouask = DS.Model.extend({
    qbody: DS.attr('string'),
    answers: DS.hasMany('answer', { async: true }),
    newAnswers: function () {
        var newAnswers = 0;

        this.get("answers").forEach(function(answer){
            if(answer.get('read') == false){
                newAnswers++;
            }
            });  

        return newAnswers;
    }.property('answers.@each.read')
});

App.Questionsyouask.FIXTURES = [];

App.Answer.FIXTURES = [];


