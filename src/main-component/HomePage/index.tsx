import React, { Fragment, useEffect, useState } from "react";
import HeroSection from "../../components/hero/Hero";
import AboutSection from "../../components/about/about";
import ServiceSection from "../../components/ServiceSection/ServiceSection";
import FeatureSection from "../../components/FeatureSection/FeatureSection";
import ProjectSection from "../../components/ProjectSection/ProjectSection";
// import IndustriesMarqueeSection from "../../components/IndustriesMarqueeSection/IndustriesMarqueeSection";
import IndustriesSection from "../../components/Industries/Industries";
import ContactSection from "../../components/ContactSection/ContactSection";
import TestimonialSection from "../../components/Testimonial/Testimonial";
import BlogSection from "../../components/BlogSection/BlogSection";
import Footer from "../../components/footer/Footer";
import Scrollbar from "../../components/scrollbar/scrollbar";
import MultiStepContactForm from "../../components/ContactFrom/MultiStepContactForm";


const HomePage: React.FC = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState<string | undefined>(undefined);

  useEffect(() => {
    document.title = "Home | AI Agency & Technology React Template";
  }, []);

  const handleServiceClick = (serviceTitle: string) => {
    setPreselectedService(serviceTitle);
    setIsFormOpen(true);
  };

  return (
    <Fragment>
        <div className='ai-agency'>
          <div className="body_wrap o-clip">
            <main>
              <HeroSection onOpenForm={() => setIsFormOpen(true)}/>
              {/* <AboutSection/> */}
              <ServiceSection onServiceClick={handleServiceClick}/>
              <FeatureSection/>
              <ProjectSection onOpenForm={() => setIsFormOpen(true)}/>
              {/* <IndustriesMarqueeSection/> */}
              <IndustriesSection/>
              {/* <ContactSection/> */}
              {/* <TestimonialSection/> */}
              {/* <BlogSection/> */}
            </main>
            <Footer />
            <Scrollbar />
          </div>
        </div>
        <MultiStepContactForm 
          isOpen={isFormOpen} 
          onClose={() => {
            setIsFormOpen(false);
            setPreselectedService(undefined);
          }}
          preselectedService={preselectedService}
        />
    </Fragment>
  );
};

export default HomePage;
