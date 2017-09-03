import React, { Component } from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import axios from 'axios';


class Social extends Component {
  constructor(props) {
    super(props);
    this.state = {
      instagramPhotos: []
    }
  }

  componentDidMount() {
    axios.get("https://api.instagram.com/v1/users/self/media/recent/?access_token=508727293.1677ed0.69d96553324f4468917af711a368260b&count=16", {
      headers: {
          'Access-Control-Allow-Origin': '*',
        },
    })
    .then((result) => {
      console.log(result);
      let instagramPhotos = result.data.map((data) => {return {url: data.images.standard_resolution.url, caption: data.caption.text}})
      this.setState({ instagramPhotos })
    })
    .catch((error) => {console.log(error.message)});
  }

  render() {

    return (
      <div style={this.props.contentStyle}>
        {this.props.mobileView ? 
          <div style={{ textAlign: 'center'}}><span style={{color: "#fff", fontSize: 30}}>Social</span></div>
          :
          null
        }
        <GridList 
          cols={2} 
          style={{paddingTop: this.props.paddingTop}}
          padding={20}
        >
          <GridTile rows={-1} key={"instaPhotos"}>

          </GridTile>
          <GridTile rows={-1} key={"socialLinks"}>

          </GridTile>
        </GridList>
      </div>
    );
  }
}

export default Social;
