import React, { createContext, useState } from 'react';

export const SignUpContext = createContext();

// export const SignUpProvider = ({ children }) => {
//     const [fullName, setFullName] = useState('');
//     const [email, setEmail] = useState('');
//     const [dateOfBirth, setDateOfBirth] = useState('');
//     const [photo, setPhoto] = useState(null);
//     const [password, setPassword] = useState('');
//     const [confirmPassword, setConfirmPassword] = useState('');
//     const [showProfile, setShowProfile] = useState(false);

//     const handleFullNameChange = (event) => {
//         setFullName(event.target.value);
//     };

//     const handleEmailChange = (event) => {
//         setEmail(event.target.value);
//     };

//     const handleDateOfBirthChange = (event) => {
//         setDateOfBirth(event.target.value);
//     };

//     const handlePhotoChange = (event) => {
//         setPhoto(event.target.files[0]);
//     };

//     const handlePasswordChange = (event) => {
//         setPassword(event.target.value);
//     };

//     const handleConfirmPasswordChange = (event) => {
//         setConfirmPassword(event.target.value);
//     };

//     const handleSignUp = (userData) => {
//         console.log(userData);
//         // perform sign up logic here
//     };

//     const handleShowProfile = (event) => {
//         setShowProfile(event)
//     }

//     const values = {
//         fullName,
//         email,
//         dateOfBirth,
//         photo,
//         password,
//         confirmPassword,
//         showProfile,
//         handleFullNameChange,
//         handleEmailChange,
//         handleDateOfBirthChange,
//         handlePhotoChange,
//         handlePasswordChange,
//         handleConfirmPasswordChange,
//         handleSignUp,
//         handleShowProfile
//     };

//     return (
//         <SignUpContext.Provider value={values}>
//             {children}
//         </SignUpContext.Provider>
//     );
// };
