// static data

export function questionData() {
    return [
        {
            id: 'question1', // TODO: type (default multi choice)
            text: 'Which of the following statements regarding the scientific methods is true?\n',
            responseOptions: [
                {
                    text: 'a) A hypothesis must be agreed upon by more than one scientist',
                    value: 'one'
                },
                {
                    text: 'b) A theory is a hypothesis that has withstood many scientific tests',
                    value: 'two'
                },
                {
                    text: 'c) A theory is proven to be true, and therefore may not be discarded',
                    value: 'three'
                },
                {
                    text: 'd) A hypothesis cannot predict the outcome of scientific experiments',
                    value: 'four'
                }
            ],
            correctResponse: 'two'
        },
        {
            id: 'question2', // TODO: type (default multi choice)
            text: 'Approximately how long ago did the Big Bang take place?',
            responseOptions: [
                {
                    text: 'a) 10-15 thousand years ago',
                    value: 'one'
                },
                {
                    text: 'b) 10-15 million years ago',
                    value: 'two'
                },
                {
                    text: 'c) 100-150 million years ago',
                    value: 'three'
                },
                {
                    text: 'd) 10-15 billion years ago',
                    value: 'four'
                }
            ],
            correctResponse: 'four'
        },
        {
            id: 'question3', // TODO: type (default multi choice)
            text: 'Under intense pressure and high temperature, hydrogen atoms combine to form helium. This process is called:',
            responseOptions: [
                {
                    text: 'a) nuclear fusion',
                    value: 'one'
                },
                {
                    text: 'b) nuclear fission',
                    value: 'two'
                },
                {
                    text: 'c) metamorphism',
                    value: 'three'
                },
                {
                    text: 'd) convection',
                    value: 'four'
                }
            ],
            correctResponse: 'one'
        },
        {
            id: 'question4', // TODO: type (default multi choice)
            text: 'What are the two most abundant elements in nebula (gas clouds) in the universe?',
            responseOptions: [
                {
                    text: 'a) nitrogen and oxygen',
                    value: 'one'
                },
                {
                    text: 'b) oxygen and silicon',
                    value: 'two'
                },
                {
                    text: 'c) hydrogen and helium',
                    value: 'three'
                },
                {
                    text: 'd) iron and nickel',
                    value: 'four'
                }
            ],
            correctResponse: 'three'
        },
        {
            id: 'question5', // TODO: type (default multi choice)
            text: 'The process by which an originally homogeneous Earth developed a dense core and a light crust is called:',
            responseOptions: [
                {
                    text: 'a) metamorphism',
                    value: 'one'
                },
                {
                    text: 'b) differentiation',
                    value: 'two'
                },
                {
                    text: 'c) accretion',
                    value: 'three'
                },
                {
                    text: 'd) compression',
                    value: 'four'
                }
            ],
            correctResponse: 'two'
        },
        {
            id: 'question6', // TODO: type (default multi choice)
            text: 'The heat that caused melting in the Earth\'s early history was supplied from which of the following events or causes?',
            responseOptions: [
                {
                    text: 'a) volcanic activity and radioactivity',
                    value: 'one'
                },
                {
                    text: 'b) solar heating and volcanic activity',
                    value: 'two'
                },
                {
                    text: 'c) a large impact event and radioactivity',
                    value: 'three'
                },
                {
                    text: 'd) a large impact event and solar heating',
                    value: 'four'
                }
            ],
            correctResponse: 'three'
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
