Ember.TEMPLATES["chromepermissions"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '';


  return buffer;
  
});

Ember.TEMPLATES["expertise"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  data.buffer.push("\n        <div class=\"alert alert-danger hide fade in\" id = \"expertiseerror\">\n            <button type=\"button\" class=\"close\" aria-hidden=\"true\">&times;</button>\n            <strong>Pssst. </strong> Try entering at least 5 skills. Awesome things will happen....\n        </div>\n    ");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("\n            <div class=\"input-group\"><input class=\"form-control\" id=\"tokenfield-typeahead\" type=\"text\" placeholder=\"Enter your expertise\"><span class=\"input-group-addon\"><img src='img/tickwhite.png'/ id=\"tick\"></span></div>\n        ");
  }

  data.buffer.push("\n");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "App.LightbulbhelperView", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n\n<div class=\"holder\">\n    <div class=\"mast\">\n        <h4>Expertise</h4>\n    </div>\n    \n    ");
  stack1 = helpers.view.call(depth0, "App.AlertView", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    \n    <form class=\"form expertise\">\n        ");
  stack1 = helpers.view.call(depth0, "App.ExpertiseView", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        \n        <button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "submit", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" data-loading-text=\"Updating...\" class='btn btnsmall pull-right submit'>Finish</button>\n        \n    </form>\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["login"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  
  data.buffer.push("\n    <div class=\"alert alert-danger hide fade in\" id = \"loginerror\">\n        <button type=\"button\" class=\"close\" aria-hidden=\"true\">&times;</button>\n        <strong>Whoa!</strong> Sorry buddy we don't have that user name or password. Try again!\n    </div>\n    ");
  }

  data.buffer.push("<div class=\"holder\">\n    <div class=\"mast login-mast\">\n    <img src='img/logogreensmal_.png'/>\n    <h4>LOGIN</h4>\n</div>\n    \n    ");
  stack1 = helpers.view.call(depth0, "App.AlertView", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n    <form class=\"form\">\n        ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'class': ("form-control"),
    'placeholder': ("Email"),
    'valueBinding': ("email")
  },hashTypes:{'class': "STRING",'placeholder': "STRING",'valueBinding': "STRING"},hashContexts:{'class': depth0,'placeholder': depth0,'valueBinding': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n        ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'class': ("form-control"),
    'placeholder': ("Password"),
    'type': ("password"),
    'valueBinding': ("password")
  },hashTypes:{'class': "STRING",'placeholder': "STRING",'type': "STRING",'valueBinding': "STRING"},hashContexts:{'class': depth0,'placeholder': depth0,'type': depth0,'valueBinding': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n        \n\n        <button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "login", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" class='btn btnsmall pull-right submit' data-loading-text=\"Logging In...\">Enter</button>\n       \n    </form>\n\n</div>\n\n\n");
  return buffer;
  
});

Ember.TEMPLATES["answerloaderror"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("ERROR!!!!");
  
});

Ember.TEMPLATES["answeraquestionindex"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                \n                    ");
  stack1 = helpers.view.call(depth0, "App.QuestionView", {hash:{
    'contentBinding': ("this")
  },hashTypes:{'contentBinding': "STRING"},hashContexts:{'contentBinding': depth0},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                    \n                    ");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                         <p class = \"questionParagraph\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "answerquestion", "questionsothersask", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push("> ");
  stack1 = helpers._triageMustache.call(depth0, "questionsothersask.qbody", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" </p>\n                    ");
  return buffer;
  }

function program4(depth0,data) {
  
  
  data.buffer.push("\n                         <span>There are no questions to answer</span>\n            ");
  }

  data.buffer.push("<div class=\"actions\">\n        </div>\n\n        <div class=\"question-stack\">\n            ");
  stack1 = helpers.each.call(depth0, "questionsothersask", "in", "controller", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(4, program4, data),fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  \n\n        </div>\n");
  return buffer;
  
});

Ember.TEMPLATES["answersuccess"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var stack1, helper, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("Answered. Answer another question???");
  }

  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "answeraquestion", options) : helperMissing.call(depth0, "link-to", "answeraquestion", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  
});

Ember.TEMPLATES["inputanswer"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n        <p class=\"solvedAnswersParagraph\">");
  stack1 = helpers._triageMustache.call(depth0, "qbody", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</p>\n    ");
  return buffer;
  }

  data.buffer.push("<div class=\"actions\">\n        </div>\n<div class = 'question-stack'>\n   \n    <h4>The Question </h4>\n    ");
  stack1 = helpers.view.call(depth0, "App.AnswerQuestionView", {hash:{
    'contentBinding': ("this")
  },hashTypes:{'contentBinding': "STRING"},hashContexts:{'contentBinding': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        \n\n    <div class = \"space\"></div>\n        <h4>Your Answer </h4>\n    ");
  data.buffer.push(escapeExpression((helper = helpers.textarea || (depth0 && depth0.textarea),options={hash:{
    'class': ("form-control"),
    'id': ("answerText"),
    'rows': ("3"),
    'placeholder': ("Enter your answer here...")
  },hashTypes:{'class': "STRING",'id': "STRING",'rows': "STRING",'placeholder': "STRING"},hashContexts:{'class': depth0,'id': depth0,'rows': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "textarea", options))));
  data.buffer.push("\n\n    <div class = \"space\"></div>\n\n    <form class=\"form text-center\">\n        <button data-loading-text=\"ANSWERING...\" class='btn' ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "answer", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" >ANSWER</button>\n    </form>\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["loading"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<body>\n<div class='sidebar'>\n    <h4></h4>\n\n</div>\n<div class='content-pane'>   \n    <div class='content'>\n            \n      LOADING!!!!!!!!!!!!!!!!!!!!!!!!!!!  \n\n    \n    </div>\n</div>\n\n</body>\n");
  
});

Ember.TEMPLATES["askaquestion"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n                    ");
  data.buffer.push(escapeExpression((helper = helpers.textarea || (depth0 && depth0.textarea),options={hash:{
    'class': ("form-control"),
    'id': ("questions"),
    'rows': ("3"),
    'placeholder': ("Enter your question here...")
  },hashTypes:{'class': "STRING",'id': "STRING",'rows': "STRING",'placeholder': "STRING"},hashContexts:{'class': depth0,'id': depth0,'rows': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "textarea", options))));
  data.buffer.push("\n                ");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n                    ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'class': ("form-control"),
    'id': ("tagquestion"),
    'type': ("text"),
    'placeholder': ("Enter expertise required to answer question here (e.g Social media marketing, Javascript)..."),
    'valueBinding': ("expertise")
  },hashTypes:{'class': "STRING",'id': "STRING",'type': "STRING",'placeholder': "STRING",'valueBinding': "STRING"},hashContexts:{'class': depth0,'id': depth0,'type': depth0,'placeholder': depth0,'valueBinding': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n                ");
  return buffer;
  }

  data.buffer.push("<div class=\"askquestion contenthide\">\n            \n                ");
  stack1 = helpers.view.call(depth0, "App.QuestionareaView", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                <div class = \"space\"></div>\n                ");
  stack1 = helpers.view.call(depth0, "App.TagquestionView", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                <div class = \"space\"></div>\n            <form class=\"form text-center\">\n                <button data-loading-text=\"SUBMITTING...\" class='btn' ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "askquestion", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" >SUBMIT QUESTION</button>\n            </form>\n</div> \n\n\n");
  return buffer;
  
});

Ember.TEMPLATES["askaquestioncontent"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression;


  data.buffer.push(escapeExpression(helpers.view.call(depth0, "App.QuestionsnavView", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n\n<div class = \"questionsOutlet\">\n    ");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</div>\n\n\n");
  return buffer;
  
});

Ember.TEMPLATES["asksuccess"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', escapeExpression=this.escapeExpression;


  data.buffer.push("<p> <a href='#' ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "askAnotherQuestion", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("> The question has been asked. Ask Another? </a> </p>");
  return buffer;
  
});

Ember.TEMPLATES["questionsnav"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression;


  data.buffer.push("        <div class=\"actions\">\n            <span ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "ask", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("askSelected")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">Ask Question</span>\n            <span ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "solved", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("solvedSelected")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">Your Questions ");
  stack1 = helpers._triageMustache.call(depth0, "solved", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\n        </div>");
  return buffer;
  
});

Ember.TEMPLATES["yourquestionsanswersprovided"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n        <p class=\"solvedAnswersParagraph\">");
  stack1 = helpers._triageMustache.call(depth0, "qbody", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</p>\n    ");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n            ");
  stack1 = helpers.view.call(depth0, "App.YourAnswersView", {hash:{
    'contentBinding': ("this")
  },hashTypes:{'contentBinding': "STRING"},hashContexts:{'contentBinding': depth0},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                ");
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                <p class=\"solvedAnswersParagraph\">");
  stack1 = helpers._triageMustache.call(depth0, "answer.abody", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</p>\n            ");
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n            ");
  stack1 = helpers.view.call(depth0, "App.YourAnswersView", {hash:{
    'contentBinding': ("this")
  },hashTypes:{'contentBinding': "STRING"},hashContexts:{'contentBinding': depth0},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        ");
  return buffer;
  }
function program7(depth0,data) {
  
  
  data.buffer.push("\n                <p class=\"solvedAnswersParagraph\">nothing</p>\n            ");
  }

  data.buffer.push("<div class = 'question-stack'>\n   \n    <h4>Your Question </h4>\n    ");
  stack1 = helpers.view.call(depth0, "App.YourAnswersView", {hash:{
    'contentBinding': ("this")
  },hashTypes:{'contentBinding': "STRING"},hashContexts:{'contentBinding': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        <h4>The Answers Provided </h4>\n        \n        ");
  stack1 = helpers.each.call(depth0, "answer", "in", "answers", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(6, program6, data),fn:self.program(3, program3, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</div>\n\n           ");
  return buffer;
  
});

Ember.TEMPLATES["yourquestionsindex"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                ");
  stack1 = helpers.view.call(depth0, "App.QuestionView", {hash:{
    'contentBinding': ("this")
  },hashTypes:{'contentBinding': "STRING"},hashContexts:{'contentBinding': depth0},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                ");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                   <p class = \"questionParagraph\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "toSolvedAnswer", "questionsyouask", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(">  ");
  stack1 = helpers._triageMustache.call(depth0, "questionsyouask.qbody", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" </p>\n                ");
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                ");
  stack1 = helpers.view.call(depth0, "App.QuestionView", {hash:{
    'contentBinding': ("this")
  },hashTypes:{'contentBinding': "STRING"},hashContexts:{'contentBinding': depth0},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            ");
  return buffer;
  }
function program5(depth0,data) {
  
  
  data.buffer.push("\n                    <p class = \"questionParagraph\">  You haven't asked any questions. You should.... </p>\n                ");
  }

  data.buffer.push("        <div class=\"question-stack\">\n            ");
  stack1 = helpers.each.call(depth0, "questionsyouask", "in", "controller", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(4, program4, data),fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </div>\n");
  return buffer;
  
});

Ember.TEMPLATES["questionshomepage"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression;


  data.buffer.push("<body>\n<div class='sidebar'>\n    <h4>");
  stack1 = helpers._triageMustache.call(depth0, "username", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h4>\n    <ul class=\"nav nav-stacked\">\n        <li><a href = '#/questionspage/askaquestion/ask' ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("ask")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "toQuestions", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("> Ask Question </a><span></span></li>\n        <li> <a href = '#/questionspage/answeraquestion' ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("answer")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "toAnswers", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Answer A Question</a><span></span></li>\n    </ul>\n</div>\n<div class='content-pane'>\n");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "App.LightbulbhelperView", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("    \n    <div class='content'>\n            \n        \n        \n        ");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        \n    </div>\n</div>\n\n</body>\n");
  return buffer;
  
});

Ember.TEMPLATES["lightbulbhelper"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("\n<div class=\"lightbulb-help\">\n    <a >\n        <img src='img/lightbulb.png'/>\n    </a>\n    <div class=\"helptext\">\n        - Enter your expertise into the box below<br>\n        - The input should autofill as you start typing.<br>\n        - If there is no preset expertise, please enter it in the alternative box.<br>\n        - A minimum of 5 is needed.<br>\n    </div>\n</div>");
  
});