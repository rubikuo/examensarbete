import myTrelloLogo from "../assets/portfolio/myTrelloLogo.png";
import myTrello from "../assets/portfolio/myTrello.jpg";
import CloudyBoxLogo from "../assets/portfolio/CloudyBoxLogo.png";
import CloudyBox from "../assets/portfolio/CloudyBox.jpg";
import iQuizLogo from "../assets/portfolio/iQuizLogoBlue.png";
import iQuiz from "../assets/portfolio/iQuiz.jpg";
import HBG from "../assets/portfolio/HBG.jpg";
import HBGLogo from "../assets/portfolio/HBGLogo-grey.png";
import TicTacToeLogo from "../assets/portfolio/TicTacToeLogo.png";
import TicTacToe from "../assets/portfolio/TicTacToe.jpg";
import MdSimpleLogo from "../assets/portfolio/MdSimpleLogo.png";
import MdSimple from "../assets/portfolio/MdSimple.jpg";
import PrimeSwedenLogo from "../assets/portfolio/PrimeSwedenLogo.png";
import PrimeSweden from "../assets/portfolio/PrimeSweden.jpg";

const data = [
  {
    project: "MyTrello",
    id: 1,
    type: "Full stack",
    technics:
      "ReactJS, Node.js, Mongoose, SASS, BEM, UX design, photoshop, illustrator, RWD",
    hashtag: ["ReactJS", "Node.js", "Mongoose", "SASS", "BEM", "UX design"],
    url: "//mytrellos.herokuapp.com",
    logoSrc: `${myTrelloLogo}`,
    imgSrc: `${myTrello}`,
    details:
      "A mimic app of Trello website. It is my first full stack MERN project and the entire UI and UX design is developed in scss. The graphic images are genuine work created by Adobe Photoshop and Illustrator.",
    gitHubUrl: "//github.com/rubikuo/MyTrello",
  },
  {
    project: "CloudyBox",
    id: 2,
    type: "Front-end",
    technics: "ReactJS, UX design, DropBox API, Oauth, RWD",
    hashtag: ["ReactJS", "UX design", "DropBox API", "Oauth"],
    url: "//cloudybox.surge.sh/",
    logoSrc: `${CloudyBoxLogo}`,
    imgSrc: `${CloudyBox}`,
    details:
      "A React app using DropBox API, implemented with Oauth authorization framework.",
    gitHubUrl: "//github.com/rubikuo/CloudyBox",
  },

  {
    project: "iQuiz",
    id: 3,
    type: "UX design & Front-end",
    technics: "ReactJS, Open Triva DB API, WAI-ARIA, SVG graphic design, RWD",
    hashtag: ["ReactJS", "UX design", "DropBox API", "Oauth"],
    url: "//rubis-iquiz.surge.sh/",
    logoSrc: `${iQuizLogo}`,
    imgSrc: `${iQuiz}`,
    details:
      "A React app using Open Triva DB API. The development is mainly focus on UX design and ARIA tags for increasing web accessibility.",
    gitHubUrl: "//github.com/rubikuo/iQuiz",
  },
  {
    project: "HBG WifiFinder",
    id: 4,
    type: "Front-end",
    technics:
      "Angular7, TypeScript, Firebase, Helsingborg City API, BootStrap, Mapbox GL",
    hashtag: [
      "Angular7",
      "TypeScript",
      "Firebase",
      "Helsingborg City API",
      "BootStrap",
    ],
    url: "//hbg-wifi-finder.surge.sh/#/",
    logoSrc: `${HBGLogo}`,
    imgSrc: `${HBG}`,
    details:
      "An Angular app using Helsingborg city open API to improve the social integration for the locals and the visitors in Helsingborg. Using Firebase to handle login authentication and Mapbox GL showing the wifi's geolocation",
    gitHubUrl: "//github.com/rubikuo/HBG-WifiFinder",
  },
  {
    project: "MdSimple",
    id: 5,
    type: "UX Design",
    technics: "ReactJS, CSS, BEM, SASS, CSS modules, Material Design, RWD",
    hashtag: [
      "ReactJS",
      "CSS",
      "BEM",
      "SASS",
      "CSS modules",
      "Material Design",
    ],
    url: "//rubis-mdsimple.surge.sh/",
    logoSrc: `${MdSimpleLogo}`,
    imgSrc: `${MdSimple}`,
    details:
      "An React app focused on UX design by using SASS to mockup functions, styles, and measurement of TextField, Switch, Checkbox, RadioButto from Material Design.",
    gitHubUrl: "//github.com/rubikuo/MdSimple",
  },
  {
    project: "TicTacToe",
    id: 6,
    type: "Front-end",
    technics: "HTML, CSS Animation, JavaScript",
    hashtag: ["HTML", "CSS Animation", "JavaScript"],
    url: "//rubis-tictactoe.surge.sh/",
    logoSrc: `${TicTacToeLogo}`,
    imgSrc: `${TicTacToe}`,
    details:
      "A tic tac toc game developed by pure JavaScript. Css animation is implemented for creating the dynamic visual effect in the background.",
    gitHubUrl: "//github.com/rubikuo/Tic-Tac-Toe",
  },
  {
    project: "PrimeSweden",
    id: 7,
    type: "Front-end",
    technics: "HTML, CSS, jQuery, Bootstrap, RWD",
    hashtag: ["HTML", "CSS", "jQuery", "Bootstrap"],
    url: "//prime-sweden.surge.sh/",
    logoSrc: `${PrimeSwedenLogo}`,
    imgSrc: `${PrimeSweden}`,
    details:
      "A fashion E-commerce mockup website to mimic product presenting, price sorting, shopping cart handling. Web responsive is implemented.",
    gitHubUrl: "//github.com/rubikuo/Prime-Sweden",
  },
];

const projectTypes = [
  "All",
  "ReactJS",
  "Angular7",
  "Node.js",
  "JavaScript",
  "jQuery",
];

export { data, projectTypes };
