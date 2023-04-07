import React from 'react';
import ServicesCTA from '../../components/services-cta/services-cta';
import ServicesLanding from '../../components/services-landing/services-landing';
import ServicesListing from '../../components/services-listing/services-listing';
import "./services.css"
function ServicesPage() {
    return ( 
        <>
            <ServicesLanding />
            <ServicesListing />
            <ServicesCTA/>
        </>
     );
}

export default ServicesPage;