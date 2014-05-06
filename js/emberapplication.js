function initSocket(a,b){emberStore=a,connectSocket(function(){b()})}function connectSocket(a){socket=io.connect("http://babblefishes.cloudapp.net:3000",{query:"token="+localStorage.token}),socket.on("connect",function(b){a(null,b)})}function getSocket(){return socket}function loadData(a,b){socket.emit("loaddata"),loadYourQuestions(function(){console.info("Your questions are loaded"),loadQuestionsOthersAsk(function(){console.info("others questions are loaded. Setting up handling of new messages..."),handleUpdates(),console.info("Complete"),b()})})}function loadYourQuestions(a){console.info("loading your questions"),socket.once("questions-you-ask",function(b){for(var c=b.question,d=0;d<c.length;d++){var e=c[d];emberStore.push("questionsyouask",{id:e["q.qid"],qbody:e["q.qbody"],answers:[1,2]})}a()})}function loadQuestionsOthersAsk(a){console.info("loading questions others ask"),socket.once("questions-others-ask",function(b){for(var c=b.question,d=0;d<c.length;d++){var e=c[d];emberStore.push("questionsothersask",{id:e["q.qid"],qbody:e["q.qbody"]})}a()})}function handleUpdates(){socket.on("newquestion",function(a){console.log(a.question)})}function getSkills(a,b){socket.emit("autoskill",{skill:a}),socket.once("autoskill",function(a){console.log(a.m);var c=a.message.suggest[0];console.log(c),skills=[];for(var d=0;d<c.options.length;d++)skills.push({value:c.options[d].text});b()})}function autoSkills(){return skills}function getQuestions(a,b){socket.emit("autoquestion",{question:a}),socket.once("autoquestion",function(a){var c=a.message.hits.hits;questions=[];for(var d=0;d<c.length;d++)questions.push({value:c[d]._source.qBody});b()})}function autoQuestions(){return questions}function addSkills(a,b){console.log(a),socket.emit("addskill",{skills:a}),socket.once("addedskills",function(){console.info("successfully added skills"),b()})}function askQuestion(a,b,c){console.log(a+" "+b),socket.emit("askquestion",{question:a,skills:b}),socket.once("askedquestion",function(){console.info("asked success"),c()})}function answerQuestion(a,b){socket.emit("answerquestion",{answer:a,qid:b})}App.ExpertiseRoute=Ember.Route.extend({setupController:function(){Ember.isEmpty(getSocket())&&initSocket(this.store,function(){console.info("Successfully Reconnected")}),$(".application-content").fadeTo(500,1)}}),App.ExpertiseController=Ember.ObjectController.extend({actions:{submit:function(){var a=this;addSkills($("#tokenfield-typeahead").tokenfield("getTokensList"),function(){$(".application-content").fadeTo(500,0,function(){a.replaceRoute("askaquestion")})})}}}),App.ExpertiseView=Ember.View.extend({didInsertElement:function(){$("#tokenfield-typeahead").tokenfield({beautify:!1,typeahead:{minLength:1,source:function(a,b){getSkills($("#tokenfield-typeahead").data("bs.tokenfield").$input.val(),function(){b(autoSkills())})}}})}}),App.LoginRoute=Ember.Route.extend({model:function(){return{}}}),App.LoginController=Ember.ObjectController.extend({actions:{login:function(){var a=this;$.ajax({url:"http://babblefishes.cloudapp.net:3000/login",type:"post",data:{email:this.get("email"),password:this.get("password")},statusCode:{200:function(b){localStorage.token=b.token;var c=b.firsttime;initSocket(a.store,function(){console.info("Sockets connected"),$(".application-content").fadeTo(500,0,function(){a.replaceRoute(c?"expertise":"askaquestion")})})},400:function(){console.log("Invalid Username or Password");var a=$(".submit");a.button("reset"),$("#loginerror").removeClass("hide")}}})}}}),App.AnsweraquestionRoute=Ember.Route.extend({model:function(){var a=this.store;return a.find("questionsothersask")},setupController:function(a,b){this._super(a,b),$(".content").fadeTo(300,1),this.controllerFor("questionshomepage").set("answer","active-link"),this.controllerFor("questionshomepage").set("ask",!1)}}),App.AnsweraquestionController=Ember.ArrayController.extend({actions:{answer:function(){console.log(this.get("answerText"))}}}),App.InputanswerRoute=Ember.Route.extend({setupController:function(){}}),App.InputanswerController=Ember.ObjectController.extend({actions:{answer:function(){answerQuestion(this.get("answerText"),this.get("id"))}}}),App.YourAnswersView=Ember.View.extend({didInsertElement:function(){$(".solvedAnswersParagraph").fadeTo(500,1)}}),App.Questionsothersask=DS.Model.extend({qbody:DS.attr("string")}),App.Questionsothersask.FIXTURES=[],App.AskaquestionRoute=Ember.Route.extend({setupController:function(){console.log("hr"),$(".application-content").fadeTo(300,1),$(".content").fadeTo(300,1),$(".questionsOutlet").fadeTo(200,1),this.controllerFor("askaquestioncontent").set("askSelected","selected"),this.controllerFor("askaquestioncontent").set("solvedSelected",!1)}}),App.AskaquestionController=Ember.Controller.extend({actions:{askquestion:function(){var a=this;$(".btn").button("loading"),askQuestion($("#questions").val(),$("#tagquestion").tokenfield("getTokensList"),function(){$(".questionsOutlet").fadeTo(200,0,function(){a.replaceRoute("asksuccess")})})}}}),App.AsksuccessRoute=Ember.Route.extend({setupController:function(){$(".questionsOutlet").fadeTo(200,1)}}),App.AsksuccessController=Ember.Controller.extend({actions:{askAnotherQuestion:function(){console.log("bang");var a=this;$(".questionsOutlet").fadeTo(200,0,function(){a.replaceRoute("askaquestion")})}}}),App.QuestionareaView=Ember.View.extend({didInsertElement:function(){$("#questions").typeahead({hint:!0,highlight:!0,minLength:1},{displayKey:"value",source:function(a,b){console.log($("#questions").val()),getQuestions($("#questions").val(),function(){b(autoQuestions())})}})}}),App.TagquestionView=Ember.View.extend({didInsertElement:function(){$("#tagquestion").on("tokenfield:preparetoken",function(a){for(var b=autoSkills(),c=!1,d=0;d<b.length;d++){var e=b[d];console.log(e.value),e.value.toUpperCase()===a.token.value.toUpperCase()&&(c=!0)}c||(a.token=!1)}).tokenfield({beautify:!1,typeahead:{minLength:1,source:function(a,b){getSkills($("#tagquestion").data("bs.tokenfield").$input.val(),function(){b(autoSkills())})}}})}}),App.AskaquestioncontentRoute=Ember.Route.extend({model:function(){var a=this.store;return a.find("questionsyouask")},setupController:function(a,b){this._super(a,b),$(".questions-content-area").fadeTo(200,1),this.controllerFor("askaquestioncontent").set("ask","active-link"),this.controllerFor("askaquestioncontent").set("answer",!1)}}),App.AskaquestioncontentController=Ember.ArrayController.extend({askSelected:"selected",solvedSelected:!1,solved:"(2)",actions:{logout:function(){localStorage.removeItem("token"),localStorage.removeItem("idUser");App.AskaquestionRoute;this.transitionTo("index")},ask:function(){var a=this;$(".questionsOutlet").fadeTo(200,0,function(){a.transitionToRoute("askaquestion")})},solved:function(){var a=this;$(".questionsOutlet").fadeTo(200,0,function(){a.transitionToRoute("yourquestions")})}}}),App.QuestionsnavView=Ember.View.extend({templateName:"questionsnav"}),App.YourquestionsIndexRoute=Ember.Route.extend({renderTemplate:function(){this.render("yourquestionsindex")},model:function(){var a=this.store;return a.find("questionsyouask")},setupController:function(a,b){this._super(a,b),$(".questionsOutlet").fadeTo(200,1),this.controllerFor("askaquestioncontent").set("askSelected",!1),this.controllerFor("askaquestioncontent").set("solvedSelected","selected")}}),App.YourquestionsIndexController=Ember.ArrayController.extend({actions:{toSolvedAnswer:function(a){var b=this;b.transitionToRoute("yourquestions.answersprovided",a)}}}),App.YourquestionsAnswersprovidedRoute=Ember.Route.extend({renderTemplate:function(){this.render("yourquestionsanswersprovided")},model:function(a){return console.log("model"),this.store.find("questionsyouask",a.question_id)},setupController:function(a,b){this.store;a.set("model",b)}}),App.YourquestionsAnswersprovidedController=Ember.ObjectController.extend({}),App.QuestionView=Ember.View.extend({didInsertElement:function(){$(".questionParagraph").fadeTo(500,1)}}),App.Answer=DS.Model.extend({abody:DS.attr("string")}),App.Questionsyouask=DS.Model.extend({qbody:DS.attr("string"),answers:DS.hasMany("answer",{async:!0})}),App.Questionsyouask.FIXTURES=[{id:1,qbody:"Other Awesome question 1",answers:[2]}],App.Answer.FIXTURES=[{id:1,abody:"I'm afraid you are misunderstanding the term double-entry.  It does not mean that every item is recorded twice. That would be crazy, needlessly redundant and grossly inefficient.  Double-entry simply means that every action has a corresponding and equal reaction.\nLife is about balance.  So is accounting.\nExample:  I receive a check for $1,000,000  Single entry:  Okay, I'm done.  Huh? What? Did you borrow it?  Did a customer pay you?  Did you sell something for cash?  Did you collect on a loan?  Did it fall from the sky? Explain, damn it!"},{id:2,abody:"Other Awesome answer 1"},{id:3,abody:"Other Awesome answer 1"},{id:4,abody:"Other Awesome answer 1"}],App.QuestionshomepageRoute=Ember.Route.extend({beforeModel:function(){var a=this.store;return new Ember.RSVP.Promise(function(b){Ember.isEmpty(getSocket())?initSocket(a,function(){loadData(a,function(){b()})}):loadData(a,function(){b()})})},setupController:function(){}}),App.QuestionshomepageController=Ember.Controller.extend({ask:!1,answer:!1,actions:{toAnswers:function(){var a=this;$(".content").fadeTo(200,0,function(){a.transitionToRoute("answeraquestion")})},toQuestions:function(){answer=!1,this.set("answer",!1),this.set("ask","active-link");var a=this;$(".content").fadeTo(200,0,function(){a.transitionToRoute("askaquestion")})}}}),App=Ember.Application.create(),App.ApplicationAdapter=DS.FixtureAdapter,App.Router.map(function(){this.resource("login"),this.resource("expertise"),this.resource("questionshomepage",function(){this.resource("askaquestioncontent",function(){this.resource("askaquestion"),this.resource("asksuccess"),this.resource("yourquestions",function(){this.route("answersprovided",{path:"/:question_id"})})}),this.resource("answeraquestion",function(){this.resource("inputanswer",{path:"/:question_id"})})})}),App.IndexRoute=Ember.Route.extend({redirect:function(){var a=this,b=this.store;Ember.isEmpty(localStorage.token)?a.transitionTo("login"):$.ajax({url:"http://babblefishes.cloudapp.net:3000/refreshtoken",type:"post",data:{token:localStorage.token},statusCode:{200:function(c){localStorage.token=c.token,initSocket(b,function(){a.transitionTo("askaquestion")})},401:function(){console.log("ERROR"),a.transitionTo("login")}}})}});var socket,emberStore,skills=[],questions=[];App.LightbulbhelperView=Ember.View.extend({templateName:"lightbulbhelper",click:function(){$(".lightbulb-help > div").fadeToggle("slow")}}),App.SubmitButtonView=Ember.View.extend({click:function(){var a=$(".submit");a.button("loading")}}),App.AlertView=Ember.View.extend({didInsertElement:function(){$(".alert").find(".close").on("click",function(){$("#loginerror").addClass("hide")})}});