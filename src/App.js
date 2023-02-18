import React, { lazy, Suspense, useState, useEffect } from "react";
import "./App.css";
import Card from "./Components/Card";
import Curtains from "./Components/Curtains";
import Navbar from "./Components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faHtml5,
  faCss3Alt,
  faJs,
  faJava,
  faNodeJs,
} from "@fortawesome/free-brands-svg-icons";
import { faLeaf } from "@fortawesome/free-solid-svg-icons/faLeaf";
import {} from "@fortawesome/free-brands-svg-icons";

function App() {
  const [pagetwo, setPageTwo] = useState(true);
  const [pageFour, setPageFour] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [atTop, setAtTop] = useState(false);

  const handleScroll = () => {
    setPageTwo(window.scrollY <= window.innerHeight * 3);
    setPageFour(window.scrollY > window.innerHeight * 99);
    setScrollY(window.scrollY);
    setAtTop(window.innerHeight/2-100 -window.scrollY/2 <= 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Card
        width={scrollY}
        height={Math.max(100 - scrollY, 0)}
        scrollY={scrollY}
        atTop={atTop}
      />
      {pagetwo && (
        <>
          <img
            src={require("./Images/AstroHome.png")}
            alt=""
            style={{
              opacity: "0.1",
              bottom: "-15%",
              left: "5%",
              position: "fixed",
              zIndex: "1",
              width: "40vw",
              height: "40vw",
            }}
          />
          <div className="secondPage">
            <div className="secondPageTitle prevent-select">
              Computer Engineering @ UBC
            </div>
            <button class="scrollBtn">
              <div class="scroll"> </div>
            </button>
          </div>
        </>
      )}
      <div
        class="custom-shape-divider-top-1674807117"
        className="pageTwoTransitionOut"
        style={{ zIndex: "1" }}
      >
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
      <Curtains />

      <div className="thirdPage">
        {/* <div class="loader">
          <div id="first">
            <div id="second">
              <div id="third"></div>
            </div>
          </div>
        </div> */}

        <div className="thirdPageText">
          Through hands-on experimentation with current technologies and
          techniques, I place my knowledge at the forefront of my priorities.
        </div>
        <div class="viewer-attention">
          <div class="square" id="sq1"></div>
          <div class="square" id="sq2"></div>
          <div class="square" id="sq3"></div>
          <div class="square" id="sq4"></div>
          <div class="square" id="sq5"></div>
          <div class="square" id="sq6"></div>
          <div class="square" id="sq7"></div>
          <div class="square" id="sq8"></div>
          <div class="square" id="sq9"></div>
          <div class="square" id="sq10"></div>
          <div class="square" id="sq11"></div>
          <div class="square" id="sq12"></div>
        </div>
        <div className="skillsBar">
          {" "}
          <div>
            <FontAwesomeIcon
              icon={faReact}
              className="icon reactIcon"
              style={{ color: "#61DBFB" }}
            />
            <FontAwesomeIcon
              icon={faHtml5}
              className="icon htmlIcon"
              style={{ color: "#E34F26" }}
            />
            <FontAwesomeIcon
              icon={faCss3Alt}
              className="icon cssIcon"
              style={{ color: "#1572B6" }}
            />
            <FontAwesomeIcon
              icon={faJs}
              className="icon jsIcon"
              style={{ color: "#F7DF1E" }}
            />
            <FontAwesomeIcon
              icon={faJava}
              className="icon javaIcon"
              style={{ color: "#007396" }}
            />
            <FontAwesomeIcon
              icon={faNodeJs}
              className="icon nodeIcon"
              style={{ color: "#3C873A" }}
            />
            {/* <FontAwesomeIcon
              icon={faTypescript}
              className="icon typescriptIcon"
              style={{ color: "#007ACC" }}
            /> */}
            <FontAwesomeIcon
              icon={faLeaf}
              className="icon mongoIcon"
              style={{ color: "#56A14B" }}
            />
          </div>
        </div>
        {/* <div className="thirdPageText">Technical Skills</div> */}
      </div>

      <div class="custom-shape-divider-top-1676426352">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          style={{ zIndex: "4" }}
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            class="shape-fill"
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            class="shape-fill"
          ></path>
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            class="shape-fill"
            style={{ zIndex: "4" }}
          ></path>
        </svg>
      </div>
      {pageFour && (
        <div className="fourthPage">
          <div className="projectHolder">
            <div className="projectCard">aosidjasoi</div>
            <div className="projectDescription">pathfinding Algorithm</div>
          </div>
        </div>
      )}
      <div className="pageFourTransitionOut"></div>
    </>
  );
}

export default App;
