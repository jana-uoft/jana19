import React, { Component } from 'react';
import {Card, CardActions, CardTitle, CardText} from 'material-ui/Card';
import ContactMe from "../assets/contact_me.png";
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class Contact extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      nameError: null,
      subject: "",
      subjectError: null,
      message: "",
      messageError: null,
      sent: false
    }
  }

  onChange = (event, value, field) => {
    this.setState({ [field]: value }, ()=>{this.runValidations()});
  }

  runValidations = () => {
    let nameError, subjectError, messageError;
    if (this.state.name===""){
      nameError = "Hello stranger, please enter your name";
    }
    if (this.state.subject===""){
      subjectError = "subject is required";
    }
    if (this.state.message===""){
      messageError = "What do you want to talk about random person?";
    }
    this.setState({ nameError, subjectError, messageError})
  }


  sendMessage = (event) => {
    if (!this.isValid()) event.preventDefault();
    else this.setState({ sent: true })
  }

  cancelMessage = () => {
    this.setState({       
      name: "",
      nameError: null,
      subject: "",
      subjectError: null,
      message: "",
      messageError: null,
      sent: false
    });
  }

  isValid = () => {
    if (this.state.nameError)
      return false;
    if (this.state.subjectError)
      return false;
    if (this.state.messageError)
      return false;
    if (this.state.name==="" || this.state.subject==="" || this.state.message==="" )
      return false;
    return true;
  }


  render() {

    return (
      <div style={{...this.props.contentStyle}}>
        {this.props.mobileView ? 
          <div style={{ textAlign: 'center'}}><span style={{color: "#fff", fontSize: 30}}>Contact</span></div>
          :
          null
        }
        <Card style={{marginTop: this.props.paddingTop}}>
          <CardTitle style={{textAlign: 'center'}}>
            <img 
              src={ContactMe} 
              alt="contact_me"
              style={{width: '50%'}} 
            />
          </CardTitle>
          <CardText style={{textAlign: "justify"}}>
            {this.state.sent ? <h3 style={{textAlign: "center"}}>Thank you for getting in touch. I will get back to you soon.</h3> : null}
            <TextField
              value={this.state.name}
              floatingLabelText="Your Name"
              fullWidth={true}
              onChange={(event, value)=>this.onChange(event, value, "name")}
              errorText={this.state.nameError}
            />
            <TextField
              value={this.state.subject}
              floatingLabelText="Re: Subject"
              fullWidth={true}
              onChange={(event, value)=>this.onChange(event, value, "subject")}
              errorText={this.state.subjectError}
            />
            <TextField
              value={this.state.message}
              floatingLabelText="Your message"
              fullWidth={true}
              onChange={(event, value)=>this.onChange(event, value, "message")}
              rows={4}
              errorText={this.state.messageError}
            />
          </CardText>
          <CardActions>
            <a onClick={this.sendMessage} href={`mailto:jana.stc@gmail.com?Subject=${this.state.subject}&body=${this.state.message}`} target="_blank"><RaisedButton label="Send Message" primary disabled={!this.isValid()} /></a>
            <RaisedButton label="Cancel" secondary onTouchTap={this.cancelMessage} />
          </CardActions>
        </Card>
      </div> 
    );
  }
}

export default Contact;
