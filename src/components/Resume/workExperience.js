import React from 'react';
import UofTLogo from '../../assets/uoft.png';
import DirectionsCarIcon from 'material-ui-icons/DirectionsCar';
import SupervisorAccountIcon from 'material-ui-icons/SupervisorAccount';
import LocalPizzaIcon from 'material-ui-icons/LocalPizza';
import SettingsRemoteIcon from 'material-ui-icons/SettingsRemote';


const workExperiences = [
  {
    icon: <img src={UofTLogo} alt="uoft" style={{width: 40, height: 40}}/>,
    title: "Application Programmer Analyst",
    company: "University of Toronto",
    duration: "Nov 2016 to Current",
    description: 'Adaptation of an existing IIIF-compliant image viewer and OA Annotation application as plug-ins for the Omeka platform. Development of a Manuscript Collation tool that interacts with IIIF-compliant image stores and annotations to support visualisation of the structure of medieval manuscripts. Development an API and Omeka plug-in to support data transport between IIIF compliant image stores and other project components such as Omeka and the project Collation Tool.',
    website: "https://digitaltoolsmss.library.utoronto.ca/"
  },
  {
    icon: <DirectionsCarIcon style={{width: 30, height: 30}}/>,
    title: "Web Developer",
    company: "Lion King Limo",
    duration: "Sep 2016 to Oct 2016",
    description: 'Created a website for a Taxi/Limo compnay. Features responsive content, online booking and newsletter enrollment. The website was created using plain HTML with CSS and PHP for contact forms.',
    project: "lionkinglimo"
  },
  {
    icon: <SupervisorAccountIcon style={{width: 30, height: 30}}/>,
    title: "Founder & Web Developer",
    company: "ZODUS JOBS",
    duration: "Jun 2015 to June 2016",
    description: 'Created a Job Board website for Canada. Features Candidate and Employer Dashboards with Job Posting & Resume Pricing Plans for candidates. The website was developed using WordPress.',
    project: "zodus"
  },
  {
    icon: <LocalPizzaIcon style={{width: 30, height: 30}}/>,
    title: "Developer & Graphic Designer",
    company: "The House of Pizzeria",
    duration: "Mar 2015 to May 2015",
    description: 'Created a website for a restaurant. Features responsive content, online ordering system, online reservations, interactive food menu and carrousel gallery. The website was created using worpdress. I designed the restaurant logo and the food menu board. Also created flyers and banners using Adobe Fireworks.',
    project: "pizzeria"
  },
  {
    icon: <SettingsRemoteIcon style={{width: 30, height: 30}}/>,
    title: "Online Sales Technician",
    company: "HiTech Bay",
    duration: "May 2014 to Feb 2015",
    description: 'Conducted online sales on e-commerce websites such as Amazon and eBay and handled shipping. Debugged, upgraded and repaired computer systems from desktops to laptops. I introduced a new order management system called Lynn Works that integrated all selling platforms under a single management unit.',
    website: "http://www.hitechbay.com/"
  }
];

export default workExperiences;