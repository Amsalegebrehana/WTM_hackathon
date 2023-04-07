import React from "react";
import "./header.css"

function Header() {
  return (
    <>
      <header>
        <nav class="navbar navbar-expand-lg navigation" id="navbar">
          <div class="container">
            <a class="navbar-brand" href="/">
              <img src="https://tse2.mm.bing.net/th?id=OIP.ptQc1PvE-rxoc_4BSSQIBwHaHY&pid=Api&P=0" alt="" height={"100"} />
            </a>

            <button
              class="navbar-toggler collapsed"
              type="button"
              data-toggle="collapse"
              data-target="#navbarmain"
              aria-controls="navbarmain"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="icofont-navigation-menu"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarmain">
              <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                  <a class="nav-link" href="/">
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/about">
                    About
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/services">
                    Services
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/healthprofessionals">
                    Health Professionals
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/appointment">
                    Appointment
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/contact">
                    Contact
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link btn btn-outline-primary mx-5 px-5" href="/signin">
                    Sign In
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link btn btn btn-outline-primary px-5" href="/signup">
                    Sign Up
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

      </header>
    </>
  );
}

export default Header;
