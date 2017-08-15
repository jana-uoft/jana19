import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import { List, ListItem } from 'material-ui/List';
import HomeIcon from 'material-ui-icons/Home';
import WorkIcon from 'material-ui-icons/Work';
import SchoolIcon from 'material-ui-icons/School';
import DeveloperModeIcon from 'material-ui-icons/DeveloperMode';
import ContactMailIcon from 'material-ui-icons/ContactMail';


class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true
    }
  }

  toggleDrawer = (open=false) => {
    this.setState({ open });
  };


  render() {

    const ListItems = (
      <div>
        <ListItem primaryText="Home" leftIcon={<HomeIcon />} />
        <ListItem primaryText="Work" leftIcon={<WorkIcon />} />
        <ListItem primaryText="Education" leftIcon={<SchoolIcon />} />
        <ListItem primaryText="Projects" leftIcon={<DeveloperModeIcon />} />
        <ListItem primaryText="Contact" leftIcon={<ContactMailIcon />} />
      </div>
    );

    return (
      <Drawer
        open={this.state.open}
        onRequestClose={this.toggleDrawer}
        onClick={this.handleLeftClose}
        docked={true}

      >
        <List>
          {ListItems}
        </List>
      </Drawer>
    );
  }
}


export default Sidebar;