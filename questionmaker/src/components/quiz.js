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
        successCount: 0,
        skipped: 0
    };

    constructor(props) {
        super(props);

        this.triggerNext = this.triggerNext.bind(this);
    }

    triggerNext(success, skip = false) {
        const currentMarker = this.state.questionMarker;
        let successCount = this.state.successCount;
        let skipped = this.state.skipped;
        if (success) successCount += 1;
        if (skip) skipped += 1;
        this.setState({questionMarker: currentMarker + 1, successCount, skipped});
    }

    componentDidUpdate() {
      let elem = document.getElementById('animation_finish');

      if (!elem) {
        return;
      }

      if (this.state.questionMarker === this.state.questionData.length) {
        console.log("found")
        lottie.loadAnimation({
          container: elem, // the dom element that will contain the animation
          renderer: 'svg',
          loop: false,
          autoplay: true,
          path: "js/happy.json" // the path to the animation json
        });
      }
    }

    render() {
        const {questionData} = this.state;
        if (this.state.questionMarker === this.state.questionData.length) {
            return (
                <div>
                    {/**/}
                    <div id="animation_finish" ></div>
                    <p className="finish_message">You got {this.state.successCount} out of {this.state.questionData.length - this.state.skipped} correct!</p>
                    {/* nav? */}
                </div>
            );
        } else {
            return (
                <div className="container">
                    {/**/}
                    <Question question={questionData[this.state.questionMarker]} triggerNext={this.triggerNext}/>
                    {/* nav? */}
                </div>
            );
        }

    }
}
