

Survey
    .StylesManager
    .applyTheme("default");

var json = {
    title: "Employment Screening Questions",
    pages: [
        {
            questions: [
                {
                    type: "radiogroup",
                    name: "reasonforleaving",
                    title: "Why did the job candidate leave their previous job?",
                    choices: [
                        "Fired", "Laid-off", "School", "Found another opprotunity", "Other"
                    ]
                },

                {
                    type: "radiogroup",
                    name: "relationship",
                    title: "How do you know the job candidate?",
                    choices: [
                        "Relative", "Former Employee", "Former co-worker", "Other"
                    ]
                }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "rehire",
                    title: "If you had the chance to rehire the job candidate, would you?",
                    choices: [
                        "Yes", "No", "Depends on the situation"
                    ]
                },
 
                {
                    type: "radiogroup",
                    name: "strengths",
                    title: "What were the job candadites greatest strengths?",
                    choices: [
                        "Communication", "Attitude", "Attentiveness", "Punctuality", "Hard-Working", "Other"
                    ]
                }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "weaknesses",
                    title: "What were the job candadites greatest weaknesses?",
                    choices: [
                        "Communication", "Attitude", "Attentiveness", "Punctuality", "Hard-Working", "Other"
                    ]
                },

                {
                    type: "radiogroup",
                    name: "getalong",
                    title: "Did the job candadite get along with their co-workers/management?",
                    choices: [
                        "Yes", "No", "Not with co-workers", "Not with management", "Sometimes"
                    ]
                }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "promotions",
                    title: "Did the job candadite receive any promotions?",
                    choices: [
                        "Yes", "No"
                    ]
                },

                {
                    type: "radiogroup",
                    name: "accomplishments",
                    title: "Did the job candadite have any major accomplishments during their time at the company?",
                    choices: [
                        "Yes", "No"
                    ]
                }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "conflict",
                    title: "How did the job candadite handle conflict?",
                    choices: [
                        "Well", "Poorly", "Never had to"
                    ]
                },

                {
                    type: "radiogroup",
                    name: "teammember",
                    title: "Was the job candadite more effective with a team or independently?",
                    choices: [
                        "Team", "Independent", "Was effective at both", "Was ineffective at both"
                    ]
                }
            ]
        }
    ]
};

window.survey = new Survey.Model(json);

survey
    .onComplete
    .add(function (result) {
        document
            .location = "indexthanks.html";
    });

$("#surveyElement").Survey({ model: survey });
