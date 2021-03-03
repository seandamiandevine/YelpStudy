var instructions = {
    type: 'instructions',
    pages: [
  '<p>Welcome to this study!</p><p>Use the navigation pane below to navigate through the instructions.</p>',

  '<p>In this study, we are going to ask you about what kind of restaurants you like.</p>.'+
  '<p>We are going to show you a series of <b>real</b> restaurants from <i>www.yelp.com</i>. On each page, you will see the following things:</p>'+
  '<ul>' +
    '<li style="text-align:left">Pictures of restaurants</li>' +
    '<li style="text-align:left">The names of the restaurants</li>' +
    '<li style="text-align:left">How many people have rated these restaurants on Yelp</li>'+
    '<li style="text-align:left">The average rating of each restaurant</li>'+
    '<li style="text-align:left">The price range of each each restaurant</li>'+
    '<li style="text-align:left">What kind of food the restaurants serve</li>' +
  '</ul>',

  '<p>Your job in this study will be to read this information and tell us: </p>' +
  '<ol>' +
    '<li style="text-align:left"><b>which restaurant you would choose to go to</b></li>' +
    '<li style="text-align:left"><b>if you ended up at one of these restaurants, how satisfied do you think you would be</b></li>' +

  '</ol>',

  produceYelpHTML(["https://images.unsplash.com/photo-1603418735208-86f031556a5a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=889&q=80"],
                  ["Sean's Retro Restaurant"],
                  [4.5],
                  [20],
                  [2],
                  'diner',
                  false,
                  true)  +
    '</div>'+
    '<br><p>Here is an example of a page you might see in this study.</p>'+
    '<p>The stars represent the average rating people gave this restaurant. 5 stars is the best rating a restaurant can get and 1 star is the worst.</p>' +
    '<p>The "20" next to the stars represent how many people have rated this restaurant.</p>' +
    '<p>The "$"s represent the price range. The cheapest restaurants will show one $ and the most expensive will show four of them: $ $ $ $.</p>' +
    '<p>Finally, the "Diner" text tells you that this restaurant is a diner, rather than a sushi or Mexican restaurant, for example.</p>.',

    '<p>After seeing a group of restaurants like this, there are two questions you could be asked.</p>',

    '<p>First you might be asked which restaurant, given the category and the options you were shown, you would be most likely to visit.</p>' +
    '<p>If you are asked this question, just click the name of the restaurant you would be most likely to visit.</p>' +
    '<p>After doing so, you will be asked to rate how confident you were in your choice.' +
    '<p>You can see an example of what this will look like on the next page.</p>',


    "<br><p>Here is an example of what the choices might look like. In the study, you'll be able to click on one of the restaurants to make a choice. For now, press Next when you're ready for more instructions.</p>" +
    produceYelpHTML(["https://images.unsplash.com/photo-1603418735208-86f031556a5a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=889&q=80",
                    "https://images.unsplash.com/photo-1555992336-03a23c7b20ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80",
                    "https://images.unsplash.com/photo-1542039778-22c80bfeaa48?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=375&q=80"],
                    ["Sean's Retro Restaurant", "Blue Cloud Chophouse", "Loyal Lily House"],
                    [4.5, 3, 4.5],
                    [20, 18, 4],
                    [2, 1, 2],
                    'diner',
                    false,
                    true) + '</div>',

    "<p>Here is an example of what the confidence scale will look like</p>" +
    exampleConfidence('400px', '', [{prompt: "How confident are you that you made the best choice?", labels: ['1 (Not at all)', '2', '3', '4', '5', '6', '7 (Very much)']}]) +
    '<p>1 represents being <b>not at all</b> confident in your choice (being unsure about which restaurant you would like to go to).</p>' +
    '<p>7 represents being <b>absolutely certain</b> about your choice. </p>',

    "<p>Second, you might be asked to say how satisfied you would be if you ended up at one of the restaurants. The restaurant you'd end up at will be highlighted in blue and a bar like the one at the bottom of the screen will appear.</p>"+
    '<p>Drag the slider to the left if you think you would be less satisfied with your experience. Drag it to the right if you feel like you would be more satisfied.</p>' +
    '<p><b>Be sure to use the ENTIRE range of the slider. Try not to rate every restaurant using only the middle of the slider.</b></p>' +
    '<p>After answering this question, you will again be asked to rate your confidence in your satsifaction rating. Click Next to see a full example of what this question will look like!</p>' +
    exampleSlider(50, 0, 100, 1, ['Not satisfied', 'Very satisfied'], 500, ''),

    "<p>Imagine you ended up at Sean's Restro Restaurant. How satisfied do you think you would be with this restaurant?</p>" +
    produceYelpHTML(["https://images.unsplash.com/photo-1603418735208-86f031556a5a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=889&q=80",
                    "https://images.unsplash.com/photo-1555992336-03a23c7b20ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80",
                    "https://images.unsplash.com/photo-1542039778-22c80bfeaa48?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=375&q=80"],
                    ["Sean's Retro Restaurant", "Blue Cloud Chophouse", "Loyal Lily House"],
                    [4.5, 3, 4.5],
                    [20, 18, 4],
                    [2, 1, 2],
                    'diner',
                    false,
                    "Sean's Retro Restaurant") + '</div>' +
    exampleSlider(50, 0, 100, 1, ['Not satisfied', 'Very satisfied'], 500, ''),

    "<p>Here is an example of what the confidence scale will look like</p>" +
    exampleConfidence('400px', '', [{prompt: "How confident are you in your rating?", labels: ['1 (Not at all)', '2', '3', '4', '5', '6', '7 (Very much)']}]) +
    '<p>1 represents being <b>not at all</b> confident in your rating (being unsure about how satisfied you would be if you ended up at the restaurant.) </p>' +
    '<p>7 represents being <b>absolutely certain</b> about your rating. </p>',

    '<p>This is everything you need to know. Once you click Next, you will start the study. If there is anything you do not understand, use the buttons below to go back through the instructions.</p>' +
    '<p>The study will go as follows: First, you will see a group of restaurants, during which time you will not be able to respond. Then, you will answer the questions we explained earlier, you will rate your confidence, and then you will see another group of restaurants.</p>' +
    '<p>You will only have a limited time make each choice and rating, so please be sure to make each choice and rating in a timely manner.</p>' +
    '<p>When you are ready to start, press Next!</p>'

    ],
    show_clickable_nav: true,
    on_start: function() {  // remove random whitespace
      var whitespace = document.getElementsByTagName("body")[1];
      whitespace.parentNode.removeChild(whitespace);
    }
  };


var finish2q = {
    type: 'instructions',
    pages: [
      "<p>Thank you so much for participating in our study!</p>" +
      "<p>You're done the main part of the study and you're almost done the whole thing! We just have a few short questions for you. Press Next to view them.</p>"
    ],
    show_clickable_nav: true,
};

var end = {
    type: 'instructions',
    pages: ["You are done the experiment! Press NEXT to finish and receive your payment. Thank you so much!"],
    show_clickable_nav: true
};

function exampleSlider(start, min, max, step, labels, slider_width, prompt) {

  // just taken from jsPsych source code

    var html = '<div id="jspsych-html-slider-response-wrapper" style="margin: 100px 0px;">';
    html += '<div class="jspsych-html-slider-response-container" style="position:relative; margin: 0 auto 3em auto; ';
    if(slider_width !== null){
      html += 'width:'+slider_width+'px;';
    }
    html += '">';
    html += '<input type="range" value="'+start+'" min="'+min+'" max="'+max+'" step="'+step+'" style="width: 100%;" id="jspsych-html-slider-response-response"></input>';
    html += '<div>'
    for(var j=0; j < labels.length; j++){
      var width = 100/(labels.length-1);
      var left_offset = (j * (100 /(labels.length - 1))) - (width/2);
      html += '<div style="display: inline-block; position: absolute; left:'+left_offset+'%; text-align: center; width: '+width+'%;">';
      html += '<span style="text-align: center; font-size: 80%;">'+labels[j]+'</span>';
      html += '</div>'
    }
    html += '</div>';
    html += '</div>';
    html += '</div>';

    if (prompt !== null){
      html += prompt;
    }

    return(html)

};

function exampleConfidence(w, preamble, questions) {

  var html = "";
  html += '<style id="jspsych-survey-likert-css">';
  html += ".jspsych-survey-likert-statement { display:block; font-size: 16px; padding-top: 40px; margin-bottom:10px;}"+
    ".jspsych-survey-likert-opts { list-style:none; width:"+w+"; margin:auto; padding:0 0 35px; display:block; font-size: 20px; line-height:1.1em; }"+
    ".jspsych-survey-likert-opt-label { line-height: 1.1em; color: #444; }"+
    ".jspsych-survey-likert-opts:before { content: ''; position:relative; top:11px; /*left:9.5%;*/ display:block; background-color:#efefef; height:4px; width:100%; }"+
    ".jspsych-survey-likert-opts:last-of-type { border-bottom: 0; }"+
    ".jspsych-survey-likert-opts li { display:inline-block; /*width:19%;*/ text-align:center; vertical-align: top; }"+
    ".jspsych-survey-likert-opts li input[type=radio] { display:block; position:relative; top:0; left:50%; margin-left:-6px; }"
  html += '</style>';

  if(preamble !== null){
    html += '<div id="jspsych-survey-likert-preamble" class="jspsych-survey-likert-preamble">'+preamble+'</div>';
  }
  html += '<form id="jspsych-survey-likert-form">';

  var question_order = [];
  for(var i=0; i<questions.length; i++){
    question_order.push(i);
  }

  for (var i = 0; i < questions.length; i++) {
    var question = questions[question_order[i]];
    html += '<label class="jspsych-survey-likert-statement">' + question.prompt + '</label>';
    var width = 100 / question.labels.length;
    var options_string = '<ul class="jspsych-survey-likert-opts" data-name="example" data-radio-group="Q' + question_order[i] + '">';
    for (var j = 0; j < question.labels.length; j++) {
      options_string += '<li style="width:' + width + '%"><input type="radio" name="Q' + question_order[i] + '" value="' + j + '"';

      options_string += '><label class="jspsych-survey-likert-opt-label">' + question.labels[j] + '</label></li>';
    }
    options_string += '</ul>';
    html += options_string;
  }

  // add submit button
  html += '</form>'

  return(html)

};
