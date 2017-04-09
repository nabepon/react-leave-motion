import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import LeaveMotion from '../../src/LeaveMotion';
import LeaveMotionItem from '../../src/LeaveMotionItem';
import LeaveTween from '../../src/LeaveTween';
import LeaveTweenItem from '../../src/LeaveTweenItem';
import LeaveTransitionGroup from '../../src/LeaveTransitionGroup';
import css from './style.scss';

export default class Demo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: ["k1", "k2", "k3", "k4", "k5"],
      currentItem: "k1",
      currentItemIndex: 0,
    };

    ["handleClick"].forEach(
      key => (this[key] = this[key].bind(this))
    );
  }

  handleClick() {
    console.log('handleClick');
    const {currentItemIndex, items} = this.state;
    const itemIndex =  currentItemIndex === 0 ? items.length - 1 : currentItemIndex - 1;
    this.setState({
      currentItem: items[itemIndex],
      currentItemIndex: itemIndex,
    });
  }

  render() {
    const key = this.state.currentItem;

    // react-motionのspringを返す
    const getSpring = (val) => {
      return {
        val,
        stiffness: 170,
        damping: 26,
        precision: 0.01
      };
    };

    const motionConfig = key === 'k2' ? {
      itemKey     : key,
      defaultStyle: {left: 300, opacity: 0},
      style       : {left: getSpring(160), opacity: getSpring(1)},
      willLeave   : ()=>({left: getSpring(220), opacity: getSpring(0)}),
      onRest      : ()=>{},
    }:{
      itemKey     : key,
      defaultStyle: {left: 0, opacity: 0},
      style       : {left: getSpring( 60), opacity: getSpring(1)},
      willLeave   : ()=>({left: getSpring(120), opacity: getSpring(0)}),
      onRest      : ()=>{},
    };

    const tweenConfig = key === 'k2' ? {
      itemKey      : key,
      defaultStyle : {left: 300, opacity: 0},
      style        : {left: 160, opacity: 1},
      willLeave    : ()=>({left: 220, opacity: 0}),
      onRest       : ()=>{},
      leaveDelay   : 200,
      leaveDuration: 1000,
    }:{
      itemKey      : key,
      defaultStyle : {left:   0, opacity: 0},
      style        : {left:  60, opacity: 1},
      willLeave    : ()=>({left: 120, opacity: 0}),
      onRest       : ()=>{},
      leaveDelay   : 200,
      leaveDuration: 1000,
    };

    return (
      <div onClick={this.handleClick} className={css.demoContainer}>
        <LeaveMotion {...motionConfig} containerProps={{className:css.leaveMotionContainer, component:'i'}}>
          {key === "k4" ? null : style => <span style={{top: "200px", ...style}}>Motion {motionConfig.itemKey}</span>}
        </LeaveMotion>
        <LeaveTween {...tweenConfig} containerProps={{className:css.leaveTweenContainer, component:'div'}}>
          {key === "k4" ? null : style => <span style={{top: "240px", ...style}}>Tween {tweenConfig.itemKey}</span>}
        </LeaveTween>

        <LeaveTransitionGroup className={css.leaveTransitionGroupContainer} component="strong">
          <LeaveMotionItem {...motionConfig} key={key + 1}>
            {style => <span style={{top: "300px",...style}}>MotionItem {key}</span>}
          </LeaveMotionItem>

          <LeaveTweenItem {...tweenConfig} key={key}>
            {style => <span style={{top: "340px", ...style}}>TweenItem {key}</span>}
          </LeaveTweenItem>
        </LeaveTransitionGroup>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, document.getElementById('app'));
