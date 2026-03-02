import React, { useState } from "react";
import "./OnboardingPage.css";
type FormData = {
  fullName: string;
  email: string;
  phone: string;
  business: string;
  service: string;
  requirements: string;
};

const countryCodes = [
  { code: "+971", country: "UAE" },
  { code: "+1",   country: "US/CA" },
  { code: "+44",  country: "UK" },
  { code: "+91",  country: "India" },
  { code: "+49",  country: "Germany" },
  { code: "+33",  country: "France" },
  { code: "+61",  country: "Australia" },
  { code: "+65",  country: "Singapore" },
  { code: "+966", country: "Saudi Arabia" },
  { code: "+974", country: "Qatar" },
];

const STEPS = [
  { key: "fullName",     label: "Let's get to know you.",                   hint: "" },
  { key: "business",     label: "Briefly describe your business.",         hint: "What do you do, and who do you serve?" },
  { key: "service",      label: "What service are you looking for?",       hint: "Website development, mobile app, AI solution, redesign, etc." },
  { key: "requirements", label: "Anything specific we should keep in mind?", hint: "Special requirements, expectations, references, or constraints." },
];

const TOTAL = STEPS.length;

const OnboardingPage: React.FC = () => {
  const [step, setStep]               = useState(0);
  const [countryCode, setCountryCode] = useState("+971");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError]             = useState("");
  const [form, setForm]               = useState<FormData>({
    fullName: "", email: "", phone: "", business: "",
    service: "", requirements: "",
  });

  const currentKey = STEPS[step]?.key as keyof FormData;

  const set = (key: keyof FormData, val: string) => {
    setForm(prev => ({ ...prev, [key]: val }));
    setError("");
  };

  const isValidEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());
  const isValidPhone = (v: string) => v.replace(/\D/g, "").length >= 7;

  const validate = (): boolean => {
    if (step === 0) {
      if (!form.fullName.trim())         { setError("Please enter your full name."); return false; }
      if (!form.email.trim())            { setError("Please enter your email."); return false; }
      if (!isValidEmail(form.email))     { setError("Please enter a valid email address."); return false; }
      if (!form.phone)                   { setError("Please enter your phone number."); return false; }
      if (!isValidPhone(form.phone))     { setError("Please enter a valid phone number."); return false; }
    }
    if (step === 1 && !form.business.trim()) { setError("Please describe your business."); return false; }
    if (step === 2 && !form.service.trim())  { setError("Please tell us the service you need."); return false; }
    return true;
  };

  const handleNext = () => {
    if (!validate()) return;
    setStep(s => s + 1);
    setError("");
  };

  const handleBack = () => {
    setStep(s => s - 1);
    setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    try {
      const formspreeId = process.env.REACT_APP_FORMSPREE_ID || "YOUR_FORMSPREE_ID";
      const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          phone: `${countryCode} ${form.phone}`,
          _subject: `New Onboarding: ${form.fullName}`,
        }),
      });
      if (res.ok) setIsSubmitted(true);
      else setError("Something went wrong. Please try again.");
    } catch {
      setError("Something went wrong. Please try again.");
    }
  };

  const progress = ((step + 1) / TOTAL) * 100;

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "12px 16px",
    backgroundColor: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "10px",
    color: "#fff",
    fontSize: "16px",
    fontFamily: "var(--font-body)",
    outline: "none",
    transition: "border-color 0.2s",
    boxSizing: "border-box",
  };

  const focusYellow = (e: React.FocusEvent<any>) =>
    (e.currentTarget.style.borderColor = "#E5FF00");
  const blurGray = (e: React.FocusEvent<any>) =>
    (e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)");

  /* ── Success ─────────────────────────────────────────── */
  if (isSubmitted) {
    return (
      <div className="ob-root">
         
        <div className="ob-body ob-center">
          <div className="ob-success-mark">✓</div>
          <h2 className="ob-heading">We've got your details, {form.fullName.split(" ")[0]}.</h2>
          <p className="ob-sub">Our team will be in touch shortly.</p>
          <a href="/" className="ob-link">← Back to homepage</a>
        </div>
      </div>
    );
  }

  return (
    <div className="ob-root">
      

      {/* Progress bar */}
      <div className="ob-progress-track">
        <div className="ob-progress-fill" style={{ width: `${progress}%` }} />
      </div>

      <div className="ob-body">
        <div className="ob-logo"></div>
        <p className="ob-counter">{step + 1} <span>/ {TOTAL}</span></p>

        <h2 key={`h-${step}`} className="ob-heading ob-fadein">
          {STEPS[step].label}
        </h2>
        {STEPS[step].hint && (
          <p key={`hint-${step}`} className="ob-sub ob-fadein">{STEPS[step].hint}</p>
        )}

        {error && <p className="ob-error">{error}</p>}

        <form
          onSubmit={handleSubmit}
          className="ob-form ob-fadein"
          onKeyDown={e => { if (e.key === "Enter") e.preventDefault(); }}
        >
          {/* 1 — Name + Email + Phone */}
          {step === 0 && (
            <div style={{ display: "flex", flexDirection: "column", gap: "14px", width: "100%" }}>
              <input autoFocus type="text" placeholder="Full name"
                value={form.fullName} onChange={e => set("fullName", e.target.value)}
                style={inputStyle} onFocus={focusYellow} onBlur={blurGray} />
              <input type="email" placeholder="Email address"
                value={form.email} onChange={e => set("email", e.target.value)}
                style={inputStyle} onFocus={focusYellow} onBlur={blurGray} />
              <div style={{ display: "flex", gap: "12px", width: "100%" }}>
                <select value={countryCode} onChange={e => setCountryCode(e.target.value)}
                  style={{ ...inputStyle, width: "auto", flex: "0 0 140px", cursor: "pointer" }}
                  onFocus={focusYellow} onBlur={blurGray}>
                  {countryCodes.map(c => (
                    <option key={c.code} value={c.code} style={{ background: "#111" }}>
                      {c.code} {c.country}
                    </option>
                  ))}
                </select>
                <input type="tel" placeholder="Phone number"
                  value={form.phone} onChange={e => set("phone", e.target.value)}
                  style={{ ...inputStyle, flex: 1 }} onFocus={focusYellow} onBlur={blurGray} />
              </div>
            </div>
          )}

          {/* 2 — Business */}
          {step === 1 && (
            <textarea autoFocus rows={4} placeholder="We build SaaS tools for small businesses..."
              value={form.business} onChange={e => set("business", e.target.value)}
              style={{ ...inputStyle, resize: "none" }} onFocus={focusYellow} onBlur={blurGray} />
          )}

          {/* 3 — Service */}
          {step === 2 && (
            <textarea autoFocus rows={3} placeholder="A mobile app with AI recommendations..."
              value={form.service} onChange={e => set("service", e.target.value)}
              style={{ ...inputStyle, resize: "none" }} onFocus={focusYellow} onBlur={blurGray} />
          )}

          {/* 4 — Requirements (optional) */}
          {step === 3 && (
            <textarea autoFocus rows={3} placeholder="Must support Arabic, inspired by... (optional)"
              value={form.requirements} onChange={e => set("requirements", e.target.value)}
              style={{ ...inputStyle, resize: "none" }} onFocus={focusYellow} onBlur={blurGray} />
          )}

          {/* Nav */}
          <div className="ob-nav">
            {step > 0 && (
              <button type="button" className="ob-btn-back" onClick={handleBack}>
                ← Back
              </button>
            )}
            {step < TOTAL - 1 ? (
              <button type="button" className="ob-btn-next" onClick={handleNext}>
                Continue
              </button>
            ) : (
              <button type="submit" className="ob-btn-next">
                Submit
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default OnboardingPage;
