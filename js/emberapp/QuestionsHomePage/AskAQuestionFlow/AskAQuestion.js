App.AskaquestionRoute = Ember.Route.extend({

    setupController: function (controller, model) {
        $('.application-content').fadeTo(300, 1);
        $('.content').fadeTo(300, 1);
        $('.questionsOutlet').fadeTo(200, 1);
        this.controllerFor('askaquestioncontent').set('askSelected', 'selected');
        this.controllerFor('askaquestioncontent').set('solvedSelected', false);
        this.controllerFor('questionshomepage').set('ask', 'active-link');

    }

});


App.AskaquestionController = Ember.Controller.extend({

    actions: {

        askquestion: function () {
            //send files then ask question
            //var myDropzone = Dropzone.forElement("#fileupload");

            //myDropzone.processQueue();

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
            var controller = this;
            $('.questionsOutlet').fadeTo(200, 0, function () {
                controller.replaceRoute('askaquestion');
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

App.DropzoneView = Em.View.extend({
    /*
    didInsertElement: function () {
        $("#fileupload").dropzone({ url: "http://localhost:3000/uploadfile",
            addRemoveLinks: true,
            autoProcessQueue: false
        });

        var myDropzone = Dropzone.forElement("#fileupload");

        myDropzone.on('sending', function (file, xhr, formData) {
            console.log(file.name);
            formData.append('orgname', 'lightninglab');
        });

        myDropzone.on('success', function (status, message) {
            //console.log(status);
            console.log(message);
        });
    }*/

});