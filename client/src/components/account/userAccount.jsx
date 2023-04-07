import React from "react";
import { Container, Row, Col, Card, ListGroup, Image } from "react-bootstrap";
import woman from "../../woman.png"
import { useContext } from "react";
import { SignUpContext } from "../auth/Authcontext.js";
import AppointmentHistory from "./appoitmentHistory";

const AccountPage = () => {
    const {
        fullName,
        phoneNumber,
        email,
        dateOfBirth,
        photo,
        password,
    } = useContext(SignUpContext);
    const user = {
        name: fullName,
        phone:phoneNumber,
        email: email,
        dob:dateOfBirth,
        avatar: woman,
        appointments: [
            {
                id: 1,
                date: "2022-03-01",
                time: "10:00 AM",
                doctor: "Dr. Smith",
                department: "Cardiology",
            },
            {
                id: 2,
                date: "2022-03-05",
                time: "2:30 PM",
                doctor: "Dr. Johnson",
                department: "Dermatology",
            },
            {
                id: 3,
                date: "2022-03-10",
                time: "9:00 AM",
                doctor: "Dr. Lee",
                department: "Oncology",
            },
            
        ],
    };

    return (
        <Container>
            <Row>
                <h3>My Account</h3>
                <Col md={4}>
                    <Card>
                        <Image src={user.avatar} alt="User avatar" class="mx-auto d-block my-auto" style={{"height":"215px","width":"250px"}} roundedCircle fluid />
                        <Card.Body>
                            <Card.Title>Account Information</Card.Title>
                            <Card.Text>Name: {user.name}</Card.Text>
                            <Card.Text>Phone: {user.phone}</Card.Text>
                            <Card.Text>Email: {user.email}</Card.Text>
                            <Card.Text>Date of Birth: {user.dob}</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={8} className="overflow-auto">
                    <Card>
                        <Card.Body>
                            <Card.Title>Appointment History</Card.Title>
                            <ListGroup variant="flush">
                                {/* {user.appointments.map((appointment) => (
                                    <ListGroup.Item key={appointment.id}>
                                        <div>Date: {appointment.date}</div>
                                        <div>Time: {appointment.time}</div>
                                        <div>Doctor: {appointment.doctor}</div>
                                        <div>Department: {appointment.department}</div>
                                    </ListGroup.Item>
                                ))} */}
                                <AppointmentHistory/>
                            </ListGroup>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default AccountPage;
