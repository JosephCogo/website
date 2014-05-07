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
    socket = io.connect('http://babblefishes.cloudapp.net:3000', {
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

    socket.emit('loaddata');

        loadYourQuestions(function () {
            console.info("Your questions are loaded");

            loadQuestionsOthersAsk(function () {
                console.info('others questions are loaded. Setting up handling of new messages...');

                handleUpdates();

                console.info('Complete');

                callback();
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

            //push answers onto the store
            /*for (var j = 0; j < questions[i].answers.length; j++) {
                var ans = questions[i].answers[j];
                emberStore.push('answer', { id: ans['a.aid'], qbody: ans['a.abody'] });
            }*/

            //push questions onto the store
            emberStore.push('questionsyouask', { id: item['q.qid'], qbody: item['q.qbody'], answers: [1, 2] });
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

//handle updates to the questions ie new answer for your questions, questions
//directed at you etc
function handleUpdates(){

    socket.on('newquestion', function (data) {
        //ugh clean up...
        emberStore.push('questionsothersask', { id: data.qid, qbody: data.qbody });
        
        var havePermission = window.webkitNotifications.checkPermission();
        if (havePermission == 0) {
            // 0 is PERMISSION_ALLOWED
            var notification = window.webkitNotifications.createNotification(
            'img/logogreensmal_.png',
            'New Question Asked',
             data.qbody
            );
    
            notification.onclick = function () {
                //window.open("http://stackoverflow.com/a/13328397/1269037"); //go to new question here????
                notification.close();
            }
            notification.show();
            setTimeout(function(){
                notification.cancel();
            }, 5000);

        }
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

    //if asking the question is successful, continue
    socket.once('askedquestion', function () {
        console.info('asked success');
        //need to have question returned here!!
        callback();
    });
}

//send the answer to the server, passes in a model
//for the deletion, the find method doesn't work???
function answerQuestion(answer, qid, model){
    socket.emit('answerquestion', {answer : answer, qid: qid} );

    //remove the model from the store as it has been answered
    model.unloadRecord();
}
    