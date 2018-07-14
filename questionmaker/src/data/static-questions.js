// static data

export function questionData() {
    return [
        {
            id: 'question1', // TODO: type (default multi choice)
            text: 'What colour is the sky?',
            responseOptions: [
                {
                    text: 'Red',
                    value: 'red'
                },
                {
                    text: 'Blue',
                    value: 'blue'
                },
                {
                    text: 'Green',
                    value: 'green'
                }
            ],
            correctResponse: 'blue'
        },
        {
            id: 'question2', // TODO: type (default multi choice)
            text: 'What colour is the sky? 1',
            responseOptions: [
                {
                    text: 'Red',
                    value: 'red'
                },
                {
                    text: 'Blue',
                    value: 'blue'
                },
                {
                    text: 'Green',
                    value: 'green'
                }
            ],
            correctResponse: 'blue'
        },
        {
            id: 'question3', // TODO: type (default multi choice)
            text: 'What colour is the sky? 2',
            responseOptions: [
                {
                    text: 'Red',
                    value: 'red'
                },
                {
                    text: 'Blue',
                    value: 'blue'
                },
                {
                    text: 'Green',
                    value: 'green'
                }
            ],
            correctResponse: 'blue'
        },
        {
            id: 'question4', // TODO: type (default multi choice)
            text: 'What colour is the sky? 3',
            responseOptions: [
                {
                    text: 'Red',
                    value: 'red'
                },
                {
                    text: 'Blue',
                    value: 'blue'
                },
                {
                    text: 'Green',
                    value: 'green'
                }
            ],
            correctResponse: 'blue'
        },
        {
            id: 'question5', // TODO: type (default multi choice)
            text: 'What colour is the sky? 4',
            responseOptions: [
                {
                    text: 'Red',
                    value: 'red'
                },
                {
                    text: 'Blue',
                    value: 'blue'
                },
                {
                    text: 'Green',
                    value: 'green'
                }
            ],
            correctResponse: 'blue'
        },
        {
            id: 'question6', // TODO: type (default multi choice)
            text: 'What colour is the sky? 5',
            responseOptions: [
                {
                    text: 'Red',
                    value: 'red'
                },
                {
                    text: 'Blue',
                    value: 'blue'
                },
                {
                    text: 'Green',
                    value: 'green'
                }
            ],
            correctResponse: 'blue'
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
