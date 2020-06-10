import React from 'react';

// CounterDisplay.js
class CounterDisplay extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.value >=13 && nextProps.value <16) return false;
    return true;
  }

  render() {
    return <div> counter: {this.props.value}</div>;
  }
}

export default CounterDisplay;