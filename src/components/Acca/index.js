import React from "react";
import RequestCall from "../RequestCall";
import "./index.css";

function Acca() {
  return (
    <div className="main-acca-container">
      <div className="container-lg container-md-fluid pt-5">
        <div className="row">
          <div className="acca-container p-3">
            <h1 className="acca-title display-6">Become ACCA in 18 months</h1>
            <p className="acca-description">
              lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqu sapiente
              consequ tempor.
            </p>
            <div className="row">
              <div class="card col p-0">
                <div class="card-body p-3">
                  <h5 class="card-title">Choose Us</h5>
                  <p class="card-text">
                    Choose Your Favorite Colors and Products for What you wish
                  </p>
                  <a href="#choose" class="btn btn-primary card-button">
                    Learn More
                  </a>
                </div>
              </div>
              &nbsp;&nbsp;&nbsp;
              <div class="card col p-0">
                <div class="card-body p-3">
                  <h5 class="card-title">Eligibility</h5>
                  <p class="card-text">
                    Your application will Eligiable for further processing.
                  </p>
                  <a href="#eligibility" class="btn btn-primary card-button">
                    Learn More
                  </a>
                </div>
              </div>
              &nbsp;&nbsp;&nbsp;
              <div class="card col p-0">
                <div class="card-body p-3">
                  <h5 class="card-title">Journey</h5>
                  <p class="card-text">
                    Happy Journey to the University of Texas at Austin
                  </p>
                  <a href="#journey" class="btn btn-primary card-button">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
            <div className="row p-5">
              <button type="button" class="btn extra-button col">
                Download Broadcast Report
              </button>
              &nbsp;&nbsp;&nbsp;
              <button type="button" class="btn btn-danger col">
                I Don't know
              </button>
            </div>
          </div>
          <div className="request-call-container p-3">
            <RequestCall />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Acca;
