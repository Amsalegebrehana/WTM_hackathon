import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const SingUpAdmin = (props) => {

    const navigate = useNavigate();

    function handleClick() {
      navigate("/admin");
    }
    return (
      <div className="Auth-form-container" >
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In</h3>
           
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Enter email"
              
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
                
              />
            </div>
            <div className="d-grid gap-2 mt-3">
            <a href="/admin">  
                <button type="submit" className="btn btn-primary" onClick={handleClick}>
                    Sign In
                </button>
              </a>
            </div>
        
          </div>
        </form>
      </div>
    );
  

};

export default SingUpAdmin;
