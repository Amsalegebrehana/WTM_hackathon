import React from 'react';
import ContactLanding from '../../components/contact-landing/contact-landing';
import ContactInfo from '../../components/contact-sectio2/contact-info';
import ContactSection1 from '../../components/contact-section1/contact-section1';
import "./contact.css"

function ContactPage() {
    return ( 
        <>
            <ContactLanding />
            <ContactSection1 />
            <ContactInfo/>
        </>
     );
}

export default ContactPage;