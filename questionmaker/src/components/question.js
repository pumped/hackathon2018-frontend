import React from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import '../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import ResponseList from 'src/components/response-list';
import SubmitButton from 'src/components/submit-button';


export default class Question extends React.Component {
    state = {
        selectedResponseValue: '',
        submitted: false
    };

    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.checkSubmission = this.checkSubmission.bind(this);
        this.triggerNext = this.triggerNext.bind(this);
        this.isCorrect = this.isCorrect.bind(this);
        this.skipQuestion = this.skipQuestion.bind(this);
    }

    handleChange(event) {
        this.setState({selectedResponseValue: event});
    }

    checkSubmission() {
        this.setState({submitted: true});
    }

    isCorrect() {
        return (this.props.question.correctResponse === this.state.selectedResponseValue);
    }

    triggerNext() {
        this.props.triggerNext(this.isCorrect());
        this.setState({submitted: false});
    }

    skipQuestion() {
        this.props.triggerNext(false, true);
    }

    componentDidUpdate() {
      let elem = document.getElementById('animation');
      console.log("attempted update")

      if (this.isCorrect() == true) {
        console.log("found")
        lottie.loadAnimation({
          container: elem, // the dom element that will contain the animation
          renderer: 'svg',
          loop: false,
          autoplay: true,
          path: "js/correct.json" // the path to the animation json
        });
      }
    }

    render() {
        if (this.state.submitted) {
            const correct = this.isCorrect() ? 'Correct' : 'Incorrect';

            var answer = (<span class="question_answer answer_correct">{this.state.selectedResponseValue}</span>)
            if (correct == "Incorrect") {
              answer = (<span class="question_answer answer_incorrect">{this.state.selectedResponseValue}</span>)
            }

            return (
                <div>
                    <div class="question_text">{this.props.question.text} {answer}</div>
                    {/* TODO: media*/}
                    <p class="answerResult">{correct}!</p>
                    <div id="animation"></div>
                    <SubmitButton checkSubmission={this.triggerNext.bind(this)}/>
                </div>
            )
        } else {
            return (
                <div className="question_component">
                    <div className="question_body">
                        <div className="question_text">
                            <p>{this.props.question.text}</p>
                        </div>
                        {/* TODO: media*/}
                        <ResponseList responses={this.props.question.responseOptions}
                                      onChange={this.handleChange.bind(this)}/>
                        <SubmitButton checkSubmission={this.checkSubmission.bind(this)}/>
                    </div>
                    <div className="rate_question" onClick={this.skipQuestion}>
                        <a href="#">Don't show me this</a>
                    </div>
                </div>
            );
        }

    }
}
