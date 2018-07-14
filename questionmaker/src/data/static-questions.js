// static data

export function questionData() {
    return [
        {
            id: 'question1', // TODO: type (default multi choice)
            text: 'Once a mass of magma is created, the magma\'s composition cannot be changed?',
            responseOptions: [
                {
                    text: 'True',
                    value: 'True'
                },
                {
                    text: 'False',
                    value: 'False'
                },
                {
                    text: 'Banana',
                    value: 'green'
                }
            ],
            correctResponse: 'False'
        },
        {
            id: 'question2', // TODO: type (default multi choice)
            text: 'Extrusive igneous rocks are also called ___, while intrusive rocks are also called ___.',
            responseOptions: [
                {
                    text: 'Plutonic, volcanic',
                    value: 'red'
                },
                {
                    text: 'Volcanic, plutonic',
                    value: 'Volcanic, plutonic'
                },
                {
                    text: 'Plutonic, granite',
                    value: 'green'
                }
            ],
            correctResponse: 'Volcanic, plutonic'
        },
        {
            id: 'question3', // TODO: type (default multi choice)
            text: 'What is a fundamental difference in chemical compostion between the igneous rocks granite and basalt?',
            responseOptions: [
                {
                    text: 'No difference',
                    value: 'No difference'
                },
                {
                    text: 'One contains silicon and one contains none',
                    value: 'One contains silicon and one contains none'
                },
                {
                    text: 'One contains ferromagnesian minerals and one has almost none',
                    value: 'One contains ferromagnesian minerals and one has almost none'
                }
            ],
            correctResponse: 'One contains ferromagnesian minerals and one has almost none'
        },
        {
            id: 'question4', // TODO: type (default multi choice)
            text: 'Which of these is a common felsic igneous rock?',
            responseOptions: [
                {
                    text: 'Quartz',
                    value: 'Quartz'
                },
                {
                    text: 'Travertine',
                    value: 'Travertine'
                },
                {
                    text: 'Granite',
                    value: 'Granite'
                }
            ],
            correctResponse: 'Granite'
        },
        {
            id: 'question5', // TODO: type (default multi choice)
            text: 'Most magma generated on earth',
            responseOptions: [
                {
                    text: 'Stays below the surface and forms intrusions',
                    value: 'Stays below the surface and forms intrusions'
                },
                {
                    text: 'Sings to the core-mantle boundary because of it\'s magnetism',
                    value: 'Sings to the core-mantle boundary because of it\'s magnetism'
                },
                {
                    text: 'Erupts at the surface and forms volcanic rocks',
                    value: 'Erupts at the surface and forms volcanic rocks'
                }
            ],
            correctResponse: 'Stays below the surface and forms intrusions'
        },
        {
            id: 'question6', // TODO: type (default multi choice)
            text: 'Which is the dominant rock type being erupted as lava flows at the crests of Earth\'s oceanic ridge systems, such as in the Atlantic Ocean east of North Carolina.',
            responseOptions: [
                {
                    text: 'Granite',
                    value: 'Granite'
                },
                {
                    text: 'Pegmatite',
                    value: 'Pegmatite'
                },
                {
                    text: 'Basalt',
                    value: 'Basalt'
                }
            ],
            correctResponse: 'Basalt'
        }
    ];
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

export function randomQuiz(questionSet) {
    const questionSetMax = questionSet.length;
    const quizSizeMax = Math.min(3, questionSetMax);
    const seen = {};
    const questionList = [];

    for (let i = 0; i < quizSizeMax; i++) {
        let index = getRandomInt(questionSetMax);
        while (index in seen) {
            index = getRandomInt(questionSetMax)
        }
        seen[index] = true;
        questionList.push(questionSet[index]);
    }
    return questionList;
}
