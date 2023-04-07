import React, { useState } from 'react';

function AppointmentForm() {
    const [isRegistered, setIsRegistered] = useState(false);
    const [registrationData, setRegistrationData] = useState({
        name: '',
        email: '',
        password: '',
    });

    function handleRegistrationChange(e) {
        setIsRegistered(e.target.checked);
    }

    function handleRegistrationDataChange(e) {
        setRegistrationData({
            ...registrationData,
            [e.target.name]: e.target.value,
        });
    }

    function handleAppointmentSubmit(e) {
        e.preventDefault();
        if (isRegistered) {
            // Handle appointment creation for registered users
        } else {
            // Handle registration and appointment creation for non-registered users
        }
    }

    return (
        <form onSubmit={handleAppointmentSubmit}>
            <div>
                <label>
                    <input
                        type="checkbox"
                        checked={isRegistered}
                        onChange={handleRegistrationChange}
                    />
                    Are you a registered user?
                </label>
            </div>
            {!isRegistered && (
                <div>
                    <label>
                        Name:
                        <input
                            type="text"
                            name="name"
                            value={registrationData.name}
                            onChange={handleRegistrationDataChange}
                        />
                    </label>
                    <label>
                        Email:
                        <input
                            type="email"
                            name="email"
                            value={registrationData.email}
                            onChange={handleRegistrationDataChange}
                        />
                    </label>
                    <label>
                        Password:
                        <input
                            type="password"
                            name="password"
                            value={registrationData.password}
                            onChange={handleRegistrationDataChange}
                        />
                    </label>
                </div>
            )}
            <button type="submit">Make Appointment</button>
        </form>
    );
}

export default AppointmentForm;
