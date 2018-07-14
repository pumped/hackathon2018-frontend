import React from 'react';
// import dataApi from 'src/dataApi';
import Question from 'src/components/question';

import {randomQuiz, questionData} from "../data/static-questions";


//
export default class QuizPage extends React.Component {
    state = {
        questionData: randomQuiz(questionData()),
        // collect success/failures
        results: [],
        questionMarker: 0,
        successCount: 0
    };

    constructor(props) {
        super(props);

        this.triggerNext = this.triggerNext.bind(this);
    }

    triggerNext(success) {
        const currentMarker = this.state.questionMarker;
        let successCount = this.state.successCount;
        if (success) successCount += 1;
        this.setState({questionMarker: currentMarker + 1, successCount});
    }

    render() {
        const {questionData} = this.state;
        if (this.state.questionMarker === this.state.questionData.length) {
            return (
                <div>
                    <h1>Quiz!</h1>
                    {/**/}
                    <p>All done! You got {this.state.successCount} out of {this.state.questionData.length} correct!</p>
                    {/* nav? */}
                </div>
            );
        } else {
            return (
                <div>
                    <h1>Quiz!</h1>
                    {/**/}
                    <Question question={questionData[this.state.questionMarker]} triggerNext={this.triggerNext}/>
                    {/* nav? */}
                </div>
            );
        }

    }
}
