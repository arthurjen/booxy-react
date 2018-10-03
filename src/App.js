import React, { Component } from 'react';
import Boox from './Boox';

class App extends Component {
  state = {  }
  render() { 
    return (
      <main>
        <h1>booxy</h1>
        <section>
          <Boox/>
        </section>
      </main>
    );
  }
}
 
export default App;
