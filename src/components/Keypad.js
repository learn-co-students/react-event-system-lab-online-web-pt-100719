import React, { Component } from 'react';

export default class Keypad extends Component {
    passwordMessage = () => {
        console.log("Entering password...")
    }
    render(){
        return(<input onKeyUp={this.passwordMessage} type="password" />)
    }
}
