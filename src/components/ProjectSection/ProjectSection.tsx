import React, { useEffect } from "react";

// ✅ Import images
import projectImg01 from "../../images/project/discover.jpg";
import projectImg02 from "../../images/project/chart.jpg";
import projectImg03 from "../../images/project/prove.jpg";
import projectImg04 from "../../images/project/engineer.jpg";
import projectImg05 from "../../images/project/scale.jpg";

import { Link, useNavigate } from "react-router-dom";

const ProjectSection: React.FC = () => {
  const navigate = useNavigate();
  useEffect(() => {
    // ✅ Scroll activation logic
    const items = document.querySelectorAll<HTMLElement>(".xb-project-item");
    const paginations = document.querySelectorAll<HTMLElement>(".xb-project-pagination li");

    if (!items.length || !paginations.length) return;

    items.forEach((item) => {
      item.style.transition = "opacity 0.6s ease";
      item.style.opacity = "1";
    });

    const updateActive = () => {
      let indexToActivate = 0;
      const triggerLine = window.innerHeight * 0.3;

      items.forEach((item, index) => {
        const rect = item.getBoundingClientRect();
        if (rect.top <= triggerLine) {
          indexToActivate = index;
        }
      });

      paginations.forEach((el) => el.classList.remove("active"));
      if (paginations[indexToActivate]) {
        paginations[indexToActivate].classList.add("active");
      }

      items.forEach((item, i) => {
        if (i === indexToActivate) {
          item.style.opacity = "1";
        } else if (i < indexToActivate) {
          item.style.opacity = "0.3";
        } else {
          item.style.opacity = "1";
        }
      });
    };

    window.addEventListener("scroll", updateActive);
    updateActive();

    return () => {
      window.removeEventListener("scroll", updateActive);
    };
  }, []);

  return (
    <section className="project pt-200 pb-200">
      <div className="container">
        <div className="sec-title custom-sec-title xb-sec-padding text-center">
          <span className="sub-title">HOW WE WORK</span>
          <h2 className="title">
            {/* <span className="round-img">
              <img src={gifRound} alt="animation" />
            </span>{" "} */}
            We guide your journey from start to scale with strategy, tech, and a touch of clever.
          </h2>
          <div className="xb-heading-btn d-inline">
            <button
              className="thm-btn agency-btn"
              onClick={(e) => {
                e.preventDefault();
                navigate('/contact-us');
              }}
              type="button"
            >
              <span className="text">know more</span>
              <span className="arrow">
                <span className="arrow-icon">
                  {/* Double SVG arrow */}
                  {[...Array(2)].map((_, i) => (
                    <svg
                      key={i}
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
                  ))}
                </span>
              </span>
            </button>
          </div>
        </div>
      </div>

      <div className="container mxw-1800">
        <div className="xb-project-wrap">
          {/* Pagination */}
          <div className="xb-project-pagination-wrap">
            <ul className="xb-project-pagination">
              <li className="active">1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>5</li>
            </ul>
          </div>

          {/* Process items */}
          <div className="xb-project-inner">
            {[
              {
                img: projectImg01,
                title: "DISCOVER",
                subtitle: "We put on your shoes and run a mile",
                desc: "From your brand to your workflows, we dig deep to figure out what makes you tick and what will make you shine.",
              },
              {
                img: projectImg02,
                title: "CHART",
                subtitle: "We design strategy, never wing it",
                desc: "Data, experience, and your insider knowledge combine to map the smartest path forward.",
              },
              {
                img: projectImg03,
                title: "PROVE",
                subtitle: "Before we hit go, we make sure it flies",
                desc: "Together, we test and validate the plan so every move is intentional.",
              },
              {
                img: projectImg04,
                title: "ENGINEER",
                subtitle: "Strategy is only as good as its execution",
                desc: "We build, design, and launch precisely across every touchpoint. No filler, no shortcuts.",
              },
              {
                img: projectImg05,
                title: "SCALE",
                subtitle: "What works, we crank it up",
                desc: "Growth isn't a one-off spike, it's a system. And with Vedha, this is just the beginning.",
              },
            ].map((process, index) => (
              <div
                key={index}
                className="xb-project-item bg_img"
                style={{
                  backgroundImage: `url(${process.img})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center center',
                  backgroundRepeat: 'no-repeat'
                }}
              >
                <div className="xb-project-content">
                  <div className="xb-item--inner xb-border">
                    <h2 className="xb-item--title">{process.title}</h2>
                    <h3 style={{ fontSize: '24px', fontWeight: '500', fontFamily: 'var(--font-heading)', marginBottom: '16px', color: 'var(--color-primary)' }}>{process.subtitle}</h3>
                    <p className="xb-item--content">{process.desc}</p>
                    <div className="xb-item---btn mt-70" style={{ display: 'none' }}>
                      <Link className="thm-btn agency-btn" to="/project-details">
                        <span className="text">read more</span>
                        <span className="arrow">
                          <span className="arrow-icon">
                            {[...Array(2)].map((_, i) => (
                              <svg
                                key={i}
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
                            ))}
                          </span>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
