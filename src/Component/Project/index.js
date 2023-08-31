import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import Trainexus from "../../assets/images/Trainexus.jpg"
import hangman from "../../assets/images/hangmanGame.jpg"
import weather from "../../assets/images/weather.jpg"
import githubProfile from "../../assets/images/GithubProfileFinder.jpg"
import "./index.scss";

const Project = () => { 
    const [letterClass, setLetterClass] = useState('text-animate');
    const [portfolio, setPortfolio] = useState([]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);

        return () => {
            clearTimeout(timer);
        }
    }, []);

    const projects = [
        { name: "Trainexus", description: "Trainee-Mentor Learning and evaluation web app", image: Trainexus, url: "https://trainexus.netlify.app/" },
        { name: "Weather Application", description: "Weather application based on your live location and search feature", image: weather, url: "https://weathers-app-reacts.netlify.app/" },
        { name: "Github Profile Finder", description: "It will find the github user profile based on the given username", image: githubProfile, url: "https://dynamic-github-profile-finder.netlify.app/" },
        { name: "Hangman Game", description: "In this game, You have to guess the word based on the given definition of the word You will get five chaces to guess the game", image: hangman, url: "https://hangman-word-guess-game.netlify.app/" },
    ];

    const renderProject = (portfolio) => {
        return (
            <div className="images-container">
                {portfolio.map((port, idx) => (
                    <div className="image-box" key={idx}>
                        <img 
                            src={port.image}
                            className="portfolio-image"
                            alt="portfolio"
                        />
                        <div className="content">
                            <p className="title">{port.name}</p>
                            <h4 className="description">{port.description}</h4>
                            <button
                                className="btn"
                                onClick={() => window.open(port.url)}
                            >URL</button>
                        </div>
                    </div>
                ))}
            </div>
        );
    }

    return (
        <>
            <div className="container portfolio-page">
                <h1 className="page-title">
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={"Project".split("")}
                        idx={15}
                    />
                </h1>
                <div>{renderProject(projects)}</div>
            </div>
            <Loader type="pacman" />
        </>
    );
}

export default Project;
