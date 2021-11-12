import React, { Component } from 'react';
import Title from './components/Title/Title';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      ideas: []
    }
  }

  render() {
    return(
      <main className='App'>
        <Title />
      </main>
    )
  }
}

export default App;
