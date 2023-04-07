import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card } from 'react-bootstrap';

const AppointmentData = () => {
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        axios({
            method: 'get',
            url: 'https://v1.nocodeapi.com/sassybgs/calendly/styHnryeqwJJisQX',
            params: {},
        })
            .then(function (response) {
                setAppointments(response.data);
                console.log("response-data ", appointments);
                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    }, []);
    useEffect(() => {
        console.log("appointments", appointments["collection"]);
    }, [appointments]);


    return (
        <div>
            {appointments['collection'] &&
                appointments['collection'].map((appointment) => (
                    <div key={appointment.uuid}>
                        <Card>
                            <Card.Body>
                                <Card.Title>{appointment.event_type.name}</Card.Title>
                                <Card.Text><span className='font-weight-bold'> Start Time: </span>{appointment.start_time}</Card.Text>
                                <Card.Text><span className="font-weight-bold"> End Time: </span>{appointment.end_time}</Card.Text>
                                <Card.Text><span className="font-weight-bold"> Location: </span>{appointment.location.type}</Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
        </div>
    );
};

export default AppointmentData;
