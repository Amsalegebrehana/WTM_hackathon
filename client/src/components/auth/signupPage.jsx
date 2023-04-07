import React, { useState,useContext } from 'react';
import { SignUpProvider, SignUpContext } from './Authcontext.js';
import SignUp from './signup.jsx';
import AccountPage from '../account/userAccount.jsx';

const SignUpPage = () => {
    const {
        showProfile
    } = useContext(SignUpContext);
       return (
      <>
            {showProfile ? <AccountPage /> : <SignUp />}
           </>
    );
};

export default SignUpPage;
