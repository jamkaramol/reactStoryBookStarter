import React from 'react';


export default class InputBoxDemo extends React.Component {

    render() {
        return (<React.Fragment>
            <input type="text" name="nameInput" placeholder="enter your name" value={this.props.name} /> 
            </React.Fragment>
        )
    }
};