import React from 'react';
import '../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';

export default class ResponseButton extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <button value={this.props.response.value} type="submit" onClick={this.props.setSelectedResponseValue}>
                {this.props.response.text}
            </button>
        );
    }
}
