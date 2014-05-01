App.Questionsothersask = DS.Model.extend({
    qbody : DS.attr('string') 
});

App.Answer = DS.Model.extend({
    abody : DS.attr('string')
});

App.Questionsyouask = DS.Model.extend({
    qbody : DS.attr('string'),
    answers : DS.hasMany('answer')
});


App.Questionsothersask.FIXTURES = [];


/*
App.Solvedquestion.FIXTURES = [{id : 1, qbody : "People often list double-entry bookkeeping as one of the key inventions that created the modern world. But why is marking down everything twice such a big deal?", answers : [1]},
{id : 2, qbody : "Other Awesome question 1", answers : [1,2]},
{id : 3, qbody : "Other Awesome question 2", answers : []},
{id : 4, qbody : "Other Awesome question 3", answers : []}
];*/

App.Questionsyouask.FIXTURES = [];

App.Answer.FIXTURES = [{id : 1, abody : "I'm afraid you are misunderstanding the term double-entry.  It does not mean that every item is recorded twice. That would be crazy, needlessly redundant and grossly inefficient.  Double-entry simply means that every action has a corresponding and equal reaction.\nLife is about balance.  So is accounting.\nExample:  I receive a check for $1,000,000  Single entry:  Okay, I'm done.  Huh? What? Did you borrow it?  Did a customer pay you?  Did you sell something for cash?  Did you collect on a loan?  Did it fall from the sky? Explain, damn it!"},
{id : 2, abody : "Other Awesome answer 1"},
{id : 3, abody : "Other Awesome answer 1"},
{id : 4, abody : "Other Awesome answer 1"}];
