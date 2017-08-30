import Portfolio01 from '../../assets/projects/portfolio/01.PNG';
import Portfolio02 from '../../assets/projects/portfolio/02.PNG';
import Portfolio03 from '../../assets/projects/portfolio/03.PNG';
import Portfolio04 from '../../assets/projects/portfolio/04.PNG';

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

import pizzeria01 from '../../assets/projects/pizzeria/pizzeria01.PNG';
import pizzeria02 from '../../assets/projects/pizzeria/pizzeria02.PNG';
import pizzeria03 from '../../assets/projects/pizzeria/pizzeria03.PNG';
import pizzeria04 from '../../assets/projects/pizzeria/pizzeria04.PNG';
import pizzeria05 from '../../assets/projects/pizzeria/pizzeria05.PNG';




const projectsList = [
  {
    title: "Personal Portfolio",
    subtitle: "Individual",
    duration: "Aug 2017 to Aug 2017",
    description: "Created a personal portfolio to list my projects and skills while learning ReactJS and Continuos Integration development. The wesbite is built using React and Material UI components. Continuos Integration is done using Jenkins with GitHub webhooks. The site is hosted from my personal home server using No-IP to resolve dynamic IP address.",
    website: "https://www.jana19.org/",
    gitHub: "https://github.com/jana-uoft/portfolio",
    images: [Portfolio01, Portfolio02, Portfolio03, Portfolio04],
    chips: ["React", "Material UI", "Jenkins"]
  },
  {
    title: "Budget",
    subtitle: "Personal Budgeting App",
    duration: "May 2016 to Jun 2016",
    description: "Created a Personal Budget web application. Features adding monthly budgets and carry forwarding, adding daily trasactions and transfers, viewing reports in any date range and adding multiple financial accounts and cash accounts. I made this while learning Django framework as to test my knowledge and get comfortable with the framework. This is mainly focused to be used at home for personal simple budgeting needs. Check out more of the functions by logging in with the demo credentials. Username: piedpiper, Passwrod: johncena. The site is hosted with Heroku.",
    website: "https://personal-budget.herokuapp.com/",
    gitHub: "https://github.com/jana-uoft/personal_budget",
    images: [budget01, budget02, budget03, budget04, budget05],
    chips: ["Python", "Django", "jQuery", "CSS", "Bootsrap", "Heroku"]
  },
  {
    title: "Persondal Portfolio Old",
    subtitle: "Individual",
    duration: "Nov 2016 to Dec 2016",
    description: "This was the earlier version of my personal portfollio. I built the back-end with Pyhon and Django framework and modified an already existing front-end responsive theme. All the content in the website was served through external JSON files from my dropbox public folder. Used CloudFare CDN to cache the website. The site was hosted with Heroku.",
    gitHub: "https://github.com/jana-uoft/portfolio_old",
    images: [portfolio_old01, portfolio_old02, portfolio_old03, portfolio_old04, portfolio_old05, portfolio_old06],
    chips: ["Python", "Django", "jQuery", "Heroku", "CDN", "Bootstrap", "CSS"]
  },
  {
    title: "Google Reviews",
    subtitle: "Wordpress Plugin",
    duration: "Nov 2016 to Nov 2016",
    description: "Developed a WordPress plugin that pulls business reviews from Google Places API. It stores reviews in the internal wordpress database and displays them via a custom widget or a shortcode. The plugin will update the database daily and pull in new reviews if any.",
    gitHub: "https://github.com/jana-uoft/google_reviews_plugin",
    images: [google_reviews_plugin01, google_reviews_plugin02, google_reviews_plugin03, google_reviews_plugin04],
    chips: ["PHP", "Wordpress", "MySQL", "API"]
  },
  {
    title: "Lion King Limo",
    subtitle: "Taxi/Limo Website",
    duration: "May 2016 to Jun 2016",
    description: "Created a website for a Taxi/Limo company. Features responsive content, online booking and newsletter enrollment.",
    gitHub: "https://github.com/jana-uoft/lionkinglimo",
    images: [lionkinglimo01, lionkinglimo02, lionkinglimo03, lionkinglimo04],
    chips: ["PHP", "Bootstrap", "CSS", "jQuery"]
  },
  {
    title: "Zodus",
    subtitle: "Job Board",
    duration: "Nov 2015 to Nov 2016",
    description: "Created a Job Board website. Features candidate and employer dashboards, job posting & resume pricing plans and front-end job & resume submissions.",
    images: [zodus01, zodus02, zodus03, zodus04, zodus05, zodus06],
    chips: ["Wordpress", "PHP", "MySQL", "API", "Bootstrap", "CSS", "jQuery"]
  },
  {
    title: "The House of Pizzeria",
    subtitle: "Restaurant Website",
    duration: "Mat 2015 to May 2015",
    description: "Created a website for a restaurant. Features responsive content, online ordering system, online reservations, interactive food menu and carrousel gallery. The website was created using WordPress. I designed the restaurant logo and the food menu board. Also created flyers and banners using Adobe Fireworks. The project was discontinued on Jan 2016.",
    images: [pizzeria01, pizzeria02, pizzeria03, pizzeria04, pizzeria05],
    chips: ["PHP", "Wordpress", "MySQL", "API", "CSS", "Bootstrap", "jQuery"]
  },
];

export default projectsList;