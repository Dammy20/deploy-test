import React from "react";

function Preloader(props) {
  return (
    <>
      <div className={`${props.styles}`}>
        <div className="loader">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </>
  );
}

export default Preloader;