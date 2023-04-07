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
import Signup from './components/auth/signup';
import SignIn from "./components/auth/signin";
import SignupProfessional from "./components/auth/signupProfessional";
import AccountPage from './components/account/userAccount';


function App() {
  return (
    <div className="App">
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
          <Route path="/signup" element={<Signup />} />
          <Route path="/signupprofessional" element={<SignupProfessional />} />

          <Route path="/account" element={<AccountPage />} />


        </Routes>
      </Router>

      <Footer />
    </div>
  );
}

export default App;
