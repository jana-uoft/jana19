<h2>My Personal Web Portfolio</h2>
<h4>https://www.jana19.org</h4>

**Technologies Used:**
<ul>
  <li> The wesbite is built using <a href="https://facebook.github.io/react/"> ReactJS </a> and <a href="http://www.material-ui.com/#/"> Material UI </a> components. </li>
  <li> Continuos Integration is done using <a href="https://jenkins.io/"> Jenkins </a> with GitHub webhook. </li>
  <li> The site is hosted from my home server using <a href="https://www.noip.com/"> No-IP </a> to resolve dynamic IP address. </li>
  <li> TLS/SSL certificate is generated using <a href="https://letsencrypt.org/">Let’s Encrypt </a>. </li>
</ul>

**Prerequisites:**
  <ul>
    <li> <a href="https://nodejs.org/en/"> NodeJS </a> </li>
    <li> Using <a href="https://www.npmjs.com/package/yarn"> yarn </a> is recommended </li>
  </ul>
  
**Development:**
  <pre>
    git clone https://github.com/jana-uoft/portfolio.git
    cd portfolio
    yarn
    yarn start
  </pre>

**Testing:**
  <ul>
  <li>
    <code> 
      yarn test 
    </code>
  </li>
    <li> JUnit xml test results and HTML test coverage report will be generated under the root directory </li>
  </ul>

**Production:**
  <ul>
    <li>
      <code> 
      yarn build 
      </code>
    </li>
 </ul>
