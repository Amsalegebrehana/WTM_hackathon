import React, { useContext, useState } from 'react';
import { SignUpHPContext } from './HealthProfessionalContext';
import { Form } from "react-bootstrap";
import Datetime from "react-datetime";
// import { getAvailability } from './calendlyWidget';



function SignupProfessional() {
   

    const {
        fullNameHP,
        emailHP,
        dateOfBirthHP,
        photoHP,
        passwordHP,
        confirmPasswordHP,
        showProfileHP,
        phoneNumberHP,
        availability,
        department,
        professionalCertification,
        handleFullNameChangeHP,
        handleEmailChangeHP,
        handleDateOfBirthChangeHP,
        handlePhotoChangeHP,
        handlePasswordChangeHP,
        handleConfirmPasswordChangeHP,
        handlePhoneNumberChangeHP,
        handleAvailablity,
        handleProfessionalCertification,
        handleDepartment
    } = useContext(SignUpHPContext);
   

   

   

    const [currentSection, setCurrentSection] = useState(1);

    const handleNextSection = () => {
        setCurrentSection(currentSection + 1);
    };

    const handlePreviousSection = () => {
        setCurrentSection(currentSection - 1);
    };

    
    const renderSection = () => {
        switch (currentSection) {
            case 1:
                return (
                    <div>
                        <div className="Auth-form-container">
                            <form className="Auth-form">
                                <div className="Auth-form-content">
                                    <h3 className="Auth-form-title"> Sign Up as Health Professional</h3>
                                    <div className="text-center">
                                        Already registered?{" "}
                                        <a href='/signin'> <span className="link-primary" >
                                            Sign In
                                        </span>
                                        </a>
                                    </div>
                                    <div className="form-group mt-3">
                                        <label>Full Name</label>
                                        <input
                                            type="name"
                                            className="form-control mt-1"
                                            placeholder="e.g Jane Doe"
                                            required
                                            value={fullNameHP}
                                            onChange={handleFullNameChangeHP}
                                        />
                                    </div>
                                    <div className="form-group mt-3">
                                        <label>Email address</label>
                                        <input
                                            type="email"
                                            className="form-control mt-1"
                                            placeholder="Email Address"
                                            required
                                            value={emailHP}
                                            onChange={handleEmailChangeHP}
                                        />
                                    </div>

                                    <div className="form-group mt-3">
                                        <label>Date of Birth</label>
                                        <Form.Control
                                            type="date"
                                            name="datepic"
                                            placeholder="DateRange"
                                            value={dateOfBirthHP}
                                            onChange={handleDateOfBirthChangeHP}
                                            required
                                        />
                                    </div>

                                    <div className="form-group mt-3">
                                        <label>Password</label>
                                        <input
                                            type="password"
                                            className="form-control mt-1"
                                            placeholder="Password"
                                            required
                                            value={passwordHP}
                                            onChange={handlePasswordChangeHP}
                                        />
                                    </div>
                                    <div className="form-group mt-3">
                                        <label>Confirm Password</label>
                                        <input
                                            type="password"
                                            className="form-control mt-1"
                                            placeholder="Confirm Password"
                                            value={confirmPasswordHP}
                                            onChange={handleConfirmPasswordChangeHP}
                                            required
                                        />
                                    </div>
                                </div>
                                <button className='btn btn-outline-primary mt-5' onClick={handleNextSection}>Next</button>
                            </form>
                            
                        </div>
                        
                    </div>
                );
            case 2:
                return (
                    <div className='my-5 pb-5'>
                        <div className="Auth-form-container">
                            <form className="Auth-form">
                                <div className="Auth-form-content">
                                    <h3 className="Auth-form-title"> Sign Up as Health Professional</h3>
                                    <div className="text-center">
                                        Already registered?{" "}
                                        <a href='/signin'> <span className="link-primary" >
                                            Sign In
                                        </span>
                                        </a>
                                    </div>
                                <div className='py-3'>
                                        <label htmlFor="monday-start" className='px-3'>Monday Start</label>
                                    <input
                                        type="time"
                                        id="monday-start"
                                        name="monday-start"
                                        value={availability.monday.start}
                                            onChange={handleAvailablity}
                                            className='my-3'
                                    /><br/>
                                        <label htmlFor="monday-end" className='px-3'>Monday End</label>
                                    <input
                                        type="time"
                                        id="monday-end"
                                        name="monday-end"
                                        value={availability.monday.end}
                                            onChange={handleAvailablity}
                                        />
                                </div>
                                </div>
                                <div className='py-3'>


                                    <label htmlFor="tuesday-start" className='px-3'>Tuesday Start</label>
                                    <input
                                        type="time"
                                        id="tuesday-start"
                                        name="tuesday-start"
                                        value={availability.tuesday.start}
                                        onChange={handleAvailablity}
                                        className='my-3'
                                    /><br/>
                                    <label htmlFor="tuesday-end" className='px-3'>Tuesday End</label>
                                    <input
                                        type="time"
                                        id="tuesday-end"
                                        name="tuesday-end"
                                        value={availability.tuesday.end}
                                        onChange={handleAvailablity}
                                    />
                                </div>

                                <div className='p-3'>
                                    <label htmlFor="wednesday-start" className='px-3'>Wednesday Start</label>
                                    <input
                                        type="time"
                                        id="wednesday-start"
                                        name="wednesday-start"
                                        value={availability.wednesday.start}
                                        className='my-3'
                                        onChange={handleAvailablity}
                                    /><br/>
                                    <label htmlFor="wednesday-end" className='px-3'>Wednesday End</label>
                                    <input
                                        type="time"
                                        id="wednesday-end"
                                        name="wednesday-end"
                                        value={availability.wednesday.end}
                                        onChange={handleAvailablity}
                                    />
                                </div>
                                <div className='p-3'>
                                    <label htmlFor="thursday-start" className='px-3'>Thursday Start</label>
                                    <input
                                        type="time"
                                        id="thursday-start"
                                        name="thursday-start"
                                        value={availability.thursday.start}
                                        className='my-3'
                                        onChange={handleAvailablity}
                                    /><br/>
                                    <label htmlFor="thursday-end" className='px-3'>Thursday End</label>
                                    <input
                                        type="time"
                                        id="thursday-end"
                                        name="thursday-end"
                                        value={availability.thursday.end}
                                        onChange={handleAvailablity}
                                    />
                                </div>
                                <div className='py-3'>
                                    <label htmlFor="friday-start" className='px-3'>Friday Start</label>
                                    <input
                                        type="time"
                                        id="friday-start"
                                        name="friday-start"
                                        value={availability.friday.start}
                                        className='my-3'
                                        onChange={handleAvailablity}
                                    /><br />
                                    <label htmlFor="friday-end" className='px-3'>Friday End</label>
                                    <input
                                        type="time"
                                        id="friday-end"
                                        name="friday-end"
                                        value={availability.friday.end}
                                        onChange={handleAvailablity}
                                    />
                                </div>
                                
                                <button className='btn btn-outline-primary mt-5 mx-5' onClick={handlePreviousSection}>Previous</button>
                                <button className='btn btn-outline-primary mt-5' onClick={handleNextSection}>Next</button>
                            </form>

                        </div>                       
                    </div>
                );
            case 3:
                return (
                    <div>
                        <div>
                            <div className="Auth-form-container">
                                <form className="Auth-form">
                                    <div className="Auth-form-content">
                                        <h3 className="Auth-form-title"> Sign Up as Health Professional</h3>
                                        <div className="text-center">
                                            Already registered?{" "}
                                            <a href='/signin'> <span className="link-primary" >
                                                Sign In
                                            </span>
                                            </a>
                                        </div>
                                        <div className="form-group mt-3">
                                            <label>Department</label>
                                            <input
                                                type="text"
                                                className="form-control mt-1"
                                                placeholder="Department"
                                                required
                                                value={department}
                                                onChange={handleDepartment}
                                            />
                                        </div>
                                        <div className="form-group mt-5">
                                            <label>Upload Professional Photo</label>
                                            <input
                                                type="file"
                                                className="form-control mt-1"
                                                required
                                                // value={photoHP}
                                                // onChange={handlePhotoChangeHP}
                                            />
                                        </div>


                                        <div className="form-group mt-5">
                                            <label>Professional Certefication</label>
                                            <input
                                                type="file"
                                                className="form-control mt-1"
                                                required
                                                //  value={professionalCertification}
                                                // onChange={handleProfessionalCertification}
                                            />
                                        </div>

                                        <div className="d-grid gap-2 mt-3">
                                            <button type="submit" className="btn btn-primary mt-5">
                                                Sign Up
                                            </button>
                                        </div>
                                        <p className="text-center mt-2">
                                            Forgot <a href="#">password?</a>
                                        </p>
                                    </div>
                                    <button className='btn btn-outline-primary mt-5 ' onClick={handlePreviousSection}>Previous</button>
                                </form>

                            </div>

                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    return <div>{renderSection()}</div>
}

export default SignupProfessional;
