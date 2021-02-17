import React, { useState, useEffect, useCallback, useRef } from "react";
import { Link } from "react-router-dom";
import "./Home.scss";
import { Helmet } from "react-helmet-async";
import partialPadals from "../../assets/home/partialPadals.jpg";
import partialPadals2 from "../../assets/home/partialPadals2.jpg";
import partialPadals3 from "../../assets/home/partialPadals3.jpg";
import partialPadals4 from "../../assets/home/partialpadals4.jpg";

const Home = () => {
  const [texts, setTexts] = useState("");
  const [showTime, setShowTime] = useState(false);

  const textArray = ["Front End Developer & Web Designer"];
  const [blinkClass, setBlinkClass] = useState(
    "Home__title Home__title-cursor"
  );

  const typingDelay = 100;

  let textArrayIndex = 0;
  let charIndex = 0;
  let typedTexts = useRef("");

  const type = useCallback(() => {
    if (charIndex < textArray[textArrayIndex].length) {
      if (!blinkClass.includes("Home__title-cursor--typing")) {
        setBlinkClass(blinkClass.concat(" Home__title-cursor--typing"));
      }
      typedTexts.current += textArray[textArrayIndex].charAt(charIndex);
      console.log(typedTexts.current);
      setTexts(typedTexts.current);
      charIndex++;

      if (typedTexts.current.charAt(typedTexts.current.length - 1) === ",") {
        setTimeout(type, typingDelay + 500);

        setBlinkClass("Home__title Home__title-cursor");
      } else {
        setTimeout(type, typingDelay);
      }
      if (charIndex === textArray[0].length - 1) {
        setTimeout(() => {
          setShowTime(true);
        }, 800);
      }
    } else {
      setBlinkClass("Home__title Home__title-cursor");
    }
  }, []);

  useEffect(() => {
    let delay = setTimeout(type, 200);

    return () => {
      clearTimeout(delay);
    };
  }, [type]);

  return (
    <>
      <Helmet>
        <title>Rubi Kuo - Home</title>
      </Helmet>
      <main className="Home" id="home">
        <p className="Home__title Home__title-name">Rubi Kuo</p>
        <img
          className="Home__img Home__img-padals"
          src={partialPadals}
          alt=""
        />
        <img
          className="Home__img Home__img-padals2"
          src={partialPadals2}
          alt=""
        />
        <img
          className="Home__img Home__img-padals3"
          src={partialPadals3}
          alt=""
        />
        <img
          className="Home__img Home__img-padals4"
          src={partialPadals4}
          alt=""
        />
        <p>
          <span className="Home__title Home__title-typedText">{texts}</span>
          <span className={blinkClass}>&nbsp;</span>
        </p>
        <div
          className={
            showTime
              ? "Home__wrapper Home__wrapper--show"
              : "Home__wrapper Home__wrapper--hide"
          }
        >
          <hr className="Home__hr Home__hr-left" />{" "}
          <span className=" Home__title-time">Since 2019</span>{" "}
          <hr className="Home__hr Home__hr-right" />
        </div>

        <Link
          to="/portfolio"
          className={
            showTime ? "Home__btn Home__btn--show" : "Home__btn Home__btn--hide"
          }
        >
          View Portfolio
        </Link>
      </main>
    </>
  );
};

export default Home;
