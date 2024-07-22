import React from "react";
import "./index.css";
function Learn() {
  return (
    <div className="container mt-3 mb-5">
      <h1 className="display-5 text-center pb-5">
        What will you Learn in ACCA?
      </h1>
      <div className="row">
        <div className="card col p-0">
          <div className="card-body p-0 m-0 d-flex flex-column justify-content-between">
            <div>
              <h1 className="learn-heading">Skills</h1>
              <ul className="learn-list-container">
                <li className="learn-list-item">HTML5</li>
                <li className="learn-list-item">CSS</li>
                <li className="learn-list-item">JavaScript</li>
                <li className="learn-list-item">Bootstrap</li>
                <li className="learn-list-item">React.js</li>
                <li className="learn-list-item">Node.js</li>
                <li className="learn-list-item">MySql</li>
                <li className="learn-list-item">MongoDB</li>
              </ul>
            </div>
            <h1 className="learn-last-heading">7 papers</h1>
          </div>
        </div>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <div className="card col p-0 m-0">
          <div className="card-body p-0 m-0 d-flex flex-column justify-content-between">
            <div>
              <h1 className="learn-heading">Career Guidelines</h1>
              <ul className="learn-list-container">
                <li className="learn-list-item">Alumni Guidance</li>
                <li className="learn-list-item">Psychometric Tests</li>
                <li className="learn-list-item">University Engagement</li>
                <li className="learn-list-item">Personalized Counselling</li>
                <li className="learn-list-item">
                  Technology-based Research tools
                </li>
              </ul>
            </div>
            <h1 className="learn-last-heading">4 papers</h1>
          </div>
        </div>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <div className="card col p-0">
          <div className="card-body p-0 m-0 d-flex flex-column justify-content-between">
            <div>
              <h1 className="learn-heading">Knowledge</h1>
              <ul className="learn-list-container">
                <li className="learn-list-item">Problem Solving</li>
                <li className="learn-list-item">Communication</li>
                <li className="learn-list-item">Analysis</li>
              </ul>
            </div>
            <h1 className="learn-last-heading">5 papers</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Learn;
