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
        emberStore.push('question', { id: data.id, question: data.question });
    });

}

function sendMessage(question, expertise){
    ex = ["node.js"];
    socket.emit('askquestion', {question : question, skills : ex});
}
    
