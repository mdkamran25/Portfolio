import React, { useEffect, useState } from "react";
import LogoTitle from "../../assets/images/logo-s.jpg";
import "./index.scss";
import AnimatedLetters from "../AnimatedLetters";
import { Link } from "react-router-dom";
import Loader from "react-loaders";
const Home = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  const nameArray = [ "d", " ","K", "a", "m", "r", "a", "n"];
  const jobArray = [
    "w",
    "e",
    "b",
    " ",
    "d",
    "e",
    "v",
    "e",
    "l",
    "o",
    "p",
    "e",
    "r",
    ".",
  ];

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);
  
    // Cleanup function to clear the timeout if the component unmounts
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);
  
  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
            <h1>
              <span className={letterClass}>H</span>
              <span className={`${letterClass} _12`}>i,</span>
              <br />
              <span className={`${letterClass} _13`}>I</span>
              <span className={`${letterClass} _14`}>'m</span>
              <img
                src={LogoTitle}
                alt="JavaScript Developer Name, Web Developer Name"
              />
              <AnimatedLetters
                letterClass={letterClass}
                strArray={nameArray}
                idx={15}
              />
              <br />
              <AnimatedLetters
                letterClass={letterClass}
                strArray={jobArray}
                idx={22}
              />
            </h1>
          <h2>Frontend Developer/ React-Js Developer</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Home;
