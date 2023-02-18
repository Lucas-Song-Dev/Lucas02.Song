import React, { useState, useEffect } from "react";
import pdf from "../Resume/Lucas_Song.CV.pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, height } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons/faEnvelope";

const Card = (props) => {
  const cardinfo = {
    display: "flex",
    alignItems: "center",
  };

  const rowStyle = {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    transition: "all 2.3s ease",
  };

  const columnStyle = {
    flexDirection: "column",
    justifyContent: "center",
  };

  const rowStyleCard = {
    width: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    height: "40px",
    paddingTop: "-10px",
    padding: "0",
  };
  const columnStyleCard = {
    width: "350px",
    left: "50%",
    transform: "translateX(-50%)",
  };

  const rowStyleCardSocial = {
    padding: "-100px",
    paddingTop: "-100px",
    position: "relative",
    top: "0%",
    opacity: "1",
    transform: "translateY(0%)",
  }

  const columnStyleCardSocial = {
    padding: "0",
  }

  const card = {
    background: "rgba(0, 0, 0, 0)",
    padding: "2rem 2rem",
    transition: "box-shadow 0.3s ease, transform 0.2s ease",
    paddingTop: "20px",
    position: "fixed",
    zIndex: "102",
    background: "rgba(1, 255, 255, 0)",
    top: `${Math.max(window.innerHeight / 2 - window.innerHeight / 4 - props.scrollY / 2, 0)}px`,
  };

  return (
    <div
      style={
        props.atTop
          ? { ...rowStyleCard, ...card }
          : { ...columnStyleCard, ...card }
      }
      class=" card prevent-select"
    >
      <div
        style={
          props.atTop
            ? { ...rowStyle, ...cardinfo }
            : { ...columnStyle, ...cardinfo }
        }
      >
        <div class="card-avatar">
          <a href={pdf} target="_blank" rel="noreferrer">
            <img
              src={require("../Images/AstroProfileCircle.png")}
              width="100vw"
              height="100vw"
              alt=""
              className="resumeLinkImage"
            />
          </a>
        </div>
        <div class="resumePopUp">
          <div class="scanner">
            <span>Resume</span>
          </div>
        </div>
        <div class="card-title">Lucas Song</div>
        <div class="card-subtitle">Contact Information</div>
        <ul class="card-social" style={
          props.atTop
            ? rowStyleCardSocial 
            : columnStyleCardSocial 
        }>
          <a
            href="https://github.com/Lucas-Song-Dev"
            target="_blank"
            rel="noreferrer"
            style={{ color: "black" }}
          >
            <li class="card-social__item">
              <FontAwesomeIcon
                icon={faGithub}
                className="icon githubIcon"
                style={{ color: "grey" }}
              />
            </li>
          </a>
          <a
            href="mailto: Lucas02.song@gmail.com"
            target="_blank"
            rel="noreferrer"
            style={{ color: "black" }}
          >
            <li class="card-social__item">
              <FontAwesomeIcon
                icon={faLinkedin}
                className="icon linkedinIcon"
                style={{ color: "#0077B5" }}
              />
            </li>
          </a>
          <a
            href="https://www.linkedin.com/in/lucas01-song/"
            target="_blank"
            rel="noreferrer"
            style={{ color: "black" }}
          >
            <li class="card-social__item">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="icon emailIcon"
                style={{ color: "#D44638" }}
              />
            </li>
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Card;
