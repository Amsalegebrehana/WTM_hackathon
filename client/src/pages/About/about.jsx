import React from 'react';
import AboutLanding from '../../components/about-landing/about-landing';
import AboutUs from '../../components/about-us/about-us';
import PersonalCare from '../../components/personal-care/personal-care';
import ServiceSection from '../../components/service-section/service-section';
import "./about.css"

function AboutPage() {
    return ( 
        <>
            <AboutLanding />
            <PersonalCare />
            <ServiceSection />
            <AboutUs/>
        </>
     );
}

export default AboutPage;