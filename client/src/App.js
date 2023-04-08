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
import { SignUpHPContext } from './components/auth/HealthProfessionalContext';
import Home from "./Admin/Home";
import SignUpAdmin from "../src/components/auth/signUpAdmin";



function App() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [photo, setPhoto] = useState(null);
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showProfile, setShowProfile] = useState(false);
  const [signOut, setSignOut] = useState(false);


  //HP attributes
  const [fullNameHP, setFullNameHP] = useState('');
  const [emailHP, setEmailHP] = useState('');
  const [dateOfBirthHP, setDateOfBirthHP] = useState('');
  const [photoHP, setPhotoHP] = useState(null);
  const [passwordHP, setPasswordHP] = useState('');
  const [phoneNumberHP, setPhoneNumberHP] = useState('');
  const [confirmPasswordHP, setConfirmPasswordHP] = useState('');

  const [professionalCertification, setProfessionalCertification] = useState(null);
  const [department, setDepartment] = useState('');

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


  //hp

  const handleFullNameChangeHP = (event) => {
    setFullNameHP(event.target.value);
  };

  const handleEmailChangeHP = (event) => {
    setEmailHP(event.target.value);
  };
  const handlePhoneNumberChangeHP = (event) => {
    setPhoneNumberHP(event.target.value);
  }

  const handleDateOfBirthChangeHP = (event) => {
    setDateOfBirthHP(event.target.value);
  };

  const handlePhotoChangeHP = (event) => {
    setPhotoHP(event.target.value);
  };

  const handlePasswordChangeHP = (event) => {
    setPasswordHP(event.target.value);
  };

  const handleConfirmPasswordChangeHP = (event) => {
    setConfirmPasswordHP(event.target.value);
  };

  const handleProfessionalCertification = (event) => {
    setProfessionalCertification(event.target.value);
  }

  const handleDepartment = (event) => {
    setDepartment(event.target.value);
  }

  const handleSignUp = async (userData) => {
    console.log(userData);
    console.log(userData);
    const response = await fetch('/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    });

    const data = await response.json();
    console.log("user data",data);

    // perform sign up logic here
  };

  const handleSignOut = (event) => {
    setSignOut(event)
  }

  const handleShowProfile = (event) => {
    setShowProfile(event)
  }


  const [availability, setAvailability] = useState({
    monday: { start: "", end: "" },
    tuesday: { start: "", end: "" },
    wednesday: { start: "", end: "" },
    thursday: { start: "", end: "" },
    friday: { start: "", end: "" },
    saturday: { start: "", end: "" },
    sunday: { start: "", end: "" },
  });


  const handleAvailablity = (e) => {
    const { name, value } = e.target;
    const [day, time] = name.split("-");
    setAvailability((prevState) => ({
      ...prevState,
      [day]: {
        ...prevState[day],
        [time]: value,
      },
    }));
  };

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


  //hp store it to localstorage
  useEffect(() => {
    const storedUserData = JSON.parse(localStorage.getItem('hpData'));
    if (storedUserData) {
      const latestUserData = storedUserData[storedUserData.length - 1];
      setFullNameHP(latestUserData.fullNameHP);
      setEmailHP(latestUserData.emailHP);
      setDateOfBirthHP(latestUserData.dateOfBirthHP);
      setPhotoHP(latestUserData.photoHP);
      setPasswordHP(latestUserData.passwordHP);
      setProfessionalCertification(latestUserData.professionalCertification);
      setDepartment(latestUserData.department);
      setAvailability(latestUserData.availability);
    }
  }, []);


  // Save user data to browser storage when it changes
  useEffect(() => {
    if (fullNameHP && emailHP && dateOfBirthHP && availability && photoHP && passwordHP && professionalCertification && department) {
      let userData = JSON.parse(localStorage.getItem('hpData')) || [];
      if (!Array.isArray(userData)) {
        userData = [userData]; // convert to an array if it's not already
      }
      userData.push({
        fullNameHP,
        emailHP,
        dateOfBirthHP,
        photoHP,
        passwordHP,
        professionalCertification,
        department,
        availability
      });
      localStorage.setItem('hpData', JSON.stringify(userData));
    }
  }, [fullNameHP, emailHP, dateOfBirthHP, availability, photoHP, passwordHP, professionalCertification, department]);


  const valuesHP = {
    fullNameHP,
    emailHP,
    dateOfBirthHP,
    photoHP,
    passwordHP,
    confirmPasswordHP,

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

  }


  const values = {
    fullName,
    email,
    dateOfBirth,
    photo,
    password,
    confirmPassword,
    showProfile,
    phoneNumber,
    signOut,
    handleFullNameChange,
    handleEmailChange,
    handleDateOfBirthChange,
    handlePhotoChange,
    handlePasswordChange,
    handleConfirmPasswordChange,
    handleSignUp,
    handleShowProfile,
    handlePhoneNumberChange,
    handleSignOut
  };
  return (
    <div className="App">
      <SignUpContext.Provider value={values}>
        <SignUpHPContext.Provider value={valuesHP}>

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
            <Route path="/adminsignin" element={<SignUpAdmin />} />

              <Route path="/account" element={<AccountPage />} />
              <Route path='/admin' element={<Home />} />


          </Routes>
        </Router>

        <Footer />
        </SignUpHPContext.Provider>

      </SignUpContext.Provider>
    </div>
  );
};


export default App;
