import React from "react";
import MultiStepContactForm from "../../components/ContactFrom/MultiStepContactForm";
import "./ContactPage.css";

const ContactPage: React.FC = () => (
  <main className="contact-page">
    <div className="contact-page__background">
      <span className="contact-page__bloom bloom-one" />
      <span className="contact-page__bloom bloom-two" />
      <span className="contact-page__bloom bloom-three" />
    </div>
    <div className="contact-content">
      <div className="contact-form-shell">
        <MultiStepContactForm mode="page" />
      </div>
    </div>
  </main>
);

export default ContactPage;