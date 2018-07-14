import React from 'react';
import '../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import ResponseButton from './response-button';

export default class ResponseList extends React.Component {
    state = {
        selectedResponseValue: ''
    };

    constructor(props) {
        super(props);
        this.setSelectedResponseValue = this.setSelectedResponseValue.bind(this);
    }

    setSelectedResponseValue(event) {
        let self = this;
        let value = event.target.value;
        this.setState({selectedResponseValue: value}, () => {
            self.props.onChange(value);
        })
    }

    // These should become interactive - each list item will be a button component that can return the value?
    render() {
        let self = this;
        return (
            <div className="question_resonse">
                {this.props.responses.map(function (responseOpts, index) {
                    return <p>
                        <ResponseButton response={responseOpts}
                                        setSelectedResponseValue={self.setSelectedResponseValue.bind(self)}/>
                    </p>;
                })}
            </div>
        );
    }
}
