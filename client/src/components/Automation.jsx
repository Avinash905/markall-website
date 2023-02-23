import React from "react";
import automation from "../assets/automation.png";
import arrow from "../assets/arrow.svg";
import "../styles/automation.css";

const Automation = () => {
  return (
    <section className="automation-section">
      <div className="automation-container container">
        <div className="automation-content">
          <h2 className="automation-title">
            Save precious time with automation
          </h2>
          <p className="automation-text">
            Lorem ipsum dolor sit amet consectetur. Sed id luctus posuere massa
            leo purus cras commodo. Volutpat massa fusce sit libero ut mollis
            risus.
          </p>
          <a
            href="/"
            className="learn-more-link"
          >
            Learn More{" "}
            <img
              src={arrow}
              alt="arrow"
              className="arrow"
            />
          </a>
        </div>
        <div className="automation-image-container">
          <img
            src={automation}
            alt="automation"
            className="automation-image"
          />
        </div>
      </div>
    </section>
  );
};

export default Automation;
