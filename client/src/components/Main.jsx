import React from "react";
import "../styles/main.css";
import GetStartedBtn from "./GetStartedBtn";
import { BsFillPlayFill } from "react-icons/bs";
import heroImage from "../assets/marketing.png";

const Main = () => {
  return (
    <>
      <section className="main-section">
        <div className="main-container container">
          <div className="main-content">
            <h1 className="main-title">
              Reach your - audience & convert your leads
            </h1>
            <p className="main-text">
              Get your customers with SEO, rank your business with email
              marketing, build sales leads
            </p>
            <div className="main-btn-container">
              <GetStartedBtn content={"Get Started"} />
              <button className="btn watch-demo-btn">
                <BsFillPlayFill className="play-btn" />
                watch demo
              </button>
            </div>
          </div>
          <div className="main-image">
            <div className="main-image-container">
              <img
                src={heroImage}
                alt="hero"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Main;
