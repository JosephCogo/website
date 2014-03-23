App = Ember.Application.create();

App.ApplicationAdapter = DS.FixtureAdapter;

App.Router.map(function () {
    this.resource('teamlist', function () {
        this.route('teamdescription', { path: '/:team_id' })
        this.route('blah');
    });
    this.route('blah');
});

App.IndexController = Ember.ObjectController.extend({

    actions: {
        login: function () {
            var Router = this;
            $.post('https://momentum.azure-mobile.net/api/login', {
             emailAddress: 'joemilsom@gmail.com', password: 'password'
            }, function(data) {
            sessionStorage.token = data.token;
            //Router.transitionToRoute('teamlist');
            //Ember.Logger.log("LOGIN");   
                
            $.ajax({
            url: 'https://momentum.azure-mobile.net/api/challengeupdate',
            type: 'post',
            data: {},
            headers: {
            "X-ZUMO-AUTH" : sessionStorage.token;
            },
            dataType: 'json',
            success: function (data) {
            console.log('success');
            }
            });
                         
        });
           
        }
    }
});

App.Team = DS.Model.extend({
    name : DS.attr('string'),
    description : DS.attr('string')
});

App.Team.FIXTURES = [
{
    id : 1,
    name : 'Hitler',
    description : ' Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima. Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.'
},
{
    id : 2,
    name : 'Genghis Khan',
    description : 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima. Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum.'
}
]

App.TeamlistRoute = Ember.Route.extend({
    model: function () {
        return this.store.find('team');
    }
});

App.BlahRoute = Ember.Route.extend({

});