import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ComputerIcon from 'material-ui-icons/Computer';
import CodeIcon from 'material-ui-icons/Code';
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

    }
  }


  render() {
    let technicalExperienceIcon = (<ComputerIcon style={{height: 50, width: 50}} color={'#0b8ea3'}/>);
    let technicalExperience = (
      <Card initiallyExpanded={true}>
        <CardHeader
          title={technicalExperienceIcon}
          subtitle={"Technical Experience"}
          subtitleStyle={{fontSize: 30}}
          actAsExpander={true}
          showExpandableButton={true}
        />
        <CardText expandable={true}>
          <Table selectable={false}>
            <TableBody displayRowCheckbox={false}>
              <TableRow >
                <TableRowColumn style={{width: 35}}><FloatingActionButton disabled={true} disabledColor={'#374744'} iconStyle={{fill: '#00c19e'}}><CodeIcon/></FloatingActionButton></TableRowColumn>
                <TableRowColumn style={{ whiteSpace: 'normal', wordWrap: 'break-word'}}>
                  <h2>Languages and Frameworks</h2>
                  <p>
                    Fluent in modern JavaScript (ES6/7, Babel, JSX, TypeScript, Flow), C#, C++, Java, Python and most common markup languages and data exchange formats (HTML5, CSS, JavaScript, AJAX, WebSockets, JSON, REST, GraphQL, XML, XSLT, SOAP, RSS, Oauth, JWT, OData)
                  </p>
                </TableRowColumn>
              </TableRow>
            </TableBody>
          </Table>
        </CardText>
      </Card>
    );

    return (
      <div id="resume">
        <Drawer width={500} openSecondary={true} open={true} >

        </Drawer>

        {technicalExperience}
      </div>
    );
  }
}

export default Resume;
