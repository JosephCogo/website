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

//this is embedded at the top of the askcontroller view
App.QuestionsnavView = Ember.View.extend({

    templateName: 'questionsnav'

});

App.AskaquestionRoute = Ember.Route.extend({

        model: function () {
            var store = this.store;
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


App.SolvedRoute = Ember.Route.extend({
    model : function (){
        var store = this.store;
        return store.find('solvedquestion');
    },

    setupController : function (controller, model){
       this._super(controller, model);
       $('.questionsOutlet').fadeTo(200, 1); 
        this.controllerFor('askaquestion').set('askSelected', false);
        this.controllerFor('askaquestion').set('solvedSelected', 'selected');
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


App.QuestionareaView = Ember.View.extend({

    didInsertElement: function () {
        var view = this;
        $('#questions').typeahead({
            hint: true,
            highlight: true,
            minLength: 1
        },
        {
            displayKey: 'value',
            source: function (query, cb) {
                console.log($('#questions').val());
                getQuestions($('#questions').val(), function () {
                    cb(autoQuestions());
                });
            }
        });


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

App.Question = DS.Model.extend({
    question : DS.attr('string')
});

App.Solvedquestion = DS.Model.extend({
    question : DS.attr('string'),
    abody : DS.attr('string'),
    aid : DS.attr('string')
});

App.Question.FIXTURES = [];
App.Solvedquestion.FIXTURES = [{id : 1, question : "Question 1", abody : "Answer 1"},
{id : 2, question : "Question 2", abody : "Answer 2"},
{id : 3, question : "Question 3", abody : "Answer 3"},
{id : 4, question : "Question 4", abody : "Answer 4"}
];

App.QuestionView = Ember.View.extend({

    tagName: 'p',

    didInsertElement: function () {
        $('.question-stack > p').fadeTo(200, 1);
    },

    click: function (evt) {
        console.log($(evt.target).attr('id'));
        var view = $(evt.target).attr('id');
        console.log($(evt.target).position().top);
        
        //this works, but at what cost??
        if (!$('.question-help').is(":visible")) {
            $('.question-help').fadeTo(200, 1);
        }
        $('.question-help textarea').autosize({ append: "\n" });
        $('.selected-question').removeClass('selected-question');

        $('.question-stack').addClass('selected-question');
        $('.question-help .arrow').css("top", $(evt.target).position().top);

    }

});

App.TagquestionView = Ember.View.extend({

    didInsertElement: function () {

        $('#tagquestion').on('tokenfield:preparetoken', function (e) {
            var autoArray = autoSkills();
            var inArray = false;
            for (var i = 0; i < autoArray.length; i++) {
                var item = autoArray[i];
                console.log(item['value']);
                if (item['value'].toUpperCase() === e.token.value.toUpperCase()) {
                    inArray = true;
                }
            }
            if (!inArray) {
                e.token = false;
            }
        }).tokenfield({
            beautify: false,
            typeahead: {
                minLength: 1,
                source: function (query, cb) {
                    getSkills($('#tagquestion').data('bs.tokenfield').$input.val(), function () {
                        cb(autoSkills());
                    });
                }
            }
        });
    }
});