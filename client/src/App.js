import './App.css';
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Footer from './components/footer/footer';
import Header from './components/header/header';
import HomePage from './pages/Home/home';
import AboutPage from './pages/About/about';
import ServicesPage from './pages/Services/services';
import Appointment from './pages/Appointment/appointment';
import Confirmation from './pages/Confirmation/confirmation';
import ContactPage from './pages/Contact/contact';
import HealthProfessionals from './components/healthprofessionals/healthprofessionals';
import SignIn from "./components/auth/signin";
import SignupProfessional from "./components/auth/signupProfessional";
import AccountPage from './components/account/userAccount';
import SignUpPage from './components/auth/signupPage';
import { SignUpContext } from './components/auth/Authcontext.js';
import React, { useState, useEffect } from 'react';




function App() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [photo, setPhoto] = useState(null);
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showProfile, setShowProfile] = useState(false);

  const handleFullNameChange = (event) => {
    setFullName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  }

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

  const handleSignUp = (userData) => {
    console.log(userData);
    // perform sign up logic here
  };

  const handleShowProfile = (event) => {
    setShowProfile(event)
  }

 useEffect(() => {
  const storedUserData = JSON.parse(localStorage.getItem('userData'));
  if (storedUserData) {
    setFullName(storedUserData.fullName);
    setEmail(storedUserData.email);
    setDateOfBirth(storedUserData.dateOfBirth);
    setPhoto(storedUserData.photo);
    setPassword(storedUserData.password);
    setPhoneNumber(storedUserData.phoneNumber);
    setShowProfile(storedUserData.showProfile);
  }
}, []);

// Save user data to browser storage when it changes
  useEffect(() => {
    if (fullName || email || dateOfBirth || photo || password || phoneNumber || showProfile) {
      const userData = JSON.stringify({
        fullName,
        email,
        dateOfBirth,
        photo,
        password,
        phoneNumber,
        showProfile,
      });
      localStorage.setItem('userData', userData);
    }
  }, [fullName, email, dateOfBirth, photo, password, phoneNumber, showProfile]);




  const values = {
    fullName,
    email,
    dateOfBirth,
    photo,
    password,
    confirmPassword,
    showProfile,
    phoneNumber,
    handleFullNameChange,
    handleEmailChange,
    handleDateOfBirthChange,
    handlePhotoChange,
    handlePasswordChange,
    handleConfirmPasswordChange,
    handleSignUp,
    handleShowProfile,
    handlePhoneNumberChange
  };
  return (
    <div className="App">
      <SignUpContext.Provider value={values}>
        <Header />
        <Router>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/services' element={<ServicesPage />} />
            <Route path='/healthprofessionals' element={<HealthProfessionals />} />
            <Route path='/appointment' element={<Appointment />} />
            <Route path='/confirmation' element={<Confirmation />} />
            <Route path='/contact' element={<ContactPage />} />
            <Route path="/signIn" element={<SignIn />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/signupprofessional" element={<SignupProfessional />} />

            <Route path="/account" element={<AccountPage />} />


          </Routes>
        </Router>

        <Footer />

      </SignUpContext.Provider>
    </div>
  );
};


export default App;
