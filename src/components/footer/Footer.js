import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className="Footer">
      <div className="wrapper">
          <div role="contentinfo" className="footer">
              <div className="container-fluid">
                  <div role="tablist" className="footer-link-groups row">
                      <div className="col-md-3 ml-5">
                          <div className="accordion-sm-down mb-2 mb-md-0">
                              <div role="tab">
                                  <h4 className="mb-0 accordion-header">Can we help?</h4>
                              </div>
                              <div className="accordion-block ml-4 ml-md-0" id="footer-nav-help-options"      role="tabpanel" aria-labelledby="footer-nav-help">
                                  <nav role="navigation" id="footer-nav-help">
                                      <ul className="footer-link-group">
                                          <li>
                                              <a href="#" className="js-scroll-to-help-sign-in">
                                              Need help with signing in?</a>
                                          </li>
                                          <li>
                                              <span>
                                                  <a  className="help-support" href="#">Help and support</a>
                                              </span>
                                          </li>
                                          <li>
                                              <span>
                                                  <a className="customer" href="#">Customer services</a> 
                                              </span>
                                          </li>
                                      </ul>
                                  </nav>
                              </div>
                          </div>
                      </div>
                      <div className="col-md-3 ml-5">
                          <div className="accordion-sm-down mb-2 mb-md-0">
                              <div role="tab">
                                  <h4 className="mb-0 accordion-header"> Site information </h4>
                            </div>
                              <div className="accordion-block ml-4 ml-md-0" role="tabpanel"       aria-labelledby="footer-heading-site-info" id="footer-nav-site-info-link">
                                  <nav id="footer-heading-site-info" role="navigation">
                                      <ul className="footer-link-group">
                                          <li>
                                              <span>
                                                  <a className="leaveJourney" href="#">Accessibility</a>
                                              </span>
                                          </li>
                                          <li>
                                              <span>
                                                  <a className="leaveJourney" href="#">Privacy and Cookie policy</a>
                                              </span>
                                          </li>                    
                                      </ul>
                                  </nav>
                              </div>
                          </div>
                      </div>
                      <div className="col-md-3 ml-5">
                          <div className="accordion-sm-down mb-2 mb-md-0">
                              <div role="tab">
                                  <h4 className="mb-0 accordion-header">Your Options</h4>
                              </div>
                              <div className="accordion-block ml-4 ml-md-0" role="tabpanel" 
                                  aria-labelledby="footer-heading-site-info" id="footer-nav-site-info-link">
                                  <nav id="footer-heading-site-info" role="navigation">
                                      <ul className="footer-link-group">
                                          <li>
                                              <span>
                                                  <a className="leaveJourney" href="#">Guides</a>
                                              </span>
                                          </li>
                                          <li>
                                              <span>
                                                  <a className="leaveJourney" href="#">FAQs</a>
                                              </span>
                                          </li>
                                          <li>
                                              <span>
                                                  <a className="leaveJourney" href="#">About Aegon</a>
                                              </span>
                                          </li>                    
                                      </ul>
                                  </nav>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="wrapper">
                  <footer role="contentinfo" className="footer">
                      <div className="container-fluid">
                          <div className="row footer-core" id="footer-core" data-js-module="footer">
                              <div className="col-12 col-sm-8 ml-5">
                                  <p className="footer-copyright-notice float-left mr-3 mb-0">©
                                      <span>2019</span>
                                      Aegon UK plc.
                                  </p>
                                  <nav role="navigation" className="float-left">
                                      <ul className="footer-legal-links">
                                          <li>
                                              <span>
                                                  <a className="leaveJourney" href="#">Terms of Service
                                                  </a>
                                              </span>
                                          </li>
                                          <li>
                                              <span>
                                                  <a className="leaveJourney" href="#">Regulatory</a>
                                              </span>
                                          </li>
                                      </ul>
                                  </nav>
                              </div>
                          </div>
                      </div>
                  </footer>
              </div>
          </div>
      </div>
    </div>
  );
}

export default Footer;
