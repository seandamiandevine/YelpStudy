var demographics = {
  type: 'survey-text',
  questions: [
    {prompt: "For statistical purposes, how old are you? (please type out in years)", name:'age', required: true},
    {prompt: "For statistical purposes, What is your gender? (please type out your answer below)", name:'gender', required: true}
      ],
  preamble: 'Please answer these questions.',
  on_finish: function(data) {

    jsPsych.data.addProperties({
      age: JSON.parse(data.responses)['age'],
      gender: JSON.parse(data.responses)['gender']
    });

  }
};

var knowledge = {

  type: 'survey-multi-select',
  questions: [
    {
      prompt: "Have you ever lived in any of the following cities? If yes, tick off all the ones you have lived in. If no, tick off 'None of the above'.",
      options: ['Pittsburgh, PA',
                'Las Vegas-Henderson-Paradise, NV',
                'Madison, WI',
                'Toronto, ON, Canada',
                'Charlotte-Concord-Gastonia, NC-SC',
                'Cleveland-Elyria, OH',
                'Phoenix-Mesa-Scottsdale, AZ',
                'Calgary, AB, Canada',
                'None of the above'],
      horizontal: false,
      required: true,
      name: 'cities'
        },
    {
      prompt: "Did you recognize any of the restaurants that were presented in this study?",
      options: ['Yes',
                'No',
                'Not sure'
                ],
      horizontal: false,
      required: true,
      name: 'recognize'
    }
    ],
    on_finish: function(data) {

      jsPsych.data.addProperties({

        cities: JSON.parse(data.responses)['cities'],
        recognize: JSON.parse(data.responses)['recognize']

      });

    }
  };
