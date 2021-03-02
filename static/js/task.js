
var psiturk = new PsiTurk(uniqueId, adServerLoc, mode);

var timeline = [fs, instructions];

for (i in _.range(ntrials)) {

  timeline.push(display_options);
  if (trialList[i] == 'r') timeline.push(rating_trial);
  if (trialList[i] == 'c') timeline.push(choice_trial);
  if(debugmode==false) timeline.push(confidence);

  if(debugmode == false & i != 0 & i % Math.round(ntrials/nbreaks) == 0) timeline.push(break_trial);

};

timeline.push(finish2q, demographics, knowledge, debrief, end);

// failsafe
prompt_resubmit = function() {
  document.body.innerHTML = error_message;
  $("#resubmit").click(resubmit);
};

resubmit = function() {
  document.body.innerHTML = "<h1>Trying to resubmit...</h1>";
  reprompt = setTimeout(prompt_resubmit, 10000);

  psiturk.saveData({
    success: function() {
        clearInterval(reprompt);
        psiturk.completeHIT();
    },
    error: prompt_resubmit
  });
};


// run and preload images
jsPsych.init({
    timeline: timeline,
    on_data_update: function(data) {
      psiturk.recordTrialData(data)
    },
    on_finish: function() {
      psiturk.saveData({

            success: function(){

            	psiturk.completeHIT();

            },

            error: prompt_resubmit});
      //setTimeout(function(){psiturk.completeHIT();}, 2000); // add short delay so data saves right
    }
});
