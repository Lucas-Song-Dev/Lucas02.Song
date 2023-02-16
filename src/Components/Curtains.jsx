import React, { useState, useEffect } from "react";
import styled from "styled-components";

const OuterContainer = styled.div`
  position: relative;
  height: 300vh;
`;

const InnerContainer = styled.div`
  position: absolute;
  top: -30vh;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: auto;

  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 100vw;
    height: 350vh;
    background-color: rgba(0, 0, 0, 1);
    transition: all 0.15s ease-out;
  }

  &::before {
    top: -30px;
    right: -100vw;
    transform: translateX(${((props) => -props.scroll)}px);
  }

  &::after {
    top: -30px;
    left: -100vw;
    transform: translateX(${(props) => props.scroll}px);
  }
`;



const Curtains = () => {
  const [scroll, setScroll] = useState(0);
  const innerHeight = window.innerHeight;
  const innerWidth = window.innerWidth;

  const handleScroll = () => {
    window.requestAnimationFrame(() => {
      setScroll((window.scrollY-0.025*innerHeight)/innerHeight/2*innerWidth/2);
    });
  };


  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
  
      <OuterContainer>
        <InnerContainer scroll={scroll}></InnerContainer>
      </OuterContainer>

  );
};

export default Curtains;
