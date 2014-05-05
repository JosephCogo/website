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
                    });
                });
            }
            else {
                loadData(store, function () {
                    resolve();
                });
            }

        });
    },

    setupController: function () {

    }
});

App.QuestionshomepageController = Ember.Controller.extend({
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
                controller.transitionToRoute('askaquestion');
            });
        }

    }
});