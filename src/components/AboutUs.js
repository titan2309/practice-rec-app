import React from "react";

export default function AboutUs() {
  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "10%" }}
    >
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">Hardik Rathore (CEO & Founder) </h5>
          <p className="card-text">
            I am a dedicated and passionate professional with a strong
            background in Web-Development. With 1 month of experience in React,
            I have developed a deep understanding of the unique challenges and
            opportunities that businesses face in today's fast-paced and
            ever-changing environment.
          </p>
          <a
            href="https://www.linkedin.com/in/hardik-rathore-76bb8b224/"
            className="btn btn-primary"
            target="_blank"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}
