import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import {Card, CardActions, CardHeader, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import {GridList, GridTile} from 'material-ui/GridList';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ArrowBackIcon from 'material-ui-icons/ArrowBack';
import Chip from 'material-ui/Chip';
import Lightbox from 'react-image-lightbox';
import projectsList from './Project/projectsList';




class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterDrawerOpen: !props.mobileView,
      filterData: [],
      images: [],
      photoIndex: 0,
      isGalleryOpen: false
    }
  }


  componentWillReceiveProps(nextProps) {
    let filterDrawerOpen = nextProps.width<=1200 ? false : !nextProps.mobileView;
    this.setState({ filterDrawerOpen });
  }

  componentDidMount() {
    let chips = new Set();
    for (let project of projectsList) {
      for (let chip of project.chips) {
        chips.add(chip);
      }
    }
    let filterData = Array.from(chips);
    filterData = filterData.map((item, index) => {
      return {key: index, label: item, backgroundColor: "#454549"}
    })
    this.setState({filterData});
  }

  toggleDrawer = (filterDrawerOpen) => {
    if (filterDrawerOpen===undefined){
      this.setState({ filterDrawerOpen: !this.state.filterDrawerOpen });
    } else {
      this.setState({ filterDrawerOpen });
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

  showImageGallery = (images) => {
    this.setState({images, isGalleryOpen: true, filterDrawerOpen: false});
  }

  renderChip = (data) => {
    return (
      <Chip
        key={data.key}
        backgroundColor={data.backgroundColor}
        style={{margin: 'auto', marginTop: 5, marginBottom: 5}}
        onTouchTap={()=>this.toggleFilter(data.key)}
      >
        {data.label}
      </Chip>
    );
  }

  renderProject = (project) => {
    return (
      <GridTile rows={-1} key={project.title}>
        <Card>
          <CardHeader
            title={project.title}
            subtitle={project.subtitle}
            actAsExpander={true}
            showExpandableButton={true}
          />
          <CardTitle style={{textAlign: 'center'}}>
            <img 
              src={project.images[0]} 
              alt={project.title}
              style={{width: '70%', height: '50%', cursor: 'pointer'}} 
              onTouchTap={()=>{this.showImageGallery(project.images)}}
            />
          </CardTitle>
          <CardText expandable={true}>
            {project.desc}
          </CardText>
          <CardActions>
            <FlatButton label="GitHub" secondary />
            <FlatButton label="Website" secondary />
          </CardActions>
        </Card>
      </GridTile>
    );
  }


  render() {

    let filterDrawerOpenIcon;
    if (!this.state.filterDrawerOpen) {
      filterDrawerOpenIcon = (
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

    let columns = 4;
    if (this.props.width <= 1200)
      columns = 3
    if (this.props.width <= 768)
      columns = 2
    if (this.props.width <= 500)
      columns = 1

    return (
      <div style={this.props.contentStyle}>
        {this.props.mobileView ? 
          <div style={{ textAlign: 'center'}}><span style={{color: "#fff", fontSize: 30}}>Projects</span></div>
          :
          null
        }
        {filterDrawerOpenIcon}
        <GridList cols={columns} style={{paddingTop: this.props.paddingTop}}>
          {projectsList.map(this.renderProject)}
        </GridList>
        <Drawer 
          key="ProjectSidebar"
          width={!this.props.mobileView ? '20%' : '60%'} 
          openSecondary={true} 
          open={this.state.filterDrawerOpen}
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
        {this.state.isGalleryOpen &&
          <Lightbox
            mainSrc={this.state.images[this.state.photoIndex]}
            nextSrc={this.state.images[(this.state.photoIndex + 1) % this.state.images.length]}
            prevSrc={this.state.images[(this.state.photoIndex + this.state.images.length - 1) % this.state.images.length]}
            onCloseRequest={() => {
              let filterDrawerOpen = this.props.width<=1200 ? false : !this.props.mobileView;
              this.setState({ isGalleryOpen: false, filterDrawerOpen });
            }}
            onMovePrevRequest={() => this.setState({
                photoIndex: (this.state.photoIndex + this.state.images.length - 1) % this.state.images.length,
            })}
            onMoveNextRequest={() => this.setState({
                photoIndex: (this.state.photoIndex + 1) % this.state.images.length,
            })}
            reactModalStyle={!this.props.mobileView ? {overlay : {left: 256}} : {}}
          />
        }
      </div>
    );
  }
}

export default Projects;
