import React from "react";

function Dashboard() {
  return (
    <div className="whole-dash">
      <div className="top-part">
        <div className="dashboard-inner">
          <h4>Reviews</h4>
          <p> 9999 </p>
        </div>
        <div className="dashboard-inner">
          <h4>Average Rating</h4>
          <p> 4.6 </p>
        </div>
        <div className="dashboard-inner">
          <h4>Setiment Analysis</h4>
          <span>
            <h6>Positive Reviews</h6> <p> 960 </p>
          </span>
          <span>
            <h6>Neutral Reviews</h6> <p> 122 </p>
          </span>
          <span>
            <h6>Negative Reviews</h6> <p> 321 </p>
          </span>
        </div>
      </div>

      <div className="bot-part">
        <div className="dashboard-inner bot-inner">
          <h4> Website Visitor </h4>
          <p> 821 </p>
          <img src="/bar-chart.png"></img>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
