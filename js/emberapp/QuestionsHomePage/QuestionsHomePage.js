//this is the resource that contains both the questions and the answers
App.QuestionshomepageRoute = Ember.Route.extend({
    //wait to load all the messages!!
    beforeModel: function () {
        var store = this.store;
        return new Ember.RSVP.Promise(function (resolve) {
            //reset the connection on refresh, and wait to load all the data
            if (Ember.isEmpty(getSocket())) {
                initSocket(store, function () {
                    loadData(store, function () {
                        resolve();
                        console.log('load');
                    });
                });
            }
            else {
                loadData(store, function () {
                    console.log('load');
                    resolve();
                });
            }

        });
    },

    setupController: function (controller, model) {
        controller.set('username', localStorage.username);
    }

});

App.QuestionshomepageController = Ember.Controller.extend({
    ask: false,
    answer: false,
    username : '',

    actions: {

        toAnswers: function () {
            var controller = this;
            if(this.get('answer') == false){
                $('.content').fadeTo(200, 0, function () {
                    controller.transitionToRoute('answeraquestion');
                });
            }
        },

        toQuestions: function () {
            if(this.get('ask') == false){
                this.set("answer", false);
                this.set("ask", "active-link");
                var controller = this;
            
                $('.content').fadeTo(200, 0, function () {
                    controller.transitionToRoute('askaquestion');
                });
            }
        }

    }
});
