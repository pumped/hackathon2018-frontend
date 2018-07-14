import React from 'react';
import '../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';

export default class SubmitButton extends React.Component {
    state = {
        submitted: false
    };

    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this);
    }

    submit() {
        let self = this;
        this.setState({submitted: true}, () => {
            self.props.checkSubmission();
        });
    }

    render() {
        const buttonText = this.state.submitted ? 'Next' : 'Check';
        return (
            <button type="submit" className="submit_answer" onClick={this.submit}>
                {buttonText}
            </button>
        );
    }
}
