Ember.TEMPLATES["expertise"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  data.buffer.push("\r\n            <div class=\"input-group\"><input class=\"form-control\" id=\"tokenfield-typeahead\" type=\"text\" placeholder=\"Enter your expertise\"><span class=\"input-group-addon\"><img src='img/tickwhite.png'/></span></div>\r\n        ");
  }

function program3(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\r\n            <button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "submit", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" data-loading-text=\"Updating...\" class='btn btnsmall pull-right submit'>Finish</button>\r\n        ");
  return buffer;
  }

  data.buffer.push("\r\n");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "App.LightbulbhelperView", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\r\n\r\n<div class=\"holder\">\r\n    <div class=\"mast\">\r\n        <h4>Expertise</h4>\r\n    </div>\r\n    <form class=\"form expertise\">\r\n        ");
  stack1 = helpers.view.call(depth0, "App.ExpertiseView", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n        ");
  stack1 = helpers.view.call(depth0, "App.SubmitButtonView", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n    </form>\r\n</div>\r\n");
  return buffer;
  
});

Ember.TEMPLATES["login"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("\r\n    <div class=\"alert alert-danger hide fade in\" id = \"loginerror\">\r\n        <button type=\"button\" class=\"close\" aria-hidden=\"true\">&times;</button>\r\n        <strong>Whoa!</strong> Sorry buddy we don't have that user name or password. Try again!\r\n    </div>\r\n    ");
  }

function program3(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\r\n            <button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "login", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" class='btn btnsmall pull-right submit' data-loading-text=\"Logging In...\">Enter</button>\r\n        ");
  return buffer;
  }

  data.buffer.push("<div class=\"holder\">\r\n    <div class=\"mast login-mast\">\r\n    <img src='img/logogreensmal_.png'/>\r\n    <h4>LOGIN</h4>\r\n</div>\r\n    \r\n    ");
  stack1 = helpers.view.call(depth0, "App.AlertView", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n\r\n    <form class=\"form\">\r\n        ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'class': ("form-control"),
    'placeholder': ("Email"),
    'valueBinding': ("email")
  },hashTypes:{'class': "STRING",'placeholder': "STRING",'valueBinding': "STRING"},hashContexts:{'class': depth0,'placeholder': depth0,'valueBinding': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\r\n        ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'class': ("form-control"),
    'placeholder': ("Password"),
    'type': ("password"),
    'valueBinding': ("password")
  },hashTypes:{'class': "STRING",'placeholder': "STRING",'type': "STRING",'valueBinding': "STRING"},hashContexts:{'class': depth0,'placeholder': depth0,'type': depth0,'valueBinding': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\r\n        \r\n        ");
  stack1 = helpers.view.call(depth0, "App.SubmitButtonView", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n    </form>\r\n\r\n</div>\r\n\r\n\r\n");
  return buffer;
  
});

Ember.TEMPLATES["answer"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("            <div class=\"question-help\">\r\n                <span class=\"arrow\"></span>\r\n                <div class=\"textwrap\">\r\n                    ");
  data.buffer.push(escapeExpression((helper = helpers.textarea || (depth0 && depth0.textarea),options={hash:{
    'valueBinding': ("answerText")
  },hashTypes:{'valueBinding': "STRING"},hashContexts:{'valueBinding': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "textarea", options))));
  data.buffer.push("\r\n                </div>\r\n                <div class=\"btnwrap\">\r\n                    <button><i class=\"fa fa-paperclip\"> </i> Attach Image</button>\r\n                    <button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "answer", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("><i class=\"fa fa-paperclip\"> </i> Send</button>\r\n                </div>\r\n            </div>");
  return buffer;
  
});

Ember.TEMPLATES["answeraquestion"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n                \r\n                    ");
  stack1 = helpers.view.call(depth0, "App.QuestionView", {hash:{
    'contentBinding': ("this")
  },hashTypes:{'contentBinding': "STRING"},hashContexts:{'contentBinding': depth0},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                    \r\n                    ");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n                         <p class = \"questionParagraph\"> ");
  stack1 = helpers._triageMustache.call(depth0, "question.qbody", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" </p>\r\n                    ");
  return buffer;
  }

function program4(depth0,data) {
  
  
  data.buffer.push("\r\n                         <span>There are no questions to answer</span>\r\n            ");
  }

  data.buffer.push("<div class=\"actions\">\r\n        </div>\r\n\r\n        <div class=\"question-stack\">\r\n            ");
  stack1 = helpers.each.call(depth0, "question", "in", "controller", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(4, program4, data),fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n            \r\n            ");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n\r\n        </div>\r\n");
  return buffer;
  
});

Ember.TEMPLATES["ask"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\r\n                    ");
  data.buffer.push(escapeExpression((helper = helpers.textarea || (depth0 && depth0.textarea),options={hash:{
    'class': ("form-control"),
    'id': ("questions"),
    'rows': ("3"),
    'placeholder': ("Enter your question here...")
  },hashTypes:{'class': "STRING",'id': "STRING",'rows': "STRING",'placeholder': "STRING"},hashContexts:{'class': depth0,'id': depth0,'rows': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "textarea", options))));
  data.buffer.push("\r\n                ");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\r\n                    ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'class': ("form-control"),
    'id': ("tagquestion"),
    'type': ("text"),
    'placeholder': ("Enter expertise required to answer question here (e.g Social media marketing, Javascript)..."),
    'valueBinding': ("expertise")
  },hashTypes:{'class': "STRING",'id': "STRING",'type': "STRING",'placeholder': "STRING",'valueBinding': "STRING"},hashContexts:{'class': depth0,'id': depth0,'type': depth0,'placeholder': depth0,'valueBinding': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\r\n                ");
  return buffer;
  }

  data.buffer.push("<div class=\"askquestion contenthide\">\r\n            \r\n                ");
  stack1 = helpers.view.call(depth0, "App.QuestionareaView", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                <div class = \"space\"></div>\r\n                ");
  stack1 = helpers.view.call(depth0, "App.TagquestionView", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                <div class = \"space\"></div>\r\n            <form class=\"form text-center\">\r\n                <button data-loading-text=\"SUBMITTING...\" class='btn' ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "askquestion", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" >SUBMIT QUESTION</button>\r\n            </form>\r\n</div> \r\n\r\n\r\n");
  return buffer;
  
});

Ember.TEMPLATES["askaquestion"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression;


  data.buffer.push(escapeExpression(helpers.view.call(depth0, "App.QuestionsnavView", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\r\n\r\n<div class = \"questionsOutlet\">\r\n    ");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n</div>\r\n\r\n\r\n");
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


  data.buffer.push("        <div class=\"actions\">\r\n            <span ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "ask", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("askSelected")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">Ask Question</span>\r\n            <span ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "solved", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("solvedSelected")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">Your Questions ");
  stack1 = helpers._triageMustache.call(depth0, "solved", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\r\n        </div>");
  return buffer;
  
});

Ember.TEMPLATES["solvedindex"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n                ");
  stack1 = helpers.view.call(depth0, "App.QuestionView", {hash:{
    'contentBinding': ("this")
  },hashTypes:{'contentBinding': "STRING"},hashContexts:{'contentBinding': depth0},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n            ");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n                   <p class = \"questionParagraph\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "toSolvedAnswer", "solvedquestion", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(">  ");
  stack1 = helpers._triageMustache.call(depth0, "solvedquestion.qbody", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" </p>\r\n                ");
  return buffer;
  }

  data.buffer.push("        <div class=\"question-stack\">\r\n            ");
  stack1 = helpers.each.call(depth0, "solvedquestion", "in", "controller", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n        </div>\r\n");
  return buffer;
  
});

Ember.TEMPLATES["solvedsolvedanswer"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n        <p class=\"solvedAnswersParagraph\">");
  stack1 = helpers._triageMustache.call(depth0, "solvedquestion.qbody", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("<p>\r\n        ");
  stack1 = helpers.each.call(depth0, "answer", "in", "answers", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n    ");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n            <p class=\"solvedAnswersParagraph\">");
  stack1 = helpers._triageMustache.call(depth0, "answer.abody", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("<p>\r\n\r\n            ");
  return buffer;
  }

function program4(depth0,data) {
  
  
  data.buffer.push("\r\n            <p class=\"solvedAnswersParagraph\">nothing<p>\r\n        ");
  }

  data.buffer.push("<div class = 'question-stack'>\r\n    ");
  stack1 = helpers.view.call(depth0, "App.YourAnswersView", {hash:{
    'contentBinding': ("this")
  },hashTypes:{'contentBinding': "STRING"},hashContexts:{'contentBinding': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n</div>\r\n\r\n           ");
  return buffer;
  
});

Ember.TEMPLATES["questionspage"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression;


  data.buffer.push("<body>\r\n<div class='sidebar'>\r\n    <h4>John Smith</h4>\r\n    <ul class=\"nav nav-stacked\">\r\n        <li><a href = '#/questionspage/askaquestion/ask' ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("ask")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "toQuestions", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("> Ask Question </a><span></span></li>\r\n        <li> <a href = '#/questionspage/answeraquestion' ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("answer")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "toAnswers", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Answer A Question</a><span></span></li>\r\n    </ul>\r\n</div>\r\n<div class='content-pane'>\r\n");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "App.LightbulbhelperView", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("    \r\n    <div class='content'>\r\n            \r\n        \r\n        \r\n        ");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n        \r\n    </div>\r\n</div>\r\n\r\n</body>\r\n");
  return buffer;
  
});

Ember.TEMPLATES["lightbulbhelper"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("\r\n<div class=\"lightbulb-help\">\r\n    <a >\r\n        <img src='img/lightbulb.png'/>\r\n    </a>\r\n    <div class=\"helptext\">\r\n        - Enter your expertise into the box below<br>\r\n        - The input should autofill as you start typing.<br>\r\n        - If there is no preset expertise, please enter it in the alternative box.<br>\r\n        - A minimum of 5 is needed.<br>\r\n    </div>\r\n</div>");
  
});