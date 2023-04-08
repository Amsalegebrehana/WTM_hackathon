import React, { useState, useContext } from 'react';
import { SignUpHPContext } from './HealthProfessionalContext';
import SignUp from './signup.jsx';
import AccountPage from '../account/userAccount.jsx';
import { Container } from 'react-bootstrap';
import SignupProfessional from './signupProfessional';

const SignUpPage = () => {
  
    return (

        <Container className="d-flex justify-content-center align-items-center">
            <SignupProfessional/>
        </Container>
        
    );
};

export default SignUpPage;
