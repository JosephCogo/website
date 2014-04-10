Ember.TEMPLATES["answeraquestion"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("        <div class=\"lightbulb-help\">\r\n            <a href='#'>\r\n                <i class=\"fa fa-lightbulb-o fa-3x\" style=\"color: #2BB4A7\"></i>\r\n            </a>\r\n            <div class=\"helptext\">\r\n                - Enter your expertise into the box below<br>\r\n                - The input should autofill as you start typing.<br>\r\n                - If there is no preset expertise, please enter it in the alternative box.<br>\r\n                - A minimum of 5 is needed.<br>\r\n            </div>\r\n        </div>\r\n        \r\n        <div class=\"actions\">\r\n            <span>Ask Question</span>\r\n            <span class='selected'>Solved (2)</span>\r\n            <span>Unsolved</span>\r\n        </div>\r\n\r\n        <div class=\"question-stack\">\r\n\r\n                <p>(Q) ANSWER A QUESTION ASSHOLE</p>\r\n\r\n            <div class=\"question-help\">\r\n                <span class=\"arrow\"></span>\r\n                <div class=\"textwrap\">\r\n                    <textarea></textarea>\r\n                </div>\r\n                <div class=\"btnwrap\">\r\n                    <button><i class=\"fa fa-paperclip\"> </i> Attach Image</button>\r\n                    <button><i class=\"fa fa-paperclip\"> </i> Send</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n\r\n");
  
});

Ember.TEMPLATES["askaquestion"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
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

  data.buffer.push("        <div class=\"lightbulb-help\">\r\n            <a href='#'>\r\n                <i class=\"fa fa-lightbulb-o fa-3x\" style=\"color: #2BB4A7\"></i>\r\n            </a>\r\n            <div class=\"helptext\">\r\n                - Enter your expertise into the box below<br>\r\n                - The input should autofill as you start typing.<br>\r\n                - If there is no preset expertise, please enter it in the alternative box.<br>\r\n                - A minimum of 5 is needed.<br>\r\n            </div>\r\n        </div>\r\n        \r\n        <div class=\"actions\">\r\n            <span>Ask Question</span>\r\n            <span class='selected'>Solved (2)</span>\r\n            <span>Unsolved</span>\r\n        </div>\r\n\r\n        <div class=\"question-stack\">\r\n            ");
  stack1 = helpers.each.call(depth0, "question", "in", "controller", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n            <div class=\"question-help\">\r\n                <span class=\"arrow\"></span>\r\n                <div class=\"textwrap\">\r\n                    <textarea></textarea>\r\n                </div>\r\n                <div class=\"btnwrap\">\r\n                    <button><i class=\"fa fa-paperclip\"> </i> Attach Image</button>\r\n                    <button><i class=\"fa fa-paperclip\"> </i> Send</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n");
  return buffer;
  
});

Ember.TEMPLATES["questions"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("Ask Question");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("Answer A Question");
  }

  data.buffer.push("<head>\r\n<script src=\"js/libs/jquery-1.10.2.js\"></script>\r\n<script src=\"js/libs/jquery.autosize.min.js\"></script>\r\n</head>\r\n\r\n<body>\r\n<div class='sidebar'>\r\n    <h4>John Smith</h4>\r\n    <ul class=\"nav nav-stacked\">\r\n        <li>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "askaquestion", options) : helperMissing.call(depth0, "link-to", "askaquestion", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("<span>(3)</span></li>\r\n        <li>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "answeraquestion", options) : helperMissing.call(depth0, "link-to", "answeraquestion", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("<span>(4)</span></li>\r\n    </ul>\r\n</div>\r\n<div class='content-pane'>\r\n    <div class='content'>\r\n\r\n        ");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n\r\n    </div>\r\n</div>\r\n\r\n<script>\r\n$('.question-stack > p').on('click', function(e) {\r\n    if (e.target !== this) return;\r\n    $('.selected-question').removeClass('selected-question');\r\n    if (!$('.question-help').is(\":visible\")) {\r\n        $('.question-help').fadeIn('slow')\r\n        $('.question-help textarea').autosize({append: \"\\n\"}).text(\"(A) \");\r\n    }\r\n    $(this).addClass('selected-question');\r\n    $('.question-help .arrow').css(\"top\", $(this).position().top);\r\n})\r\n$('.lightbulb-help > a').on('click', function(e) {\r\n    e.preventDefault();\r\n    $('.lightbulb-help > div').fadeToggle('slow');\r\n})\r\n</script>\r\n\r\n</body>\r\n");
  return buffer;
  
});