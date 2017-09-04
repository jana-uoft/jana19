import React, { Component } from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import $ from "jquery";
import {Card, CardMedia, CardTitle} from 'material-ui/Card';
import { SocialIcon } from 'react-social-icons';




class Social extends Component {
  constructor(props) {
    super(props);
    this.state = {
      instagramPhotos: [],
      activeOverlay: "",
    }
  }

  componentWillMount() {
    this.fetchPhotos().then((result)=>{
      let instagramPhotos = [];
      for (let data of result.data){
        if (data.carousel_media) {
          for (let pic of data.carousel_media) {
            if (pic.images)
              instagramPhotos.push({url: pic.images.standard_resolution.url, caption: data.caption.text})
          }
        } else {
          instagramPhotos.push({url: data.images.standard_resolution.url, caption: data.caption.text})
        }
      }
      this.setState({ instagramPhotos });
    })
    
  }

  fetchPhotos = () => {
    return $.ajax({
        url: 'https://api.instagram.com/v1/users/self/media/recent/?access_token=508727293.1677ed0.69d96553324f4468917af711a368260b&count=10',
        type: 'GET',
        dataType: "jsonp"
    });
  }

  toggleOverlay = (activeOverlay, click) => {
    if (click==="click" && !this.props.mobileView)
      return;
    if (this.state.activeOverlay===activeOverlay)
      this.setState({ activeOverlay: "" });
    else
      this.setState({ activeOverlay });
  }


  renderInstagramPic = (pic) => {
    return (
      <GridTile rows={-1} key={pic.url}>
        <Card>
          <CardMedia overlay={this.state.activeOverlay===pic.url ? <CardTitle subtitle={pic.caption} /> : null } onClick={()=>this.toggleOverlay(pic.url)}>
            <img src={pic.url} alt={pic.caption} onMouseOver={()=>this.toggleOverlay(pic.url)} onTouchTap={()=>this.toggleOverlay(pic.url, "click")}/>
          </CardMedia>
        </Card>
      </GridTile>
    );
  }

  render() {

    let screenSizes = {2:[0,768], 3:[769,1200], 4:[1200,1920], 5:[1920,2500], 6:[2500,3200], 7:[3200,9999]}
    let columns;
    for (let [col, range] of Object.entries(screenSizes)) {
      if ((range[0]<this.props.width)===(this.props.width<=range[1])){
        columns=parseInt(col, 10);
        break;
      } 
    }

    return (
      <div style={this.props.contentStyle}>
        {this.props.mobileView ? 
          <div style={{ textAlign: 'center'}}><span style={{color: "#fff", fontSize: 30}}>Social</span></div>
          :
          null
        }
        <br/>
        <GridList 
          cols={6} 
          style={{paddingTop: this.props.paddingTop, textAlign: "center"}}
        >
          <GridTile rows={-1} key={"instagram"}>
            <SocialIcon url="https://www.instagram.com/jana_._._._/" />
          </GridTile>
          <GridTile rows={-1} key={"twitter"}>
            <SocialIcon url="https://twitter.com/janastc19" />
          </GridTile>
          <GridTile rows={-1} key={"facebook"}>
            <SocialIcon url="https://www.facebook.com/Jana.JR.19" />
          </GridTile>
          <GridTile rows={-1} key={"linkedIn"}>
            <SocialIcon url="https://www.linkedin.com/in/jana19/" />
          </GridTile>
          <GridTile rows={-1} key={"github"}>
            <SocialIcon url="https://github.com/jana-uoft" />
          </GridTile>
          <GridTile rows={-1} key={"snapchat"}>
            <SocialIcon url="https://www.snapchat.com/add/jana.stc" />
          </GridTile>
        </GridList>
        <br/>
        <GridList 
          cols={columns} 
          style={{paddingTop: this.props.paddingTop}}
          padding={20}
        >
          {this.state.instagramPhotos.map(this.renderInstagramPic)}
          <GridTile rows={-1} key={"socialLinks"}>

          </GridTile>
        </GridList>
      </div>
    );
  }
}

export default Social;


