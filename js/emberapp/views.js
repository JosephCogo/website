


//these should be components


//this is the ember view that handles the light bulb helper TURN INTO A COMPONENT!!!
App.LightbulbhelperView = Ember.View.extend({
    templateName: 'lightbulbhelper',

   click: function(evt) {
        $('.lightbulb-help > div').fadeToggle('slow');
   }

});




//turn into a component!!
App.AlertView = Ember.View.extend({

    didInsertElement: function () {
        $(".alert").find(".close").on("click", function (e) {
            //yeah this is pretty terrible...
            $('#loginerror').addClass("hide");
            $('#expertiseerror').addClass("hide");
            $('#inputerror').addClass("hide");
        });
    }

});


App.TutorialComponent = Ember.Component.extend({
    templateName: "tutorial"
});