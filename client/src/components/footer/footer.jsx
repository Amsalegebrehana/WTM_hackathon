/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import up from "../../up.png"

function Footer() {

  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <>
      <footer class="footer section gray-bg">
        <div class="container">
          <div class="row">
            <div class="col-lg-4 mr-auto col-sm-6">
              <div class="widget mb-5 mb-lg-0">
                <div class="logo mb-4">
                  <img src="https://tse2.mm.bing.net/th?id=OIP.ptQc1PvE-rxoc_4BSSQIBwHaHY&pid=Api&P=0" alt="" height={"120"} />
                </div>
                <p>
                  Welcome to our website, where we provide comprehensive sexual and reproductive health information to women and girls in low-income communities. We understand that access to quality healthcare can be a challenge for many individuals, which is why we strive to provide resources that are easily accessible, informative, and free of charge.
                </p>

                <ul class="list-inline  mt-4">
                  <li class="list-inline-item">
                    <a href="https://www.facebook.com/Autism world">
                      <img src="images/facebook.png" />
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a href="https://instagram.com/Autism world">
                      <img src="images/instagram.png" />
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a href="https://www.twitter.com/Autismworld4/">
                      <img src="images/twitter.png" />
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a href="https://t.me/autismworld1">
                      <img src="images/telegram.png" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-1 col-md-6 col-sm-6"></div>
            <div class="col-lg-4 col-md-6 col-sm-6">
              <div class="widget mb-5 mb-lg-0">
                <h4 class="text-capitalize mb-3">Department</h4>
                <div class="divider mb-4"></div>

                <ul class="list-unstyled footer-menu lh-35">
                  <li>
                    <a href="/">Home </a>
                  </li>
                  <li>
                    <a href="/about">About</a>
                  </li>
                  <li>
                    <a href="/services">Services</a>
                  </li>
                  <li>
                    <a href="/contact">Contact</a>
                  </li>
                </ul>
              </div>
            </div>

            <div class="col-lg-3 col-md-6 col-sm-6">
              <div class="widget widget-contact mb-5 mb-lg-0">
                <h4 class="text-capitalize mb-3">Get in Touch</h4>
                <div class="divider mb-4"></div>

                <div class="footer-contact-block mb-4">
                  <div class="icon d-flex align-items-center">
                    <i class="icofont-email mr-3"></i>
                    <span class="h6 mb-0">Support Available for 24/7</span>
                  </div>
                  <h4 class="mt-2">
                    <a href="mailto:autismworld082@gmail.com">
                      contact.healthyWoman@gmail.com
                    </a>
                  </h4>
                </div>

                <div class="footer-contact-block">
                  <div class="icon d-flex align-items-center">
                    <i class="icofont-support mr-3"></i>
                    <span class="h6 mb-0">Mon to Fri : 08:30 - 18:00</span>
                  </div>
                  <h4 class="mt-2">
                    <a href="tel:+251985767959">+251912 34 56 78</a>
                  </h4>
                  <h4 class="mt-2">
                    <a href="tel:+251917387771">+251910 11 12 13</a>
                  </h4>
                </div>
              </div>
            </div>
          </div>

          <div class="footer-btm py-4 mt-5">
            <div class="row align-items-center justify-content-between">
              <div class="col-lg-6">
                <div class="copyright">
                  Copyright &copy; {getCurrentYear()}
                  ,
                  Developed by{" "}
                  Tsehayochu
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-lg-4">
                <a class="backtop scroll-top-to" href="#top">
                  <img src={up} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;