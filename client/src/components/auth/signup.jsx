import React, { useContext, useState } from 'react';
import { SignUpContext } from './Authcontext.js';
import { Form } from 'react-bootstrap';

const SignUp = () => {
  const {
    fullName,
    email,
    dateOfBirth,
    photo,
    password,
    phoneNumber,
    confirmPassword,
    showProfile,
    handleFullNameChange,
    handleEmailChange,
    handleDateOfBirthChange,
    handlePhotoChange,
    handlePhoneNumberChange,
    handlePasswordChange,
    handleConfirmPasswordChange,
    handleSignUp,
    handleShowProfile
  } = useContext(SignUpContext);

  const MIN_PASSWORD_LENGTH = 8;

  const handleSubmit = (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    if (password.length < MIN_PASSWORD_LENGTH) {
      alert(`Password must be at least ${MIN_PASSWORD_LENGTH} characters long`);
      return;
    }

    const userData = { fullName, email, dateOfBirth, photo, password };
    handleSignUp(userData);

    // submit form if passwords match and meet validation rules
  };

  return (
    <form className="Auth-form" onSubmit={handleSubmit}>
      <div className="Auth-form-content">
        <h3 className="Auth-form-title">Sign Up as A Client</h3>
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
            type="text"
            className="form-control mt-1"
            placeholder="e.g Jane Doe"
            value={fullName}
            onChange={handleFullNameChange}
            required
          />
        </div>
        <div className="form-group mt-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control mt-1"
            placeholder="Email Address"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className="form-group mt-3">
          <label>Phone Number</label>
          <input
            type="number"
            className="form-control mt-1"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
            required
          />
        </div>

        <div className="form-group mt-3">
          <label>Date of Birth</label>
          <Form.Control
            type="date"
            name="datepic"
            placeholder="DateRange"
            value={dateOfBirth}
            onChange={handleDateOfBirthChange}
            required
          />
        </div>


        <div className="form-group mt-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control mt-1"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <div className="form-group mt-3">
          <label>Confirm Password</label>
          <input
            type="password"
            className="form-control mt-1"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            required
          />
        </div>

        <div className="d-grid gap-2 mt-3">
          <button
            type="submit"
            className="btn btn-primary"
            onClick={
              () => {
              
                handleShowProfile(true)
                
           
              }}>
            Sign Up
          </button>
        </div>
        <p className="text-center mt-2">
          Forgot <a href="#">password?</a>
        </p>
      </div>
    </form>
  );
};

export default SignUp;
