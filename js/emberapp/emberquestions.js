//this is the resource that contains both the questions and the answers
App.QuestionspageRoute = Ember.Route.extend({
    setupController: function () {
        //reset the connection on refresh
        if (Ember.isEmpty(getSocket())) {
            initSocket(this.store, function () {
                console.info("Successfully Reconnected");
            });
        }
        $(".application-content").fadeTo(500, 1);
    }
});

App.QuestionspageController = Ember.Controller.extend({
    ask: false,
    answer: false,

    actions: {

        toAnswers: function () {
            var controller = this;

            $('.content').fadeTo(200, 0, function () {
                controller.transitionToRoute('answeraquestion');
            });
        },

        toQuestions: function () {
            answer = false;
            this.set("answer", false);
            this.set("ask", "active-link");
            var controller = this;
            $('.content').fadeTo(200, 0, function () {
                controller.transitionToRoute('ask');
            });
        }

    }
});



App.AskaquestionRoute = Ember.Route.extend({

        model: function () {
            var store = this.store;
            store.find('answer');
            return store.find('question');
        },

        setupController: function (controller, model) {
            this._super(controller, model);
            $('.questions-content-area').fadeTo(200, 1);
            this.controllerFor('questionspage').set('ask', 'active-link');
            this.controllerFor('questionspage').set('answer', false);
        }
});

App.AskaquestionController = Ember.ArrayController.extend({
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
                cont.transitionToRoute('ask');
            });
        },

        solved: function () {
            var cont = this;
            $('.questionsOutlet').fadeTo(200, 0, function () {
                cont.transitionToRoute('solved');
            });
        }
    }
});




App.AskRoute = Ember.Route.extend({

    setupController: function (controller, model) {
        $('.content').fadeTo(300, 1);
        $('.questionsOutlet').fadeTo(200, 1);
        this.controllerFor('askaquestion').set('askSelected', 'selected');
        this.controllerFor('askaquestion').set('solvedSelected', false);
    }

});


App.AskController = Ember.Controller.extend({

    actions: {

        askquestion: function () {
            var controller = this;
            $(".btn").button('loading');
            askQuestion($('#questions').val(), $('#tagquestion').tokenfield('getTokensList'), function () {
                $('.questionsOutlet').fadeTo(200, 0, function () {
                    controller.replaceRoute("asksuccess");
                });
            });
        }

    }
});

App.AsksuccessRoute = Ember.Route.extend({

    setupController: function () {
        $('.questionsOutlet').fadeTo(200, 1);
    }

});

App.AsksuccessController = Ember.Controller.extend({
    actions: {
        askAnotherQuestion: function () {
            console.log('bang');
            var controller = this;
            $('.questionsOutlet').fadeTo(200, 0, function () {
                controller.replaceRoute('ask');
            });
        }
    }

});


App.AnswerRoute = Ember.Route.extend({

    setupController: function () {

    }

});

App.AnswerController = Ember.ObjectController.extend({

    actions: {
        answer: function () {
            answerQuestion(this.get('answerText'), this.get('id'));
        }
    }

});

App.AnsweraquestionRoute = Ember.Route.extend({
    model: function () {
        var store = this.store;
        
        return store.find('question');
    },

    setupController: function (controller, model) {
        this._super(controller, model);
        $('.content').fadeTo(300, 1);
        this.controllerFor('questionspage').set('answer', 'active-link');
        this.controllerFor('questionspage').set('ask', false);
    }
});

App.AnsweraquestionController = Ember.ArrayController.extend({
    actions: {
        answer: function () {
            console.log(this.get('answerText'));
        }
    }
});


App.SolvedIndexRoute = Ember.Route.extend({
    renderTemplate: function () {
        this.render('solvedindex');
    },

    model: function () {
        var store = this.store;
        return store.find('solvedquestion');
    },

    setupController: function (controller, model) {
        this._super(controller, model);
        $('.questionsOutlet').fadeTo(200, 1);
        this.controllerFor('askaquestion').set('askSelected', false);
        this.controllerFor('askaquestion').set('solvedSelected', 'selected');
    }
});

App.SolvedIndexController = Ember.ArrayController.extend({
    actions : {
        toSolvedAnswer : function(solvedQuestion){
            var controller = this;
            controller.transitionToRoute('solved.solvedanswer', solvedQuestion);   
        }
    }
});

App.SolvedSolvedanswerRoute = Ember.Route.extend({
    renderTemplate: function () {
        this.render('solvedsolvedanswer');
    },

    model: function (params) {
        console.log(params);
        
        //need to merge 2 promises into one
        return Ember.RSVP.hash({
            solvedquestion: this.store.find('solvedquestion', params.question_id),
            answers : this.store.find('answer', [1,2])
        });

       // this.store.find('answer');

       // return this.store.find('solvedquestion', params.question_id);
    },

    setupController: function (controller, model) {

        controller.set('model', model);
    }
});

App.SolvedSolvedanswerController = Ember.ObjectController.extend({


});

App.LoadingRoute = Ember.Route.extend({});

