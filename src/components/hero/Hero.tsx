import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LightPillar from "../reactbits/LightPillar";
import vedhaLogo from "../../images/logo/vedha-icon.svg";

const HeroSection: React.FC = () => {
  const [logoOpacity, setLogoOpacity] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    // Apply very light gradient background using secondary dark color (#1A1B1F)
    const gradient = "linear-gradient(180deg, #1A1B1F 0%, #1C1D21 30%, #1D1E22 50%, #1C1D21 70%, #1A1B1F 100%)";
    
    const sectionEl = document.querySelector<HTMLElement>(".hero");
    if (sectionEl) {
      sectionEl.style.background = gradient;
      sectionEl.style.backgroundImage = "none";
    }

    // Animate logo fade-in
    const fadeInDuration = 2000; // 2 seconds
    const startTime = Date.now();
    
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / fadeInDuration, 1);
      setLogoOpacity(progress * 0.3); // Fade to 0.3 opacity
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    // Start animation after a short delay
    setTimeout(() => {
      requestAnimationFrame(animate);
    }, 300);
  }, []);

  return (
    <section className="hero hero-style pos-rel" style={{ position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', paddingTop: 0, paddingBottom: 0 }}>
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', minHeight: '100vh', zIndex: 0, pointerEvents: 'none' }}>
        <LightPillar
          topColor="#E5FF00"
          bottomColor="#1A1B1F"
          intensity={1.0}
          rotationSpeed={0.3}
          glowAmount={0.004}
          pillarWidth={7.2}
          pillarRotation={360}
          noiseIntensity={1.0}
        />
        {/* Subtle V logo watermark with fade-in animation */}
        <div
          className="hero-logo-watermark"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '800px',
            height: '800px',
            opacity: logoOpacity,
            backgroundImage: `url(${vedhaLogo})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            filter: 'blur(1px)',
            mixBlendMode: 'overlay',
            zIndex: 1,
            transition: 'opacity 0.2s ease-out',
          }}
        />
      </div>
      <div className="container" style={{ position: 'relative', zIndex: 1, width: '100%' }}>
        <div className="row justify-content-center">
          {/* ---------- Centered Content ---------- */}
          <div className="col-lg-10 col-md-12">
            <div className="hero-content text-center" style={{ margin: '0 auto' }}>
              <h2 className="title">
                Your Complete Technology Partner for Digital Success
              </h2>
              <p className="sub-title">
                From web development to cloud solutions, mobile apps to digital transformation—we deliver end-to-end tech services that drive growth and innovation.
              </p>
              <div className="hero-btn">
                <button 
                  className="thm-btn agency-btn" 
                  onClick={() => navigate("/contact")}
                  type="button"
                >
                  <span className="text">Start Your Project</span>
                  <span className="arrow">
                    <span className="arrow-icon">
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="5.06592"
                          y="19.9785"
                          width="20.5712"
                          height="2.61221"
                          transform="rotate(-40.2798 5.06592 19.9785)"
                          fill="white"
                        />
                        <rect
                          x="7.97095"
                          y="7.24463"
                          width="2.61221"
                          height="2.61221"
                          transform="rotate(-40.2798 7.97095 7.24463)"
                          fill="white"
                        />
                        <rect
                          x="11.6523"
                          y="7.54834"
                          width="2.61221"
                          height="2.61221"
                          transform="rotate(-40.2798 11.6523 7.54834)"
                          fill="white"
                        />
                        <rect
                          x="15.334"
                          y="7.85205"
                          width="2.61221"
                          height="2.61221"
                          transform="rotate(-40.2798 15.334 7.85205)"
                          fill="white"
                        />
                        <rect
                          x="18.7119"
                          y="11.8374"
                          width="2.61221"
                          height="2.61221"
                          transform="rotate(-40.2798 18.7119 11.8374)"
                          fill="white"
                        />
                        <rect
                          x="18.4084"
                          y="15.52"
                          width="2.61221"
                          height="2.61221"
                          transform="rotate(-40.2798 18.4084 15.52)"
                          fill="white"
                        />
                        <rect
                          x="18.104"
                          y="19.2012"
                          width="2.61221"
                          height="2.61221"
                          transform="rotate(-40.2798 18.104 19.2012)"
                          fill="white"
                        />
                      </svg>
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="5.06592"
                          y="19.9785"
                          width="20.5712"
                          height="2.61221"
                          transform="rotate(-40.2798 5.06592 19.9785)"
                          fill="white"
                        />
                        <rect
                          x="7.97095"
                          y="7.24463"
                          width="2.61221"
                          height="2.61221"
                          transform="rotate(-40.2798 7.97095 7.24463)"
                          fill="white"
                        />
                        <rect
                          x="11.6523"
                          y="7.54834"
                          width="2.61221"
                          height="2.61221"
                          transform="rotate(-40.2798 11.6523 7.54834)"
                          fill="white"
                        />
                        <rect
                          x="15.334"
                          y="7.85205"
                          width="2.61221"
                          height="2.61221"
                          transform="rotate(-40.2798 15.334 7.85205)"
                          fill="white"
                        />
                        <rect
                          x="18.7119"
                          y="11.8374"
                          width="2.61221"
                          height="2.61221"
                          transform="rotate(-40.2798 18.7119 11.8374)"
                          fill="white"
                        />
                        <rect
                          x="18.4084"
                          y="15.52"
                          width="2.61221"
                          height="2.61221"
                          transform="rotate(-40.2798 18.4084 15.52)"
                          fill="white"
                        />
                        <rect
                          x="18.104"
                          y="19.2012"
                          width="2.61221"
                          height="2.61221"
                          transform="rotate(-40.2798 18.104 19.2012)"
                          fill="white"
                        />
                      </svg>
                    </span>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
