import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import { List, ListItem } from 'material-ui/List';
import HomeIcon from 'material-ui-icons/Home';
import ResumeIcon from 'material-ui-icons/Assignment';
import GroupIcon from 'material-ui-icons/Group';
import DeveloperModeIcon from 'material-ui-icons/DeveloperMode';
import ContactMailIcon from 'material-ui-icons/ContactMail';
import ProfilePic from '../assets/avatar.jpg';
import Avatar from 'material-ui/Avatar';



class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }


  render() {

    const MenuItems = (
      <List>
        <ListItem 
          primaryText="Home" 
          leftIcon={<HomeIcon />} 
          style={this.props.activePage==="Home"? {backgroundColor: '#39424f'} : null} 
          onClick={()=>this.props.setActivePage("Home")} 
        />
        <ListItem 
          primaryText="Resume" 
          leftIcon={<ResumeIcon />} 
          style={this.props.activePage==="Resume"? {backgroundColor: '#39424f'} : null} 
          onClick={()=>this.props.setActivePage("Resume")} 
        />
        <ListItem 
          primaryText="Social" 
          leftIcon={<GroupIcon />} 
          style={this.props.activePage==="Social"? {backgroundColor: '#39424f'} : null} 
          onClick={()=>this.props.setActivePage("Social")} 
        />
        <ListItem 
          primaryText="Projects" 
          leftIcon={<DeveloperModeIcon />} 
          style={this.props.activePage==="Projects"? {backgroundColor: '#39424f'} : null} 
          onClick={()=>this.props.setActivePage("Projects")} 
        />
        <ListItem 
          primaryText="Contact" 
          leftIcon={<ContactMailIcon />}
          style={this.props.activePage==="Contact"? {backgroundColor: '#39424f'} : null} 
          onClick={()=>this.props.setActivePage("Contact")}  
        />
      </List>
    );

    return (
      <Drawer
        key="Sidebar"
        open={this.props.open}
        onRequestChange={()=>this.props.toggleDrawer(false)}
        docked={this.props.docked}
        containerStyle={{ backgroundColor: '#161719' }}
        disableSwipeToOpen={true}

      >
        <div style={{textAlign: "center", marginTop: 10}} >
          <Avatar src={ProfilePic} size={150} />
        </div>
        {MenuItems}
       </Drawer>
    );
  }
}


export default Sidebar;