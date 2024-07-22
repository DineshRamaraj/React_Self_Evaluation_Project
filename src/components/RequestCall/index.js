import React from "react";
import './index.css'

function RequestCall() {
  return (
    <div className="request-container">
      <h1 className="request-title display-6">Applying to ACCA Application</h1>
      <form className="pt-3 pb-2">
        <input
          type="text"
          className="form-control mb-3"
          placeholder="Enter your name"
        />
        <input
          type="password"
          class="form-control mb-3"
          placeholder="Enter your password"
        />
        <input
          type="text"
          class="form-control mb-3"
          placeholder="Enter your ID Number"
        />
        <input
          type="text"
          class="form-control mb-4"
          placeholder="Enter your Nick Name"
        />
        <button type="submit" class="btn request-button">
          Request Call Back
        </button>
      </form>
    </div>
  );
}

export default RequestCall;
