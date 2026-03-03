import React from "react";
import { Link } from "react-router-dom";
import vedhaLogo from "../../images/logo/vedha-icon.svg";

const FloatingHeader: React.FC = () => {
  return (
    <header
      style={{
        position: 'sticky',
        top: '20px',
        margin: '20px auto 40px',
        width: 'calc(100% - 40px)',
        maxWidth: '1200px',
        padding: '12px 24px',
        background: 'rgba(26, 27, 31, 0.7)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderRadius: '50px',
        border: '1px solid rgba(229, 255, 0, 0.2)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        zIndex: 10,
      }}
    >
      {/* Logo */}
      <Link
        to="/"
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        style={{
          display: 'flex',
          alignItems: 'center',
          textDecoration: 'none',
        }}
      >
        <img
          src={vedhaLogo}
          alt="Vedha Logo"
          style={{
            width: '40px',
            height: '40px',
          }}
        />
      </Link>

      {/* Call Us Button */}
      <a
        href="tel:+1234567890"
        style={{
          display: 'flex',
          alignItems: 'center',
          padding: '0',
          background: '#E5FF00',
          color: '#1A1B1F',
          borderRadius: '50px',
          textDecoration: 'none',
          fontWeight: '600',
          fontSize: '14px',
          transition: 'all 0.3s ease',
          boxShadow: '0 4px 12px rgba(229, 255, 0, 0.3)',
          overflow: 'hidden',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-2px)';
          e.currentTarget.style.boxShadow = '0 6px 16px rgba(229, 255, 0, 0.4)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 4px 12px rgba(229, 255, 0, 0.3)';
        }}
      >
        <span style={{ padding: '12px 20px 12px 24px', display: 'flex', alignItems: 'center' }}>
          CALL US
        </span>
        <span
          style={{
            width: '44px',
            height: '44px',
            background: '#1A1B1F',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: '4px',
            flexShrink: 0,
          }}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 5C3 3.89543 3.89543 3 5 3H8.27924C8.70967 3 9.09181 3.27543 9.22792 3.68377L10.7257 8.17721C10.8831 8.64932 10.6694 9.16531 10.2243 9.38787L7.96701 10.5165C9.06925 12.9612 11.0388 14.9308 13.4835 16.033L14.6121 13.7757C14.8347 13.3306 15.3507 13.1169 15.8228 13.2743L20.3162 14.7721C20.7246 14.9082 21 15.2903 21 15.7208V19C21 20.1046 20.1046 21 19 21H18C9.71573 21 3 14.2843 3 6V5Z"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </a>
    </header>
  );
};

export default FloatingHeader;
