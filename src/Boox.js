import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group';

class Boox extends Component {
  state = {
    clicked: false
  };

  render() { 
    const { clicked } = this.state;
    return (
      <div onClick={() => this.setState({ clicked: true })}>
        <CSSTransitionGroup
          transitionName="bounce"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
          style={clicked ? { background: 'white' } : null}
        >
          {
            clicked &&
            [...Array(4)].map((n, i) => (
              <Boox key={i}/>
            ))
          }
        </CSSTransitionGroup>
      </div>
    );
  }
}
 
export default Boox;