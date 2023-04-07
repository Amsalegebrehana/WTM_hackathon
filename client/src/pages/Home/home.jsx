import React from 'react'
import Achivements from '../../components/achievemnts/achivements';
import BookAppointment from '../../components/book-appointment/book-appointment';
import Care from '../../components/care/care';
import Facts from '../../components/facts/facts';
import Header from '../../components/header/header';
import Landing from '../../components/landing/landing';
import Testimonials from '../../components/testimonials/testimonials';
import WorkingHours from '../../components/working-hours/working-hours';
import "./home.css"

function HomePage() {
    return (<>
        <Landing />
        <WorkingHours />
        <Care />
        <Achivements />
        <Facts />
        <BookAppointment />
        {/* <Testimonials/> */}
        
    </>);
}

export default HomePage;