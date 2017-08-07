<h2>My Personal Web Portfolio</h2>
<h4>https://www.jana19.org</h4>

The wesbite is built using React and Material UI components.<br>
Continuos Integration is done using Jenkins with GitHub webhook.<br>
The site is hosted from my home server using No-IP to resolve dynamic IP address.<br>

**Technologies Used:**
<ul>
  <li> [ReactJS](https://facebook.github.io/react/) </li>
  <li> [Material UI](http://www.material-ui.com/#/) </li>
  <li> [Jenkins](https://jenkins.io/) </li>
  <li> [ECMAScript 6](http://es6-features.org) </li>
  <li> [No-IP](https://www.noip.com/) </li>
</ul>

**Prerequisites:**
<ul>
  <li> [NodeJS](https://nodejs.org/en/) </li>
  <li> [yarn](https://www.npmjs.com/package/yarn) is recommended </li>
</ul>

**Development:**
  ```
  git clone https://github.com/jana-uoft/portfolio.git
  cd portfolio
  yarn
  yarn start
  ```

**Testing:**
  ``` 
  yarn test 
  ```
  JUnit xml test results and HTML test coverage report will be generated under the root directory

**Production:**
  ``` 
  yarn build 
  ```
