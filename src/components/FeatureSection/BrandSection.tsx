import React, { useEffect } from "react";
import Marquee from "react-fast-marquee";
import logo01 from "../../images/brand/logo01.png";
import logo02 from "../../images/brand/logo02.png";
import logo03 from "../../images/brand/logo03.png";
import logo04 from "../../images/brand/logo04.png";
import logo05 from "../../images/brand/logo05.png";
import logo06 from "../../images/brand/logo06.png";

const BrandSection: React.FC = () => {
    useEffect(() => {
        // Apply very light gradient background using secondary dark color (#1A1B1F)
        const gradient = "linear-gradient(180deg, #1A1B1F 0%, #1C1D21 30%, #1D1E22 50%, #1C1D21 70%, #1A1B1F 100%)";
        
        // Section background
        const sectionEl = document.querySelector<HTMLElement>(".brand");
        if (sectionEl) {
            sectionEl.style.background = gradient;
            sectionEl.style.backgroundImage = "none";
        }
        
        // Container background (translucent container)
        const containerEl = document.querySelector<HTMLElement>(".xb-brand-wrap");
        if (containerEl) {
            containerEl.style.background = "rgba(26, 27, 31, 0.6)";
        }
    }, []);

    return (
        <section className="brand pt-170 pb-150" >
            <div className="container">
                <div className="xb-brand-wrap xb-border">
                    <div className="brand-sub-title xb-border">
                        <p>
                            World's Best <span>120 Companies</span> Work With Us
                        </p>
                    </div>


                    <Marquee speed={40} gradient={false} pauseOnHover={false}>
                        <div className="brand-marquee marquee-left">
                            <div className="xb-brand-inner ul_li_between">
                                {[logo01, logo02, logo03, logo04, logo05, logo06].map(
                                    (logo, index) => (
                                        <div className="xb-brand-item" key={index}>
                                            <img src={logo} alt={`logo ${index + 1}`} />
                                        </div>
                                    )
                                )}
                            </div>
                        </div>
                    </Marquee>

                </div>
            </div>
        </section>
    );
};

export default BrandSection;


