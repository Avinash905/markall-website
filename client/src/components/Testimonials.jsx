import React from "react";
import "../styles/testimonials.css";
import vector from "../assets/vector.svg";

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <div className="testimonials-container container">
        <div className="testimonials-left">
          <span className="uppercase">OUR HAPPY CUSTOMERS</span>
          <h2 className="testimonials-heading">
            What our customers say about us
          </h2>
        </div>
        <div className="testimonials-right">
          <img
            src={vector}
            alt="quotation"
            className="testimonial-quote"
          />
          <div className="testimonial-review">
            Lorem ipsum dolor sit amet consectetur. In praesent ac sit
            scelerisque lacus. Faucibus tincidunt commodo mi.
          </div>
          <div className="testimonial-name">Jane Doe</div>
          <div className="testimonial-work">Product Specialist, Lorem Co.</div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
