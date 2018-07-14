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

    render() {
        if (this.state.submitted) {
            const correct = this.isCorrect() ? 'correct!' : 'incorrect';

            return (
                <div>
                    <hi>{this.props.question.text}</hi>
                    {/* TODO: media*/}
                    <p>You got the question: {correct}</p>
                    <SubmitButton checkSubmission={this.triggerNext.bind(this)}/>
                </div>
            )
        } else {
            return (
                <div>
                    <hi>{this.props.question.text}</hi>
                    {/* TODO: media*/}
                    <ResponseList responses={this.props.question.responseOptions}
                                  onChange={this.handleChange.bind(this)}/>
                    <SubmitButton checkSubmission={this.checkSubmission.bind(this)}/>
                </div>
            );
        }

    }
}
