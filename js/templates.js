Ember.TEMPLATES["desktoppermissions"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', escapeExpression=this.escapeExpression;


  data.buffer.push("\r\n<p class = 'permissionsPrompt'>One last thing. The experience is so much better with desktop notifications (trust us)! Click request to allow notifications or continue to the next page</p>\r\n\r\n<div class = 'permissionBtnDiv'>\r\n    <button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "request", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" class = 'btn permissionBtn'>PERMISSION</button>\r\n    <button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "skip", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" class = 'btn skipBtn'>SKIP</button>\r\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["expertise"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  data.buffer.push("\r\n            <div class=\"alert alert-danger hide fade in\" id = \"expertiseerror\">\r\n                <button type=\"button\" class=\"close\" aria-hidden=\"true\">&times;</button>\r\n                <strong>Pssst. </strong> Try entering at least 5 skills. Awesome things will happen....\r\n            </div>\r\n        ");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("\r\n                <div class=\"input-group\"><input class=\"form-control\" id=\"tokenfield-typeahead\" type=\"text\" placeholder=\"Enter your expertise\"><span class=\"input-group-addon\"><img src='img/tick.png'/ id=\"tick\"></span></div>\r\n            ");
  }

  data.buffer.push(escapeExpression((helper = helpers['tutorial-component'] || (depth0 && depth0['tutorial-component']),options={hash:{
    'userPressedEnter': ("userPressedEnter")
  },hashTypes:{'userPressedEnter': "ID"},hashContexts:{'userPressedEnter': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "tutorial-component", options))));
  data.buffer.push("\r\n<div class=\"holder\">\r\n    \r\n    <div id = \"expertise\">\r\n        <div class=\"mast\">\r\n            <h4>Expertise</h4>\r\n        </div>\r\n\r\n\r\n        ");
  stack1 = helpers.view.call(depth0, "App.AlertView", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n    \r\n        <form class=\"form expertise\">\r\n            ");
  stack1 = helpers.view.call(depth0, "App.ExpertiseView", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n        \r\n            <button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "submit", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" data-loading-text=\"Updating...\" class='btn btnsmall pull-right submit'>Finish</button>\r\n        \r\n        </form>\r\n    </div>\r\n</div>\r\n");
  return buffer;
  
});

Ember.TEMPLATES["login"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  
  data.buffer.push("\r\n    <div class=\"alert alert-danger hide fade in\" id = \"loginerror\">\r\n        <button type=\"button\" class=\"close\" aria-hidden=\"true\">&times;</button>\r\n        <strong>Whoa!</strong> Sorry buddy we don't have that user name or password. Try again!\r\n    </div>\r\n    ");
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
  data.buffer.push("\r\n        \r\n\r\n        <button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "login", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" class='btn btnsmall pull-right submit' data-loading-text=\"Logging In...\">Enter</button>\r\n       \r\n    </form>\r\n\r\n</div>\r\n\r\n\r\n");
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
  data.buffer.push("\r\n                ");
  stack1 = helpers['if'].call(depth0, "questionsothersask.seen", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" \r\n\r\n            ");
  return buffer;
  }
function program2(depth0,data) {
  
  
  data.buffer.push("\r\n\r\n                ");
  }

function program4(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n                    ");
  stack1 = helpers.view.call(depth0, "App.QuestionView", {hash:{
    'contentBinding': ("this")
  },hashTypes:{'contentBinding': "STRING"},hashContexts:{'contentBinding': depth0},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                ");
  return buffer;
  }
function program5(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n                        <p class = \"questionParagraph\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "answerquestion", "questionsothersask", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push("> ");
  stack1 = helpers._triageMustache.call(depth0, "questionsothersask.qbody", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" </p>\r\n                    ");
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n                ");
  stack1 = helpers['if'].call(depth0, "questionsothersask.seen", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(8, program8, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" \r\n            ");
  return buffer;
  }
function program8(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n                    ");
  stack1 = helpers.view.call(depth0, "App.QuestionView", {hash:{
    'contentBinding': ("this")
  },hashTypes:{'contentBinding': "STRING"},hashContexts:{'contentBinding': depth0},inverse:self.noop,fn:self.program(9, program9, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                ");
  return buffer;
  }
function program9(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n                         <p class = \"questionParagraph\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "answerquestion", "questionsothersask", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push("> ");
  stack1 = helpers._triageMustache.call(depth0, "questionsothersask.qbody", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" </p>\r\n                    ");
  return buffer;
  }

function program11(depth0,data) {
  
  
  data.buffer.push("\r\n                ");
  }

function program13(depth0,data) {
  
  
  data.buffer.push("\r\n                <span>There are no questions to answer</span>\r\n            ");
  }

  data.buffer.push("<div class=\"actions\">\r\n        </div>\r\n\r\n        <div class=\"question-stack\">\r\n            <h5>New Questions</h5>\r\n            \r\n            ");
  stack1 = helpers.each.call(depth0, "questionsothersask", "in", "controller", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n            \r\n            \r\n                <h5>Old Questions</h5>\r\n            \r\n            \r\n            ");
  stack1 = helpers.each.call(depth0, "questionsothersask", "in", "controller", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n  \r\n            ");
  stack1 = helpers.each.call(depth0, "questionsothersask", "in", "controller", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(13, program13, data),fn:self.program(11, program11, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n\r\n            \r\n\r\n        </div>\r\n");
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
  data.buffer.push("\r\n        <p class=\"solvedAnswersParagraph\">");
  stack1 = helpers._triageMustache.call(depth0, "qbody", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</p>\r\n    ");
  return buffer;
  }

  data.buffer.push("<div class=\"actions\">\r\n        </div>\r\n<div class = 'question-stack'>\r\n   \r\n    <h4>The Question </h4>\r\n    ");
  stack1 = helpers.view.call(depth0, "App.AnswerQuestionView", {hash:{
    'contentBinding': ("this")
  },hashTypes:{'contentBinding': "STRING"},hashContexts:{'contentBinding': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n        \r\n\r\n    <div class = \"space\"></div>\r\n        <h4>Your Answer </h4>\r\n    ");
  data.buffer.push(escapeExpression((helper = helpers.textarea || (depth0 && depth0.textarea),options={hash:{
    'class': ("form-control"),
    'id': ("answerText"),
    'rows': ("3"),
    'placeholder': ("Enter your answer here...")
  },hashTypes:{'class': "STRING",'id': "STRING",'rows': "STRING",'placeholder': "STRING"},hashContexts:{'class': depth0,'id': depth0,'rows': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "textarea", options))));
  data.buffer.push("\r\n\r\n    <div class = \"space\"></div>\r\n\r\n    <form class=\"form text-center\">\r\n        <button data-loading-text=\"Answering...\" class='btn' ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "answer", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" >Answer</button>\r\n    </form>\r\n</div>\r\n");
  return buffer;
  
});

Ember.TEMPLATES["loading"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<body>\r\n<div class='sidebar'>\r\n    <h4></h4>\r\n\r\n</div>\r\n<div class='content-pane'>   \r\n    <div class='loading-content'>\r\n      \r\n      <div class=\"loading\">\r\n        <img src=\"img/loading-gif_360.png\"></img>\r\n        <h3 class=\"loading-text\">Loading...</h3>\r\n      </div>\r\n    \r\n    </div>\r\n</div>\r\n\r\n</body>\r\n");
  
});

Ember.TEMPLATES["askaquestion"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  data.buffer.push("\r\n                        <div class=\"alert alert-danger hide fade in\" id = \"inputerror\">\r\n                            <button type=\"button\" class=\"close\" aria-hidden=\"true\">&times;</button>\r\n                            <strong>Whoa!</strong> Please make sure all input fields are filled out before asking a question\r\n                        </div>\r\n                ");
  }

function program3(depth0,data) {
  
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

function program5(depth0,data) {
  
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

function program7(depth0,data) {
  
  
  data.buffer.push("\r\n                <form  class=\"dropzone\" id=\"fileupload\" enctype=\"multipart/form-data\"></form>\r\n            ");
  }

  data.buffer.push("<div class=\"askquestion contenthide\">\r\n       \r\n               ");
  stack1 = helpers.view.call(depth0, "App.AlertView", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                \r\n                ");
  stack1 = helpers.view.call(depth0, "App.QuestionareaView", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                <div class = \"space\"></div>\r\n                ");
  stack1 = helpers.view.call(depth0, "App.TagquestionView", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                <div class = \"space\"></div>\r\n            <form class=\"form text-center\">\r\n                <button data-loading-text=\"Asking...\" class='btn' ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "askquestion", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" >Ask Question</button>\r\n            </form>\r\n            \r\n            <!--\r\n            ");
  stack1 = helpers.view.call(depth0, "App.DropzoneView", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("-->\r\n</div> \r\n\r\n\r\n");
  return buffer;
  
});

Ember.TEMPLATES["askaquestioncontent"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
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

Ember.TEMPLATES["yourquestionsanswersprovided"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n        <p class=\"solvedAnswersParagraph\">");
  stack1 = helpers._triageMustache.call(depth0, "qbody", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</p>\r\n    ");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n            ");
  stack1 = helpers['if'].call(depth0, "answer.read", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(6, program6, data),fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n            \r\n            ");
  return buffer;
  }
function program4(depth0,data) {
  
  
  data.buffer.push("\r\n\r\n            ");
  }

function program6(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n            \r\n                ");
  stack1 = helpers.view.call(depth0, "App.YourAnswersView", {hash:{
    'contentBinding': ("this")
  },hashTypes:{'contentBinding': "STRING"},hashContexts:{'contentBinding': depth0},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n            ");
  return buffer;
  }
function program7(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n                    <p class=\"solvedAnswersParagraph\">");
  stack1 = helpers._triageMustache.call(depth0, "answer.abody", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</p>\r\n                ");
  return buffer;
  }

function program9(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n            ");
  stack1 = helpers.view.call(depth0, "App.YourAnswersView", {hash:{
    'contentBinding': ("this")
  },hashTypes:{'contentBinding': "STRING"},hashContexts:{'contentBinding': depth0},inverse:self.noop,fn:self.program(10, program10, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n        ");
  return buffer;
  }
function program10(depth0,data) {
  
  
  data.buffer.push("\r\n                <span>There are no answers</span>\r\n            ");
  }

function program12(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n            ");
  stack1 = helpers['if'].call(depth0, "answer.read", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(13, program13, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n        ");
  return buffer;
  }
function program13(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n                ");
  stack1 = helpers.view.call(depth0, "App.YourAnswersView", {hash:{
    'contentBinding': ("this")
  },hashTypes:{'contentBinding': "STRING"},hashContexts:{'contentBinding': depth0},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n            ");
  return buffer;
  }

  data.buffer.push("<div class = 'question-stack'>\r\n   \r\n    <h4>Your Question </h4>\r\n    ");
  stack1 = helpers.view.call(depth0, "App.YourAnswersView", {hash:{
    'contentBinding': ("this")
  },hashTypes:{'contentBinding': "STRING"},hashContexts:{'contentBinding': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n        <h4>The Answers Provided </h4>\r\n        \r\n        <h5>New Answers</h5>\r\n        ");
  stack1 = helpers.each.call(depth0, "answer", "in", "answers", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(9, program9, data),fn:self.program(3, program3, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n\r\n        <h5>Old Answers</h5>\r\n        ");
  stack1 = helpers.each.call(depth0, "answer", "in", "answers", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(12, program12, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["yourquestionsindex"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
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
  data.buffer.push("\r\n                ");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n                   <p class = \"questionParagraph\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "toSolvedAnswer", "questionsyouask", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(">  ");
  stack1 = helpers._triageMustache.call(depth0, "questionsyouask.qbody", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" <br/> Total answers: ");
  stack1 = helpers._triageMustache.call(depth0, "questionsyouask.totalAnswers", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("  <br/>New answers: ");
  stack1 = helpers._triageMustache.call(depth0, "questionsyouask.newAnswers", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</p>\r\n                ");
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n                ");
  stack1 = helpers.view.call(depth0, "App.QuestionView", {hash:{
    'contentBinding': ("this")
  },hashTypes:{'contentBinding': "STRING"},hashContexts:{'contentBinding': depth0},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n            ");
  return buffer;
  }
function program5(depth0,data) {
  
  
  data.buffer.push("\r\n                    <p class = \"questionParagraph\">  You haven't asked any questions. You should.... </p>\r\n                ");
  }

  data.buffer.push("        <div class=\"question-stack\">\r\n            ");
  stack1 = helpers.each.call(depth0, "questionsyouask", "in", "controller", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(4, program4, data),fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n        </div>\r\n");
  return buffer;
  
});

Ember.TEMPLATES["questionshomepage"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression;


  data.buffer.push("<body>\r\n<div class='sidebar'>\r\n    <h4>");
  stack1 = helpers._triageMustache.call(depth0, "firstname", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" <br/> ");
  stack1 = helpers._triageMustache.call(depth0, "lastname", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h4>\r\n    <ul class=\"nav nav-stacked\">\r\n        <li><a href = '#/questionspage/askaquestion/ask' ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("ask")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "toQuestions", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("> Ask Question    ");
  stack1 = helpers._triageMustache.call(depth0, "newAnswers", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</a><span></span></li>\r\n        <li> <a href = '#/questionspage/answeraquestion' ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("answer")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "toAnswers", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Answer A Question  ");
  stack1 = helpers._triageMustache.call(depth0, "newQuestions", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</a><span></span></li>\r\n    </ul>\r\n    <button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "logout", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" class = 'logoutbtn'>Logout</button>\r\n</div>\r\n\r\n<div class='content-pane'>\r\n    <div class='content'>\r\n           \r\n        ");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n        \r\n    </div>\r\n</div>\r\n\r\n</body>\r\n");
  return buffer;
  
});

Ember.TEMPLATES["components/tutorial-component"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n                <p class = \"tutorialBox\">Hey ");
  stack1 = helpers._triageMustache.call(depth0, "firstname", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("! Nice to meet you!</p>\r\n            ");
  return buffer;
  }

function program3(depth0,data) {
  
  
  data.buffer.push("\r\n                <p class = \"tutorialBox\"> I'm Jeffrey Cogo, and I'm here to help you out!</p>\r\n            ");
  }

function program5(depth0,data) {
  
  
  data.buffer.push("\r\n                <p class = \"tutorialBox\">Lets get started...</p>\r\n            ");
  }

function program7(depth0,data) {
  
  
  data.buffer.push("\r\n                <p class = \"tutorialBox\">Awesome! Here is how you can help your organisation! Try typing in anything\r\n                that you think you are good at and press enter.</p>\r\n            ");
  }

function program9(depth0,data) {
  
  
  data.buffer.push("\r\n                <p class = \"tutorialBox\">Wow! See that?</p>\r\n            ");
  }

function program11(depth0,data) {
  
  
  data.buffer.push("\r\n                <p class = \"tutorialBox\">You added a skill to the list. Skills that are already in the organisation will appear in the box underneath.</p>\r\n            ");
  }

function program13(depth0,data) {
  
  
  data.buffer.push("\r\n                <p class = \"tutorialBox\">Add at least 4 more skills, and we will be ready to go on</p>\r\n            ");
  }

  data.buffer.push("       <div class = 'helpContainer'>\r\n\r\n            ");
  stack1 = helpers['if'].call(depth0, "firstBody", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n            ");
  stack1 = helpers['if'].call(depth0, "secondBody", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n            ");
  stack1 = helpers['if'].call(depth0, "thirdBody", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n            ");
  stack1 = helpers['if'].call(depth0, "fourthBody", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n            ");
  stack1 = helpers['if'].call(depth0, "fifthBody", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(9, program9, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n            ");
  stack1 = helpers['if'].call(depth0, "sixthBody", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(11, program11, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("    \r\n            ");
  stack1 = helpers['if'].call(depth0, "seventhBody", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(13, program13, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("                 \r\n\r\n        </div>");
  return buffer;
  
});

Ember.TEMPLATES["lightbulbhelper"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("\r\n<div class=\"lightbulb-help\">\r\n    <a >\r\n        <img src='img/lightbulb.png'/>\r\n    </a>\r\n    <div class=\"helptext\">\r\n        - Enter your expertise into the box below<br>\r\n        - The input should autofill as you start typing.<br>\r\n        - If there is no preset expertise, please enter it in the alternative box.<br>\r\n        - A minimum of 5 is needed.<br>\r\n    </div>\r\n</div>");
  
});