import React, { useState, useEffect } from "react";

const Curtains = (props) => {
  const style = {
    position: "fixed",
    top: `${Math.max(110-props.scrollY,0)}px`,
    left: "0",
    width: "100%",
    backgroundColor: "#f0f0f0",
    padding: "20px",
    color: "white",
  };
  const [navbarWidth, setNavbarWidth] = useState(150);
  return (
    <div style={style}>
      <p>paodskpdojaspodaspo</p>
    </div>
  );
};

export default Curtains;
