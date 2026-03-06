import React, { useState, useEffect } from "react";
<<<<<<< HEAD
import { FiX } from "react-icons/fi";
import "./MultiStepContactForm.css";

type FormData = {
  email: string;
  phone: string;
  service: string;
  problem: string;
  meetingType: string;
  date: string;
  time: string;
};

const getInitialFormData = (service = ""): FormData => ({
  email: "",
  phone: "",
  service,
  problem: "",
  meetingType: "virtual",
  date: "",
  time: "",
});
=======
import { FiX, FiCalendar, FiClock } from "react-icons/fi";
import { parsePhoneNumber } from "libphonenumber-js";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./DatePickerDark.css";
>>>>>>> development

interface MultiStepContactFormProps {
  isOpen?: boolean;
  onClose?: () => void;
  preselectedService?: string;
<<<<<<< HEAD
  mode?: "modal" | "page";
=======
  isStandalone?: boolean;
>>>>>>> development
}

const services = [
  "AI SaaS Products",
  "Technology Development",
  "Ecommerce Development",
  "Branding and Identity",
  "Technology Consulting",
  "Content & Marketing",
  "Web Development",
  "Mobile App Development",
  "Cloud Services",
  "Digital Transformation",
  "UI/UX Design",
  "Data Analytics",
  "Cybersecurity",
  "DevOps & Infrastructure",
  "Blockchain Solutions",
<<<<<<< HEAD
  "AR/VR Development",
];

const MultiStepContactForm: React.FC<MultiStepContactFormProps> = ({
  isOpen = true,
  onClose = () => {},
  preselectedService,
  mode = "modal",
}) => {
  const isModalMode = mode === "modal";
  const totalSteps = 3; // Make this dynamic by changing this value
=======
  "IoT Development",
  "AR/VR Development",
  "Machine Learning & AI",
];

const MultiStepContactForm: React.FC<MultiStepContactFormProps> = ({
  isOpen,
  onClose,
  preselectedService,
  isStandalone = false,
}) => {
>>>>>>> development
  const [currentStep, setCurrentStep] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);
  const [countryCode, setCountryCode] = useState("+971");
  const [isSubmitted, setIsSubmitted] = useState(false);
<<<<<<< HEAD
  const [formData, setFormData] = useState<FormData>(() =>
    getInitialFormData(preselectedService || "")
  );
  const [stepError, setStepError] = useState("");
=======
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<Date | null>(null);
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    service: "",
    problem: "",
    meetingType: "virtual",
    date: "",
    time: "",
  });
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
>>>>>>> development

  const countryCodes = [
    { code: "+971", country: "UAE" },
    { code: "+1", country: "US/CA" },
    { code: "+44", country: "UK" },
    { code: "+91", country: "India" },
    { code: "+86", country: "China" },
    { code: "+81", country: "Japan" },
    { code: "+49", country: "Germany" },
    { code: "+33", country: "France" },
    { code: "+61", country: "Australia" },
    { code: "+65", country: "Singapore" },
    { code: "+966", country: "Saudi Arabia" },
    { code: "+974", country: "Qatar" },
    { code: "+973", country: "Bahrain" },
    { code: "+968", country: "Oman" },
    { code: "+965", country: "Kuwait" },
  ];

  useEffect(() => {
<<<<<<< HEAD
    const shouldReset = isModalMode ? isOpen : true;
    if (shouldReset) {
      setIsAnimating(true);
      setCurrentStep(1);
      setCountryCode("+971");
      setFormData(getInitialFormData(preselectedService || ""));
    }
  }, [isOpen, preselectedService, isModalMode]);
=======
    if (isOpen) {
      setIsAnimating(true);
      setCurrentStep(1);
      setFormData({
        email: "",
        phone: "",
        service: preselectedService || "",
        problem: "",
        meetingType: "virtual",
        date: "",
        time: "",
      });
    }
  }, [isOpen, preselectedService]);
>>>>>>> development

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
<<<<<<< HEAD
    setStepError("");
  };

  const isValidEmail = (email: string) => {
    const normalizedEmail = email.trim().toLowerCase();
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizedEmail);
  };

  const isValidPhone = (value: string) => {
    const cleaned = value.replace(/\D/g, "");
    return cleaned.length === 10;
=======
  };

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const validatePhone = (phone: string, country: string) => {
    try {
      const phoneNumber = parsePhoneNumber(country + phone);
      return phoneNumber ? phoneNumber.isValid() : false;
    } catch (error) {
      return false;
    }
>>>>>>> development
  };

  const handleNext = () => {
    if (currentStep === 2) {
<<<<<<< HEAD
      if (!isValidEmail(formData.email)) {
        setStepError("Please enter a valid email address.");
        return;
      }
      if (!isValidPhone(formData.phone)) {
        setStepError("Please enter a 10-digit phone number.");
        return;
      }
    }

    if (currentStep < totalSteps) {
      setStepError("");
=======
      let isValid = true;
      if (!validateEmail(formData.email)) {
        setEmailError("Please enter a valid email address.");
        isValid = false;
      } else {
        setEmailError("");
      }

      if (!validatePhone(formData.phone, countryCode)) {
        setPhoneError("Please enter a valid phone number.");
        isValid = false;
      } else {
        setPhoneError("");
      }

      if (!isValid) return;
    }

    if (currentStep < 3) {
>>>>>>> development
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
<<<<<<< HEAD
      setStepError("");
=======
>>>>>>> development
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
<<<<<<< HEAD
    
    try {
      // Send to Formspree (frontend-only, no backend needed!)
      // Get Formspree form ID from environment variable
      const formspreeId = process.env.REACT_APP_FORMSPREE_ID || 'YOUR_FORMSPREE_ID';
      
      const submissionData = {
        service: formData.service,
        problem: formData.problem,
        email: formData.email,
        phone: `${countryCode} ${formData.phone}`,
        meetingType: formData.meetingType,
        date: formData.date,
        time: formData.time,
        _subject: `New Contact: ${formData.service}`,
      };

      const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(submissionData)
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        const data = await response.json();
        console.error('Submission error:', data);
        alert('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to send message. Please try again.');
    }
  };

  const resetFormToInitialState = () => {
    setIsSubmitted(false);
    setCurrentStep(1);
    setCountryCode("+971");
    setFormData(getInitialFormData(preselectedService || ""));
    setIsAnimating(true);
  };

=======

    try {
      // Send email via API
      const response = await fetch('http://localhost:3001/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service: formData.service,
          problem: formData.problem,
          email: formData.email,
          phone: formData.phone,
          countryCode: countryCode,
          meetingType: formData.meetingType,
          date: selectedDate ? selectedDate.toLocaleDateString() : "",
          time: selectedTime ? selectedTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : "",
        }),
      });

      const data = await response.json();

      if (data.success) {
        // Show success message
        setIsSubmitted(true);
      } else {
        alert('Failed to send email. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to send email. Please try again.');
    }
  };

>>>>>>> development
  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return formData.service && formData.problem;
      case 2:
        return formData.email && formData.phone;
      case 3:
<<<<<<< HEAD
        return formData.date && formData.time;
=======
        return selectedDate && selectedTime;
>>>>>>> development
      default:
        return false;
    }
  };

<<<<<<< HEAD
  const shouldRender = isModalMode ? isOpen : true;
  if (!shouldRender) return null;

  const overlayWrapperStyles: React.CSSProperties = isModalMode
    ? {
=======
  if (!isOpen && !isStandalone) return null;

  // Show success message
  if (isSubmitted) {
    return (
      <div
        className="multi-step-form-overlay"
        style={{
          position: isStandalone ? "relative" : "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: isStandalone ? "auto" : "100%",
          backgroundColor: "#1A1B1F",
          zIndex: 9999,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          opacity: 1,
          padding: isStandalone ? "60px 20px" : "0",
        }}
      >
        <div
          style={{
            textAlign: "center",
            maxWidth: "600px",
            padding: "40px",
            animation: "fadeIn 0.4s ease-in-out",
          }}
        >
          <h2
            style={{
              fontSize: "42px",
              fontWeight: "300",
              color: "#fff",
              marginBottom: "30px",
              fontFamily: "var(--font-heading)",
              letterSpacing: "-0.02em",
            }}
          >
            Thanks! We have received your problem... will see you soon with a solution.
          </h2>
          {!isStandalone && (
            <button
              onClick={onClose}
              style={{
                padding: "15px 40px",
                backgroundColor: "#E5FF00",
                border: "none",
                borderRadius: "50px",
                color: "#000",
                fontSize: "16px",
                fontFamily: "var(--font-body)",
                fontWeight: "600",
                cursor: "pointer",
                transition: "all 0.2s",
                marginTop: "30px",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              Close
            </button>
          )}
        </div>
      </div>
    );
  }

  return (
    <div
      className={isStandalone ? "multi-step-form-container" : "multi-step-form-overlay"}
      style={isStandalone ? {
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "0",
        backgroundColor: "transparent",
      } : {
>>>>>>> development
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
<<<<<<< HEAD
        backgroundColor: "rgba(0, 0, 0, 0.95)",
=======
        backgroundColor: "#1A1B1F",
>>>>>>> development
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        opacity: isAnimating ? 1 : 0,
        transition: "opacity 0.4s ease-in-out",
        overflowY: "auto",
<<<<<<< HEAD
        overflowX: "hidden",
        padding: "20px",
        WebkitOverflowScrolling: "touch",
      }
    : {
        width: "100%",
      };

  const formWrapperStyle: React.CSSProperties = {
    width: "100%",
    maxWidth: "100%",
    boxSizing: "border-box",
  };

  const progressIndicatorStyle: React.CSSProperties = {
    position: "fixed",
    top: 0,
    left: 0,
    width: `${(currentStep / totalSteps) * 100}%`,
    height: "6px",
    backgroundColor: "#E5FF00",
    transition: "width 0.3s ease",
    borderRadius: "4px",
    zIndex: 9999,       // keeps it above everything
  };

  const modalProgressBarStyle: React.CSSProperties = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "4px",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    zIndex: 10000,
  };

  const pageProgressBarWrapperStyle: React.CSSProperties = {
    width: "100%",
    height: "6px",
    backgroundColor: "rgba(255, 255, 255, 0)",
    borderRadius: "4px",
    marginBottom: "16px",
  };

  const closeButtonElement = isModalMode ? (
    <button
      type="button"
      style={{
        position: "fixed",
        top: "20px",
        right: "20px",
        background: "transparent",
        border: "none",
        color: "#fff",
        fontSize: "32px",
        cursor: "pointer",
        padding: "10px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "50%",
        width: "48px",
        height: "48px",
        transition: "background 0.2s",
        zIndex: 10001,
        touchAction: "manipulation",
      }}
      onClick={onClose}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = "rgba(229, 255, 0, 0.1)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "transparent";
      }}
    >
      <FiX />
    </button>
  ) : null;

  const successButtonHandler = isModalMode ? onClose : resetFormToInitialState;
  const successButtonText = isModalMode ? "Close" : "Submit another request";
  const modalSuccessContentStyle: React.CSSProperties = {
    textAlign: "center",
    maxWidth: "600px",
    padding: "40px",
    animation: "fadeIn 0.4s ease-in-out",
  };
  const pageSuccessOuterStyle: React.CSSProperties = {
    padding: "40px 20px",
    display: "flex",
    justifyContent: "center",
  };
  const pageSuccessInnerStyle: React.CSSProperties = {
    width: "100%",
    maxWidth: "800px",
    backgroundColor: "#111",
    borderRadius: "20px",
    padding: "50px",
    boxShadow: "0 25px 80px rgba(0, 0, 0, 0.4)",
    textAlign: "center",
  };
  const successButtonStyle: React.CSSProperties = {
    padding: "14px 32px",
    backgroundColor: "#E5FF00",
    border: "none",
    borderRadius: "50px",
    color: "#000",
    fontSize: "16px",
    fontFamily: "var(--font-body)",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.2s",
    marginTop: "24px",
    touchAction: "manipulation",
    minHeight: "44px",
  };

  const sharedStyles = (
    <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
=======
        padding: "20px",
      }}
    >
      {/* Progress Bar at Top */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "4px",
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          zIndex: 10000,
        }}
      >
        <div
          style={{
            width: `${(currentStep / 3) * 100}%`,
            height: "100%",
            backgroundColor: "#E5FF00",
            transition: "width 0.3s ease",
          }}
        />
      </div>

      {/* Close Button - Top Right - Hidden in Standalone */}
      {!isStandalone && (
        <button
          onClick={onClose}
          style={{
            position: "fixed",
            top: "20px",
            right: "20px",
            background: "transparent",
            border: "none",
            color: "#fff",
            fontSize: "36px",
            cursor: "pointer",
            padding: "12px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "50%",
            width: "50px",
            height: "50px",
            transition: "background 0.2s",
            zIndex: 10001,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "rgba(229, 255, 0, 0.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "transparent";
          }}
        >
          <FiX />
        </button>
      )}

      <div
        style={{
          width: "100%",
          maxWidth: "800px",
          backgroundColor: isStandalone ? "transparent" : "#1A1B1F",
          borderRadius: isStandalone ? "0" : "20px",
          padding: isStandalone ? "0" : "40px",
          margin: isStandalone ? "0" : "auto",
          position: "relative",
          transform: (isAnimating || isStandalone) ? "translateY(0)" : "translateY(30px)",
          transition: "transform 0.4s ease-out",
        }}
      >
        {/* Title - Dynamic based on step */}
        <h1
          key={currentStep}
          className={isStandalone ? "main-heading" : "multi-step-title"}
          style={{
            textAlign: "left",
            fontFamily: "var(--font-heading)",
            letterSpacing: "-0.02em",
            transition: "opacity 0.3s ease-in-out, transform 0.3s ease-in-out",
            animation: "fadeIn 0.3s ease-in-out",
          }}
        >
          {currentStep === 1 && "Let's understand the problem!"}
          {currentStep === 2 && "Let's setup communication"}
          {currentStep === 3 && "Let us know your availability"}
        </h1>

        {/* Form */}
        <form onSubmit={handleSubmit} className={isStandalone ? "form-area" : ""}>
          {/* Step 1: Service and Problem */}
          {currentStep === 1 && (
            <div
              style={{
                animation: "fadeIn 0.4s ease-in-out",
              }}
            >
              <div style={{ marginBottom: "30px" }}>
                <label
                  style={{
                    display: "block",
                    color: "#fff",
                    marginBottom: "10px",
                    fontSize: "16px",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  What service you are looking for?
                </label>
                <select
                  name="service"
                  className="form-input form-select"
                  value={formData.service}
                  onChange={handleInputChange}
                  required
                  style={{
                    fontFamily: "var(--font-body)",
                    outline: "none",
                    transition: "all 0.2s",
                    cursor: "pointer",
                  }}
                >
                  <option value="" style={{ backgroundColor: "#1A1B1F", color: "#fff" }}>
                    Select a service
                  </option>
                  {services.map((service) => (
                    <option
                      key={service}
                      value={service}
                      style={{ backgroundColor: "#1A1B1F", color: "#fff" }}
                    >
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              <div style={{ marginBottom: "30px" }}>
                <label
                  style={{
                    display: "block",
                    color: "#fff",
                    marginBottom: "10px",
                    fontSize: "16px",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  Define the problem you are facing or the solution you are looking for?
                </label>
                <textarea
                  name="problem"
                  className="form-input"
                  value={formData.problem}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  style={{
                    fontFamily: "var(--font-body)",
                    outline: "none",
                    resize: "vertical",
                    transition: "all 0.2s",
                  }}
                />
              </div>
            </div>
          )}

          {/* Step 2: Email and Phone */}
          {currentStep === 2 && (
            <div
              style={{
                animation: "fadeIn 0.4s ease-in-out",
              }}
            >
              <div style={{ marginBottom: "30px" }}>
                <label
                  style={{
                    display: "block",
                    color: "#fff",
                    marginBottom: "10px",
                    fontSize: "16px",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  className="form-input"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  style={{
                    fontFamily: "var(--font-body)",
                    outline: "none",
                    transition: "all 0.2s",
                    border: emailError ? "1px solid #ff4d4d" : "1px solid #2a2f38",
                    borderRadius: "8px",
                    padding: "14px",
                    width: "100%",
                    background: "transparent",
                    color: "#fff",
                    fontSize: "16px",
                    boxSizing: "border-box",
                  }}
                />
                {emailError && <span style={{ color: "#ff4d4d", fontSize: "14px", marginTop: "10px", display: "block" }}>{emailError}</span>}
              </div>

              <div style={{ marginBottom: "30px" }}>
                <label
                  style={{
                    display: "block",
                    color: "#fff",
                    marginBottom: "10px",
                    fontSize: "16px",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  Phone Number
                </label>
                <div
                  style={{
                    display: "flex",
                    gap: "10px",
                  }}
                >
                  <select
                    value={countryCode}
                    className="form-input form-select"
                    onChange={(e) => setCountryCode(e.target.value)}
                    style={{
                      fontFamily: "var(--font-body)",
                      outline: "none",
                      transition: "all 0.2s",
                      cursor: "pointer",
                      width: "35%",
                    }}
                  >
                    {countryCodes.map((country) => (
                      <option
                        key={country.code}
                        value={country.code}
                        style={{ backgroundColor: "#1A1B1F", color: "#fff" }}
                      >
                        {country.code} {country.country}
                      </option>
                    ))}
                  </select>
                  <input
                    type="tel"
                    name="phone"
                    className="form-input"
                    value={formData.phone}
                    onChange={(e) => {
                      // Only allow numbers and basic characters
                      const val = e.target.value.replace(/[^\d\s-]/g, '');
                      setFormData((prev) => ({ ...prev, phone: val }));
                    }}
                    required
                    placeholder="Phone number"
                    style={{
                      flex: 1,
                      fontFamily: "var(--font-body)",
                      outline: "none",
                      transition: "all 0.2s",
                      border: phoneError ? "1px solid #ff4d4d" : "1px solid #2a2f38",
                      borderRadius: "8px",
                      padding: "14px",
                      background: "transparent",
                      color: "#fff",
                      fontSize: "16px",
                      boxSizing: "border-box",
                    }}
                  />
                </div>
                {phoneError && <span style={{ color: "#ff4d4d", fontSize: "14px", marginTop: "10px", display: "block" }}>{phoneError}</span>}
              </div>
            </div>
          )}

          {/* Step 3: Meeting Details */}
          {currentStep === 3 && (
            <div
              style={{
                animation: "fadeIn 0.4s ease-in-out",
              }}
            >
              <div style={{ marginBottom: "30px" }}>
                <label
                  style={{
                    display: "block",
                    color: "#fff",
                    marginBottom: "10px",
                    fontSize: "16px",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  Meeting Preferance
                </label>
                <div
                  style={{
                    display: "flex",
                    gap: "20px",
                    marginBottom: "20px",
                  }}
                >
                  <label
                    className="radio-label"
                    style={{
                      flex: 1,
                      padding: "15px",
                      backgroundColor:
                        formData.meetingType === "virtual"
                          ? "rgba(229, 255, 0, 0.1)"
                          : "rgba(255, 255, 255, 0.05)",
                      border:
                        formData.meetingType === "virtual"
                          ? "2px solid #E5FF00"
                          : "1px solid rgba(255, 255, 255, 0.1)",
                      borderRadius: "10px",
                      color: "#fff",
                      cursor: "pointer",
                      textAlign: "center",
                      transition: "all 0.2s",
                      fontFamily: "var(--font-body)",
                    }}
                  >
                    <input
                      type="radio"
                      name="meetingType"
                      value="virtual"
                      checked={formData.meetingType === "virtual"}
                      onChange={handleInputChange}
                      style={{ display: "none" }}
                    />
                    Virtual Meeting
                  </label>
                  <label
                    className="radio-label"
                    style={{
                      flex: 1,
                      padding: "15px",
                      backgroundColor:
                        formData.meetingType === "physical"
                          ? "rgba(229, 255, 0, 0.1)"
                          : "rgba(255, 255, 255, 0.05)",
                      border:
                        formData.meetingType === "physical"
                          ? "2px solid #E5FF00"
                          : "1px solid rgba(255, 255, 255, 0.1)",
                      borderRadius: "10px",
                      color: "#fff",
                      cursor: "pointer",
                      textAlign: "center",
                      transition: "all 0.2s",
                      fontFamily: "var(--font-body)",
                    }}
                  >
                    <input
                      type="radio"
                      name="meetingType"
                      value="physical"
                      checked={formData.meetingType === "physical"}
                      onChange={handleInputChange}
                      style={{ display: "none" }}
                    />
                    Physical Meeting
                  </label>
                </div>
              </div>

              <div style={{ display: "flex", gap: "16px", marginBottom: "30px" }}>
                {/* Preferred Date */}
                <div style={{ flex: 1 }}>
                  <label
                    style={{
                      display: "block",
                      color: "#fff",
                      marginBottom: "10px",
                      fontSize: "16px",
                      fontFamily: "var(--font-body)",
                    }}
                  >
                    Preferred Date
                  </label>
                  <div className="date-picker-wrapper">
                    <DatePicker
                      selected={selectedDate}
                      onChange={(date: Date | null) => setSelectedDate(date)}
                      minDate={new Date()}
                      placeholderText="Select a date"
                      dateFormat="MMM d, yyyy"
                      popperPlacement="bottom-start"
                    />
                    <span className="picker-icon"><FiCalendar /></span>
                  </div>
                </div>

                {/* Preferred Time */}
                <div style={{ flex: 1 }}>
                  <label
                    style={{
                      display: "block",
                      color: "#fff",
                      marginBottom: "10px",
                      fontSize: "16px",
                      fontFamily: "var(--font-body)",
                    }}
                  >
                    Preferred Time
                  </label>
                  <div className="time-picker-wrapper">
                    <DatePicker
                      selected={selectedTime}
                      onChange={(time: Date | null) => setSelectedTime(time)}
                      showTimeSelect
                      showTimeSelectOnly
                      timeIntervals={30}
                      timeCaption="Pick Time"
                      dateFormat="h:mm aa"
                      placeholderText="Select a time"
                      popperPlacement="bottom-start"
                    />
                    <span className="picker-icon"><FiClock /></span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="button-wrapper">
            {currentStep > 1 && (
              <button
                type="button"
                className="back-btn"
                onClick={handleBack}
              >
                Back
              </button>
            )}

            {currentStep < 3 ? (
              <button
                type="button"
                className="next-btn"
                onClick={handleNext}
                disabled={!isStepValid()}
                style={{
                  opacity: isStepValid() ? 1 : 0.5,
                  cursor: isStepValid() ? "pointer" : "not-allowed",
                }}
              >
                Next
              </button>
            ) : (
              <button
                type="submit"
                className="next-btn"
                disabled={!isStepValid()}
                style={{
                  opacity: isStepValid() ? 1 : 0.5,
                  cursor: isStepValid() ? "pointer" : "not-allowed",
                }}
              >
                Submit
              </button>
            )}
          </div>
        </form>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(5px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
>>>>>>> development
          }
        }
        input[type="date"]::-webkit-calendar-picker-indicator,
        input[type="time"]::-webkit-calendar-picker-indicator {
          filter: invert(1);
          cursor: pointer;
        }
        input[type="date"]::-webkit-calendar-picker-indicator:hover,
        input[type="time"]::-webkit-calendar-picker-indicator:hover {
          opacity: 0.7;
        }
      `}</style>
<<<<<<< HEAD
  );

  if (isSubmitted) {
    const successContent = (
      <div style={isModalMode ? modalSuccessContentStyle : pageSuccessInnerStyle}>
        <h2
          style={{
            fontSize: "2rem",
            fontWeight: "700",
            color: "#E5FF00",
            marginBottom: "24px",
            fontFamily: "var(--font-heading)",
            letterSpacing: "-0.02em",
            lineHeight: 1.2,
          }}
        >
          Thanks! We have received your problem... will see you soon with a solution.
        </h2>
        <button
          onClick={successButtonHandler}
          style={successButtonStyle}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.05)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          {successButtonText}
        </button>
      </div>
    );

    return (
      <>
        {isModalMode ? (
          <div className="multi-step-form-overlay" style={overlayWrapperStyles}>
            {successContent}
          </div>
        ) : (
          <div style={pageSuccessOuterStyle}>{successContent}</div>
        )}
        {sharedStyles}
      </>
    );
  }

  return (
    <>
      <div
        className={isModalMode ? "multi-step-form-overlay" : "multi-step-form-page"}
        style={overlayWrapperStyles}
      >
        {isModalMode && (
          <div style={modalProgressBarStyle}>
            <div style={progressIndicatorStyle} />
          </div>
        )}
        {closeButtonElement}
        <div style={formWrapperStyle} className="multi-step-form-wrapper">
          {!isModalMode && (
            <div style={pageProgressBarWrapperStyle}>
              <div style={progressIndicatorStyle} />
            </div>
          )}
          <h2
            key={currentStep}
            style={{
              lineHeight: 1.1,
              fontWeight: "600",
              color: "#fff",
              marginBottom: "24px",
              textAlign: "left",
              fontFamily: "var(--font-heading)",
              letterSpacing: "-0.02em",
              wordBreak: "break-word",
            }}
          >
            {currentStep === 1 && "Let's understand the problem!"}
            {currentStep === 2 && "Let's setup communication"}
            {currentStep === 3 && "Let us know your availability"}
          </h2>

          <form onSubmit={handleSubmit}>
            {stepError && <p className="form-error">{stepError}</p>}
            {/* Step 1: Service and Problem */}
            {currentStep === 1 && (
              <div
                style={{
                  animation: "fadeIn 0.4s ease-in-out",
                  minHeight: "220px",
                }}
              >
                <div style={{ marginBottom: "20px" }}>
                  <label
                    style={{
                      display: "block",
                      color: "#fff",
                      marginBottom: "6px",
                      fontSize: "16px",
                      fontFamily: "var(--font-body)",
                    }}
                  >
                    What service you are looking for?
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    required
                    style={{
                      width: "100%",
                      padding: "10px",
                      backgroundColor: "rgba(255, 255, 255, 0.05)",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      borderRadius: "10px",
                      color: "#fff",
                      fontSize: "16px",
                      fontFamily: "var(--font-body)",
                      outline: "none",
                      transition: "all 0.2s",
                      cursor: "pointer",
                      boxSizing: "border-box" as const,
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = "#E5FF00";
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
                    }}
                  >
                    <option value="" style={{ backgroundColor: "#1A1B1F", color: "#fff" }}>
                      Select a service
                    </option>
                    {services.map((service) => (
                      <option
                        key={service}
                        value={service}
                        style={{ backgroundColor: "#1A1B1F", color: "#fff" }}
                      >
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div style={{ marginBottom: "20px" }}>
                  <label
                    style={{
                      display: "block",
                      color: "#fff",
                      marginBottom: "6px",
                      fontSize: "16px",
                      fontFamily: "var(--font-body)",
                    }}
                  >
                    Define the problem you are facing or the solution you are looking for?
                  </label>
                  <textarea
                    name="problem"
                    value={formData.problem}
                    onChange={handleInputChange}
                    required
                    rows={2}
                    style={{
                      width: "100%",
                      padding: "8px",
                      backgroundColor: "rgba(255, 255, 255, 0.05)",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      borderRadius: "10px",
                      color: "#fff",
                      fontSize: "16px",
                      fontFamily: "var(--font-body)",
                      outline: "none",
                      resize: "none",
                      transition: "all 0.2s",
                      overflow: "auto",
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = "#E5FF00";
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
                    }}
                  />
                </div>
              </div>
            )}

            {/* Step 2: Email and Phone */}
            {currentStep === 2 && (
              <div
                style={{
                  animation: "fadeIn 0.4s ease-in-out",
                }}
              >
                <div style={{ marginBottom: "20px" }}>
                  <label
                    style={{
                      display: "block",
                      color: "#fff",
                      marginBottom: "6px",
                      fontSize: "16px",
                      fontFamily: "var(--font-body)",
                    }}
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    style={{
                      width: "100%",
                      padding: "10px",
                      backgroundColor: "rgba(255, 255, 255, 0.05)",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      borderRadius: "10px",
                      color: "#fff",
                      fontSize: "16px",
                      fontFamily: "var(--font-body)",
                      outline: "none",
                      transition: "all 0.2s",
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = "#E5FF00";
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
                    }}
                  />
                </div>

                <div style={{ marginBottom: "20px" }}>
                  <label
                    style={{
                      display: "block",
                      color: "#fff",
                      marginBottom: "6px",
                      fontSize: "16px",
                      fontFamily: "var(--font-body)",
                    }}
                  >
                    Phone Number
                  </label>
                  <div
                    style={{
                      display: "flex",
                      gap: "15px",
                      width: "100%",
                    }}
                  >
                    <select
                      value={countryCode}
                      onChange={(e) => setCountryCode(e.target.value)}
                      className="country-code-select"
                      style={{
                        padding: "10px 8px",
                        backgroundColor: "rgba(255, 255, 255, 0.05)",
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                        borderRadius: "10px",
                        color: "#fff",
                        fontSize: "14px",
                        fontFamily: "var(--font-body)",
                        outline: "none",
                        transition: "all 0.2s",
                        cursor: "pointer",
                        boxSizing: "border-box",
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = "#E5FF00";
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
                      }}
                    >
                      {countryCodes.map((country) => (
                        <option
                          key={country.code}
                          value={country.code}
                          style={{ backgroundColor: "#1A1B1F", color: "#fff" }}
                        >
                          {country.code} {country.country}
                        </option>
                      ))}
                    </select>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      placeholder="Phone number"
                      className="phone-input-field"
                      style={{
                        padding: "10px",
                        backgroundColor: "rgba(255, 255, 255, 0.05)",
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                        borderRadius: "10px",
                        color: "#fff",
                        fontSize: "10px",
                        fontFamily: "var(--font-body)",
                        outline: "none",
                        transition: "all 0.2s",
                        boxSizing: "border-box",
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = "#E5FF00";
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
                      }}
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Meeting Details */}
            {currentStep === 3 && (
              <div
                style={{
                  animation: "fadeIn 0.4s ease-in-out",
                }}
              >
                <div style={{ marginBottom: "16px" }}>
                  <label
                    style={{
                      display: "block",
                      color: "#fff",
                      marginBottom: "6px",
                      fontSize: "16px",
                      fontFamily: "var(--font-body)",
                    }}
                  >
                    Meeting Preferance
                  </label>
                  <div
                    style={{
                      display: "flex",
                      gap: "12px",
                      marginBottom: "12px",
                    }}
                  >
                    <label
                      style={{
                        flex: 1,
                        padding: "10px",
                        backgroundColor:
                          formData.meetingType === "virtual"
                            ? "rgba(229, 255, 0, 0.1)"
                            : "rgba(255, 255, 255, 0.05)",
                        border:
                          formData.meetingType === "virtual"
                            ? "2px solid #E5FF00"
                            : "1px solid rgba(255, 255, 255, 0.1)",
                        borderRadius: "10px",
                        color: "#fff",
                        cursor: "pointer",
                        textAlign: "center",
                        transition: "all 0.2s",
                        fontFamily: "var(--font-body)",
                      }}
                    >
                      <input
                        type="radio"
                        name="meetingType"
                        value="virtual"
                        checked={formData.meetingType === "virtual"}
                        onChange={handleInputChange}
                        style={{ display: "none" }}
                      />
                      Virtual Meeting
                    </label>
                    <label
                      style={{
                        flex: 1,
                        padding: "10px",
                        backgroundColor:
                          formData.meetingType === "physical"
                            ? "rgba(229, 255, 0, 0.1)"
                            : "rgba(255, 255, 255, 0.05)",
                        border:
                          formData.meetingType === "physical"
                            ? "2px solid #E5FF00"
                            : "1px solid rgba(255, 255, 255, 0.1)",
                        borderRadius: "10px",
                        color: "#fff",
                        cursor: "pointer",
                        textAlign: "center",
                        transition: "all 0.2s",
                        fontFamily: "var(--font-body)",
                      }}
                    >
                      <input
                        type="radio"
                        name="meetingType"
                        value="physical"
                        checked={formData.meetingType === "physical"}
                        onChange={handleInputChange}
                        style={{ display: "none" }}
                      />
                      Physical Meeting
                    </label>
                  </div>
                </div>

                <div className="meeting-details-grid" style={{ marginBottom: "20px" }}>
                  <div>
                    <label
                      style={{
                        display: "block",
                        color: "#fff",
                        marginBottom: "6px",
                        fontSize: "16px",
                        fontFamily: "var(--font-body)",
                      }}
                    >
                      Preferred Date
                    </label>
                    <input
                      className="meeting-input"
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      required
                      min={new Date().toISOString().split("T")[0]}
                    />
                  </div>
                  <div>
                    <label
                      style={{
                        display: "block",
                        color: "#fff",
                        marginBottom: "6px",
                        fontSize: "16px",
                        fontFamily: "var(--font-body)",
                      }}
                    >
                      Preferred Time
                    </label>
                    <input
                      className="meeting-input"
                      type="time"
                      name="time"
                      value={formData.time}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "20px",
                gap: "12px",
                flexWrap: "wrap",
              }}
            >
              {currentStep > 1 && (
                <button
                  type="button"
                  onClick={handleBack}
                  style={{
                    padding: "12px 28px",
                    backgroundColor: "transparent",
                    border: "2px solid rgba(255, 255, 255, 0.2)",
                    borderRadius: "50px",
                    color: "#fff",
                    fontSize: "16px",
                    fontFamily: "var(--font-body)",
                    fontWeight: "600",
                    cursor: "pointer",
                    transition: "all 0.2s",
                    touchAction: "manipulation",
                    minHeight: "44px",
                    flex: "0 1 auto",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "#E5FF00";
                    e.currentTarget.style.color = "#E5FF00";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.2)";
                    e.currentTarget.style.color = "#fff";
                  }}
                >
                  Back
                </button>
              )}

              <div style={{ marginLeft: currentStep > 1 ? "auto" : undefined }}>
                {currentStep < totalSteps ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    disabled={!isStepValid()}
                    style={{
                      padding: "12px 28px",
                      backgroundColor: isStepValid() ? "#E5FF00" : "rgba(229, 255, 0, 0.3)",
                      border: "none",
                      borderRadius: "50px",
                      color: isStepValid() ? "#000" : "rgba(0, 0, 0, 0.5)",
                      fontSize: "16px",
                      fontFamily: "var(--font-body)",
                      fontWeight: "600",
                      cursor: isStepValid() ? "pointer" : "not-allowed",
                      transition: "all 0.2s",
                      touchAction: "manipulation",
                      minHeight: "44px",
                      flex: "0 1 auto",
                    }}
                    onMouseEnter={(e) => {
                      if (isStepValid()) {
                        e.currentTarget.style.transform = "scale(1.05)";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (isStepValid()) {
                        e.currentTarget.style.transform = "scale(1)";
                      }
                    }}
                  >
                    Next
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={!isStepValid()}
                    style={{
                      padding: "12px 28px",
                      backgroundColor: isStepValid() ? "#E5FF00" : "rgba(229, 255, 0, 0.3)",
                      border: "none",
                      borderRadius: "50px",
                      color: isStepValid() ? "#000" : "rgba(0, 0, 0, 0.5)",
                      fontSize: "16px",
                      fontFamily: "var(--font-body)",
                      fontWeight: "600",
                      cursor: isStepValid() ? "pointer" : "not-allowed",
                      transition: "all 0.2s",
                      touchAction: "manipulation",
                      minHeight: "44px",
                      flex: "0 1 auto",
                    }}
                    onMouseEnter={(e) => {
                      if (isStepValid()) {
                        e.currentTarget.style.transform = "scale(1.05)";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (isStepValid()) {
                        e.currentTarget.style.transform = "scale(1)";
                      }
                    }}
                  >
                    Submit
                  </button>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
      {sharedStyles}
    </>
=======
    </div>
>>>>>>> development
  );
};

export default MultiStepContactForm;
