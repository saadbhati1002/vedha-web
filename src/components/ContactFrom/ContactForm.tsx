<<<<<<< HEAD
import React, { useState } from "react";
import SimpleReactValidator from "simple-react-validator";

// Import your icons
import userIcon from "../../images/icon/user-balck-icon.svg";
import emailIcon from "../../images/icon/sms-balck-icon.svg";
import phoneIcon from "../../images/icon/call-icon02.svg";
import uploadIcon from "../../images/icon/upload-icon.svg";
import listIcon from "../../images/icon/list-icon.svg";
import messageIcon from "../../images/icon/messages-icon.svg";
import arrowIcon from "../../images/icon/rotate-arrow-black02.svg";

const ContactForm: React.FC = () => {
  const [forms, setForms] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    file: null as File | null,
  });

  const [validator] = useState(
    new SimpleReactValidator({ className: "errorMessage" })
  );

  const changeHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForms({ ...forms, [name]: value });

    if (validator.allValid()) validator.hideMessages();
    else validator.showMessages();
  };

  const fileHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setForms({ ...forms, file });
  };

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    if (validator.allValid()) {
      console.log("✅ Form submitted:", forms);
      alert("Form submitted successfully!");

      setForms({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
        file: null,
      });
      validator.hideMessages();
    } else {
      validator.showMessages();
    }
  };

  return (
    <form onSubmit={submitHandler} className="xb-contact-input-form">
      <div className="row mt-none-20">
        {/* Name */}
        <div className="col-lg-6 col-md-6 mt-20">
          <div className="xb-input-field">
            <input
              id="author-name"
              name="name"
              type="text"
              value={forms.name}
              onChange={changeHandler}
              required
            />
            <label htmlFor="author-name">Your Name*</label>
            <img src={userIcon} alt="user" />
          </div>
          {validator.message("name", forms.name, "required|alpha_space")}
        </div>

        {/* Email */}
        <div className="col-lg-6 col-md-6 mt-20">
          <div className="xb-input-field">
            <input
              id="author-email"
              name="email"
              type="email"
              value={forms.email}
              onChange={changeHandler}
              required
            />
            <label htmlFor="author-email">Email Address*</label>
            <img src={emailIcon} alt="email" />
          </div>
          {validator.message("email", forms.email, "required|email")}
        </div>

        {/* Phone */}
        <div className="col-lg-6 col-md-6 mt-20">
          <div className="xb-input-field">
            <input
              id="author-phone"
              name="phone"
              type="text"
              value={forms.phone}
              onChange={changeHandler}
              required
            />
            <label htmlFor="author-phone">Contact No*</label>
            <img src={phoneIcon} alt="phone" />
          </div>
          {validator.message("phone", forms.phone, "required|numeric")}
        </div>

        {/* File Upload */}
        <div className="col-lg-6 col-md-6 mt-20">
          <div className="xb-input-field xb-select-file">
            <input type="file" onChange={fileHandler} />
            <img src={uploadIcon} alt="upload" />
            <span>{forms.file ? forms.file.name : "Attach file..."}</span>
          </div>
        </div>

        {/* Select Field */}
        <div className="col-lg-12 col-md-12 mt-20">
          <div className="xb-input-field xb-select-field">
            <select
              name="service"
              value={forms.service}
              onChange={changeHandler}
              required
              className="nice-select"
            >
              <option value="">Select Service*</option>
              <option value="AI - marketing">AI - marketing</option>
              <option value="AI consulting">AI consulting</option>
              <option value="AI chatbot virtual">AI chatbot virtual</option>
            </select>
            <img src={listIcon} alt="list" />
          </div>
          {validator.message("service", forms.service, "required")}
        </div>

        {/* Message */}
        <div className="col-lg-12 col-md-12 mt-20">
          <div className="xb-input-field xb-massage-field">
            <textarea
              id="massage"
              name="message"
              value={forms.message}
              onChange={changeHandler}
              required
            ></textarea>
            <label htmlFor="massage">Your Message..</label>
            <img src={messageIcon} alt="message" />
          </div>
          {validator.message("message", forms.message, "required")}
        </div>
      </div>

      {/* Submit Button */}
      <div className="form-submit-btn mt-35">
        <button type="submit" className="thm-btn form-btn">
          Submit Here
          <span className="xb-icon">
            <img src={arrowIcon} alt="arrow" />
            <img src={arrowIcon} alt="arrow" />
          </span>
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
=======
import React, { useState } from "react";
import SimpleReactValidator from "simple-react-validator";

// Import your icons
import userIcon from "../../images/icon/user-balck-icon.svg";
import emailIcon from "../../images/icon/sms-balck-icon.svg";
import phoneIcon from "../../images/icon/call-icon02.svg";
import uploadIcon from "../../images/icon/upload-icon.svg";
import listIcon from "../../images/icon/list-icon.svg";
import messageIcon from "../../images/icon/messages-icon.svg";
import arrowIcon from "../../images/icon/rotate-arrow-black02.svg";

const API_BASE = process.env.REACT_APP_API_URL || "http://localhost:3001";

const ContactForm: React.FC = () => {
  const [forms, setForms] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    file: null as File | null,
  });

  const [validator] = useState(
    new SimpleReactValidator({ className: "errorMessage" })
  );

  const [submitStatus, setSubmitStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const changeHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForms({ ...forms, [name]: value });

    if (validator.allValid()) validator.hideMessages();
    else validator.showMessages();
  };

  const fileHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setForms({ ...forms, file });
  };

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validator.allValid()) {
      validator.showMessages();
      return;
    }

    setSubmitStatus("loading");
    setStatusMessage("");

    try {
      const response = await fetch(`${API_BASE}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: forms.name,
          email: forms.email,
          phone: forms.phone,
          service: forms.service,
          message: forms.message,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus("success");
        setStatusMessage("✅ Message sent! We'll be in touch soon.");
        setForms({ name: "", email: "", phone: "", service: "", message: "", file: null });
        validator.hideMessages();
      } else {
        setSubmitStatus("error");
        setStatusMessage("❌ Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error("Contact form error:", err);
      setSubmitStatus("error");
      setStatusMessage("❌ Could not reach the server. Please try again later.");
    }
  };

  return (
    <form onSubmit={submitHandler} className="xb-contact-input-form">
      <div className="row mt-none-20">
        {/* Name */}
        <div className="col-lg-6 col-md-6 mt-20">
          <div className="xb-input-field">
            <input
              id="author-name"
              name="name"
              type="text"
              value={forms.name}
              onChange={changeHandler}
              required
            />
            <label htmlFor="author-name">Your Name*</label>
            <img src={userIcon} alt="user" />
          </div>
          {validator.message("name", forms.name, "required|alpha_space")}
        </div>

        {/* Email */}
        <div className="col-lg-6 col-md-6 mt-20">
          <div className="xb-input-field">
            <input
              id="author-email"
              name="email"
              type="email"
              value={forms.email}
              onChange={changeHandler}
              required
            />
            <label htmlFor="author-email">Email Address*</label>
            <img src={emailIcon} alt="email" />
          </div>
          {validator.message("email", forms.email, "required|email")}
        </div>

        {/* Phone */}
        <div className="col-lg-6 col-md-6 mt-20">
          <div className="xb-input-field">
            <input
              id="author-phone"
              name="phone"
              type="text"
              value={forms.phone}
              onChange={changeHandler}
              required
            />
            <label htmlFor="author-phone">Contact No*</label>
            <img src={phoneIcon} alt="phone" />
          </div>
          {validator.message("phone", forms.phone, "required|numeric")}
        </div>

        {/* File Upload */}
        <div className="col-lg-6 col-md-6 mt-20">
          <div className="xb-input-field xb-select-file">
            <input type="file" onChange={fileHandler} />
            <img src={uploadIcon} alt="upload" />
            <span>{forms.file ? forms.file.name : "Attach file..."}</span>
          </div>
        </div>

        {/* Select Service */}
        <div className="col-lg-12 col-md-12 mt-20">
          <div className="xb-input-field xb-select-field">
            <select
              name="service"
              value={forms.service}
              onChange={changeHandler}
              required
              className="nice-select"
            >
              <option value="">Select Service*</option>
              <option value="AI - marketing">AI - marketing</option>
              <option value="AI consulting">AI consulting</option>
              <option value="AI chatbot virtual">AI chatbot virtual</option>
            </select>
            <img src={listIcon} alt="list" />
          </div>
          {validator.message("service", forms.service, "required")}
        </div>

        {/* Message */}
        <div className="col-lg-12 col-md-12 mt-20">
          <div className="xb-input-field xb-massage-field">
            <textarea
              id="massage"
              name="message"
              value={forms.message}
              onChange={changeHandler}
              required
            ></textarea>
            <label htmlFor="massage">Your Message..</label>
            <img src={messageIcon} alt="message" />
          </div>
          {validator.message("message", forms.message, "required")}
        </div>
      </div>

      {/* Status message */}
      {submitStatus !== "idle" && (
        <p
          style={{
            marginTop: "16px",
            fontWeight: 500,
            color: submitStatus === "success" ? "#4caf50" : submitStatus === "error" ? "#f44336" : "#aaa",
          }}
        >
          {submitStatus === "loading" ? "Sending…" : statusMessage}
        </p>
      )}

      {/* Submit Button */}
      <div className="form-submit-btn mt-35">
        <button
          type="submit"
          className="thm-btn form-btn"
          disabled={submitStatus === "loading"}
        >
          {submitStatus === "loading" ? "Sending…" : "Submit Here"}
          <span className="xb-icon">
            <img src={arrowIcon} alt="arrow" />
            <img src={arrowIcon} alt="arrow" />
          </span>
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
>>>>>>> development
