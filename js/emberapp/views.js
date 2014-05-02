


//these should be components


//this is the ember view that handles the light bulb helper TURN INTO A COMPONENT!!!
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



//turn into a component!!
App.AlertView = Ember.View.extend({

    didInsertElement: function () {
        $(".alert").find(".close").on("click", function (e) {
            $('#loginerror').addClass("hide");
        });
    }

});


