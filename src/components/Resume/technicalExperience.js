import React from 'react';
import CodeIcon from 'material-ui-icons/Code';
import WbIridescentIcon from 'material-ui-icons/WbIridescent';
import StorageIcon from 'material-ui-icons/Storage';
import LayersIcon from 'material-ui-icons/Layers';
import SettingsIcon from 'material-ui-icons/Settings';
import GavelIcon from 'material-ui-icons/Gavel';


const technicalExperiences = [
  {
    icon: <CodeIcon style={{width: 30, height: 30}}/>,
    title: "Languages and Frameworks",
    description: 'Fluent in modern JavaScript (ES6/7, Babel, JSX), Ruby, Rails, Python, Djano, CodeIgniter, Wordpress and most common markup languages and data exchange formats (HTML5, CSS, JavaScript, AJAX, WebSockets, JSON, REST, GraphQL, XML, Oauth, JWT)'
  },
  {
    icon: <WbIridescentIcon style={{width: 30, height: 30}}/>,
    title: "Frontend UI / UX",
    description: 'Front end development with most modern, popular JavaScript frameworks and tooling: React, Redux, jQuery, Bootstrap, Material Design, Node.js, Express, Babel, Webpack, SASS, Jest, Mocha, Chai, Enzyme, and many more'
  },
  {
    icon: <StorageIcon style={{width: 30, height: 30}}/>,
    title: "Backend / Server",
    description: 'Node.js, Express, NGINX, Apache, and Restful Web API using Rails, Django and PHP'
  },
  {
    icon: <LayersIcon style={{width: 30, height: 30}}/>,
    title: "Databases and Storage",
    description: 'PostgreSQL, MySQL, and NoSQL: MongoDB, CouchDB. ORM using Mongoid, Mongoose and PyMongo. Cloud storage mechanism using Google Cloud Storage, AWS, Heroku and Dropbox'
  },
  {
    icon: <SettingsIcon style={{width: 30, height: 30}}/>,
    title: "Build and SDLC",
    description: 'Continuous Integration using Jenkins and Chef. Source Code Control using GitHub & GitLab. Cloud deployment to Amazon AWS, Microsoft Azure and Heroku. Best practices using AGILE, Sprint, JIRA, Confluence and Slack'
  },
  {
    icon: <GavelIcon style={{width: 30, height: 30}}/>,
    title: "Development Tools",
    description: 'Sublime, Atom and VisualStudioCode. Linux scripting with Bash, Zsh and Nano. Vagrant, Docker and Mavern.'
  }
];

export default technicalExperiences;