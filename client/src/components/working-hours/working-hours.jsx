import React from 'react';
import "./working-hours.css"

function WorkingHours() {
    return (
      <>
        <section class="features mt-5">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <div class="feature-block d-lg-flex">
                  <div class="feature-item mb-5 mb-lg-0">
                    <div class="feature-icon mb-4">
                      <i class="icofont-surgeon-alt"></i>
                    </div>
                    <span>24 Hours Service</span>
                    <h4 class="mb-3">Online Appoinment</h4>
                    <p class="mb-4">
                      Get All time support for emergency.
                    </p>
                    <a
                      href="/appointment"
                      class="btn btn-main btn-round-full"
                    >
                      Make a appoinment
                    </a>
                  </div>

                  <div class="feature-item mb-5 mb-lg-0">
                    <div class="feature-icon mb-4">
                      <i class="icofont-ui-clock"></i>
                    </div>
                    <span>Timing schedule</span>
                    <h4 class="mb-3">Working Hours</h4>
                    <ul class="w-hours list-unstyled">
                      <li class="d-flex justify-content-between">
                        Mon - Fri : <span>02:00 - 1:30 Local Time</span>
                      </li>
                      <li class="d-flex justify-content-between">
                        Sat : <span>02:00 - 06:00 Local Time</span>
                      </li>
                  
                    </ul>
                  </div>

                  <div class="feature-item mb-5 mb-lg-0">
                    <div class="feature-icon mb-4">
                      <i class="icofont-support"></i>
                    </div>
                    <span>Contact</span>
                    <h4 class="mb-3">+251 985 76 79 59</h4>
                    <h4 class="mb-3">++251 917 38 77 71</h4>
                    <p>
                      Get All time support for emergency. Get Conneted with us for any
                      urgency .
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
}

export default WorkingHours;