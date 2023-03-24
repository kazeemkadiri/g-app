
function App() {
  return (
    <>
      <div id="preloader">
        <div data-loader="dual-ring"></div>
      </div>

      <div id="main-wrapper">

        <header id="header">
          <div className="container">
            <div className="header-row">
              <div className="header-column justify-content-start">

                <div className="logo me-3"> <a className="d-flex" href="index.html" title="Payyed - HTML Template"><img src="images/logo.png" width="121" height="33" alt="Payyed" /></a> </div>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#header-nav"> <span></span> <span></span> <span></span> </button>

                <nav className="primary-menu navbar navbar-expand-lg">
                  <div id="header-nav" className="collapse navbar-collapse">
                    <ul className="navbar-nav me-auto">
                      <li><a href="landing-page-send.html">Send</a></li>
                      <li><a href="landing-page-receive.html">Receive</a></li>
                      <li><a href="about-us.html">About Us</a></li>
                      <li><a href="fees.html">Fees</a></li>
                      <li><a href="help.html">Help</a></li>
                      <li className="dropdown"> <a className="dropdown-toggle" href="#">Features</a>
                        <ul className="dropdown-menu">
                          <li className="dropdown"><a className="dropdown-item dropdown-toggle" href="#">Headers</a>
                            <ul className="dropdown-menu">
                              <li><a className="dropdown-item" href="index.html">Light Version (Default)</a></li>
                              <li><a className="dropdown-item" href="feature-header-dark.html">Dark Version</a></li>
                              <li><a className="dropdown-item" href="feature-header-primary.html">Primary Version</a></li>
                              <li><a className="dropdown-item" href="index-2.html">Transparent Version</a></li>
                            </ul>
                          </li>
                          <li className="dropdown"><a className="dropdown-item dropdown-toggle" href="#">Navigation DropDown</a>
                            <ul className="dropdown-menu">
                              <li><a className="dropdown-item" href="index.html">Light Version (Default)</a></li>
                              <li><a className="dropdown-item" href="feature-navigation-dropdown-dark.html">Dark Version</a></li>
                              <li><a className="dropdown-item" href="feature-navigation-dropdown-primary.html">Primary Version</a></li>
                            </ul>
                          </li>
                          <li className="dropdown"><a className="dropdown-item dropdown-toggle" href="#">Second Navigation</a>
                            <ul className="dropdown-menu">
                              <li><a className="dropdown-item" href="send-money.html">Default Version</a></li>
                              <li><a className="dropdown-item" href="deposit-money.html">Alternate Version</a></li>
                            </ul>
                          </li>
                          <li className="dropdown"><a className="dropdown-item dropdown-toggle" href="#">Page Headers</a>
                            <ul className="dropdown-menu">
                              <li><a className="dropdown-item" href="feature-page-header-left-alignment.html">Left Alignment</a></li>
                              <li><a className="dropdown-item" href="feature-page-header-center-alignment.html">Center Alignment</a></li>
                              <li><a className="dropdown-item" href="feature-page-header-light.html">Light Version</a></li>
                              <li><a className="dropdown-item" href="feature-page-header-dark.html">Dark Version</a></li>
                              <li><a className="dropdown-item" href="feature-page-header-primary.html">Primary Version</a></li>
                              <li><a className="dropdown-item" href="feature-page-header-custom-background.html">Custom Background</a></li>
                              <li><a className="dropdown-item" href="feature-page-header-custom-background-with-transparent-header.html">Custom Background 2</a></li>
                            </ul>
                          </li>
                          <li className="dropdown"><a className="dropdown-item dropdown-toggle" href="#">Footer</a>
                            <ul className="dropdown-menu">
                              <li><a className="dropdown-item" href="index.html">Light Version Default</a></li>
                              <li><a className="dropdown-item" href="index-2.html">Alternate Version</a></li>
                              <li><a className="dropdown-item" href="feature-footer-dark.html">Dark Version</a></li>
                              <li><a className="dropdown-item" href="feature-footer-primary.html">Primary Version</a></li>
                            </ul>
                          </li>
                          <li><a className="dropdown-item" href="feature-layout-boxed.html">Layout Boxed</a></li>
                        </ul>
                      </li>
                      <li className="dropdown dropdown-mega"> <a className="dropdown-toggle" href="#">Pages</a>
                        <ul className="dropdown-menu">
                          <li>
                            <div className="dropdown-mega-content">
                              <div className="row">
                                <div className="col-lg"> <span className="sub-title">Homepage</span>
                                  <ul className="dropdown-mega-submenu">
                                    <li><a className="dropdown-item" href="index.html">Home Version 1</a></li>
                                    <li><a className="dropdown-item" href="index-2.html">Home Version 2</a></li>
                                    <li><a className="dropdown-item" href="landing-page-send.html">Landing Page - Send</a></li>
                                    <li><a className="dropdown-item" href="landing-page-receive.html">Landing Page - Receive</a></li>
                                  </ul>
                                </div>
                                <div className="col-lg"> <span className="sub-title">Account</span>
                                  <ul className="dropdown-mega-submenu">
                                    <li><a className="dropdown-item" href="settings-profile.html">My Profile</a></li>
                                    <li><a className="dropdown-item" href="settings-security.html">Security</a></li>
                                    <li><a className="dropdown-item" href="settings-payment-methods.html">Payment Methods</a></li>
                                    <li><a className="dropdown-item" href="settings-notifications.html">Notifications</a></li>
                                    <li className="dropdown"><a className="dropdown-item dropdown-toggle" href="#">Login</a>
                                      <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="login.html">Login Page 1</a></li>
                                        <li><a className="dropdown-item" href="login-2.html">Login Page 2</a></li>
                                        <li><a className="dropdown-item" href="login-3.html">Login Page 3</a></li>
                                      </ul>
                                    </li>
                                    <li className="dropdown"><a className="dropdown-item dropdown-toggle" href="#">Signup</a>
                                      <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="signup.html">Signup Page 1</a></li>
                                        <li><a className="dropdown-item" href="signup-2.html">Signup Page 2 </a></li>
                                        <li><a className="dropdown-item" href="signup-3.html">Signup Page 3 </a></li>
                                      </ul>
                                    </li>
                                  </ul>
                                </div>
                                <div className="col-lg"> <span className="sub-title">Dashboard</span>
                                  <ul className="dropdown-mega-submenu">
                                    <li><a className="dropdown-item" href="dashboard.html">Dashboard</a></li>
                                    <li><a className="dropdown-item" href="transactions.html">Transactions</a></li>
                                    <li className="dropdown"><a className="dropdown-item dropdown-toggle" href="#">Send Money</a>
                                      <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="send-money.html">Send Money</a></li>
                                        <li><a className="dropdown-item" href="send-money-confirm.html">Send Money Confirm</a></li>
                                        <li><a className="dropdown-item" href="send-money-success.html">Send Money Success </a></li>
                                      </ul>
                                    </li>
                                    <li className="dropdown"><a className="dropdown-item dropdown-toggle" href="#">Request Money</a>
                                      <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="request-money.html">Request Money</a></li>
                                        <li><a className="dropdown-item" href="request-money-confirm.html">Request Money Confirm</a></li>
                                        <li><a className="dropdown-item" href="request-money-success.html">Request Money Success </a></li>
                                      </ul>
                                    </li>
                                    <li className="dropdown"><a className="dropdown-item dropdown-toggle" href="#">Deposit Money</a>
                                      <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="deposit-money.html">Deposit Money</a></li>
                                        <li><a className="dropdown-item" href="deposit-money-confirm.html">Deposit Money Confirm</a></li>
                                        <li><a className="dropdown-item" href="deposit-money-success.html">Deposit Money Success </a></li>
                                      </ul>
                                    </li>
                                    <li className="dropdown"><a className="dropdown-item dropdown-toggle" href="#">Withdraw Money</a>
                                      <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="withdraw-money.html">Withdraw Money</a></li>
                                        <li><a className="dropdown-item" href="withdraw-money-confirm.html">Withdraw Money Confirm</a></li>
                                        <li><a className="dropdown-item" href="withdraw-money-success.html">Withdraw Money Success </a></li>
                                      </ul>
                                    </li>
                                    <li><a className="dropdown-item" href="notifications.html">Notifications</a></li>
                                  </ul>
                                </div>
                                <div className="col-lg"> <span className="sub-title">Blog</span>
                                  <ul className="dropdown-mega-submenu">
                                    <li><a className="dropdown-item" href="blog.html">Blog Standard</a></li>
                                    <li><a className="dropdown-item" href="blog-grid.html">Blog Grid</a></li>
                                    <li><a className="dropdown-item" href="blog-list.html">Blog List</a></li>
                                    <li><a className="dropdown-item" href="blog-single.html">Blog Single Right Sidebar</a></li>
                                    <li><a className="dropdown-item" href="blog-single-left-sidebar.html">Blog Single Left Sidebar</a></li>
                                  </ul>
                                </div>
                                <div className="col-lg"> <span className="sub-title">Others</span>
                                  <ul className="dropdown-mega-submenu">
                                    <li><a className="dropdown-item" href="about-us.html">About Us</a></li>
                                    <li><a className="dropdown-item" href="fees.html">Fees</a></li>
                                    <li><a className="dropdown-item" href="help.html">Help</a></li>
                                    <li><a className="dropdown-item" href="contact-us.html">Contact Us</a></li>
                                    <li><a className="dropdown-item" href="404.html">404</a></li>
                                    <li><a className="dropdown-item" href="coming-soon.html" target="_blank">Coming Soon</a></li>
                                    <li className="dropdown"><a className="dropdown-item dropdown-toggle" href="#">Elements</a>
                                      <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="elements.html">Elements 1</a></li>
                                        <li><a className="dropdown-item" href="elements-2.html">Elements 2</a></li>
                                      </ul>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </nav>

              </div>
              <div className="header-column justify-content-end">

                <nav className="login-signup navbar navbar-expand">
                  <ul className="navbar-nav">
                    <li><a href="login.html">Login</a> </li>
                    <li className="align-items-center h-auto ms-sm-3"><a className="btn btn-primary" href="signup.html">Sign Up</a></li>
                  </ul>
                </nav>

              </div>
            </div>
          </div>
        </header>

        <div id="content">


          <div className="owl-carousel owl-theme single-slideshow" data-autoplay="true" data-loop="true" data-autoheight="true" data-nav="true" data-items="1">
            <div className="item">
              <section className="hero-wrap">
                <div className="hero-mask opacity-7 bg-dark"></div>
                <div className="hero-bg" style={{backgroundImage: 'url("images/bg/image-1.jpg")'}}></div>
                <div className="hero-content d-flex fullscreen-with-header py-5">
                  <div className="container my-auto text-center">
                    <h2 className="text-16 text-white">Send & Receive Money</h2>
                    <p className="text-5 text-white mb-4">Quickly and easily send, receive and request money online with Payyed.<br className="d-none d-lg-block"/>
                      Over 180 countries and 120 currencies supported.</p>
                    <a href="#" className="btn btn-primary m-2">Open a Free Account</a> <a className="btn btn-outline-light video-btn m-2" href="#" data-src="https://www.youtube.com/embed/7e90gBu4pas" data-bs-toggle="modal" data-bs-target="#videoModal"><span className="text-2 me-3"><i className="fas fa-play"></i></span>See How it Works</a> </div>
                </div>
              </section>
            </div>
            <div className="item">
              <section className="hero-wrap">
                <div className="hero-bg" style={{backgroundImage: 'url("images/bg/image-3.jpg")'}}></div>
                <div className="hero-content d-flex fullscreen-with-header py-5">
                  <div className="container my-auto">
                    <div className="row">
                      <div className="col-12 col-lg-8 col-xl-7 text-center text-lg-start">
                        <h2 className="text-13 text-white">Trusted by more than 50,000 businesses worldwide.</h2>
                        <p className="text-5 text-white mb-4">Over 180 countries and 120 currencies supported.</p>
                        <a href="#" className="btn btn-primary me-3">Get started for free</a> <a className="btn btn-link text-light video-btn" href="#" data-src="https://www.youtube.com/embed/7e90gBu4pas" data-bs-toggle="modal" data-bs-target="#videoModal"><span className="me-2"><i className="fas fa-play-circle"></i></span>Watch Demo</a> </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>

          <section className="section bg-white">
            <div className="container">
              <h2 className="text-9 text-center">Why should you choose Payyed?</h2>
              <p className="lead text-center mb-5">Here's Top 4 reasons why using a Payyed account for manage your money.</p>
              <div className="row gy-5">
                <div className="col-sm-6 col-lg-3">
                  <div className="featured-box">
                    <div className="featured-box-icon text-primary"> <i className="fas fa-hand-pointer"></i> </div>
                    <h3>Easy to use</h3>
                    <p className="text-3">Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.</p>
                    <a href="#" className="btn-link text-3">Learn more<i className="fas fa-chevron-right text-1 ms-2"></i></a> </div>
                </div>
                <div className="col-sm-6 col-lg-3">
                  <div className="featured-box">
                    <div className="featured-box-icon text-primary"> <i className="fas fa-share"></i> </div>
                    <h3>Faster Payments</h3>
                    <p className="text-3">Persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.</p>
                    <a href="#" className="btn-link text-3">Learn more<i className="fas fa-chevron-right text-1 ms-2"></i></a> </div>
                </div>
                <div className="col-sm-6 col-lg-3">
                  <div className="featured-box">
                    <div className="featured-box-icon text-primary"> <i className="fas fa-dollar-sign"></i> </div>
                    <h3>Lower Fees</h3>
                    <p className="text-3">Essent lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.</p>
                    <a href="#" className="btn-link text-3">Learn more<i className="fas fa-chevron-right text-1 ms-2"></i></a> </div>
                </div>
                <div className="col-sm-6 col-lg-3">
                  <div className="featured-box">
                    <div className="featured-box-icon text-primary"> <i className="fas fa-lock"></i> </div>
                    <h3>100% secure</h3>
                    <p className="text-3">Quidam lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.</p>
                    <a href="#" className="btn-link text-3">Learn more<i className="fas fa-chevron-right text-1 ms-2"></i></a> </div>
                </div>
              </div>
            </div>
          </section>

          <section className="section">
            <div className="container overflow-hidden">
              <div className="row g-5">
                <div className="col-lg-5 col-xl-6 d-flex">
                  <div className="my-auto">
                    <h2 className="text-9">Payment Solutions for everyone.</h2>
                    <p className="text-4">Quidam lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure. Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure. lisque persius interesset his et, in quot quidam mea essent possim iriure.</p>
                    <a href="#" className="btn-link text-4">Find more solution<i className="fas fa-chevron-right text-2 ms-2"></i></a> </div>
                </div>
                <div className="col-lg-7 col-xl-6">
                  <div className="row g-4 banner style-2 justify-content-center">
                    <div className="col-12 col-sm-6 text-center">
                      <div className="item rounded shadow d-inline-block"> <a href="#">
                        <div className="caption rounded-bottom">
                          <h2 className="text-5 fw-400 mb-0">Freelancer</h2>
                        </div>
                        <div className="banner-mask"></div>
                        <img className="img-fluid" src="images/anyone-freelancer.jpg" width="410" height="350" alt="banner" />
                      </a> </div>
                    </div>
                    <div className="col-12 col-sm-6 text-center">
                      <div className="item rounded shadow d-inline-block"> <a href="#">
                        <div className="caption rounded-bottom">
                          <h2 className="text-5 fw-400 mb-0">Online Shopping</h2>
                        </div>
                        <div className="banner-mask"></div>
                        <img className="img-fluid" src="images/anyone-online-shopping.jpg" width="410" height="350" alt="banner" />
                      </a> </div>
                    </div>
                    <div className="col-12 col-sm-6 mb-sm-0 text-center">
                      <div className="item rounded shadow d-inline-block"> <a href="#">
                        <div className="caption rounded-bottom">
                          <h2 className="text-5 fw-400 mb-0">Online Sellers</h2>
                        </div>
                        <div className="banner-mask"></div>
                        <img className="img-fluid" src="images/anyone-online-sellers.jpg" width="410" height="350" alt="banner"/> 
                        </a> </div>
                    </div>
                    <div className="col-12 col-sm-6 text-center">
                      <div className="item rounded shadow d-inline-block"> <a href="#">
                        <div className="caption rounded-bottom">
                          <h2 className="text-5 fw-400 mb-0">Affiliate Marketing</h2>
                        </div>
                        <div className="banner-mask"></div>
                        <img className="img-fluid" src="images/anyone-affiliate-marketing.jpg" width="410" height="350" alt="banner" /> </a> </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="section bg-white">
            <div className="container">
              <h2 className="text-9 text-center">What can you do with Payyed?</h2>
              <p className="lead text-center mb-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              <div className="row g-4">
                <div className="col-sm-6 col-lg-3"> <a href="#">
                  <div className="featured-box style-5 rounded">
                    <div className="featured-box-icon text-primary"> <i className="fas fa-share-square"></i> </div>
                    <h3>Send Money</h3>
                  </div>
                </a> </div>
                <div className="col-sm-6 col-lg-3"> <a href="#">
                  <div className="featured-box style-5 rounded">
                    <div className="featured-box-icon text-primary"> <i className="fas fa-check-square"></i> </div>
                    <h3>Receive Money</h3>
                  </div>
                </a> </div>
                <div className="col-sm-6 col-lg-3"> <a href="#">
                  <div className="featured-box style-5 rounded">
                    <div className="featured-box-icon text-primary"> <i className="fas fa-user-friends"></i> </div>
                    <h3>Pay a Friend</h3>
                  </div>
                </a> </div>
                <div className="col-sm-6 col-lg-3"> <a href="#">
                  <div className="featured-box style-5 rounded">
                    <div className="featured-box-icon text-primary"> <i className="fas fa-shopping-bag"></i> </div>
                    <h3>Online Shopping</h3>
                  </div>
                </a> </div>
              </div>
              <div className="text-center mt-5"><a href="#" className="btn-link text-4">See more can you do<i className="fas fa-chevron-right text-2 ms-2"></i></a></div>
            </div>
          </section>

          <section className="section">
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <div className="card bg-dark-3 shadow-sm border-0">
                    <img className="card-img img-fluid opacity-8" src="images/how-work.jpg" width="570" height="362" alt="banner" />
                    <div className="card-img-overlay p-0"> <a className="d-flex h-100 video-btn" href="#" data-src="https://www.youtube.com/embed/7e90gBu4pas" data-bs-toggle="modal" data-bs-target="#videoModal"> <span className="playButton playButton-pulsing bg-white m-auto"><i className="fas fa-play"></i></span> </a> </div>
                  </div>
                </div>
                <div className="col-lg-6 mt-5 mt-lg-0">
                  <div className="ms-4">
                    <h2 className="text-9">How does it work?</h2>
                    <p className="text-4">Quidam lisque persius interesset his et, in quot quidam persequeris essent possim iriure. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <ul className="list-unstyled text-3 lh-lg">
                      <li><i className="fas fa-check me-2"></i>Sign Up Account</li>
                      <li><i className="fas fa-check me-2"></i>Receive & Send Payments from worldwide</li>
                      <li><i className="fas fa-check me-2"></i>Your funds will be transferred to your local bank account</li>
                    </ul>
                    <a href="#" className="btn btn-outline-primary shadow-none mt-2">Open a Free Account</a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="section bg-white">
            <div className="container">
              <h2 className="text-9 text-center">What people are saying about Payyed</h2>
              <p className="lead text-center mb-4">A payments experience people love to talk about</p>
              <div className="owl-carousel owl-theme" data-autoplay="true" data-nav="true" data-loop="true" data-margin="30" data-slideby="2" data-stagepadding="5" data-items-xs="1" data-items-sm="1" data-items-md="2" data-items-lg="2">
                <div className="item">
                  <div className="testimonial rounded text-center p-4">
                    <p className="text-9 text-muted opacity-2 lh-base mb-0"><i className="fa fa-quote-left"></i></p>
                    <p className="text-4">"Easy to use, reasonably priced simply dummy text of the printing and typesetting industry. Quidam lisque persius interesset his et, in quot quidam possim iriure."</p>
                    <strong className="d-block fw-500">Jay Shah</strong> <span className="text-muted">Founder at Icomatic Pvt Ltd</span> </div>
                </div>
                <div className="item">
                  <div className="testimonial rounded text-center p-4">
                    <p className="text-9 text-muted opacity-2 lh-base mb-0"><i className="fa fa-quote-left"></i></p>
                    <p className="text-4">"I am happy Working with printing and typesetting industry. Quidam lisque persius interesset his et, in quot quidam persequeris essent possim iriure."</p>
                    <strong className="d-block fw-500">Patrick Cary</strong> <span className="text-muted">Freelancer from USA</span> </div>
                </div>
                <div className="item">
                  <div className="testimonial rounded text-center p-4">
                    <p className="text-9 text-muted opacity-2 lh-base mb-0"><i className="fa fa-quote-left"></i></p>
                    <p className="text-4">"Fast easy to use transfers to a different currency. Much better value that the banks."</p>
                    <strong className="d-block fw-500">De Mortel</strong> <span className="text-muted">Online Retail</span> </div>
                </div>
                <div className="item">
                  <div className="testimonial rounded text-center p-4">
                    <p className="text-9 text-muted opacity-2 lh-base mb-0"><i className="fa fa-quote-left"></i></p>
                    <p className="text-4">"I have used them twice now. Good rates, very efficient service and it denies high street banks an undeserved windfall. Excellent."</p>
                    <strong className="d-block fw-500">Chris Tom</strong> <span className="text-muted">User from UK</span> </div>
                </div>
                <div className="item">
                  <div className="testimonial rounded text-center p-4">
                    <p className="text-9 text-muted opacity-2 lh-base mb-0"><i className="fa fa-quote-left"></i></p>
                    <p className="text-4">"It's a real good idea to manage your money by payyed. The rates are fair and you can carry out the transactions without worrying!"</p>
                    <strong className="d-block fw-500">Mauri Lindberg</strong> <span className="text-muted">Freelancer from Australia</span> </div>
                </div>
                <div className="item">
                  <div className="testimonial rounded text-center p-4">
                    <p className="text-9 text-muted opacity-2 lh-base mb-0"><i className="fa fa-quote-left"></i></p>
                    <p className="text-4">"Only trying it out since a few days. But up to now excellent. Seems to work flawlessly. I'm only using it for sending money to friends at the moment."</p>
                    <strong className="d-block fw-500">Dennis Jacques</strong> <span className="text-muted">User from USA</span> </div>
                </div>
              </div>
              <div className="text-center mt-4"><a href="#" className="btn-link text-4">See more people review<i className="fas fa-chevron-right text-2 ms-2"></i></a></div>
            </div>
          </section>

          <section className="hero-wrap section shadow-md">
            <div className="hero-mask opacity-9 bg-primary"></div>
            <div className="hero-bg" style={{backgroundImage: 'url("images/bg/image-2.jpg")'}}></div>
            <div className="hero-content py-5">
              <div className="container text-center">
                <h2 className="text-9 text-white">Awesome Customer Support</h2>
                <p className="lead text-white mb-4">Have you any query? Don't worry. We have great people ready to help you whenever you need it.</p>
                <a href="#" className="btn btn-light">Find out more</a> </div>
            </div>
          </section>

          <section className="section py-5">
            <div className="container">
              <div className="justify-content-center text-center">
                <h2 className="text-9">Get the app</h2>
                <p className="lead mb-4">Download our app for the fastest, most convenient way to send & get Payment.</p>
                <a className="d-inline-flex mx-3" href="">
                  <img alt="" width="168" height="49" src="images/app-store.png" />
                </a> <a className="d-inline-flex mx-3" href="">
                  <img alt="" width="166" height="49" src="images/google-play-store.png" />
                </a>
              </div>
            </div>
          </section>


        </div>

        <footer id="footer">
          <div className="container">
            <div className="row">
              <div className="col-lg d-lg-flex align-items-center">
                <ul className="nav justify-content-center justify-content-lg-start text-3">
                  <li className="nav-item"> <a className="nav-link active" href="#">About Us</a></li>
                  <li className="nav-item"> <a className="nav-link" href="#">Support</a></li>
                  <li className="nav-item"> <a className="nav-link" href="#">Help</a></li>
                  <li className="nav-item"> <a className="nav-link" href="#">Careers</a></li>
                  <li className="nav-item"> <a className="nav-link" href="#">Affiliate</a></li>
                  <li className="nav-item"> <a className="nav-link" href="#">Fees</a></li>
                </ul>
              </div>
              <div className="col-lg d-lg-flex justify-content-lg-end mt-3 mt-lg-0">
                <ul className="social-icons justify-content-center">
                  <li className="social-icons-facebook"><a data-bs-toggle="tooltip" href="http://www.facebook.com/" target="_blank" title="Facebook"><i className="fab fa-facebook-f"></i></a></li>
                  <li className="social-icons-twitter"><a data-bs-toggle="tooltip" href="http://www.twitter.com/" target="_blank" title="Twitter"><i className="fab fa-twitter"></i></a></li>
                  <li className="social-icons-google"><a data-bs-toggle="tooltip" href="http://www.google.com/" target="_blank" title="Google"><i className="fab fa-google"></i></a></li>
                  <li className="social-icons-youtube"><a data-bs-toggle="tooltip" href="http://www.youtube.com/" target="_blank" title="Youtube"><i className="fab fa-youtube"></i></a></li>
                </ul>
              </div>
            </div>
            <div className="footer-copyright pt-3 pt-lg-2 mt-2">
              <div className="row">
                <div className="col-lg">
                  <p className="text-center text-lg-start mb-2 mb-lg-0">Copyright &copy; 2022 <a href="#">Payyed</a>. All Rights Reserved.</p>
                </div>
                <div className="col-lg d-lg-flex align-items-center justify-content-lg-end">
                  <ul className="nav justify-content-center">
                    <li className="nav-item"> <a className="nav-link active" href="#">Security</a></li>
                    <li className="nav-item"> <a className="nav-link" href="#">Terms</a></li>
                    <li className="nav-item"> <a className="nav-link" href="#">Privacy</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>


      </div>



    </>
  );
}

export default App;
