import React from 'react';

function Achivements() {
    return (
      <>
        <section class="cta-section ">
          <div class="container">
            <div class="cta position-relative">
              <div class="row">
                <div class="col-lg-3 col-md-6 col-sm-6">
                  <div class="counter-stat">
                    <i class="icofont-doctor"></i>
                    <span class="h3 counter" data-count="1">
                      0
                    </span>
                    %<p>children worldwide</p>
                  </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6">
                  <div class="counter-stat">
                    <i class="icofont-flag"></i>
                    <span class="h3 counter" data-count="72">
                      0
                    </span>
                    %<p>children in developed countries</p>
                  </div>
                </div>

                <div class="col-lg-3 col-md-6 col-sm-6">
                  <div class="counter-stat">
                    <i class="icofont-badge"></i>
                    <span class="h3 counter" data-count="40">
                      14.5
                    </span>
                    %<p>Expert Doctors</p>
                  </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6">
                  <div class="counter-stat">
                    <i class="icofont-globe"></i>
                    <span class="h3 counter" data-count="20">
                      16.8
                    </span>
                    %<p>Black Students</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
}

export default Achivements;