import React, { Component } from 'react';
import LeaveTransitionGroup from './LeaveTransitionGroup';
import LeaveTweenItem from './LeaveTweenItem';

export default class LeaveItem extends Component {
  render() {
    const {containerProps = {}, ...props} = this.props;
    return (
      <LeaveTransitionGroup {...containerProps}>
        {typeof props.children !== "function" ? null :
          <LeaveTweenItem {...props} key={props.itemKey} />
        }
      </LeaveTransitionGroup>
    );
  }
}

