//this is the resource that contains both the questions and the answers
App.QuestionspageRoute = Ember.Route.extend({
    setupController : function(){
        initSocket(this.store, function () {
            console.info("Successfully Reconnected");
        });
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
        return store.find('question');
    },

    setupController : function (controller, model){
       this._super(controller, model);
       $('.questionsOutlet').fadeTo(200, 1); 
    }  
});

App.UnsolvedRoute = Ember.Route.extend({
    model : function (){
        var store = this.store;
        return store.find('question');
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
            sendMessage(this.get('question'), this.get('expertise'));
        }

    }
});

App.AnswerRoute = Ember.Route.extend({

    activate: function () {

    },
    deactivate: function () {
        this.transitionTo('answeraquestion');
    }
});

App.AnswerController = Ember.ObjectController.extend({

    actions: {

        answer: function () {
            console.log("ok");

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

App.Question.FIXTURES = [];

App.QuestionView = Ember.View.extend({

    tagName: 'p',

    click: function (evt) {
        console.log("click");
        //this works, but at what cost??
        if (!$('.question-help').is(":visible")) {
            $('.question-help').fadeTo(200,1);
            $('.question-help textarea').autosize({ append: "\n" });
            $('.selected-question').removeClass('selected-question');

            $('.question-stack').addClass('selected-question');
            $('.question-help .arrow').css("top", $('.question-stack > p').position().top);
        }
    }

});

