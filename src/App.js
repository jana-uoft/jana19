import React, { Component } from 'react';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import Resume from './components/Resume';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      drawerOpen: true,
      activePage: "Home",
      height: 0
    }
  }

  setActivePage = (activePage) => this.setState({activePage});

  updateDimensions = () => this.setState({ height: window.innerHeight });

  componentWillMmount() { window.removeEventListener("resize", this.updateDimensions) }

  componentDidMount() { this.updateDimensions() }

  componentWillUnmount() { window.removeEventListener("resize", this.updateDimensions) }


  render() {

    const contentStyle = {  transition: 'margin-left 450ms cubic-bezier(0.23, 1, 0.32, 1)' };
    if (this.state.drawerOpen) {
      contentStyle.marginLeft = 256;
    }

    let pageToRender;
    switch (this.state.activePage) {
      case "Resume": {
        pageToRender = <Resume/>;
        contentStyle.marginRight = 500;
        break;
      }
      case "Education": {
        pageToRender = <Education/>;
        break;
      }
      case "Projects": {
        pageToRender = <Projects/>;
        break;
      }
      case "Contact": {
        pageToRender = <Contact/>;
        break;
      }
      default: {
        pageToRender = <Home height={this.state.height} />;
        contentStyle.marginLeft = 0;
        break;
      }
    }


    return (
      <div style={contentStyle}>
        <Sidebar 
          setActivePage={this.setActivePage}
          activePage={this.state.activePage} 
        />
        {pageToRender}
      </div>
    );
  }
}

export default App;
