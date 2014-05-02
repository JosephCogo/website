/**
This class handles all the socket logic. Could possibly put this into each class implementation
**/

var socket;
//the store for ember data
var emberStore;
//the array of skills from the server
var skills = [];
//the autocompleted questions returned from the server
var questions = [];

//initialise the socket and store and register event listeners for the 
//grabbing messages from the server
function initSocket(store, callback){
    emberStore = store;

    connectSocket(function (err, data) {
        callback();
    });
}

//connects to the socket server
function connectSocket(callback) {

    //connect to socket io
    socket = io.connect('http://localhost:3000', {
        query: 'token=' + localStorage.token
    });

    //if the server responds, transition to ask
    //NOTE: NEED TO HAVE A FAILURE EVENT
    socket.on('connect', function (data) {
        //console.log(data);
        callback(null, data);
    });

}

function getSocket(){
    return socket;
}

function loadData(store, callback){
    initSocket(store, function () {
        console.info("Connected. Loading resources...");

        loadYourQuestions(function () {
            console.info("Your questions are loaded");

            loadQuestionsOthersAsk(function () {
                console.info('others questions are loaded. Loading complete');
                callback();
            });
        });
    });
}

function loadYourQuestions(callback) {
    console.info('loading your questions');
    //these are the questions that you have asked!
    socket.once('questions-you-ask', function (data) {
        var questions = data.question;
        for (var i = 0; i < questions.length; i++) {
            var item = questions[i];
            emberStore.push('questionsyouask', { id: item['q.qid'], qbody: item['q.qbody'], answers : [] });
        }
        callback();
    });
    
}

function loadQuestionsOthersAsk(callback) {
    console.info('loading questions others ask');

    //these are questions that need your expertise!!
    socket.once('questions-others-ask', function (data) {
        var questions = data.question;
        for (var i = 0; i < questions.length; i++) {
            var item = questions[i];
            emberStore.push('questionsothersask', { id: item['q.qid'], qbody: item['q.qbody'] });
        }
        callback();
    });
    
}

//these are the skills that you get from the server
function getSkills(yourSkills, callback){
    socket.emit('autoskill', { skill: yourSkills });

    socket.once('autoskill', function (data) {
        console.log(data.m);
        var s = data.message.suggest[0];
        console.log(s);

        skills = [];
        
        for (var i = 0; i < s.options.length; i++) {
            skills.push({value : s.options[i].text});
        }

        callback();
    });
}

//return the array of skills that have been grabbed from the server
function autoSkills(){
    return skills;
}

//
function getQuestions(question, callback){
    socket.emit('autoquestion', { question: question });

    socket.once('autoquestion', function (data) {
        var s = data.message.hits.hits;
        questions = [];

        for (var i = 0; i < s.length; i++) {
            questions.push({ value: s[i]._source.qBody });
        }

        callback();
    });
}

//return the array of questions that have been grabbed from the server
function autoQuestions(){
    return questions;
}

//add skills to the server, in the expertise route
function addSkills(skills, callback){

    console.log(skills);
    socket.emit('addskill', {skills : skills});

    socket.once('addedskills', function (data) {
        console.info('successfully added skills');
        callback();
    });

}

function askQuestion(question, expertise, callback){
    console.log(question + " " + expertise);

    socket.emit('askquestion', {question : question, skills : expertise } );

    socket.once('askedQuestion', function () {
        console.info('asked success');
        callback();
    });
}


function answerQuestion(answer, qid){
    socket.emit('answerquestion', {answer : answer, qid: qid} );
}
    