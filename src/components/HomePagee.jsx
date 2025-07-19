import React from 'react';
import HeroSection from '../components/HeroSection.jsx';
import FeatureSection from '../components/FeatureSection.jsx';
import FacultySection from '../components/FacultySection.jsx';
import TestimonialSection from '../components/TestimonialSection.jsx';
import CourseSection from '../components/CourseSection.jsx';


import MetricsSection from '../components/MetricsSection.jsx';
import PartnerLogos from '../components/PartnerLogos.jsx';
import SignupCTA from '../components/SignupCTA.jsx';
import WhyJoinSection from '../components/WhyJoinSection.jsx';
import FAQSection from '../components/FAQSection.jsx';
import ContactUs from '../components/ContactUs.jsx';
import ChatWidget from '../components/ChatWidget.jsx';
import CursorTrail from '../components/CursorTrail.jsx';
import Header from './Header.jsx';
import AuthSection from './AuthSection';
import Footer from './Footer.jsx';

const HomePagee = () => {
  return (
    <>
    <AuthSection />
      <CursorTrail />
      <HeroSection />
      <FeatureSection />
      <CourseSection />
      
        
      
      <FacultySection />
      <TestimonialSection />
      <MetricsSection />
      <PartnerLogos />
      <SignupCTA />
      <WhyJoinSection />
      <FAQSection />
      <ContactUs />
      <ChatWidget />
      <Footer />
    </>
  );
};

export default HomePagee;
