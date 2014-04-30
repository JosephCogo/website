App.Question = DS.Model.extend({
    qbody : DS.attr('string') 
});

App.Answer = DS.Model.extend({
    abody : DS.attr('string'),
    question : DS.belongsTo('solvedquestion', {async:true})
});

App.Solvedquestion = DS.Model.extend({
    qbody : DS.attr('string'),
    answers : DS.hasMany('answer', {async:true})
});


App.Question.FIXTURES = [];



App.Solvedquestion.FIXTURES = [{id : 1, qbody : "Question 1", answers : [1,2,3,4]},
{id : 2, qbody : "Question 2", answers : []},
{id : 3, qbody : "Question 3", answers : []},
{id : 4, qbody : "Question 4", answers : []}
];

App.Answer.FIXTURES = [{id : 1, abody : "Answer 1", question : 1},
{id : 2, abody : "Answer 2", question : 1},
{id : 3, abody : "Answer 3", question : 1},
{id : 4, abody : "Answer 4", question : 1}];
