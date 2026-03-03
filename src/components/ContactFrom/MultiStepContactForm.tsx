import React, { useState, useEffect } from "react";
import { FiX } from "react-icons/fi";

interface MultiStepContactFormProps {
  isOpen?: boolean;
  onClose?: () => void;
  preselectedService?: string;
  isStandalone?: boolean;
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
  const [currentStep, setCurrentStep] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);
  const [countryCode, setCountryCode] = useState("+971");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    service: "",
    problem: "",
    meetingType: "virtual",
    date: "",
    time: "",
  });

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

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

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
          date: formData.date,
          time: formData.time,
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

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return formData.service && formData.problem;
      case 2:
        return formData.email && formData.phone;
      case 3:
        return formData.date && formData.time;
      default:
        return false;
    }
  };

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
        padding: "20px",
        backgroundColor: "#1A1B1F",
      } : {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "#1A1B1F",
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        opacity: isAnimating ? 1 : 0,
        transition: "opacity 0.4s ease-in-out",
        overflowY: "auto",
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
          backgroundColor: "#1A1B1F",
          borderRadius: "20px",
          padding: isStandalone ? "0" : "40px",
          margin: isStandalone ? "0" : "auto",
          position: "relative",
          transform: (isAnimating || isStandalone) ? "translateY(0)" : "translateY(30px)",
          transition: "transform 0.4s ease-out",
        }}
      >
        {/* Title - Dynamic based on step */}
        <h2
          key={currentStep}
          className="multi-step-title"
          style={{
            fontFamily: "var(--font-heading)",
            letterSpacing: "-0.02em",
            transition: "opacity 0.3s ease-in-out, transform 0.3s ease-in-out",
            animation: "fadeIn 0.3s ease-in-out",
          }}
        >
          {currentStep === 1 && "Let's understand the problem!"}
          {currentStep === 2 && "Let's setup communication"}
          {currentStep === 3 && "Let us know your availability"}
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit}>
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
                  value={formData.service}
                  onChange={handleInputChange}
                  required
                  style={{
                    fontFamily: "var(--font-body)",
                    outline: "none",
                    transition: "all 0.2s",
                    cursor: "pointer",
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
                  value={formData.problem}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  style={{
                    fontFamily: "var(--font-body)",
                    outline: "none",
                    resize: "vertical",
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
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  style={{
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
                    onChange={(e) => setCountryCode(e.target.value)}
                    style={{
                      fontFamily: "var(--font-body)",
                      outline: "none",
                      transition: "all 0.2s",
                      cursor: "pointer",
                      width: "35%",
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
                    style={{
                      flex: 1,
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
                  Preferred Date
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  required
                  min={new Date().toISOString().split("T")[0]}
                  style={{
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
                  Preferred Time
                </label>
                <input
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleInputChange}
                  required
                  style={{
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
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="button-wrapper" style={{ gap: "15px", flexWrap: "wrap", justifyContent: currentStep > 1 ? "space-between" : "flex-end" }}>
            {currentStep > 1 && (
              <button
                type="button"
                className="back-button"
                onClick={handleBack}
                style={{
                  backgroundColor: "transparent",
                  border: "2px solid rgba(255, 255, 255, 0.2)",
                  color: "#fff",
                }}
              >
                Back
              </button>
            )}

            {currentStep < 3 ? (
              <button
                type="button"
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
    </div>
  );
};

export default MultiStepContactForm;
