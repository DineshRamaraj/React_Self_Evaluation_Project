import React from "react";
import "./index.css";

function Eligibility() {
  return (
    <div className="eligibility-container container pb-5" id="eligibility">
      <h1 className="eligibility-title display-4 text-center">Eligibility</h1>
      <div className="row gap-2 pt-5 p-3 p-sm-0">
        <div class="card col-12 col-sm-6 col-lg-3 eligibility-card">
          <div class="card-body">
            <h5 class="card-title">Levels</h5>
            <p class="card-text">Three (13 Papers)</p>
          </div>
        </div>
        <div class="card col-12 col-sm-5 col-lg-2 eligibility-card">
          <div class="card-body">
            <h5 class="card-title">Duration</h5>
            <p class="card-text">6 - 18 Months</p>
          </div>
        </div>
        <div class="card col-12 col-sm-6 col-lg-3 eligibility-card">
          <div class="card-body">
            <h5 class="card-title">Exams</h5>
            <p class="card-text">Quartely (Online)</p>
          </div>
        </div>
        <div class="card col-12 col-sm-5 col-lg-3 eligibility-card">
          <div class="card-body">
            <h5 class="card-title">Exemptions</h5>
            <p class="card-text">Upto 9 Papers</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eligibility;
