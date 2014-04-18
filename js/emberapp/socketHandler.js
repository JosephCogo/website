var socket;
var emberStore;

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

function askQuestion(question, expertise){
    ex = ["node.js"];
    socket.emit('askquestion', {question : question, skills : [{skillname : "node.js", sid : 1}] } );
}

function answerQuestion(answer, qid){
    socket.emit('answerquestion', {answer : answer, qid: qid} );
}
    
