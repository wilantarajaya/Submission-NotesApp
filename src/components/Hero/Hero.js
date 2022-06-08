import React from "react";
import InputNotes from "./InputNotes";

export default function Hero({ addNotes }) {
  return (
    <>
      <div className="hero d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 d-flex align-items-center">
              <img src="hero.svg" width={"85%"} alt="" />
            </div>
            <div className="col d-flex align-items-center justify-content-center">
              <InputNotes addNotes={addNotes} />
            </div>
          </div>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#47B5FF"
          fillOpacity="1"
          d="M0,320L40,320C80,320,160,320,240,309.3C320,299,400,277,480,245.3C560,213,640,171,720,149.3C800,128,880,128,960,138.7C1040,149,1120,171,1200,165.3C1280,160,1360,128,1400,112L1440,96L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
        ></path>
      </svg>
    </>
  );
}
