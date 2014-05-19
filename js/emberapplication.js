function initSocket(a,b){emberStore=a,connectSocket(function(a){a&&b(a),b(null)})}function connectSocket(a){socket=io.connect("https://babblefishes.cloudapp.net:3000",{query:"token="+localStorage.token}),socket.once("connect",function(b){a(null,b)}),socket.once("error",function(b){a(b,null)})}function getSocket(){return socket}function loadData(a,b){socket.emit("loaddata"),loadYourQuestions(function(){loadQuestionsOthersAsk(function(){handleUpdates(),b()})})}function loadYourQuestions(a){console.info("loading your questions"),socket.once("questions-you-ask",function(b){for(var c=b.question,d=0;d<c.length;d++){for(var e=c[d],f=[],g=0;g<c[d].answers.length;g++){var h=c[d].answers[g];null!=h[0]&&null!=h[1]&&(f.push(h[1]),emberStore.push("answer",{id:h[1],abody:h[0],read:h[2]}))}emberStore.push("questionsyouask",{id:e["q.qid"],qbody:e["q.qbody"],answers:f})}a()})}function loadQuestionsOthersAsk(a){socket.once("questions-others-ask",function(b){for(var c=b.question,d=0;d<c.length;d++){var e=c[d];console.log(e.seen),emberStore.push("questionsothersask",{id:e["q.qid"],qbody:e["q.qbody"],seen:e.seen})}a()})}function handleUpdates(){socket.on("newquestion",function(a){isActive||(document.title="!* New Question"),emberStore.push("questionsothersask",{id:a.qid,qbody:a.qbody,seen:!1});var b=window.webkitNotifications.checkPermission();if(0==b){var c=window.webkitNotifications.createNotification("img/logogreensmal_.png","New Question Asked",a.qbody);c.onclick=function(){c.close()},c.show(),setTimeout(function(){c.cancel()},5e3)}}),socket.on("newanswer",function(a){isActive||(document.title="!* New Answer"),emberStore.push("answer",{id:a.aid,abody:a.abody,read:!1}),emberStore.find("questionsyouask",a.qid).then(function(b){emberStore.find("answer",a.aid).then(function(a){b.get("answers").then(function(b){b.pushObject(a)}),emberStore.find("answer").then(function(a){var b=0;a.forEach(function(a){0==a.get("read")&&b++});var c=window.App.__container__.lookup("controller:askaquestioncontent");b>0?(c.controllerFor("questionshomepage").set("newAnswers","("+b+")"),c.controllerFor("askaquestioncontent").set("solved","("+b+")")):(c.controllerFor("questionshomepage").set("newAnswers",""),c.controllerFor("askaquestioncontent").set("solved",""))})})});var b=window.webkitNotifications.checkPermission();if(0==b){var c=window.webkitNotifications.createNotification("img/logogreensmal_.png","New Answer",a.abody);c.onclick=function(){c.close()},c.show(),setTimeout(function(){c.cancel()},5e3)}})}function getSkills(a,b){socket.emit("autoskill",{skill:a}),socket.once("autoskill",function(a){var c=a.message.suggest[0];skills=[];for(var d=0;d<c.options.length;d++)skills.push({value:c.options[d].text});b()})}function autoSkills(){return skills}function getQuestions(a,b){socket.emit("autoquestion",{question:a}),socket.once("autoquestion",function(a){var c=a.message.hits.hits;questions=[];for(var d=0;d<c.length;d++)questions.push({value:c[d]._source.qBody});b()})}function autoQuestions(){return questions}function addSkills(a,b){socket.emit("addskill",{skills:a}),socket.once("addedskills",function(){b()})}function askQuestion(a,b,c){socket.emit("askquestion",{question:a,skills:b}),socket.once("askedquestion",function(a){emberStore.push("questionsyouask",{id:a.qid,qbody:a.qbody}),c()})}function answerQuestion(a,b,c){console.log("answer"),socket.emit("answerquestion",{answer:a,qid:b}),c.unloadRecord()}function readAnswers(a){a.get("answers").then(function(a){var b=[];a.forEach(function(a){var c=a.get("read");0==c&&b.push(a.get("id"))}),socket.emit("readanswers",{aids:b})})}function readQuestions(a){var b=[];a.forEach(function(a){var c=a.get("seen");0==c&&b.push(a.get("id"))}),socket.emit("readquestions",{questions:b})}ChromepermissionsRoute=Ember.Route.extend({}),ChromepermissionsController=Ember.Controller.extend({actions:{requestPermission:function(){},skip:function(){}}}),$("#requestpermission").click(function(){var a=window.webkitNotifications.checkPermission();console.log("permission "+a),0!=a&&(console.log(a),window.webkitNotifications.requestPermission())}),App.ExpertiseRoute=Ember.Route.extend({setupController:function(){Ember.isEmpty(getSocket())&&initSocket(this.store,function(){console.info("Successfully Reconnected")}),$(".application-content").fadeTo(500,1)}}),App.ExpertiseController=Ember.ObjectController.extend({username:localStorage.username,userPressedEnter:!1,actions:{submit:function(){var a=this,b=$("#tokenfield-typeahead").tokenfield("getTokens");if(console.log(b.length),b.length>=5){var c=$(".submit");c.button("loading"),addSkills($("#tokenfield-typeahead").tokenfield("getTokensList"),function(){$(".application-content").fadeTo(500,0,function(){a.replaceRoute("askaquestion")})})}else $("#expertiseerror").removeClass("hide")}}}),App.ExpertiseView=Ember.View.extend({didInsertElement:function(){var a=this.get("controller");$("#tokenfield-typeahead").on("tokenfield:createtoken",function(){$("#tokenfield-typeahead").tokenfield("getTokens").length>=5&&$("#tick").attr("src","img/tickwhite.png"),a.set("userPressedEnter",!0)}).on("tokenfield:removetoken",function(){$("#tokenfield-typeahead").tokenfield("getTokens").length<=5&&$("#tick").attr("src","img/tick.png")}).tokenfield({beautify:!1,typeahead:{minLength:1,source:function(a,b){getSkills($("#tokenfield-typeahead").data("bs.tokenfield").$input.val(),function(){b(autoSkills())})}}})}}),App.TutorialComponentComponent=Ember.Component.extend({firstname:localStorage.firstname,lastname:localStorage.lastname,userPressedEnter:"",firstExpertiseEnteredChanged:function(){this.toggleProperty("fourthBody"),this.toggleProperty("fifthBody")}.observes("userPressedEnter"),actions:{tutorialFirst:function(){this.toggleProperty("firstBody"),this.toggleProperty("secondBody")},tutorialSecond:function(){this.toggleProperty("secondBody"),this.toggleProperty("thirdBody")},tutorialThird:function(){var a=this;$("#expertise").fadeTo(300,1,function(){setTimeout(function(){a.toggleProperty("thirdBody"),a.toggleProperty("fourthBody")},600)})},tutorialFifth:function(){this.toggleProperty("fifthBody"),this.toggleProperty("sixthBody")},tutorialSixth:function(){this.toggleProperty("sixthBody"),this.toggleProperty("seventhBody")}},didInsertElement:function(){this.toggleProperty("firstBody"),console.log(this.userPressedEnter),$(".tutorialBox").fadeTo(700,1);this.get("data")}}),App.LoginRoute=Ember.Route.extend({model:function(){return{}}}),App.LoginController=Ember.ObjectController.extend({actions:{login:function(){var a=this,b=$(".submit");b.button("loading"),$.ajax({url:"https://babblefishes.cloudapp.net:3000/login",type:"post",data:{email:this.get("email"),password:this.get("password")},statusCode:{200:function(b){localStorage.token=b.token;var c=b.firsttime;localStorage.firstname=b.firstname,localStorage.lastname=b.lastname,initSocket(a.store,function(){console.info("Sockets connected"),$(".application-content").fadeTo(500,0,function(){a.replaceRoute(c?"expertise":"askaquestion")})})},400:function(){console.log("Invalid Username or Password");var a=$(".submit");a.button("reset"),$("#loginerror").removeClass("hide")}}})}}}),App.AnsweraquestionIndexRoute=Ember.Route.extend({renderTemplate:function(){this.render("answeraquestionindex")},model:function(){var a=this.store;return a.find("questionsothersask")},setupController:function(a,b){this._super(a,b),$(".content").fadeTo(300,1),this.controllerFor("questionshomepage").set("answer","active-link"),this.controllerFor("questionshomepage").set("ask",!1),readQuestions(b)},deactivate:function(){var a=this;this.store.find("questionsothersask").then(function(a){a.forEach(function(a){a.set("seen",!0),a.save()})}),this.store.find("questionsothersask").then(function(b){var c=0;b.forEach(function(a){0==a.get("seen")&&c++}),c>0?a.controllerFor("questionshomepage").set("newQuestions","("+c+")"):a.controllerFor("questionshomepage").set("newQuestions","")})}}),App.AnsweraquestionIndexController=Ember.ArrayController.extend({actions:{answerquestion:function(a){this.transitionToRoute("answeraquestion.inputanswer",a)}}}),App.AnsweraquestionInputanswerRoute=Ember.Route.extend({renderTemplate:function(){this.render("inputanswer")},model:function(a){return console.log(a),this.store.find("questionsothersask",a.question_id)},setupController:function(a,b){a.set("model",b),this.controllerFor("questionshomepage").set("answer","active-link"),this.controllerFor("questionshomepage").set("ask",!1)}}),App.AnsweraquestionInputanswerController=Ember.ObjectController.extend({actions:{answer:function(){answerQuestion($("#answerText").val(),this.get("id"),this.get("model")),this.replaceRoute("answersuccess")}}}),App.AnswerSuccessRoute=Em.Route.extend({setupController:function(){this.controllerFor("questionshomepage").set("answer","active-link"),this.controllerFor("questionshomepage").set("ask",!1)}}),App.AnswerQuestionView=Ember.View.extend({didInsertElement:function(){$(".solvedAnswersParagraph").fadeTo(500,1)}}),App.Questionsothersask=DS.Model.extend({qbody:DS.attr("string"),seen:DS.attr("boolean")}),App.Questionsothersask.FIXTURES=[],App.AskaquestionRoute=Ember.Route.extend({setupController:function(){$(".application-content").fadeTo(300,1),$(".content").fadeTo(300,1),$(".questionsOutlet").fadeTo(200,1),this.controllerFor("askaquestioncontent").set("askSelected","selected"),this.controllerFor("askaquestioncontent").set("solvedSelected",!1),this.controllerFor("questionshomepage").set("ask","active-link")}}),App.AskaquestionController=Ember.Controller.extend({actions:{askquestion:function(){var a=this;$(".btn").button("loading"),askQuestion($("#questions").val(),$("#tagquestion").tokenfield("getTokensList"),function(){$(".questionsOutlet").fadeTo(200,0,function(){a.replaceRoute("asksuccess")})})}}}),App.AsksuccessRoute=Ember.Route.extend({setupController:function(){$(".questionsOutlet").fadeTo(200,1)}}),App.AsksuccessController=Ember.Controller.extend({actions:{askAnotherQuestion:function(){var a=this;$(".questionsOutlet").fadeTo(200,0,function(){a.replaceRoute("askaquestion")})}}}),App.QuestionareaView=Ember.View.extend({didInsertElement:function(){$("#questions").typeahead({hint:!0,highlight:!0,minLength:1},{displayKey:"value",source:function(a,b){console.log($("#questions").val()),getQuestions($("#questions").val(),function(){b(autoQuestions())})}})}}),App.TagquestionView=Ember.View.extend({didInsertElement:function(){$("#tagquestion").on("tokenfield:preparetoken",function(a){for(var b=autoSkills(),c=!1,d=0;d<b.length;d++){var e=b[d];console.log(e.value),e.value.toUpperCase()===a.token.value.toUpperCase()&&(c=!0)}c||(a.token=!1)}).tokenfield({beautify:!1,typeahead:{minLength:1,source:function(a,b){getSkills($("#tagquestion").data("bs.tokenfield").$input.val(),function(){b(autoSkills())})}}})}}),App.DropzoneView=Em.View.extend({}),App.AskaquestioncontentRoute=Ember.Route.extend({model:function(){var a=this.store;return a.find("questionsyouask")},setupController:function(a,b){this._super(a,b),$(".questions-content-area").fadeTo(200,1),this.controllerFor("askaquestioncontent").set("ask","active-link"),this.controllerFor("askaquestioncontent").set("answer",!1)}}),App.AskaquestioncontentController=Ember.ArrayController.extend({askSelected:"selected",solvedSelected:!1,solved:"",newAnswers:function(){var a=this,b=0;this.store.find("answer").then(function(c){c.forEach(function(c){0==c.get("read")&&b++,b>0?(a.controllerFor("questionshomepage").set("newAnswers","("+b+")"),a.set("solved","("+b+")")):(a.controllerFor("questionshomepage").set("newAnswers",""),a.set("solved",""))})})}.observes("answer.@each"),actions:{logout:function(){localStorage.removeItem("token"),localStorage.removeItem("idUser");App.AskaquestionRoute;this.transitionTo("index")},ask:function(){var a=this;$(".questionsOutlet").fadeTo(200,0,function(){a.transitionToRoute("askaquestion")})},solved:function(){var a=this;$(".questionsOutlet").fadeTo(200,0,function(){a.transitionToRoute("yourquestions")})}}}),App.QuestionsnavView=Ember.View.extend({templateName:"questionsnav"}),App.YourquestionsIndexRoute=Ember.Route.extend({renderTemplate:function(){this.render("yourquestionsindex")},model:function(){var a=this.store;return a.find("questionsyouask")},setupController:function(a,b){this._super(a,b),$(".questionsOutlet").fadeTo(200,1),this.controllerFor("askaquestioncontent").set("askSelected",!1),this.controllerFor("askaquestioncontent").set("solvedSelected","selected"),this.controllerFor("questionshomepage").set("ask","active-link"),this.controllerFor("questionshomepage").set("answer",!1)}}),App.YourquestionsIndexController=Ember.ArrayController.extend({actions:{toSolvedAnswer:function(a){var b=this;b.transitionToRoute("yourquestions.answersprovided",a)}}}),App.YourquestionsAnswersprovidedRoute=Ember.Route.extend({renderTemplate:function(){this.render("yourquestionsanswersprovided")},model:function(a){return this.store.find("questionsyouask",a.question_id)},setupController:function(a,b){a.set("model",b),this.controllerFor("askaquestioncontent").set("askSelected",!1),this.controllerFor("askaquestioncontent").set("solvedSelected","selected"),this.controllerFor("questionshomepage").set("ask","active-link"),this.controllerFor("questionshomepage").set("answer",!1),readAnswers(b)},deactivate:function(){var a=this;this.store.find("questionsyouask",this.currentModel.get("id")).then(function(a){a.get("answers").then(function(a){a.forEach(function(a){console.log(a.get("id")),a.set("read",!0),a.save()})})}),this.store.find("answer").then(function(b){var c=0;b.forEach(function(a){0==a.get("read")&&c++}),c>0?(a.controllerFor("questionshomepage").set("newAnswers","("+c+")"),a.controllerFor("askaquestioncontent").set("solved","("+c+")")):(a.controllerFor("questionshomepage").set("newAnswers",""),a.controllerFor("askaquestioncontent").set("solved",""))})}}),App.YourquestionsAnswersprovidedController=Ember.ObjectController.extend({}),App.QuestionView=Ember.View.extend({didInsertElement:function(){$(".questionParagraph").fadeTo(500,1)}}),App.YourAnswersView=Ember.View.extend({didInsertElement:function(){$(".solvedAnswersParagraph").fadeTo(500,1)}}),App.Answer=DS.Model.extend({abody:DS.attr("string"),read:DS.attr("boolean")}),App.Questionsyouask=DS.Model.extend({qbody:DS.attr("string"),answers:DS.hasMany("answer",{async:!0}),newAnswers:function(){var a=0;return this.get("answers").forEach(function(b){0==b.get("read")&&a++}),a}.property("answers.@each.read")}),App.Questionsyouask.FIXTURES=[],App.Answer.FIXTURES=[],App.QuestionshomepageRoute=Ember.Route.extend({beforeModel:function(){console.log(isActive);var a=this,b=this.store;return new Ember.RSVP.Promise(function(c){Ember.isEmpty(getSocket())?initSocket(b,function(d){d?a.replaceWith("login"):loadData(b,function(){c(),console.log("load")})}):loadData(b,function(){console.log("load"),c(),$(".application-content").fadeTo(500,1)})})}}),App.QuestionshomepageController=Ember.Controller.extend({ask:!1,answer:!1,firstname:localStorage.firstname,lastname:localStorage.lastname,newAnswers:"",newQuestions:"",newAnswersUpdate:function(){var a=this,b=0;this.store.find("answer").then(function(c){c.forEach(function(c){0==c.get("read")&&b++,b>0?a.set("newAnswers","("+b+")"):a.set("newAnswers","")})})}.observes("answer.@each"),newQuestionsUpdate:function(){var a=this,b=0;this.store.find("questionsothersask").then(function(c){c.forEach(function(c){0==c.get("seen")&&b++,b>0?a.set("newQuestions","("+b+")"):a.set("newQuestions","")})})}.observes("newAnswers"),actions:{toAnswers:function(){var a=this;0==this.get("answer")&&$(".content").fadeTo(200,0,function(){a.transitionToRoute("answeraquestion")})},toQuestions:function(){if(0==this.get("ask")){this.set("answer",!1),this.set("ask","active-link");var a=this;$(".content").fadeTo(200,0,function(){a.transitionToRoute("askaquestion")})}}}}),App=Ember.Application.create();var isActive=!0;App.ApplicationAdapter=DS.FixtureAdapter,App.Router.map(function(){this.resource("login"),this.resource("expertise"),this.resource("chromepermissions"),this.resource("questionshomepage",function(){this.resource("askaquestioncontent",function(){this.resource("askaquestion"),this.resource("asksuccess"),this.resource("yourquestions",function(){this.route("answersprovided",{path:"/:question_id"})})}),this.resource("answeraquestion",function(){this.route("inputanswer",{path:"/:question_id"})}),this.resource("answersuccess")})}),App.IndexRoute=Ember.Route.extend({redirect:function(){var a=this,b=this.store;Ember.isEmpty(localStorage.token)?a.transitionTo("login"):$.ajax({url:"https://babblefishes.cloudapp.net:3000/refreshtoken",type:"post",data:{token:localStorage.token},statusCode:{200:function(c){localStorage.token=c.token,localStorage.username=c.username,initSocket(b,function(){a.transitionTo("askaquestion")})},401:function(){console.log("ERROR"),a.transitionTo("login")}}})}}),$(document).ready(function(){isActive=!0,$(window).on("beforeunload",function(){}),$(window).on("blur",function(){isActive=!1}),$(window).on("focus",function(){isActive=!0,document.title="Cogo"})}),App.LoadingRoute=Em.Route.extend({});var socket,emberStore,skills=[],questions=[];App.LightbulbhelperView=Ember.View.extend({templateName:"lightbulbhelper",click:function(){$(".lightbulb-help > div").fadeToggle("slow")}}),App.AlertView=Ember.View.extend({didInsertElement:function(){$(".alert").find(".close").on("click",function(){$("#loginerror").addClass("hide"),$("#expertiseerror").addClass("hide")})}}),App.TutorialComponent=Ember.Component.extend({templateName:"tutorial"});