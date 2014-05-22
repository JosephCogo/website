//this is the resource that contains both the questions and the answers
App.QuestionshomepageRoute = Ember.Route.extend({

    //wait to load all the messages!!
    beforeModel: function () {
        console.log(isActive);
        var route = this;
        var store = this.store;

        return new Ember.RSVP.Promise(function (resolve) {
            //reset the connection on refresh, and wait to load all the data
            if (Ember.isEmpty(getSocket())) {
                initSocket(store, function (err) {
                    //if there is an error connecting, go to login
                    //usually from unauthorized handshake
                    if (err) {
                        route.replaceWith('login');
                    }
                    else {
                        loadData(store, function () {
                            resolve();
                            console.log('load');
                        });
                    }
                });
            }
            else {
                loadData(store, function () {
                    console.log('load');
                    resolve();
                    $(".application-content").fadeTo(500, 1);
                });
            }

        });
    },

    redirect: function () {
        if (localStorage.firsttime == 'true') {
            this.replaceWith('login');
            disconnect();
        }
    }

});

App.QuestionshomepageController = Ember.Controller.extend({
    ask: false,
    answer: false,
    firstname: localStorage.firstname,
    lastname: localStorage.lastname,
    newAnswers: '',
    newQuestions: '',

    newAnswersUpdate: function () {
        var controller = this;
        var newAnswers = 0;
        //get all the answers from the store, and then count the new ones!
        this.store.find("answer").then(function (results) {
            results.forEach(function (answer) {
                if (answer.get('read') == false) {
                    newAnswers++;
                }
                if (newAnswers > 0) {
                    controller.set('newAnswers', '(' + newAnswers + ')');
                } else {
                    controller.set('newAnswers', '');
                }
            });
        });
    } .observes("answer.@each"),

    newQuestionsUpdate: function () {
        var controller = this;
        var newQuestions = 0;
        //get all the answers from the store, and then count the new ones!
        this.store.find("questionsothersask").then(function (results) {
            results.forEach(function (question) {
                if (question.get('seen') == false) {
                    newQuestions++;
                }
                if (newQuestions > 0) {
                    controller.set('newQuestions', '(' + newQuestions + ')');

                } else {
                    controller.set('newQuestions', '');
                }
            });
        });
    }.observes("newAnswers"), //THIS IS A GREASY HACK BUT IT WORKS FOR NOW

    actions: {

        toAnswers: function () {
            var controller = this;
            if (this.get('answer') == false) {
                $('.content').fadeTo(200, 0, function () {
                    controller.transitionToRoute('answeraquestion');
                });
            }
        },

        toQuestions: function () {
            if (this.get('ask') == false) {
                this.set("answer", false);
                this.set("ask", "active-link");
                var controller = this;

                $('.content').fadeTo(200, 0, function () {
                    controller.transitionToRoute('askaquestion');
                });
            }
        },

        logout: function () {
            var controller = this;
            disconnect();
            $('.application-content').fadeTo(200, 0, function () {
                localStorage.removeItem('token');
                localStorage.removeItem('firstname');
                localStorage.removeItem('lastname');
                localStorage.removeItem('firsttime');
                controller.replaceRoute('login');
                controller.store.unloadAll('answer');
                controller.store.unloadAll('questionsyouask');
                controller.store.unloadAll('questionsothersask');
            });
        }

    }
});
