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
        callback(null, data);
    });

}

function getSocket(){
    return socket;
}

function loadData(store, callback){


    socket.emit('loaddata');

    loadYourQuestions(function () {

        loadQuestionsOthersAsk(function () {

            handleUpdates();

            callback();
        });
    });

}

function loadYourQuestions(callback) {
    console.info('loading your questions');
    //these are the questions that you have asked!
    socket.once('questions-you-ask', function (data) {
        //console.log(data);
        var questions = data.question;
        for (var i = 0; i < questions.length; i++) {
            var item = questions[i];

            //this is for the hasMany relationship
            var answerIds = [];

            //push answers onto the store
            for (var j = 0; j < questions[i].answers.length; j++) {
                var ans = questions[i].answers[j];
                //this is required due to the optional match always returns something if 
                //nothing is found, if nothing it is null. 
                if (ans[0] != null && ans[1] != null) {
                    answerIds.push(ans[1]);
                    emberStore.push('answer', { id: ans[1], abody: ans[0], read: ans[2] });
                }
            }
            //push questions onto the store
            emberStore.push('questionsyouask', { id: item['q.qid'], qbody: item['q.qbody'], answers: answerIds });
        }
        callback();
    });
    
}

function loadQuestionsOthersAsk(callback) {
    //console.info('loading questions others ask');

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

    //BUG HERE
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
            setTimeout(function () {
                notification.cancel();
            }, 5000);
        }
    });

    socket.on('newanswer', function (data) {

        emberStore.push('answer', { id: data.aid, abody: data.abody });

        emberStore.find('questionsyouask', data.qid).then(function (question) {
            emberStore.find('answer', data.aid).then(function (answer) {
                question.get('answers').then(function (answerList) {
                    answerList.pushObject(answer);
                });
                //this is not that nice, but update the number of new answers.
                //only have to do this because of the fact that the observer does not
                //work 
                this.store.find("answer").then(function (results) {
                    var newAnswers = 0;
                    results.forEach(function (answer) {
                        if (answer.get('read') == false) {
                            newAnswers++;
                        }
                    });
                    //set the number of unread messages
                    if (newAnswers > 0) {
                        controller.controllerFor('askaquestioncontent').set('solved', '(' + newAnswers + ')');
                    } else {
                        controller.controllerFor('askaquestioncontent').set('solved', '');
                    }
                });
            });
        });

        var havePermission = window.webkitNotifications.checkPermission();
        if (havePermission == 0) {
            // 0 is PERMISSION_ALLOWED
            var notification = window.webkitNotifications.createNotification(
            'img/logogreensmal_.png',
            'New Answer',
             data.abody
            );

            notification.onclick = function () {
                //window.open("http://stackoverflow.com/a/13328397/1269037"); //go to new question here????
                notification.close();
            }
            notification.show();
            setTimeout(function () {
                notification.cancel();
            }, 5000);
        }
    });
}



//these are the skills that you get from the server
function getSkills(yourSkills, callback){
    socket.emit('autoskill', { skill: yourSkills });

    socket.once('autoskill', function (data) {
        //console.log(data.m);
        var s = data.message.suggest[0];
        //console.log(s);

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

    //console.log(skills);
    socket.emit('addskill', {skills : skills});

    socket.once('addedskills', function (data) {
        //console.info('successfully added skills');
        callback();
    });

}

function askQuestion(question, expertise, callback){
    //console.log(question + " " + expertise);

    socket.emit('askquestion', {question : question, skills : expertise } );

    //if asking the question is successful, continue
    socket.once('askedquestion', function (data) {
        emberStore.push('questionsyouask', {id : data.qid, qbody : data.qbody});
        //need to have question returned here!!
        callback();
    });
}

//send the answer to the server, passes in a model
//for the deletion, the find method doesn't work???
function answerQuestion(answer, qid, model){
    console.log('answer');
    socket.emit('answerquestion', {answer : answer, qid: qid} );

    //remove the model from the store as it has been answered
    model.unloadRecord();
}

function readAnswers(model){
    //get answers from model, check to see what ones have
    //been read, if not read, add them to the a list to send to 
    //a server
    model.get("answers").then(function (answerList) {
        var aids = [];
        answerList.forEach(function (item) {
            var read = item.get('read');
            if (read == false) {
                aids.push(item.get('id'));
            }
        });
        socket.emit('readanswers', {aids : aids});
    });
}
    