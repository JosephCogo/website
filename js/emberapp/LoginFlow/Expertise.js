/**
This class handles putting the users skills into the database.
It will autocomplete any skills if they exist in the database, otherwise it will
add any new skills that the users put in
**/

App.ExpertiseRoute = Ember.Route.extend({
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

App.ExpertiseController = Ember.ObjectController.extend({
    username : localStorage.username,
    userPressedEnter : false,
    
    actions: {
        //will handle the submit event sent from the button in the expertise template
        submit: function () {
            var controller = this;
            //send skills through on socket, getting all the inputted tokens.
            //once successful, transition to asking a question

            var tokens = $('#tokenfield-typeahead').tokenfield('getTokens');
            console.log(tokens.length);

            //if the user has entered enough tokens, proceed, else show error
            if (tokens.length >= 5) {
                var btn = $('.submit');
                btn.button('loading');

                //add the users skills to the database
                addSkills($('#tokenfield-typeahead').tokenfield('getTokensList'), function () {
                    //move to ask a question
                    $(".application-content").fadeTo(500, 0, function () {
                        controller.replaceRoute('askaquestion');
                    });
                });
            } else {
                $('#expertiseerror').removeClass("hide")
            }
        }


    }
});

//view that handles the tag input. Will query the server for skills, and add them to the autocomplete box
App.ExpertiseView = Ember.View.extend({

    didInsertElement: function () {

        var controller = this.get('controller');

        $('#tokenfield-typeahead').on('tokenfield:createtoken', function (e) {
            if ($('#tokenfield-typeahead').tokenfield('getTokens').length >= 5) {
                $('#tick').attr("src", 'img/tickwhite.png');
            }
            controller.set('userPressedEnter', true);
        }).on('tokenfield:removetoken', function (e) {
            if ($('#tokenfield-typeahead').tokenfield('getTokens').length <= 5) {
                $('#tick').attr("src", 'img/tick.png');
            }
        }).tokenfield({
            beautify: false, //remove the space between entries
            typeahead: {
                minLength: 1,
                source: function (query, cb) {
                    //every time that user input is registered, send a request via socket to the server, and wait
                    //callback triggered by a socket.once event. callback MUST contain the array of skills that you need
                    getSkills($('#tokenfield-typeahead').data('bs.tokenfield').$input.val(), function () {
                        cb(autoSkills());
                    });
                }
            }
        });
    }
});

App.TutorialComponentComponent = Ember.Component.extend({
    firstname: localStorage.firstname,
    lastname: localStorage.lastname,
    userPressedEnter: '',

    firstExpertiseEnteredChanged: function () {
        this.toggleProperty("fourthBody");
        this.toggleProperty("fifthBody");
    } .observes('userPressedEnter'),


    actions: {

        tutorialFirst: function () {
            this.toggleProperty("firstBody");
            this.toggleProperty("secondBody");
        },

        tutorialSecond: function () {
            this.toggleProperty("secondBody");
            this.toggleProperty("thirdBody");
        },

        tutorialThird: function () {
            var com = this;
            $("#expertise").fadeTo(300, 1, function () {
                setTimeout(function () {
                    com.toggleProperty("thirdBody");
                    com.toggleProperty("fourthBody");
                }, 600);
            });
        },

        tutorialFifth: function () {
            this.toggleProperty("fifthBody");
            this.toggleProperty("sixthBody");
        },
        tutorialSixth: function () {
            this.toggleProperty("sixthBody");
            this.toggleProperty("seventhBody");
        }
    },

    didInsertElement: function () {
        this.toggleProperty("firstBody");
        console.log(this.userPressedEnter);
        $(".tutorialBox").fadeTo(700, 1);
        var data = this.get('data');
    }

});

