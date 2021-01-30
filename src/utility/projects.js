import myTrelloLogo from "../assets/portfolio/myTrelloLogo.png";
import CloudyBoxLogo from "../assets/portfolio/CloudyBoxLogo.png";
import iQuizLogo from "../assets/portfolio/iQuizLogoBlue.png";
import HBGLogo from "../assets/portfolio/HBGLogo-grey.png";
import TicTacToeLogo from "../assets/portfolio/TicTacToeLogo.png";
import MdSimpleLogo from "../assets/portfolio/MdSimpleLogo.png";
import PrimeSwedenLogo from "../assets/portfolio/PrimeSwedenLogo.png";

export const data = [
  {
    project: "MyTrello",
    id: 1,
    type: "Full stack",
    technics:
      "ReactJS, Node.js, Mongoose, SASS, BEM, UX design, photoshop, illustrator, RWD",
    hashtag: ["ReactJS", "Node.js", "Mongoose", "SASS", "BEM", "UX design"],
    url: "//mytrellos.herokuapp.com",
    imgSrc: `${myTrelloLogo}`,
    details:
      "A mimic app of Trello website. It is my first full stack MERN project and the entire UI and UX design is developed in scss. The graphic images are genuine work created by Adobe Photoshop and Illustrator.",
    gitHubUrl: "https://github.com/rubikuo/MyTrello",
  },
  {
    project: "CloudyBox",
    id: 2,
    type: "Front-end",
    technics: "ReactJS, UX design, DropBox API, Oauth, RWD",
    hashtag: ["ReactJS", "UX design", "DropBox API", "Oauth"],
    url: "//cloudybox.surge.sh/",
    imgSrc: `${CloudyBoxLogo}`,
    details:
      "A React app using DropBox API and is implemented with Oauth authorization framework.",
    gitHubUrl: "https://github.com/rubikuo/CloudyBox",
  },

  {
    project: "iQuiz",
    id: 3,
    type: "UX design & Front-end",
    technics: "ReactJS, Open Triva DB API, WAI-ARIA, SVG graphic design, RWD",
    hashtag: ["ReactJS", "UX design", "DropBox API", "Oauth"],
    url: "//rubis-iquiz.surge.sh/",
    imgSrc: `${iQuizLogo}`,
    details:
      "A React app using Open Triva DB API. The development is mainly focus on UX design and ARIA tags for increasing web accessibility.",
    gitHubUrl: "https://github.com/rubikuo/iQuiz",
  },
  {
    project: "HBGWifiFinder",
    id: 4,
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
    imgSrc: `${HBGLogo}`,
    details:
      "An Angular app using Helsingborg city open API to improve the social integration for the locals and the visitors in Helsingborg. Using Firebase to handle login authentication and Mapbox GL showing the wifi's geolocation",
    gitHubUrl: "https://github.com/rubikuo/HBG-WifiFinder",
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
    imgSrc: `${MdSimpleLogo}`,
    details:
      "An React app focused on UX design by using SASS to mockup functions, styles, and measurement of TextField, Switch, Checkbox, RadioButto from Material Design.",
    gitHubUrl: "https://github.com/rubikuo/MdSimple",
  },
  {
    project: "TicTacToe",
    id: 6,
    type: "Front-end",
    technics: "HTML, CSS Animation, JavaScript",
    hashtag: ["HTML", "CSS Animation", "JavaScript"],
    url: "//rubis-tictactoe.surge.sh/",
    imgSrc: `${TicTacToeLogo}`,
    details:
      "A tic tac toc game developed by pure JavaScript. Css animation is implemented for creating the dynamic visual effect in the background.",
    gitHubUrl: "https://github.com/rubikuo/Tic-Tac-Toe",
  },
  {
    project: "PrimeSweden",
    id: 7,
    type: "Front-end",
    technics: "HTML, CSS, jQuery, Bootstrap, RWD",
    hashtag: ["HTML", "CSS", "jQuery", "Bootstrap"],
    url: "//prime-sweden.surge.sh/",
    imgSrc: `${PrimeSwedenLogo}`,
    details:
      "A fashion E-commerce mockup website to mimic product presenting, price sorting, shopping cart handling. Web responsive is implemented.",
    gitHubUrl: "https://github.com/rubikuo/Prime-Sweden",
  },
];
