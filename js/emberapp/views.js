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

//this is the ember view that handles the light bulb helper
App.LightbulbhelperView = Ember.View.extend({
    templateName: 'lightbulbhelper',

   click: function(evt) {
        $('.lightbulb-help > div').fadeToggle('slow');
   }



});

App.SubmitButtonView = Ember.View.extend({

    click: function (evt) {
        var btn = $('.submit');
        btn.button('loading');
    }

});

App.ExpertiseView = Ember.View.extend({

    didInsertElement: function () {

        $('#tokenfield-typeahead').tokenfield({
            beautify : false,
            typeahead: {
                minLength: 1,
                source: function (query, cb) {
                    getSkills($('#tokenfield-typeahead').data('bs.tokenfield').$input.val(), function () {
                        cb(autoSkills());
                    });
                }
            }
        });
    }
});

App.AlertView = Ember.View.extend({

    didInsertElement: function () {
        $(".alert").find(".close").on("click", function (e) {
            $('#loginerror').addClass("hide");
        });
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

//this is embedded at the top of the askcontroller view
App.QuestionsnavView = Ember.View.extend({

    templateName: 'questionsnav'

});