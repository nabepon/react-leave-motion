import React, { Component } from 'react';
import Tween from 'react-tween';

export default class LeaveTween extends Component {
  constructor(props) {
    super(props);
    this.state = {
      enterOrAppear: true,
      leaving: false
    };
  }

  componentDidMount() {
    this.setState({
      enterOrAppear: false,
      leaving: false
    });
  }

  componentWillAppear(callback){
    this.setState({
      enterOrAppear: false,
      leaving: false
    });
    callback();
  }

  componentWillEnter(callback){
    this.setState({
      enterOrAppear: false,
      leaving: false
    });
    callback();
  }

  componentWillLeave(callback){
    this.setState({
      enterOrAppear: false,
      leaving: true
    });

    setTimeout(()=>{
      this.props.onRest && this.props.onRest();
      callback();
    }, (this.props.leaveDelay || 0) + (this.props.leaveDuration || 500));
  }

  componentDidLeave(){
    this.props.didLeave && this.props.didLeave();
  }

  render() {
    const state = this.state;
    const props = this.props;
    const style = state.leaving ? props.willLeave()
      : state.enterOrAppear ? props.defaultStyle
      : props.style;

    const duration = state.leaving ? props.leaveDuration : props.duration;
    const delay = state.leaving ? props.leaveDelay : props.delay;

    return (
      <Tween
        {...props}
        style={style}
        duration={duration || duration === 0 ? duration : 500}
        delay={delay || delay === 0 ? delay : 0} />
    );
  }
}

