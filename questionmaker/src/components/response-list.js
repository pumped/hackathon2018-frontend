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
            <ul class="list-unstyled">
                {this.props.responses.map(function (responseOpts, index) {
                    return <li key={index} value={responseOpts.value}><ResponseButton response={responseOpts} setSelectedResponseValue={self.setSelectedResponseValue.bind(self)}/></li>;
                })}
            </ul>
        );
    }
}
