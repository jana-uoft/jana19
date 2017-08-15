import React, { Component } from 'react';
import Sidebar from './components/Sidebar';
import Animation from './components/Animation';
import Home from './components/Home';
import About from './components/About';
import Resume from './components/Resume';


class App extends Component {
  render() {
    return (
      <div>
        <Sidebar/>
        <Animation/>
        <Home/>
        <About/>
        <Resume/>
      </div>
    );
  }
}

export default App;
