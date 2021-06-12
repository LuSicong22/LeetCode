import React, { Component } from 'react';
import './ClearButton.css';

class Input extends Component {
    render() {
        return (
            <div className="clear-btn">
                {this.props.children}
            </div>
        );
    }

}

export default Input;
