import React, { useState } from 'react';
import { Form } from "react-bootstrap";

function Signup() {

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [photo, setPhoto] = useState(null);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState([]);
  const [user, setUser] = useState({
    name: "",
    phone: "",
    email: "",
    dob: "",
    avatar: null,
  });

  const handleFullNameChange = (event) => {
    setFullName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleDateOfBirthChange = (event) => {
    setDateOfBirth(event.target.value);
  };

  const handlePhotoChange = (event) => {
    setPhoto(event.target.files[0]);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if password and confirm password match
    if (password !== confirmPassword) {
      setErrors(['Passwords do not match']);
      return;
    }

    // You can submit the form data to a server using an API here
    // Once the server responds with success, redirect the user to their account page
    // For now, we'll just console log the form data
    event.preventDefault();
    setErrors([]);
    const form = event.target;
    const newUser = {
      name: form.elements.fullname.value,
      phone: form.elements.phone.value,
      email: form.elements.email.value,
      dob: form.elements.dob.value,
      avatar: form.elements.avatar.files[0],
    };
    setUser(newUser);

    console.log({
      fullName,
      email,
      dateOfBirth,
      photo,
      password,
      confirmPassword,
    });

    // Reset form fields
    setFullName('');
    setEmail('');
    setDateOfBirth('');
    setPhoto(null);
    setPassword('');
    setConfirmPassword('');
    setErrors([]);
  };

  return (
    <div className="Auth-form-container">
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
          <div className="form-group mt-1">
            <label>Upload Photo</label>
            <input
              type="file"
              className="form-control mt-1"
              onChange={handlePhotoChange}
              required
            />
          </div>

         
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Password"
              onChange={handlePasswordChange}
              required
            />
          </div>
          <div className="form-group mt-3">
            <label>Confirm Password</label>
            <input
              type="Confirm Password"
              className="form-control mt-1"
              placeholder="Confirm Password"
              onChange={handleConfirmPasswordChange}
              required
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <p className="text-center mt-2">
            Forgot <a href="#">password?</a>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Signup;
