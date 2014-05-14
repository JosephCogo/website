
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
        controller.set('model', model);
        this.controllerFor('askaquestioncontent').set('askSelected', false);
        this.controllerFor('askaquestioncontent').set('solvedSelected', 'selected');
        this.controllerFor('questionshomepage').set('ask', 'active-link');
        this.controllerFor('questionshomepage').set('answer', false);

        //indicate that the answers have been read
        readAnswers(model);
    },

    deactivate: function () {
        var controller = this;
        //change all the new answers to read
        this.store.find('questionsyouask', this.currentModel.get('id')).then(function (question) {
            question.get('answers').then(function (answerList) {
                answerList.forEach(function (item) {
                    console.log(item.get('id'));
                    item.set('read', true);
                    item.save();
                });
            });
        });
        //have to do this here as the observer pattern is not working with the computed property
        this.store.find("answer").then(function (results) {
            var newAnswers = 0;
            results.forEach(function (answer) {
                if (answer.get('read') == false) {
                    newAnswers++;
                }
            });
            //set the number of unread messages
            if (newAnswers > 0) {
                controller.controllerFor('askaquestioncontent').set('solved', '(' + newAnswers + ')');
            } else {
                controller.controllerFor('askaquestioncontent').set('solved', '');
            }
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
    //function to count the number of new answers from the server
    newAnswers: function () {
        var newAnswers = 0;
        //get all the answers from the store, and then count the new ones!
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


