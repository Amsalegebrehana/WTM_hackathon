import React from 'react';
import Scheduler from '../scheduler/scheduler';

function BookAppointment() {
    return (
      <>
        <section class="section appoinment">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-lg-6 ">
                <div class="appoinment-content">
                  <img
                    src="https://images.unsplash.com/photo-1515658323406-25d61c141a6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=409&q=80"
                    alt=""
                    class="img-fluid"
                  />
                  <div class="emergency">
                    <h2 class="text-lg">
                      <i class="icofont-phone-circle text-lg"></i>+251 985 76 79
                      59
                    </h2>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-md-10 ">
                <Scheduler />
              </div>
            </div>
          </div>
        </section>
      </>
    );
}

export default BookAppointment;