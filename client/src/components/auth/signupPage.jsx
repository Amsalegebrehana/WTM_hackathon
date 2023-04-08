import React, { useState,useContext } from 'react';
import { SignUpProvider, SignUpContext } from './Authcontext.js';
import SignUp from './signup.jsx';
import AccountPage from '../account/userAccount.jsx';
import { Container } from 'react-bootstrap';

const SignUpPage = () => {
    const {
        showProfile
    } = useContext(SignUpContext);
       return (
           <Container className="d-flex justify-content-center align-items-center">
            {showProfile ? <AccountPage /> : <SignUp />}
           </Container>
    );
};

export default SignUpPage;
