Ember.TEMPLATES["answeraquestion"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<div class=\"actions\">\n        </div>\n\n        <div class=\"question-stack\">\n            <p>(Q) Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua?</p>\n            <p>(Q) Lorem lorem lorem ipsum ipsum ipsum. Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore?</p>\n            <p>(Q) G elit, sed do eiusmod?</p>\n\n            <div class=\"question-help\">\n                <span class=\"arrow\"></span>\n                <div class=\"textwrap\">\n                    <textarea></textarea>\n                </div>\n                <div class=\"btnwrap\">\n                    <button><i class=\"fa fa-paperclip\"> </i> Attach Image</button>\n                    <button><i class=\"fa fa-paperclip\"> </i> Send</button>\n                </div>\n            </div>\n        </div>\n\n\n  <script>\n$('.question-stack > p').on('click', function(e) {\n    if (e.target !== this) return;\n    $('.selected-question').removeClass('selected-question');\n    if (!$('.question-help').is(\":visible\")) {\n        $('.question-help').fadeIn('slow')\n        $('.question-help textarea').autosize({append: \"\\n\"}).text(\"(A) \");\n    }\n    $(this).addClass('selected-question');\n    $('.question-help .arrow').css(\"top\", $(this).position().top);\n})\n</script>");
  
});

Ember.TEMPLATES["ask"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<div class=\"askquestion contenthide\">\n            <form class=\"form text-center\">\n                <textarea class=\"form-control\" rows=\"3\" placeholder=\"Enter your question here...\"></textarea>\n                <input class=\"form-control\" type=\"text\" placeholder=\"Enter expertise requierd to answer question here (e.g Social media marketing, Javascript)...\">\n                <button class='btn'>Submit Question</button>\n            </form>\n</div> \n\n\n");
  
});

Ember.TEMPLATES["askaquestion"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression;


  data.buffer.push(escapeExpression(helpers.view.call(depth0, "App.QuestionsnavView", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n\n");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n\n\n");
  return buffer;
  
});

Ember.TEMPLATES["expertise"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', escapeExpression=this.escapeExpression;


  data.buffer.push("\n");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "App.LightbulbhelperView", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n\n<div class=\"holder\">\n    <div class=\"mast\">\n        <h4>Expertise</h4>\n    </div>\n    <form class=\"form expertise\">\n        <div class=\"input-group\"><input class=\"form-control\" type=\"text\" placeholder=\"Enter your expertise\"><span class=\"input-group-addon\"><img src='img/tickwhite.png'/></span></div>\n        <a ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "submit", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" class='btn btnsmall pull-right'>Finish</a>\n    </form>\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["lightbulbhelper"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("\n<div class=\"lightbulb-help\">\n    <a >\n        <img src='img/lightbulb.png'/>\n    </a>\n    <div class=\"helptext\">\n        - Enter your expertise into the box below<br>\n        - The input should autofill as you start typing.<br>\n        - If there is no preset expertise, please enter it in the alternative box.<br>\n        - A minimum of 5 is needed.<br>\n    </div>\n</div>");
  
});

Ember.TEMPLATES["login"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"holder\">\n    <div class=\"mast login-mast\">\n    <img src='img/logogreensmal_.png'/>\n    <h4>LOGIN</h4>\n    </div>\n    <form class=\"form\">\n        <input class=\"form-control\" type=\"text\" placeholder=\"Email\">\n        <input class=\"form-control\" type=\"text\" placeholder=\"Password\">\n        <a ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "login", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" class='btn btnsmall pull-right'>Enter</a>\n    </form>\n</div>");
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
  data.buffer.push(">Solved ");
  stack1 = helpers._triageMustache.call(depth0, "solved", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\n            <span ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "unsolved", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("unsolvedSelected")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">Unsolved</span>\n        </div>");
  return buffer;
  
});

Ember.TEMPLATES["questionspage"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  
  data.buffer.push("Ask Question");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("Answer A Question");
  }

  data.buffer.push("<head>\n<script src=\"js/libs/jquery-1.10.2.js\"></script>\n<script src=\"js/libs/jquery.autosize.min.js\"></script>\n</head>\n\n<body>\n<div class='sidebar'>\n    <h4>John Smith</h4>\n    <ul class=\"nav nav-stacked\">\n        <li>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "ask", options) : helperMissing.call(depth0, "link-to", "ask", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("<span>(3)</span></li>\n        <li>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "answeraquestion", options) : helperMissing.call(depth0, "link-to", "answeraquestion", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("<span>(4)</span></li>\n    </ul>\n</div>\n<div class='content-pane'>\n    <div class='content'>\n            \n        ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "App.LightbulbhelperView", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("    \n\n        ");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n    </div>\n</div>\n\n<script>\n$('.question-stack > p').on('click', function(e) {\n    if (e.target !== this) return;\n    $('.selected-question').removeClass('selected-question');\n    if (!$('.question-help').is(\":visible\")) {\n        $('.question-help').fadeIn('slow')\n        $('.question-help textarea').autosize({append: \"\\n\"}).text(\"(A) \");\n    }\n    $(this).addClass('selected-question');\n    $('.question-help .arrow').css(\"top\", $(this).position().top);\n})\n\n</script>\n\n</body>\n");
  return buffer;
  
});

Ember.TEMPLATES["solved"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                <p>(Q) ");
  stack1 = helpers._triageMustache.call(depth0, "question.question", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</p>\n            ");
  return buffer;
  }

  data.buffer.push("        <div class=\"question-stack\">\n            ");
  stack1 = helpers.each.call(depth0, "question", "in", "controller", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            <div class=\"question-help\">\n                <span class=\"arrow\"></span>\n                <div class=\"textwrap\">\n                    <textarea></textarea>\n                </div>\n                <div class=\"btnwrap\">\n                    <button><i class=\"fa fa-paperclip\"> </i> Attach Image</button>\n                    <button><i class=\"fa fa-paperclip\"> </i> Send</button>\n                </div>\n            </div>\n        </div>\n");
  return buffer;
  
});