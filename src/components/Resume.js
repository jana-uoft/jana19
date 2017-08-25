import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import RaisedButton from 'material-ui/RaisedButton';
import ArrowForwardIcon from 'material-ui-icons/ArrowForward';
import ArrowBackIcon from 'material-ui-icons/ArrowBack';
import ComputerIcon from 'material-ui-icons/Computer';
import WorkIcon from 'material-ui-icons/Work';
import PeopleIcon from 'material-ui-icons/People';
import SchoolIcon from 'material-ui-icons/School';


import technicalExperiences from './Resume/technicalExperience';
import workExperiences from './Resume/workExperience';
import volunteerExperiences from './Resume/volunteerExperience';
import educationalExperiences from './Resume/educationalExperience';


import ImportExportIcon from 'material-ui-icons/ImportExport';
import InfoIcon from 'material-ui-icons/Info';
import ArrowDownwardIcon from 'material-ui-icons/ArrowDownward';


import {
  Card,
  CardHeader,
  CardText
} from 'material-ui/Card';
import {
  Table,
  TableBody,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';


class Resume extends Component {

  constructor(props) {
    super(props);
    this.state = {
      resumeDrawerOpen: !props.mobileView
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


  getTechnicalExperience = (experience, style) => {
    return (
      <TableRow key={experience.title} style={{borderBottom : 'none'}}>
        <TableRowColumn style={style.cardListColumn}><FloatingActionButton disabled={true} disabledColor={'#374744'} iconStyle={style.cardListIcon}>{experience.icon}</FloatingActionButton></TableRowColumn>
        <TableRowColumn style={{whiteSpace: 'normal', wordWrap: 'break-word'}}>
          <h2>{experience.title}</h2>
          <p style={{textAlign: 'justify'}}>
            {experience.description}
          </p>
        </TableRowColumn>
      </TableRow>
    );
  }

  getWorkExperience = (experience, style) => {
    return (
      <TableRow key={experience.title} style={{borderBottom : 'none'}}>
        <TableRowColumn style={style.cardListColumn}><FloatingActionButton disabled={true} disabledColor={'#374744'} iconStyle={style.cardListIcon}>{experience.icon}</FloatingActionButton></TableRowColumn>
        <TableRowColumn style={{whiteSpace: 'normal', wordWrap: 'break-word'}}>
          <h2 style={{marginBottom: 0}}>
            <div style={{display: 'inline-block'}}>
              {experience.title}
            </div>
            <div style={{marginTop: 0, marginBottom: 5}}>
              <span style={{fontSize: 12}}>{experience.company} : &nbsp; {experience.duration}</span>
            </div>  
          </h2>       
          <p style={{textAlign: 'justify', marginTop: 0}}>
            {experience.description} &nbsp;
            {experience.website!==undefined ? <a style={{color: "#02dba1", textDecoration: 'none'}} href={experience.website} target="_blank">Visit website</a> : null}
            {experience.project!==undefined ? <a style={{color: "#02dba1", cursor: 'pointer'}} onClick={()=>{}} target="_blank">View work</a> : null}
          </p>
        </TableRowColumn>
      </TableRow>
    );
  }

  render() {

    const mobileView = this.props.mobileView;

    const style = {
      cardTitleIcon: {
        height: mobileView ? 25 : 50, 
        width: mobileView ? 25 : 50
      },
      cardTitle: {
        fontSize: mobileView ? 25 : 30
      },
      cardListColumn: {
        width: mobileView ? 17 : 35
      },
      cardListIcon: {
        height: mobileView ? 40 : 50, 
        width: mobileView ? 40 : 50,
        fill: '#00c19e'
      },
    }


    let technicalExperienceTitle = (<div><ComputerIcon style={style.cardTitleIcon} color={'#0b8ea3'}/> Technical Experience</div>);
    let technicalExperience = (
      <Card initiallyExpanded={true}>
        <CardHeader
          title={technicalExperienceTitle}
          titleStyle={style.cardTitle}
          showExpandableButton={true}
          actAsExpander={true}
          style={{paddingBottom: 5}}
        />
        <CardText expandable={true} style={{padding: 0}}>
          <Table selectable={false}>
            <TableBody displayRowCheckbox={false}>
              {technicalExperiences.map((value)=>this.getTechnicalExperience(value, style))}
            </TableBody>
          </Table>
        </CardText>
      </Card>
    );

    let workExperienceTitle = (<div><WorkIcon style={style.cardTitleIcon} color={'#0b8ea3'}/> Work Experience</div>);
    let workExperience = (
      <Card initiallyExpanded={true}>
        <CardHeader
          title={workExperienceTitle}
          titleStyle={style.cardTitle}
          showExpandableButton={true}
          actAsExpander={true}
          style={{paddingBottom: 5}}
        />
        <CardText expandable={true} style={{padding: 0}}>
          <Table selectable={false}>
            <TableBody displayRowCheckbox={false}>
              {workExperiences.map((value)=>this.getWorkExperience(value, style))}
            </TableBody>
          </Table>
        </CardText>
      </Card>
    );

    let volunteerExperienceTitle = (<div><PeopleIcon style={style.cardTitleIcon} color={'#0b8ea3'}/> Volunteer Experience</div>);
    let volunteerExperience = (
      <Card initiallyExpanded={true}>
        <CardHeader
          title={volunteerExperienceTitle}
          titleStyle={style.cardTitle}
          showExpandableButton={true}
          actAsExpander={true}
          style={{paddingBottom: 5}}
        />
        <CardText expandable={true} style={{padding: 0}}>
          <Table selectable={false}>
            <TableBody displayRowCheckbox={false}>
              {volunteerExperiences.map((value)=>this.getWorkExperience(value, style))}
            </TableBody>
          </Table>
        </CardText>
      </Card>
    );

    let educationalExperienceTitle = (<div><SchoolIcon style={style.cardTitleIcon} color={'#0b8ea3'}/> Education </div>);
    let educationalExperience = (
      <Card initiallyExpanded={true}>
        <CardHeader
          title={educationalExperienceTitle}
          titleStyle={style.cardTitle}
          showExpandableButton={true}
          actAsExpander={true}
          style={{paddingBottom: 5}}
        />
        <CardText expandable={true} style={{padding: 0}}>
          <Table selectable={false}>
            <TableBody displayRowCheckbox={false}>
              {educationalExperiences.map((value)=>this.getWorkExperience(value, style))}
            </TableBody>
          </Table>
        </CardText>
      </Card>
    );


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

    let resumeDrawerCloseIcon = (
      <FloatingActionButton 
        style={{margin: 5}}
        onClick={()=>this.toggleDrawer(false)}
        backgroundColor={"#374744"}
        iconStyle={{fill: '#00c19e'}}
      >
        <ArrowForwardIcon />
      </FloatingActionButton>
    );
    if (this.props.width > 1200){
      resumeDrawerCloseIcon = null;
    }

    return (
      <div>
        {this.props.mobileView ? 
          <div style={{ textAlign: 'center', ...this.props.outerMarginLeft}}><span style={{color: "#fff", fontSize: 30}}>Resume</span></div>
          :
          null
        }
        {resumeDrawerOpenIcon}
        <div id="resume" style={{paddingTop: this.props.paddingTop, ...this.props.contentStyle}}>
          {technicalExperience}
          <br/>
          {workExperience}
          <br/>
          {volunteerExperience}
          <br/>
          {educationalExperience}
        </div>
        <Drawer 
          key="ResumeSidebar"
          width={!this.props.mobileView ? '30%' : '100%'} 
          openSecondary={true} 
          open={this.state.resumeDrawerOpen}
          onRequestChange={()=>this.toggleDrawer(false)}
          docked={!this.props.mobileView}
          disableSwipeToOpen={true} 
          containerStyle={this.props.mobileView ? {top: 65} : {top: 8}}
        >
          {resumeDrawerCloseIcon}
          <div style={{textAlign: 'center', padding: 0}}>
            <InfoIcon/>
            <h4>
              A full stack software engineer with 4 years of professional experience in many programming languages, frameworks, and environments.
            </h4>
            <ImportExportIcon/>
            <h4>
              Expert in translating business requirements into robust technical solutions that are delivered on time..
            </h4>
            <ImportExportIcon/>
            <h4>
              2 years working remotely as both a solo full stack developer as well as a member of a geographically distributed Agile team.
            </h4>
            <ImportExportIcon/>
            <h4>
              Currently seeking any contract work for web development, hosting & server setup and application development.
            </h4>
            <ArrowDownwardIcon/><br/>
            <a href="https://www.jana19.org/resume_JanaRajakumar.pdf" target="_blank">
              <RaisedButton label="Download Resume" primary={true}/>
            </a>
          </div>
        </Drawer>
      </div>
    );
  }
}

export default Resume;
