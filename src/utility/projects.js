import myTrelloLogo from "../assets/portfolio/myTrelloLogo.png";
import CloudyBoxLogo from "../assets/portfolio/CloudyBoxLogo.png";
import iQuizLogo from "../assets/portfolio/iQuizLogoBlue.png";
import HBGLogo from "../assets/portfolio/HBGLogo-grey.png";
import TicTacToeLogo from "../assets/portfolio/TicTacToeLogo.png";
import MdSimpleLogo from "../assets/portfolio/MdSimpleLogo.png";
import PrimeSwedenLogo from "../assets/portfolio/PrimeSwedenLogo.png";

export const data = [
  {
    project: "myTrello",
    id: 1,
    type: "Full stack",
    hashtag: "ReactJS, Node.js, Mongoose, SASS, BEM, UX design",
    // hashtag: ["React", "JS", "NodeJs", "Mongoose", "SASS", "BEM", "UX design"],
    url: "//mytrellos.herokuapp.com",
    imgSrc: `${myTrelloLogo}`,
  },
  {
    project: "CloudyBox",
    id: 2,
    type: "Front-end",
    hashtag: "ReactJS, UX design, DropBox API, Oauth",
    url: "//cloudybox.surge.sh/",
    imgSrc: `${CloudyBoxLogo}`,
  },

  {
    project: "iQuiz",
    id: 3,
    type: "UX design & Front-end",
    hashtag: "React, Open Triva DB API, WAI-ARIA, SVG graphic design",
    url: "//rubis-iquiz.surge.sh/",
    imgSrc: `${iQuizLogo}`,
  },
  {
    project: "HBGWifiFinder",
    id: 4,
    type: "Front-end",
    hashtag: "Angular7, TypeScript, Firebase, Helsingborg City API, BootStrap",
    url: "//hbg-wifi-finder.surge.sh/#/",
    imgSrc: `${HBGLogo}`,
  },
  {
    project: "MdSimple",
    id: 5,
    type: "UX Design",
    hashtag: "ReactJS, CSS, BEM, SASS, CSS modules, Material Design",
    url: "//rubis-mdsimple.surge.sh/",
    imgSrc: `${MdSimpleLogo}`,
  },
  {
    project: "TicTacToe",
    id: 6,
    type: "Front-end",
    hashtag: "HTML, CSS Animation, JavaScript",
    url: "//rubis-tictactoe.surge.sh/",
    imgSrc: `${TicTacToeLogo}`,
  },
  {
    project: "PrimeSweden",
    id: 7,
    type: "Front-end",
    hashtag: "HTML, CSS, Javascript, Bootstrap",
    url: "//prime-sweden.surge.sh/",
    imgSrc: `${PrimeSwedenLogo}`,
  },
];
