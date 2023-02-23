import React from "react";
import "../styles/getstartedbtn.css";

const GetStartedBtn = ({ content, customClass }) => {
  return (
    <button className={`btn getstarted-btn ${customClass}`}>{content}</button>
  );
};

export default GetStartedBtn;
