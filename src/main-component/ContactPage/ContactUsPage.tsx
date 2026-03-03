import React, { useEffect } from "react";
import MultiStepContactForm from "../../components/ContactFrom/MultiStepContactForm";
import "./ContactUs.css"; // Added CSS file import

const ContactUsPage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = "Contact Us | Vedha Web";
    }, []);

    return (
        <div className="contact-page">
            <div className="contact-content">
                <MultiStepContactForm isStandalone={true} />
            </div>
        </div>
    );
};

export default ContactUsPage;
