import React, { Component } from 'react';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import Resume from './components/Resume';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ArrowForwardIcon from 'material-ui-icons/ArrowForward';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      drawerOpen: true,
      activePage: "Home",
      mobileView: false,
      height: window.innerHeight,
      width: window.innerWidth
    }
  }

  setActivePage = (activePage) => {
    let drawerOpen = !this.state.mobileView;
    this.setState({activePage, drawerOpen});
  }

  updateDimensions = () => {
    let drawerOpen = window.innerWidth>768;
    let mobileView = window.innerWidth<=768;
    this.setState({ height: window.innerHeight, width: window.innerWidth, drawerOpen, mobileView });
  }

  componentWillMount() { this.updateDimensions() }

  componentDidMount() { window.addEventListener("resize", this.updateDimensions) }

  componentWillUnmount() { window.removeEventListener("resize", this.updateDimensions) }

  toggleDrawer = (drawerOpen) => {
    if (drawerOpen===undefined) this.setState({ drawerOpen: !this.state.drawerOpen });
    else this.setState({ drawerOpen });
  }


  render() {

    const contentStyle = {  transition: 'margin-left 450ms cubic-bezier(0.23, 1, 0.32, 1)' };
    if (this.state.drawerOpen && !this.state.mobileView) {
      contentStyle.marginLeft = 256;
    }

    let pageToRender;
    switch (this.state.activePage) {
      case "Resume": {
        pageToRender = (
          <Resume 
            mobileView={this.state.mobileView}
            paddingTop={!this.state.mobileView ? 0 : 25}
            width={this.state.width}
          />
        );
        if (!this.state.mobileView)
          contentStyle.paddingRight = "30%";
        if (this.state.width <= 1200)
          contentStyle.paddingRight = 0;
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
        contentStyle.marginRight = 40;
        break;
      }
    }


    return (
      <div style={contentStyle}>
        <Sidebar 
          setActivePage={this.setActivePage}
          activePage={this.state.activePage}
          docked={!this.state.mobileView}
          open={this.state.drawerOpen}
          toggleDrawer={this.toggleDrawer}
        />
        {(this.state.mobileView && !this.state.drawerOpen) ? 
          <FloatingActionButton 
            style={{position: 'fixed', zIndex: 999}}
            onClick={()=>this.toggleDrawer()}
            backgroundColor={"#374744"}
            iconStyle={{fill: '#00c19e'}}
          >
            <ArrowForwardIcon/>
          </FloatingActionButton>
          :
          null
        }

        {pageToRender}
      </div>
    );
  }
}

export default App;
