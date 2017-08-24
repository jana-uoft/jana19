import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import {Card, CardActions, CardHeader, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import {GridList, GridTile} from 'material-ui/GridList';
import STCLogo from '../assets/stc.png';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ArrowBackIcon from 'material-ui-icons/ArrowBack';
import Chip from 'material-ui/Chip';
import Avatar from 'material-ui/Avatar';




class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resumeDrawerOpen: !props.mobileView,
      filterData: [
        {key: 0, label: 'Angular', backgroundColor: "#454549"},
        {key: 1, label: 'JQuery', backgroundColor: "#454549"},
        {key: 2, label: 'Polymer', backgroundColor: "#454549"},
        {key: 3, label: 'ReactJS', backgroundColor: "#454549"},
      ]
    }
  }


  componentWillReceiveProps(nextProps) {
    let resumeDrawerOpen = !nextProps.mobileView;
    if (nextProps.width <= 1200) {
      resumeDrawerOpen = false;
    }
    this.setState({ resumeDrawerOpen });
  }

  toggleDrawer = (resumeDrawerOpen) => {
    if (resumeDrawerOpen===undefined){
      this.setState({ resumeDrawerOpen: !this.state.resumeDrawerOpen });
    } else {
      this.setState({ resumeDrawerOpen });
    }
  }

  toggleFilter = (key) => {
    let filterData = this.state.filterData.map((item)=>{
      let result = {...item}
      if (item.key===key){
        result.backgroundColor = result.backgroundColor==="#05c4c1" ? "#454549" : "#05c4c1";
      }
      return result;
    });
    this.setState({ filterData });
  }

  renderChip = (data) => {
    return (
      <Chip
        key={data.key}
        backgroundColor={data.backgroundColor}
        style={{margin: 'auto', marginTop: 5, marginBottom: 5, cursor: "pointer"}}
        onClick={()=>this.toggleFilter(data.key)}
      >
        {data.label}
      </Chip>
    );
  }


  render() {

    let resumeDrawerOpenIcon;
    if (!this.state.resumeDrawerOpen) {
      resumeDrawerOpenIcon = (
        <FloatingActionButton 
          style={{right: 8, top: 8, position: 'fixed', zIndex: 999}}
          onClick={()=>this.toggleDrawer()}
          backgroundColor={"#374744"}
          iconStyle={{fill: '#00c19e'}}
        >
          <ArrowBackIcon />
        </FloatingActionButton>
      );
    }

    const projects = ([
      <GridTile rows={-1} key={1}>
        <Card>
          <CardHeader
            title="Card title"
            subtitle="Card subtitle"
            actAsExpander={true}
            showExpandableButton={true}
          />
          <CardTitle style={{textAlign: 'center'}}>
            <img src={STCLogo} style={{width: '70%', height: '50%'}}/>
          </CardTitle>
          <CardText expandable={true}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
            Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
            Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
          </CardText>
          <CardActions>
            <FlatButton label="Action1" />
            <FlatButton label="Action2" />
          </CardActions>
        </Card>
      </GridTile>,

    ]);

    let columns = 4;
    if (this.props.width <= 1200)
      columns = 3
    if (this.props.width <= 768)
      columns = 2
    if (this.props.width <= 500)
      columns = 1


    return (
      <div style={this.props.contentStyle}>
        <div style={{ textAlign: 'center'}}><span style={{color: "#fff", fontSize: 30}}>Projects</span></div>
        {resumeDrawerOpenIcon}
        <GridList cols={columns} style={{paddingTop: this.props.paddingTop}}>
          {projects}
        </GridList>
        <Drawer 
          key="ProjectSidebar"
          width={!this.props.mobileView ? '20%' : '60%'} 
          openSecondary={true} 
          open={this.state.resumeDrawerOpen}
          onRequestChange={()=>this.toggleDrawer(false)}
          docked={this.props.width > 1200}
          disableSwipeToOpen={true} 
          containerStyle={{ backgroundColor: '#2f2f33' }}

        >
          <div style={{textAlign: 'center', padding: 0}}>
            <h4> Filter Projects </h4>
            <div style={{ display: 'flex', flexWrap: 'wrap'}}>
              {this.state.filterData.map(this.renderChip)}
            </div>
          </div>
        </Drawer>
      </div>
    );
  }
}

export default Projects;
