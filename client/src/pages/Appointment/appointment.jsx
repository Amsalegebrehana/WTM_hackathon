import React from 'react';
import AppointmentLanding from '../../components/appointment-landing/appointment-landing';
import AppointmentSection from '../../components/appointment-section/appointment-section';
import "./appointment.css"

function Appointment() {
    return ( 
        <>
            <AppointmentLanding />
            <AppointmentSection/>
        </>
     );
}

export default Appointment;