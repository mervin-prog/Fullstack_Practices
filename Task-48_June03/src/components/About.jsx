import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { about } from "../profile";
import "./About.css";
import Resume from "./Resume";
import { useState } from "react";

function About(){
    const {name, role, description, social} = about;
    const [showResume , setShowResume] = useState(false);

    function handleResume(){
        setShowResume(true);
    }
    return (
        <div className="about center">
        {name && (
            <h1>
                Hi, I am <span className="about-name">{name}</span>
            </h1>
        )}

        {role && (
            <h2>
                <span className="about-role">A {role}</span>
            </h2>
        )}

        <p className="about-description">{description && description}</p>

        {!showResume ? (
                <span className="navbar-text about-resume">
                    <button className="contact-btn" onClick={handleResume}>
                        <span>Resume</span>
                    </button>
                </span>
            ) : (
                <Resume />
        )}
           
            {social && (

                <div className="social-icon about-social">
                {social.github && (
                    <a href={social.github}>
                        <GitHubIcon className="icon"/>
                    </a>
                )}

                {social.linkedin && (
                    <a href={social.linkedin}>
                        <LinkedInIcon className="icon"/>
                    </a>
                )}
                </div>
            )}
        </div>
    );
}

export default About;