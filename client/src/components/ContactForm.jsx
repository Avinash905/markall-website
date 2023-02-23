import React, { useState } from "react";
import "../styles/contactform.css";
import { BsTelephone } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";
import { VscGlobe } from "react-icons/vsc";
import axios from "axios";
import toast from "react-hot-toast";

axios.defaults.baseURL = process.env.REACT_APP_SERVER_URL;

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const inputHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const formSubmit = async (e) => {
    e.preventDefault();
    try {
      if (
        !formData.name ||
        !formData.email ||
        !formData.phone ||
        !formData.message
      ) {
        toast.error("Input field should not be empty");
      }

      const { data } = await toast.promise(
        axios.post("/sendmessage", {
          ...formData,
        }),
        {
          success: "Message sent successfully",
          error: "Unable to send message",
          loading: "Sending message...",
        }
      );
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      return error;
    }
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="contact-box phone-container">
          <div className="phone-title">
            <BsTelephone />
            <h3>Call us</h3>
          </div>
          <a
            href="tel:+91 93545 66860"
            className="phone-number"
          >
            +91 93545 66860
          </a>
        </div>
        <div className="contact-box location-container">
          <div className="location-title">
            <SlLocationPin />
            <h3>Location</h3>
          </div>
          <span className="location">Ghaziabad, Uttar Pradesh</span>
        </div>
        <div className="contact-box mail-container">
          <div className="mail-title">
            <VscGlobe />
            <h3>Mail us</h3>
          </div>
          <a
            href="mailto:info@markall.in"
            className="mail-number"
          >
            info@markall.in
          </a>
        </div>
      </div>
      <div className="contact-form-container">
        <h2>Contact Now</h2>
        <p>
          In diam consequat nec eu. Eu sem nec vel, sollicitudin ipsum viverra
          sed nibh amet. Nunc, et pharetra, duis tortor dictum nisl. Id
          vestibulum tincidunt adipiscing gravida risus.
        </p>
        <form className="contact-form">
          <input
            name="name"
            type="text"
            className="form-input"
            placeholder="Name *"
            value={formData.name}
            onChange={(e) => inputHandler(e)}
          />
          <input
            name="email"
            type="email"
            className="form-input"
            placeholder="Email *"
            value={formData.email}
            onChange={(e) => inputHandler(e)}
          />
          <input
            name="phone"
            type="number"
            className="form-input"
            placeholder="Phone *"
            value={formData.phone}
            onChange={(e) => inputHandler(e)}
          />
          <input
            name="message"
            type="text"
            className="form-input"
            placeholder="Message *"
            value={formData.message}
            onChange={(e) => inputHandler(e)}
          />
          <input
            type="submit"
            value="Submit Form"
            className="btn submit-btn"
            onClick={formSubmit}
          />
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
