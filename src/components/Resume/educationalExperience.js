import React from 'react';
import UofTLogo from '../../assets/uoft.png';
import STCLogo from '../../assets/stc.png';
import VpnKeyIcon from 'material-ui-icons/VpnKey';



const educationalExperiences = [
  {
    icon: <img src={UofTLogo} alt="uoft" style={{width: 40, height: 40}}/>,
    title: "University of Toronto",
    company: "Bachelor of Science (Honours) in Computer Science (Specialist) Program",
    duration: "Sep 2011 to Aug 2016",
    website: "https://www.utoronto.ca/"
  },
  {
    icon: <img src={STCLogo} alt="uoft" style={{width: 30, height: 35, paddingTop: 3}}/>,
    title: "S. Thomas' College",
    company: "Grade 1 to High School",
    duration: "Jan 1997 to Aug 2010",
    website: "http://stcmount.edu.lk/"
  },
  {
    icon: <VpnKeyIcon style={{width: 30, height: 30}}/>,
    title: "TurnKey IT Campus",
    company: "Computer Hardware & Networking",
    duration: "Jan 2006 to Dec 2006",
    website: "http://turnkey.lk/"
  }
];

export default educationalExperiences;