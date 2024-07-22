import React from "react";
import RequestCall from "../RequestCall";
import "./index.css";

function Journey() {
  return (
    <div className="main-journey-container container mt-5 p-5" id="journey">
      <div className="row">
        <div className="journey-container pt-3 pb-5">
          <h1 className="journey-heading display-4">
            Kick off your ACCA Prep journey with indigoLearn
          </h1>
          <p className="journey-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            culpa sunt unde optio ad doloribus, earum quae nam eos dignissimos,
            fugit aliquid corrupti maxime ipsa? Praesentium harum libero alias
            similique.
          </p>
          <button type="text" class="btn btn-danger">
            View Application
          </button>
        </div>
        <div className="request-call-container p-3">
          <RequestCall />
        </div>
      </div>
    </div>
  );
}

export default Journey;
