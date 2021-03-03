var tCount = 0; // trial counter
var names = []; // names of restaurants this trial
var imgs = []; // images for restaurants this trial
var nrevs = []; // number of reviews for options this trial
var stars = []; // average ratings for options this trial
var prices = []; // prices for options this trial
var trial_type = '' // type of trial (rating or choice)
var choice = '' // restaurant choice for choice trial
var rating_option = '' // what restaurant are subjects rating this trial
var rating = '' // restaurant rating for rating trial
var targetrt = 0 // rt this trial
var iscatch = 999 // is this trial a catch trial
var timedout = false // did the subject timeout on the choice or rating trial

var x = ''

var display_options = {

  type: 'html-keyboard-response',
  stimulus: function() {

    // select and clean names
    names = choice_sets[tCount]["names"].split(",");

    for(n in _.range(names.length)) {

      names[n] = names[n].replace(/[u'"]/, '').replace(/^ /g, "").replace(/[^a-zA-Z ]/g, "")

    };

    // select and clean images
    imgs = choice_sets[tCount]["images"].split(",");

    for (i in _.range(imgs.length)){

      imgs[i] = imgs[i].replace(/[u'"]/, '').replace(/[' \[]/g, '').replace(/\]/g, '')

    };

    // select number of reviews for each option
    nrevs = choice_sets[tCount]['num_reviews'];

    // select mean star rating for each option
    if(typeof choice_sets[tCount].stars == 'string') {stars = choice_sets[tCount]['stars'].replace(/[\[\]]/g, "").split(' ').filter(Boolean).map(Number)} else {stars = choice_sets[tCount]['stars']}

    // select prices for each option
    prices = choice_sets[tCount]['prices'];

    // specify cateory for this choice set
    category = choice_sets[tCount]['category'];

    // is this trial a catch trial?
    iscatch = catchtrials_ind[tCount];

    // create HTML
    h = produceYelpHTML(imgs, names, stars, nrevs, prices, category, false);

    return h

  },
  choices: jsPsych.NO_KEYS,
  trial_duration: trialdur,
  on_start: function() {

    dontflicker()

  }
};

var choice_trial = {

  type: 'html-button-response',
  stimulus: '',
  button_html: function() {

    choices = produceYelpHTML(imgs, names, stars, nrevs, prices, category, true)
    return choices

  },
  choices: function() {

    return(names);

  },
  prompt: function() {

    if(iscatch == 0) p = '<br><p>Which restaurant would you choose if you were going to eat at a '+category.toLowerCase()+' restaurant?</p>';
    if(iscatch == 1) p = '<br><p font-size:18px><b>For this choice, choose the restaurant with the highest rating.</b></p>';

    return(p)

  },
  margin_horizontal: '0px',
  post_trial_gap: iti,
  trial_duration: timeout,
  on_start: function() { // stops flickering

    dontflicker()

  },
  on_finish: function(data) {

    trial_type = 'choice';
    choice = names[data.button_pressed]; // which restaurant was chosen
    rating_option = 'NA' // no rating this trial
    rating = 'NA' // no rating this trial
    targetrt = data.rt;
    if(data.button_pressed==null) timedout = true
    if(data.button_pressed!=null) timedout = false

    if(debugmode) tCount++;

  }
};

var rating_trial = {

  type: 'html-slider-response',
  stimulus: function() {

    rating_option = _.sample(names);

    h = produceYelpHTML(imgs, names, stars, nrevs, prices, category, false, rating_option);

    return h

  },
  labels: ['Not satisfied', 'Very satisfied'],

  prompt: function() {

    h = '<p>Imagine you ended up at '+ rating_option+ '. How satisfied do you think you would be with this restaurant if you were going to eat at a '+category.toLowerCase()+' restaurant?</p>';

    return h

  },
  slider_width: 500,
  post_trial_gap: iti,
  trial_duration: timeout,
  on_start: function() { // stops flickering

    dontflicker()

  },
  on_finish: function(data) {

    trial_type = 'rating';
    choice = 'NA'; // no choice this trial
    rating = data.response;
    targetrt = data.rt;
    if(data.response==null) timedout = true;
    if(data.response!=null) timedout = false;

    if(debugmode & iscatch==1) console.log('catch showed up on rating trial!')
    if(debugmode) tCount++;
  }

};

var confidence = {

  type: 'survey-likert',
  questions: function(data) {

    if(timedout) {

        q = [{prompt: "You responded too slowly! Press continue to keep going.", labels: ['']}]

    } else {

      if(trial_type == 'choice') q = [{prompt: "How confident are you that you made the best choice?", labels: ['1 (Not at all)', '2', '3', '4', '5', '6', '7 (Very much)'], required: true}]
      if(trial_type == 'rating') q = [{prompt: "How confident are you in your rating?", labels: ['1 (Not at all)', '2', '3', '4', '5', '6', '7 (Very much)'], required:true}]

    }

    return(q)
  },
  post_trial_gap: iti,
  scale_width: function() {
    if(timedout) return(0)
    if(timedout!=false) return(600)
  },
  on_load: function() {
    if(timedout) {

      radiobutton = document.getElementsByClassName("jspsych-survey-likert-opts")[0]
      radiobutton.parentNode.removeChild(radiobutton);
    }
  },
  on_finish: function(data) {

  conf = data.responses;
  if(conf == "{}") {

    confidence = "NA";
    confrt = "NA";
    rating = "NA";
    choice = "NA";
    targetrt = "NA";


  } else {

    confidence = JSON.parse(data.responses)['Q0'];
    confrt =  data.confrt = data.rt;

  };

  data.trialnum = tCount+1;
  data.names = names;
  data.imgs = imgs;
  data.nrev = nrevs;
  data.stars = stars;
  data.prices = prices;
  data.category = choice_sets[tCount]['category'];
  data.cbsa = choice_sets[tCount]['cbsa'];
  data.mean_rating = choice_sets[tCount]['mean_rating'];
  data.num_options = names.length;
  data.trial_type = trial_type;
  data.choice = choice;
  data.rating_option = rating_option;
  data.rating = rating;
  data.targetrt = targetrt;
  data.confidence = confidence;
  data.confrt =confrt;
  data.iscatch = iscatch;

  tCount ++ // iterate trial
  }
};

var break_trial  = {
  type: 'instructions',
  pages: ['Good job! This is an opportunity for you to take a break. When you are ready to keep going, press Next.'],
  show_clickable_nav: true

}
