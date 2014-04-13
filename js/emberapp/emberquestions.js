App.QuestionspageRoute = Ember.Route.extend({

});

App.Question = DS.Model.extend({
    question : DS.attr('string')
});

App.Question.FIXTURES = [
    {id : 1 , question : "First Question"},
    {id : 2,question : "Second Question"  }
];

App.AskaquestionRoute = Ember.Route.extend({

model : function (){
    var store = this.store;
    return store.find('question');
},

setupController : function (controller, model){
this._super(controller, model);

},

deactivate : function (){

}

});

App.AskController = Ember.ArrayController.extend({

});

App.SolvedRoute = Ember.Route.extend({
model : function (){
    var store = this.store;
    return store.find('question');
},

setupController : function (controller, model){
    this._super(controller, model);
},

deactivate : function (){
    //id= @get('elementId');
}
    
});

App.askController = Ember.ArrayController.extend({

});

App.AskaquestionController = Ember.ArrayController.extend({
    askSelected : "selected",
    solvedSelected : false,
    unsolvedSelected : false,
    solved : "(4)",
    
    actions: {
        askquestion : function() {
            
        },
        
        logout : function(){
         localStorage.removeItem('token');
            localStorage.removeItem('idUser');
            var route = App.AskaquestionRoute;
            this.transitionTo('index');       
        },
        
        ask : function(){
            this.set("askSelected", "selected");
            this.set("solvedSelected", false);
            this.set("unsolvedSelected", false);
            this.transitionToRoute('ask');  
        },
        
        solved : function(){
            this.set("askSelected", false);
            this.set("solvedSelected", "selected");
            this.set("unsolvedSelected", false);
            this.transitionToRoute('solved');  
        },
        
        unsolved : function(){
            this.set("askSelected", false);
            this.set("solvedSelected", false);
            this.set("unsolvedSelected", "selected");
            this.transitionToRoute('unsolved');  
        }
    }
    
});


//this is embedded at the top of the askcontroller view
App.QuestionsnavView = Ember.View.extend({

templateName : 'questionsnav',
    
actions : {

        ask : function(){
            //console.log("bang");   
        }
}
    
})
