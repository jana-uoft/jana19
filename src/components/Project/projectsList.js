import VISCOLL01 from '../../assets/projects/viscoll/viscoll01.PNG';
import VISCOLL02 from '../../assets/projects/viscoll/viscoll02.PNG';
import VISCOLL03 from '../../assets/projects/viscoll/viscoll03.PNG';
import VISCOLL04 from '../../assets/projects/viscoll/viscoll04.PNG';
import VISCOLL05 from '../../assets/projects/viscoll/viscoll05.PNG';
import VISCOLL06 from '../../assets/projects/viscoll/viscoll06.PNG';
import VISCOLL07 from '../../assets/projects/viscoll/viscoll07.PNG';
import VISCOLL08 from '../../assets/projects/viscoll/viscoll08.PNG';
import VISCOLL09 from '../../assets/projects/viscoll/viscoll09.PNG';
import VISCOLL010 from '../../assets/projects/viscoll/viscoll010.PNG';
import VISCOLL011 from '../../assets/projects/viscoll/viscoll011.PNG';

import IIIFAPI01 from '../../assets/projects/iiifAPI/iiifAPI01.PNG';
import IIIFAPI02 from '../../assets/projects/iiifAPI/iiifAPI02.PNG';
import IIIFAPI03 from '../../assets/projects/iiifAPI/iiifAPI03.PNG';
import IIIFAPI04 from '../../assets/projects/iiifAPI/iiifAPI04.PNG';

import NodeAPI01 from '../../assets/projects/node_api/node_api_01.jpg';
import NodeAPI02 from '../../assets/projects/node_api/node_api_02.png';
import NodeAPI03 from '../../assets/projects/node_api/node_api_03.jpg';
import NodeAPI04 from '../../assets/projects/node_api/node_api_04.jpg';

import Portfolio01 from '../../assets/projects/portfolio/portfolio01.PNG';
import Portfolio02 from '../../assets/projects/portfolio/portfolio02.PNG';
import Portfolio03 from '../../assets/projects/portfolio/portfolio03.PNG';
import Portfolio04 from '../../assets/projects/portfolio/portfolio04.PNG';
import Portfolio05 from '../../assets/projects/portfolio/portfolio05.PNG';

import budget01 from '../../assets/projects/budget/budget01.PNG';
import budget02 from '../../assets/projects/budget/budget02.PNG';
import budget03 from '../../assets/projects/budget/budget03.PNG';
import budget04 from '../../assets/projects/budget/budget04.PNG';
import budget05 from '../../assets/projects/budget/budget05.PNG';

import portfolio_old01 from '../../assets/projects/portfolio_old/portfolio_old01.png';
import portfolio_old02 from '../../assets/projects/portfolio_old/portfolio_old02.png';
import portfolio_old03 from '../../assets/projects/portfolio_old/portfolio_old03.png';
import portfolio_old04 from '../../assets/projects/portfolio_old/portfolio_old04.png';
import portfolio_old05 from '../../assets/projects/portfolio_old/portfolio_old05.png';
import portfolio_old06 from '../../assets/projects/portfolio_old/portfolio_old06.png';

import google_reviews_plugin01 from '../../assets/projects/google_reviews/google_reviews_plugin01.png';
import google_reviews_plugin02 from '../../assets/projects/google_reviews/google_reviews_plugin02.png';
import google_reviews_plugin03 from '../../assets/projects/google_reviews/google_reviews_plugin03.png';
import google_reviews_plugin04 from '../../assets/projects/google_reviews/google_reviews_plugin04.png';

import lionkinglimo01 from '../../assets/projects/lionkinglimo/lionkinglimo01.PNG';
import lionkinglimo02 from '../../assets/projects/lionkinglimo/lionkinglimo02.PNG';
import lionkinglimo03 from '../../assets/projects/lionkinglimo/lionkinglimo03.PNG';
import lionkinglimo04 from '../../assets/projects/lionkinglimo/lionkinglimo04.PNG';

import zodus01 from '../../assets/projects/zodus/zodus01.PNG';
import zodus02 from '../../assets/projects/zodus/zodus02.PNG';
import zodus03 from '../../assets/projects/zodus/zodus03.PNG';
import zodus04 from '../../assets/projects/zodus/zodus04.PNG';
import zodus05 from '../../assets/projects/zodus/zodus05.PNG';
import zodus06 from '../../assets/projects/zodus/zodus06.PNG';

import TSP01 from '../../assets/projects/tsp/tsp_01.png';

import pizzeria01 from '../../assets/projects/pizzeria/pizzeria01.PNG';
import pizzeria02 from '../../assets/projects/pizzeria/pizzeria02.PNG';
import pizzeria03 from '../../assets/projects/pizzeria/pizzeria03.PNG';
import pizzeria04 from '../../assets/projects/pizzeria/pizzeria04.PNG';
import pizzeria05 from '../../assets/projects/pizzeria/pizzeria05.PNG';




const projectsList = [
  {
    title: "Viscoll",
    subtitle: "Visual Collation",
    duration: "Mar 2017 to Mar 2018",
    description: "VisColl is for building models of the physical collation of manuscripts, and then visualizing them in various ways. Powered by an API built with Ruby and Rails on MongoDB and served by a React-Redux progressive web app.",
    gitHub: "https://github.com/utlib/VisualCollation",
    website: "https://viscoll.library.utoronto.ca",
    images: [VISCOLL01, VISCOLL02, VISCOLL03, VISCOLL04, VISCOLL05, VISCOLL06, VISCOLL07, VISCOLL08, VISCOLL09, VISCOLL010, VISCOLL011],
    chips: ["ReactJS", "Redux", "Rails", "Ruby", "MongoDB", "API", "JWT", "Jenkins", "Chef", "Slack", "JIRA", "Confluence"]
  },
  {
    title: "UTL IIIF API",
    subtitle: "REST API",
    duration: "Jan 2017 to Mar 2018",
    description: "An API service that implements the IIIF Image API, Presentation API, Search API and Authentication API.Powered by Python - Django framework and MongoDB.",
    gitHub: "https://github.com/utlib/utl_iiif_api",
    website: "https://iiif.library.utoronto.ca/presentation/v2",
    images: [IIIFAPI01, IIIFAPI02, IIIFAPI03, IIIFAPI04],
    chips: ["Python", "Django", "MongoDB", "API", "JWT", "Jenkins", "Chef", "Slack", "JIRA", "Confluence"]
  },
  {
    title: "NodeJS Express MongoDB",
    subtitle: "REST API",
    duration: "Sep 2017 to Sep 2017",
    description: "Currently working on a hobby project to create a fully restful API using NodeJS, Express and MongoDB. The API will have a working authentication system using JWT and with future support for OAuth as well.",
    gitHub: "https://github.com/jana-uoft/node_express_mongo_api",
    images: [NodeAPI01, NodeAPI02, NodeAPI03, NodeAPI04],
    chips: ["NodeJS", "ExpressJS", "MongoDB", "API", "JWT"]
  },
  {
    title: "Personal Portfolio",
    subtitle: "Individual",
    duration: "Aug 2017 to Aug 2017",
    description: "Created a personal portfolio to list my projects and skills. This was created while learning ReactJS and Continuous Integration development (Jenkins). The wesbite was built using ReactJS and Material UI components. Continuos Integration was done using Jenkins Pipeline via GitHub webhooks. The site is hosted from my personal home server using No-IP to resolve dynamic IP address.",
    website: "https://www.jana19.org/",
    gitHub: "https://github.com/jana-uoft/portfolio",
    images: [Portfolio01, Portfolio02, Portfolio03, Portfolio04, Portfolio05],
    chips: ["NodeJS", "ReactJS", "Material UI", "Jenkins"]
  },
  {
    title: "Budget",
    subtitle: "Personal Budgeting App",
    duration: "May 2016 to Jun 2016",
    description: "Created a Personal Budget web application. Features adding monthly budgets, carry forwarding balances, adding daily trasactions and transfers, viewing reports in any date range and adding multiple financial accounts and cash accounts. Check out more of about the app by logging in with the following demo credentials. Username: piedpiper and Password: johncena. The site is hosted with Heroku.",
    website: "https://personal-budget.herokuapp.com/",
    gitHub: "https://github.com/jana-uoft/personal_budget",
    images: [budget01, budget02, budget03, budget04, budget05],
    chips: ["Python", "Django", "jQuery", "CSS", "Bootstrap", "Heroku"]
  },
  {
    title: "Personal Portfolio Old",
    subtitle: "Individual",
    duration: "Nov 2016 to Dec 2016",
    description: "This was the earlier version of my personal portfolio. It was built using Python and Django framework. The CSS template was modified from an already existing front-end responsive theme. All the content in the website was served through external JSON files hosted from my dropbox public folder. Used CloudFare CDN to cache the website. The site was hosted with Heroku.",
    gitHub: "https://github.com/jana-uoft/portfolio_old",
    images: [portfolio_old01, portfolio_old02, portfolio_old03, portfolio_old04, portfolio_old05, portfolio_old06],
    chips: ["Python", "Django", "jQuery", "Heroku", "CDN", "Bootstrap", "CSS"]
  },
  {
    title: "Google Reviews",
    subtitle: "Wordpress Plugin",
    duration: "Nov 2016 to Nov 2016",
    description: "Developed a WordPress plugin that pulls business reviews from Google Places API. It stores reviews in the internal wordpress database and displays them via a custom widget or a shortcode. The plugin will listen for updates from the database in a daily basis and fetch new reviews if any.",
    gitHub: "https://github.com/jana-uoft/google_reviews_plugin",
    images: [google_reviews_plugin01, google_reviews_plugin02, google_reviews_plugin03, google_reviews_plugin04],
    chips: ["Wordpress", "PHP", "MySQL"]
  },
  {
    title: "Lion King Limo",
    subtitle: "Taxi/Limo Website",
    duration: "May 2016 to Jun 2016",
    description: "Created a website for a Taxi/Limo company. Featured responsive content, online booking and an online newsletter enrollment.",
    gitHub: "https://github.com/jana-uoft/lionkinglimo",
    images: [lionkinglimo01, lionkinglimo02, lionkinglimo03, lionkinglimo04],
    chips: ["PHP", "Bootstrap", "CSS", "jQuery"]
  },
  {
    title: "Zodus",
    subtitle: "Job Board",
    duration: "Nov 2015 to Nov 2016",
    description: "Created a Job Board website. Featured candidate and employer dashboards, job posting & resume pricing plans with front-end job & resume submissions.",
    images: [zodus01, zodus02, zodus03, zodus04, zodus05, zodus06],
    chips: ["Wordpress", "PHP", "MySQL", "Bootstrap", "CSS", "jQuery"]
  },
  {
    title: "TSP Artificial Intelligence",
    subtitle: "University Project",
    duration: "Mar 2016 to Apr 2016",
    description: "A project from an Artificial Intelligence course at University based on the Travelling Salesman Problem. We compared the space and time complexity of different heuristics searches. More specifically, we compared Greedy, A* and its variants - Beam Search, Iterative Deepening and Dynamic Weighting. The codebase was in Python.",
    gitHub: "https://github.com/jana-uoft/travelling_sales_person_AI",
    images: [TSP01],
    chips: ["Python", "AI", "Algorithm"]
  },
  {
    title: "The House of Pizzeria",
    subtitle: "Restaurant Website",
    duration: "Mar 2015 to May 2015",
    description: "Created a website for a restaurant. Featured responsive content, online ordering system, online reservations, interactive food menu and carrousel gallery. The website was created using WordPress. I designed the restaurant logo and the food menu board. Also created flyers and banners using Adobe Fireworks.",
    images: [pizzeria01, pizzeria02, pizzeria03, pizzeria04, pizzeria05],
    chips: ["Wordpress", "PHP", "MySQL", "CSS", "Bootstrap", "jQuery"]
  }

];

export default projectsList;