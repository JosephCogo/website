var socket;
var emberStore;
var skills = [];
var questions = [];

//need to have error logic here
function initSocket(store, callback){
    emberStore = store;

    connectSocket(function (err, data) {
        handleMessages();
        callback();
    });
}

function connectSocket(callback) {

    //connect to socket io
    socket = io.connect('http://localhost:3000', {
        query: 'token=' + localStorage.token
    });

    //if the server responds, transition to ask
    //NOTE: NEED TO HAVE A FAILURE EVENT
    socket.on('connect', function (data) {
        console.log(data);
        callback(null, data);
    });

}

function getSocket(){
    return socket;
}

function handleMessages() {

    console.log("Handle Messages");

    socket.on('sendquestions', function (data) {
        console.log(data.question.qid);
        emberStore.push('question', { id: data.question.qid, question: data.question.question });
    });

    socket.on('unsolvedquestions', function (data) {
        console.log(data.question.qid);
        //emberStore.push('unsolvedquestion', { id: data.question.qid, question: data.question.question });
    });

    socket.on('solvedquestions', function (data) {
        console.log("solved");
       // emberStore.push('solvedquestion', { id: data.question.qid, question: data.question.question, answer : data.question.abody, aid : data.question.aid });
    });



}

function getSkills(yourSkills, callback){
    console.log(yourSkills);
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

function autoSkills(){
    return skills;
}

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


function autoQuestions(){
    return questions;
}

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
    