//this is the resource that contains both the questions and the answers
App.QuestionspageRoute = Ember.Route.extend({
    setupController: function () {
        //reset the connection on refresh
        if (Ember.isEmpty(getSocket())) {
            initSocket(this.store, function () {
                console.info("Successfully Reconnected");
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
            //everytime you navigate back to ask a question route,
            //set the highlighted buttons to ask(corresponds with the current route)
            controller.set("askSelected", "selected");
            controller.set("solvedSelected", false);
            controller.set("unsolvedSelected", false);
            $('.questions-content-area').fadeTo(200, 1);
        },

        deactivate: function () {

        }
});

App.AskaquestionController = Ember.ArrayController.extend({
    askSelected: "selected",
    solvedSelected: false,
    unsolvedSelected: false,
    solved: "(2)",

    actions: {
        askquestion: function () {

        },

        logout: function () {
            localStorage.removeItem('token');
            localStorage.removeItem('idUser');
            var route = App.AskaquestionRoute;
            this.transitionTo('index');
        },

        ask: function () {
            this.set("askSelected", "selected");
            this.set("solvedSelected", false);
            this.set("unsolvedSelected", false);
            
            var cont = this;
            $('.questionsOutlet').fadeTo(100, 0, function () {
                cont.transitionToRoute('ask');
            });

        },

        solved: function () {
            this.set("askSelected", false);
            this.set("solvedSelected", "selected");
            this.set("unsolvedSelected", false);
            var cont = this;
            $('.questionsOutlet').fadeTo(100, 0, function () {
                cont.transitionToRoute('solved');
            });
        },

        unsolved: function () {
            this.set("askSelected", false);
            this.set("solvedSelected", false);
            this.set("unsolvedSelected", "selected");
            var cont = this;
            $('.questionsOutlet').fadeTo(100, 0, function () {
                cont.transitionToRoute('unsolved');
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
    }  
});

App.AskRoute = Ember.Route.extend({
   
   setupController : function(){
        $('.questionsOutlet').fadeTo(200, 1);  
   }

});


App.AskController = Ember.Controller.extend({

    actions: {

        askquestion: function () {
            askQuestion(this.get('questionView'), this.get('expertise'));
            this.transitionToRoute("asksuccess");
        }

    }
});

App.QuestionareaView = Ember.View.extend({

    didInsertElement: function () {
        console.log("bang");
        var view = this;
        //var question = view.get('questionVal');

        $('#questions').typeahead({
            hint: true,
            highlight: true,
            minLength: 1
        },
        {
            displayKey: 'value',
            source: function (query, cb) {
                console.log($('#questions').value.text);
                //getQuestions(function () {
                  //  cb(autoQuestions());
                //});
            }
        });


    }
});

App.AnswerRoute = Ember.Route.extend({

    activate: function () {

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
    model : function (){
        var store = this.store;
        return store.find('question');
    },

    setupController : function (controller, model){
       this._super(controller, model);
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

App.Unsolvedquestion = DS.Model.extend({
    question : DS.attr('string')
});

App.Solvedquestion = DS.Model.extend({
    question : DS.attr('string'),
    abody : DS.attr('string'),
    aid : DS.attr('string')
});

App.Question.FIXTURES = [];
App.Unsolvedquestion.FIXTURES = [];
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
        //this works, but at what cost??
        if (!$('.question-help').is(":visible")) {
            $('.question-help').fadeTo(200, 1);
            $('.question-help textarea').autosize({ append: "\n" });
            $('.selected-question').removeClass('selected-question');

            $('.question-stack').addClass('selected-question');
            $('.question-help .arrow').css("top", $('.question-stack > p').position().top);
        }

    }

});
