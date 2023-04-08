import React, { useState } from "react";

const SignIn = (props) => {

  const handleSubmit = (event) => {
    event.preventDefault();

 }

    return (
      <div className="Auth-form-container" onSubmit={handleSubmit}>
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In</h3>
            <div className="text-center">
              Not registered yet?{" "}<br/>
           <a href="/signup">   <span className="link-primary" >
                Sign Up as a client <br/> 
              </span>
              </a>
              <span
              >
                Or<br/>
              </span>
              <a href="/signupprofessional">
              <span className="link-primary">
                Sign Up as a HealthProfessional
                </span>
              </a>
            </div>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Enter email"
                required
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
                required
              />
            </div>
            <div className="d-grid gap-2 mt-3">
            <a href="/account">  <button type="submit" className="btn btn-primary">
                Sign In
              </button>
              </a>
            </div>
        
          </div>
        </form>
      </div>
    );
  

};

export default SignIn;
