import React, { useEffect, useState } from "react";
<<<<<<< HEAD
import { Link } from "react-router-dom";
=======
import { Link, useNavigate } from "react-router-dom";
>>>>>>> development
import arrowIcon from "../../images/icon/rotate-arrow-black.svg";

// Service images
import img01 from "../../images/service/IMG1.jpg";
import img02 from "../../images/service/IMG2.jpg";
import img03 from "../../images/service/IMG3.jpg";
import img04 from "../../images/service/IMG4.jpg";
import img05 from "../../images/service/IMG5.jpg";
import img06 from "../../images/service/IMG6.jpg";

interface ServiceItem {
  id: number;
  title: string;
  desc: string;
  img: string;
  link: string;
}

const services: ServiceItem[] = [
  {
    id: 1,
    title: "AI SaaS Products",
    desc: "Use AI to target audiences, personalize campaigns, and analyze data for better engagement and results.",
    img: img01,
<<<<<<< HEAD
    link: "/contact",
=======
    link: "/service-details",
>>>>>>> development
  },
  {
    id: 2,
    title: "Technology Development",
    desc: "We turn complex ideas into clear, launchable products using AI and advanced analytics—empowering smarter decisions.",
    img: img02,
<<<<<<< HEAD
    link: "/contact",
=======
    link: "/service-details",
>>>>>>> development
  },
  {
    id: 3,
    title: "Ecommerce Development",
    desc: "We create intelligent chatbots and virtual assistants that improve customer support and automate interactions 24/7.",
    img: img03,
<<<<<<< HEAD
    link: "/contact",
=======
    link: "/service-details",
>>>>>>> development
  },
  {
    id: 4,
    title: "Branding and Identity",
    desc: "Shaping brands that look good, feel right, and stand out.",
    img: img04,
<<<<<<< HEAD
    link: "/contact",
=======
    link: "/service-details",
>>>>>>> development
  },
  {
    id: 5,
    title: "Technology Consulting",
    desc: "We guide businesses in adopting AI strategies, optimizing processes, and integrating technologies for lasting success.",
    img: img05,
<<<<<<< HEAD
    link: "/contact",
=======
    link: "/service-details",
>>>>>>> development
  },
  {
    id: 6,
    title: "Content & Marketing",
    desc: "Creating strategic content and marketing campaigns that engage audiences, strengthen brands, and drive measurable growth.",
    img: img06,
<<<<<<< HEAD
    link: "/contact",
=======
    link: "/service-details",
>>>>>>> development
  },
];

const ServiceSection: React.FC = () => {
<<<<<<< HEAD
  const [activeId, setActiveId] = useState<number>(1);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 600);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
=======
  const navigate = useNavigate();
  const [activeId, setActiveId] = useState<number>(1);
>>>>>>> development

  useEffect(() => {
    // Apply very light gradient background using secondary dark color (#1A1B1F)
    // Very subtle gradient from dark to slightly lighter and back
    const gradient = "linear-gradient(180deg, #1A1B1F 0%, #1C1D21 30%, #1D1E22 50%, #1C1D21 70%, #1A1B1F 100%)";
<<<<<<< HEAD
    
=======

>>>>>>> development
    // Top section (header area)
    const sectionEl = document.querySelector<HTMLElement>(".service");
    if (sectionEl) {
      sectionEl.style.background = gradient;
      sectionEl.style.backgroundImage = "none";
    }
<<<<<<< HEAD
    
=======

>>>>>>> development
    // Middle section (service wrap container)
    const bgEl = document.querySelector<HTMLElement>(".xb-service-wrap");
    if (bgEl) {
      bgEl.style.background = gradient;
      bgEl.style.backgroundImage = "none";
    }
<<<<<<< HEAD
    
=======

>>>>>>> development
    // Bottom section (service items) - update to match gradient theme
    const serviceItems = document.querySelectorAll<HTMLElement>(".xb-service-item");
    serviceItems.forEach((item) => {
      item.style.background = "rgba(26, 27, 31, 0.85)";
    });
  }, []);

  return (
    <section className="service pt-135">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-11">
            <div className="sec-title custom-sec-title xb-sec-padding text-center">
              <span className="sub-title">Our Main Services</span>
              <h2 className="title">
                {/* <span className="round-img">
                  <img src={gif} alt="gif" />
                </span>{" "} */}
                Helping you grow with the power of technology and smart, data-driven strategy.
              </h2>
              <div className="xb-heading-btn d-inline">
                {/* <Link className="thm-btn agency-btn" to="/service">
                  <span className="text">view more services</span>
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
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Service Boxes */}
      <div className="xb-service-wrap">
        {services.map((service) => (
          <div
            key={service.id}
            className={`xb-service-item xb-border xb-mouseenter ${activeId === service.id ? "active" : ""
              }`}
<<<<<<< HEAD
            onMouseEnter={() => !isMobile && setActiveId(service.id)}
            onClick={() => isMobile && setActiveId(activeId === service.id ? 0 : service.id)}
=======
            onMouseEnter={() => setActiveId(service.id)}
>>>>>>> development
          >
            <div className="xb-item--inner">
              <div className="xb-item--item">
                <div className="xb-item--head-item">
                  <h3 className="xb-item--title border-effect">
<<<<<<< HEAD
                    <Link to={service.link}>
                      {service.title}
                    </Link>
                  </h3>
                  <Link className="xb-item--icon" to={service.link}>
=======
                    <Link
                      to={service.link}
                      onClick={(e) => {
                        e.preventDefault();
                        navigate('/contact-us');
                      }}
                    >
                      {service.title}
                    </Link>
                  </h3>
                  <Link
                    className="xb-item--icon"
                    to={service.link}
                    onClick={(e) => {
                      e.preventDefault();
                      onServiceClick?.(service.title);
                    }}
                  >
>>>>>>> development
                    <img src={arrowIcon} alt="arrow" />
                  </Link>
                </div>
                <p className="xb-item--content">{service.desc}</p>
                <div className="img-hove-effect">
                  <div className="xb-item--img xb-img">
                    {[...Array(4)].map((_, i) => (
<<<<<<< HEAD
                      <Link to={service.link} key={i}>
=======
                      <Link
                        to={service.link}
                        key={i}
                        onClick={(e) => {
                          e.preventDefault();
                          navigate('/contact-us');
                        }}
                      >
>>>>>>> development
                        <img src={service.img} alt={service.title} />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <div className="service-vertical-text">
                <h3 className="xb-item--title">
<<<<<<< HEAD
                  <Link to={service.link}>
                    {service.title}
                  </Link>
                </h3>
                <Link className="xb-icon" to={service.link}>
=======
                  <Link
                    to={service.link}
                    onClick={(e) => {
                      e.preventDefault();
                      navigate('/contact-us');
                    }}
                  >
                    {service.title}
                  </Link>
                </h3>
                <Link
                  className="xb-icon"
                  to={service.link}
                  onClick={(e) => {
                    e.preventDefault();
                    onServiceClick?.(service.title);
                  }}
                >
>>>>>>> development
                  <svg
                    width="31"
                    height="31"
                    viewBox="0 0 31 31"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="6.28979"
                      y="21.4111"
                      width="22.36"
                      height="2.83936"
                      transform="rotate(-40.2798 6.28979 21.4111)"
                      fill="white"
                    />
                    <rect
                      x="9.44751"
                      y="7.57031"
                      width="2.83936"
                      height="2.83936"
                      transform="rotate(-40.2798 9.44751 7.57031)"
                      fill="white"
                    />
                    <rect
                      x="13.449"
                      y="7.90015"
                      width="2.83936"
                      height="2.83936"
                      transform="rotate(-40.2798 13.449 7.90015)"
                      fill="white"
                    />
                    <rect
                      x="17.4507"
                      y="8.23047"
                      width="2.83936"
                      height="2.83936"
                      transform="rotate(-40.2798 17.4507 8.23047)"
                      fill="white"
                    />
                    <rect
                      x="21.1223"
                      y="12.5627"
                      width="2.83936"
                      height="2.83936"
                      transform="rotate(-40.2798 21.1223 12.5627)"
                      fill="white"
                    />
                    <rect
                      x="20.7925"
                      y="16.5649"
                      width="2.83936"
                      height="2.83936"
                      transform="rotate(-40.2798 20.7925 16.5649)"
                      fill="white"
                    />
                    <rect
                      x="20.4617"
                      y="20.5667"
                      width="2.83936"
                      height="2.83936"
                      transform="rotate(-40.2798 20.4617 20.5667)"
                      fill="white"
                    />
                  </svg>
                </Link>

              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceSection;
