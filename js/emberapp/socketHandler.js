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
    socket = io.connect('http://localhost:80', {
        query: 'token=' + localStorage.token
    });

    //if the server responds, transition to ask
    //NOTE: NEED TO HAVE A FAILURE EVENT
    socket.on('connect', function (data) {
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
        emberStore.push('unsolvedquestion', { id: data.question.qid, question: data.question.question });
    });

    socket.on('solvedquestions', function (data) {
        console.log("solved");
        emberStore.push('solvedquestion', { id: data.question.qid, question: data.question.question, answer : data.question.abody, aid : data.question.aid });
    });



}

function getSkills(callback){
    socket.emit('autoskill', { skill: $('#tokenfield-typeahead').data('bs.tokenfield').$input.val() });

    socket.on('autoskill', function (data) {
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

function getQuestions(callback){
    socket.emit('autoquestion', { question: this.get('questionView') });

    socket.on('autoquestion', function (data) {
        var s = data.message.hits.hits;
        console.log(s[0]);
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



function askQuestion(question, expertise){
    ex = ["node.js"];
    console.log(question);
    //socket.emit('askquestion', {question : 'Where does CURL serve its usefulness?', skills : [{skillname : "CURL", sid : "1gdgdy"}] } );
}

function answerQuestion(answer, qid){
    socket.emit('answerquestion', {answer : answer, qid: qid} );
}
    