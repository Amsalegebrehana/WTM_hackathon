import React from 'react'
import "./landing.css"

function Landing() {
    return (
      <>
        <section class="banner" style={{"color":"white"}}>
          <div class="container">
            <div class="row">
              <div class="col-lg-6 col-md-12 col-xl-7">
                <div class="block">
                  <div class="divider mb-3"></div>
                  <span class="text-uppercase text-sm letter-spacing ">
                    Healthy Female
                  </span>
                  <h1 class="mb-3 mt-3" style={{"color":"white"}}>Your most trusted Care giver</h1>

                
                  <div class="btn-container ">
                    <a
                      href="/appointment"
                      class="btn btn-main-2 btn-icon btn-round-full"
                      style={{"color":"white"}}
                    >
                      Make appoinment{" "}
                      <i class="icofont-simple-right ml-2  "></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
            </section>
            
      </>
    );
}

export default Landing;