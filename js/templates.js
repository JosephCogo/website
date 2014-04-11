Ember.TEMPLATES["answeraquestion"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<div class=\"actions\">\r\n        </div>\r\n\r\n        <div class=\"question-stack\">\r\n            <p>(Q) Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua?</p>\r\n            <p>(Q) Lorem lorem lorem ipsum ipsum ipsum. Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore?</p>\r\n            <p>(Q) G elit, sed do eiusmod?</p>\r\n\r\n            <div class=\"question-help\">\r\n                <span class=\"arrow\"></span>\r\n                <div class=\"textwrap\">\r\n                    <textarea></textarea>\r\n                </div>\r\n                <div class=\"btnwrap\">\r\n                    <button><i class=\"fa fa-paperclip\"> </i> Attach Image</button>\r\n                    <button><i class=\"fa fa-paperclip\"> </i> Send</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n\r\n  <script>\r\n$('.question-stack > p').on('click', function(e) {\r\n    if (e.target !== this) return;\r\n    $('.selected-question').removeClass('selected-question');\r\n    if (!$('.question-help').is(\":visible\")) {\r\n        $('.question-help').fadeIn('slow')\r\n        $('.question-help textarea').autosize({append: \"\\n\"}).text(\"(A) \");\r\n    }\r\n    $(this).addClass('selected-question');\r\n    $('.question-help .arrow').css(\"top\", $(this).position().top);\r\n})\r\n</script>");
  
});

Ember.TEMPLATES["ask"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<div class=\"askquestion contenthide\">\r\n            <form class=\"form text-center\">\r\n                <textarea class=\"form-control\" rows=\"3\" placeholder=\"Enter your question here...\"></textarea>\r\n                <input class=\"form-control\" type=\"text\" placeholder=\"Enter expertise requierd to answer question here (e.g Social media marketing, Javascript)...\">\r\n                <button class='btn'>Submit Question</button>\r\n            </form>\r\n</div> \r\n\r\n\r\n");
  
});

Ember.TEMPLATES["askaquestion"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1;


  data.buffer.push("        \r\n        <div class=\"actions\">\r\n            <span data-target='askquestion' class='selected'>Ask Question</span>\r\n            <span data-target='solved'>Solved (2)</span>\r\n            <span data-target='unsolved'>Unsolved</span>\r\n        </div>\r\n\r\n        ");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n\r\n\r\n\r\n");
  return buffer;
  
});

Ember.TEMPLATES["expertise"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', escapeExpression=this.escapeExpression;


  data.buffer.push("\r\n");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "App.LightbulbhelperView", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\r\n\r\n<div class=\"holder\">\r\n    <div class=\"mast\">\r\n        <h4>Expertise</h4>\r\n    </div>\r\n    <form class=\"form expertise\">\r\n        <div class=\"input-group\"><input class=\"form-control\" type=\"text\" placeholder=\"Enter your expertise\"><span class=\"input-group-addon\"><img src='img/tickwhite.png'/></span></div>\r\n        <a ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "submit", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" class='btn btnsmall pull-right'>Finish</a>\r\n    </form>\r\n</div>\r\n");
  return buffer;
  
});

Ember.TEMPLATES["lightbulbhelper"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("\r\n<div class=\"lightbulb-help\">\r\n    <a >\r\n        <img src='img/lightbulb.png'/>\r\n    </a>\r\n    <div class=\"helptext\">\r\n        - Enter your expertise into the box below<br>\r\n        - The input should autofill as you start typing.<br>\r\n        - If there is no preset expertise, please enter it in the alternative box.<br>\r\n        - A minimum of 5 is needed.<br>\r\n    </div>\r\n</div>");
  
});

Ember.TEMPLATES["login"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"holder\">\r\n    <div class=\"mast login-mast\">\r\n    <img src='img/logogreensmal_.png'/>\r\n    <h4>LOGIN</h4>\r\n    </div>\r\n    <form class=\"form\">\r\n        <input class=\"form-control\" type=\"text\" placeholder=\"Email\">\r\n        <input class=\"form-control\" type=\"text\" placeholder=\"Password\">\r\n        <a ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "login", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" class='btn btnsmall pull-right'>Enter</a>\r\n    </form>\r\n</div>");
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

  data.buffer.push("<head>\r\n<script src=\"js/libs/jquery-1.10.2.js\"></script>\r\n<script src=\"js/libs/jquery.autosize.min.js\"></script>\r\n</head>\r\n\r\n<body>\r\n<div class='sidebar'>\r\n    <h4>John Smith</h4>\r\n    <ul class=\"nav nav-stacked\">\r\n        <li>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "ask", options) : helperMissing.call(depth0, "link-to", "ask", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("<span>(3)</span></li>\r\n        <li>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "answeraquestion", options) : helperMissing.call(depth0, "link-to", "answeraquestion", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("<span>(4)</span></li>\r\n    </ul>\r\n</div>\r\n<div class='content-pane'>\r\n    <div class='content'>\r\n            \r\n            ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "App.LightbulbhelperView", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("    \r\n\r\n        ");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n\r\n    </div>\r\n</div>\r\n\r\n<script>\r\n$('.question-stack > p').on('click', function(e) {\r\n    if (e.target !== this) return;\r\n    $('.selected-question').removeClass('selected-question');\r\n    if (!$('.question-help').is(\":visible\")) {\r\n        $('.question-help').fadeIn('slow')\r\n        $('.question-help textarea').autosize({append: \"\\n\"}).text(\"(A) \");\r\n    }\r\n    $(this).addClass('selected-question');\r\n    $('.question-help .arrow').css(\"top\", $(this).position().top);\r\n})\r\n\r\n</script>\r\n\r\n</body>\r\n");
  return buffer;
  
});

Ember.TEMPLATES["solved"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n                <p>(Q) ");
  stack1 = helpers._triageMustache.call(depth0, "question.question", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</p>\r\n            ");
  return buffer;
  }

  data.buffer.push("        <div class=\"question-stack\">\r\n            ");
  stack1 = helpers.each.call(depth0, "question", "in", "controller", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n            <div class=\"question-help\">\r\n                <span class=\"arrow\"></span>\r\n                <div class=\"textwrap\">\r\n                    <textarea></textarea>\r\n                </div>\r\n                <div class=\"btnwrap\">\r\n                    <button><i class=\"fa fa-paperclip\"> </i> Attach Image</button>\r\n                    <button><i class=\"fa fa-paperclip\"> </i> Send</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n");
  return buffer;
  
});