import React, { Component } from 'react';
import styles from './Boox.css';

class Boox extends Component {
  state = {
    clicked: false
  };

  render() { 
    const { clicked } = this.state;
    return (
      <div
        className={styles.boox}
        style={clicked ? { background: 'white' } : null}
        onClick={() => this.setState({ clicked: true })}
      >
        {
          clicked &&
          [...Array(4)].map((n, i) => (
            <Boox key={i}/>
          ))
        }
      </div>
    );
  }
}
 
export default Boox;