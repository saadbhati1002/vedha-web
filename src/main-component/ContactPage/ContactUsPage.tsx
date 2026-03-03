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
            {/* Yellow Progress Bar Section */}
            <div className="contact-header form-wrapper" style={{ textAlign: "center", marginBottom: "40px" }}>
                <h1>Contact Us</h1>
                <div
                    className="progress-wrapper"
                    style={{
                        width: "100%",
                        height: "4px",
                        backgroundColor: "#2a2a2a",
                        borderRadius: "5px",
                        overflow: "hidden"
                    }}
                >
                    <div
                        className="progress-bar"
                        style={{
                            width: "100%",
                            height: "100%",
                            backgroundColor: "#E5FF00"
                        }}
                    />
                </div>
            </div>

            <div className="form-wrapper">
                <MultiStepContactForm isStandalone={true} />
            </div>
        </div>
    );
};

export default ContactUsPage;
