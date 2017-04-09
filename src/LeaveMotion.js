import React, { Component } from 'react';
import LeaveTransitionGroup from './LeaveTransitionGroup';
import LeaveMotionItem from './LeaveMotionItem';

export default class LeaveMotion extends Component {
  render() {
    const {containerProps = {}, ...props} = this.props;
    return (
      <LeaveTransitionGroup {...containerProps}>
        {typeof props.children !== "function" ? null :
          <LeaveMotionItem {...props} key={props.itemKey} />
        }
      </LeaveTransitionGroup>
    );
  }
}

