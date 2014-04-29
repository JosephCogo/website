App.Question = DS.Model.extend({
    question : DS.attr('string')
});

App.Solvedquestion = DS.Model.extend({
    question : DS.attr('string'),
    abody : DS.attr('string'),
    aid : DS.attr('string')
});

App.Question.FIXTURES = [];
App.Solvedquestion.FIXTURES = [{id : 1, question : "Question 1", abody : "Answer 1"},
{id : 2, question : "Question 2", abody : "Answer 2"},
{id : 3, question : "Question 3", abody : "Answer 3"},
{id : 4, question : "Question 4", abody : "Answer 4"}
];