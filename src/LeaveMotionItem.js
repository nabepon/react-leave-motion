import React, { Component } from 'react';
import { Motion } from 'react-motion';

export default class LeaveMotionItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      leaving: false
    };
  }

  componentWillLeave(callback){
    this.setState({
      leaving: true
    });

    this.onRest = (...args) => {
      this.props.onRest && this.props.onRest(...args);
      callback();
    };
  }

  componentDidLeave(){
    this.props.didLeave && this.props.didLeave();
  }

  render() {
    return (
      <Motion
        defaultStyle={this.props.defaultStyle}
        style={this.state.leaving ? this.props.willLeave() : this.props.style}
        didLeave={this.props.didLeave}
        onRest={this.onRest}>
        {this.props.children}
      </Motion>
    );
  }
}
