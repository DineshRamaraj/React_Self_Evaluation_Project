import React from "react";
import "./index.css";

function ChooseUs() {
  return (
    <div className="choose-container container pt-2 pb-5 w-50" id="choose">
      <h1 className="choose-title display-5 text-center">Why Choose Us?</h1>
      <div className="row pt-5">
        <div class="card col choose-card">
          <div className="text-center">
            <img
              src="https://png.pngtree.com/png-clipart/20220621/original/pngtree-black-light-bulb-icon-png-image_8173692.png"
              class="card-img-top"
              alt="demo1"
            />
          </div>
          <div class="card-body">
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <div class="card col choose-card">
          <div className="text-center">
            <img
              src="https://png.pngtree.com/png-clipart/20240703/original/pngtree-blackboard-icon-three-men-vector-png-image_15476189.png"
              class="card-img-top"
              alt="demo2"
            />
          </div>
          <div class="card-body">
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <div class="card col choose-card">
          <div className="text-center">
            <img
              src="https://trendmedia.az/assets/front/images/services/6d49e73ab5f26e43d3ba937f60c72c42.png"
              class="card-img-top"
              alt="demo3"
            />
          </div>
          <div class="card-body">
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChooseUs;
