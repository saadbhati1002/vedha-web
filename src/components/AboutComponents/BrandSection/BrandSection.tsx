<<<<<<< HEAD
import React, { useEffect } from "react";
import Marquee from "react-fast-marquee";

// === Import brand logos ===
import logo01 from "../../../images/brand/logo01.png";
import logo02 from "../../../images/brand/logo02.png";
import logo03 from "../../../images/brand/logo03.png";
import logo04 from "../../../images/brand/logo04.png";
import logo05 from "../../../images/brand/logo05.png";
import logo06 from "../../../images/brand/logo06.png";
import logo07 from "../../../images/brand/logo07.png";
import logo08 from "../../../images/brand/logo08.png";
import logo09 from "../../../images/brand/logo09.png";
import logo10 from "../../../images/brand/logo10.png";
import logo11 from "../../../images/brand/logo11.png";

const BrandSection: React.FC = () => {
    const brandLogos = [
        logo01,
        logo02,
        logo03,
        logo04,
        logo05,
        logo06,
        logo07,
        logo08,
        logo09,
        logo10,
        logo11,
    ];

    useEffect(() => {
        // Apply very light gradient background using secondary dark color (#1A1B1F)
        const gradient = "linear-gradient(180deg, #1A1B1F 0%, #1C1D21 30%, #1D1E22 50%, #1C1D21 70%, #1A1B1F 100%)";
        
        // Section background
        const sectionEl = document.querySelector<HTMLElement>(".brand");
        if (sectionEl) {
            sectionEl.style.background = gradient;
            sectionEl.style.backgroundImage = "none";
        }
    }, []);

    return (
        <section className="brand pb-150">
            <div className="container">
                <div className="sec-title sec-title-center brand-sec-title text-center mb-40">
                    <p className="sub-title">
Best <span>Companies</span> Work With Us
                    </p>
                </div>
            </div>

            {/* === Marquee (CSS handles smooth scroll) === */}
            <Marquee
                gradient={false}
                speed={30}
                pauseOnHover
                direction="left"
                className="brand-marquee ac-brand-marquee marquee-left"
            >
                <div className="ac-brand-inner ul_li_between">
                    {brandLogos.map((logo, i) => (
                        <div key={i} className="xb-brand-item">
                            <img src={logo} alt={`brand-logo-${i + 1}`} />
                        </div>
                    ))}
                </div>
            </Marquee>
        </section>
    );
};

export default BrandSection;
=======
import React, { useEffect } from "react";
import Marquee from "react-fast-marquee";

// === Import brand logos ===
import logo01 from "../../../images/brand/logo01.png";
import logo02 from "../../../images/brand/logo02.png";
import logo03 from "../../../images/brand/logo03.png";
import logo04 from "../../../images/brand/logo04.png";
import logo05 from "../../../images/brand/logo05.png";
import logo06 from "../../../images/brand/logo06.png";
import logo07 from "../../../images/brand/logo07.png";
import logo08 from "../../../images/brand/logo08.png";
import logo09 from "../../../images/brand/logo09.png";
import logo10 from "../../../images/brand/logo10.png";
import logo11 from "../../../images/brand/logo11.png";

const BrandSection: React.FC = () => {
    const brandLogos = [
        logo01,
        logo02,
        logo03,
        logo04,
        logo05,
        logo06,
        logo07,
        logo08,
        logo09,
        logo10,
        logo11,
    ];

    useEffect(() => {
        // Apply very light gradient background using secondary dark color (#1A1B1F)
        const gradient = "linear-gradient(180deg, #1A1B1F 0%, #1C1D21 30%, #1D1E22 50%, #1C1D21 70%, #1A1B1F 100%)";
        
        // Section background
        const sectionEl = document.querySelector<HTMLElement>(".brand");
        if (sectionEl) {
            sectionEl.style.background = gradient;
            sectionEl.style.backgroundImage = "none";
        }
    }, []);

    return (
        <section className="brand pb-150">
            <div className="container">
                <div className="sec-title sec-title-center brand-sec-title text-center mb-40">
                    <p className="sub-title">
Best <span>Companies</span> Work With Us
                    </p>
                </div>
            </div>

            {/* === Marquee (CSS handles smooth scroll) === */}
            <Marquee
                gradient={false}
                speed={30}
                pauseOnHover
                direction="left"
                className="brand-marquee ac-brand-marquee marquee-left"
            >
                <div className="ac-brand-inner ul_li_between">
                    {brandLogos.map((logo, i) => (
                        <div key={i} className="xb-brand-item">
                            <img src={logo} alt={`brand-logo-${i + 1}`} />
                        </div>
                    ))}
                </div>
            </Marquee>
        </section>
    );
};

export default BrandSection;
>>>>>>> development
