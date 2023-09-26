import "./Myfile.css";
const MyFile = () => {
  return (
    <>
      <div>
        <div id="introduction">
          <div className="nav">
            <div id="left-menu">
              <div className="logo-name">
                <span>
                  <img className="logo" alt="" src="/group-296.svg" />
                </span>
                <span style={{ fontWeight: "bolder", fontSize: "1.4rem" }}>
                  Ed-Circle.
                </span>
              </div>
              <div className="search-bar">
                <input type="text" placeholder="Want to learn?" />
                <p>Explore</p>
              </div>
              <span className="textSize">Program</span>
              <span className="textSize"> Enterprise</span>
              <span className="textSize">Universities</span>
            </div>
            <div id="right-menu">
              <span className="textSize2">Sign in</span>
              <button className="btn btn-primary">Create Free Account</button>
            </div>
            <div id="collapse">
              <i className="fa-solid fa-bars fa-lg"></i>
            </div>
          </div>
          <div className="intro-section">
            <div id="intro-left">
              <img src="/group-498.svg" alt="" />
              <div id="intro-left-content">
                <div className="headers">Up Your Skills</div>
                <div className="headers">To Advance Your </div>
                <div className="headers"> Career Path</div>
                <p
                  className="py-2"
                  style={{ fontWeight: "500", color: "grey" }}
                >
                  Provides you with the latest online learning system and
                  material that help your knowledge growing.
                </p>
              </div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <button
                  className="btn btn-primary my-3 py-3"
                  style={{ width: "max-content" }}
                >
                  Get Free Trial
                </button>
              </div>
            </div>
            <div id="intro-right">
              <img className="img1" src="/group-499.svg" alt="" />
              <img
                className="img2"
                width="70%"
                alt=""
                src="/mask-group@2x.png"
              />
            </div>
          </div>
          <div className="intro-footer">
            <h5>
              <span>
                <img alt="" src="/group-518.svg" />
              </span>
              Public Speaking
            </h5>

            <h5>
              <span>
                <img alt="" src="/briefcase.svg" />
              </span>
              Career-Oriented
            </h5>
            <h5>
              <span>
                <img alt="" src="/idea.svg" />
              </span>
              Creative Thinking
            </h5>
          </div>
          <div className="intro-footer">
            <div>
              <p className="m-0">
                <h2>250+</h2>
              </p>
              <h3 className="m-0 ">Collaborations</h3>
            </div>
            <span>
              <img alt="" src="/group.svg" />
            </span>
            <span>
              <img alt="" src="/codecov-logo--black.svg" />
            </span>
            <span>
              <img alt="" src="/usertesting-logo--black.svg" />
            </span>
            <span>
              <img alt="" src="/magic-leap-logo--black.svg" />
            </span>
          </div>
        </div>

        <div id="services">
          <h5 className="py-3">Our Services</h5>

          <h1 className="mx-auto text-center">
            Fostering a playful & engaging learning
          environment</h1>

          <div className="service-group">
            <div className="service">
              <h3 className="py-3">
                <span>
                  <img alt="" src="/icon2.svg" />
                </span>
                User Experience
              </h3>
              <span>Lessons on design that cover </span>
              <span>the most recent developments.</span>
              <h5 className="pt-3">
                Learn More
                <span>
                  <img alt="" src="/vector1.svg" />
                </span>
              </h5>
            </div>
            <div className="service mx-4">
              <h3 className="py-3">
                <span>
                  <img alt="" src="/icon3.svg" />
                </span>
                Web Development
              </h3>
              <span> Classes in development that cover the</span>
              <span>most recent advancements in web.</span>
              <h5 className="pt-3">
                Learn More
                <span>
                  <img alt="" src="/vector1.svg" />
                </span>
              </h5>
            </div>
            <div className="service">
              <h3 className="py-3">
                <span>
                  <img alt="" src="/icon4.svg" />
                </span>
                Marketing
              </h3>
              <span>Marketing courses that cover the most</span>
              <span> recent marketing trends</span>
              <h5 className="pt-3">
                Learn More
                <span>
                  <img alt="" src="/vector1.svg" />
                </span>
              </h5>
            </div>
          </div>
        </div>

        <div id="programs" className="align-items-center">
          <h5 className="pt-5">Explore Programs</h5>
          <h2>Our Most Popular Class</h2>
          <h5>
            Let's join our famous class, the knowledge provided will definitely
            be useful for you.
          </h5>

          <div className="program-group">
            <div className="card" style={{ width: "20rem" }}>
              <img
                className="card-img-top"
                src="/image@3x.png"
                alt="Card image cap"
              />
              <div className="card-body">
                <p className="card-text">Design</p>
                <h5 className="card-title">Figma UI UX Design..</h5>
                <p className="card-text">
                  Use Figma to get a job in UI Design, User Interface, User
                  Experience design.
                </p>
                <p className="card-text">
                  <span>4.3 </span>
                  <span>
                    <i
                      className="fa-solid fa-star"
                      style={{ color: "#ffae00" }}
                    ></i>
                  </span>
                  <span>
                    <i
                      className="fa-solid fa-star"
                      style={{ color: "#ffae00" }}
                    ></i>
                  </span>
                  <span>
                    <i
                      className="fa-solid fa-star"
                      style={{ color: "#ffae00" }}
                    ></i>
                  </span>
                  <span>
                    <i
                      className="fa-solid fa-star"
                      style={{ color: "#ffae00" }}
                    ></i>
                  </span>
                  <span>
                    <i
                      className="fa-solid fa-star"
                      style={{ color: "#ffae00" }}
                    ></i>
                  </span>
                  <span> (16,325)</span>
                </p>
                <p className="card-text">
                  <span>
                    <img src="/avatar@2x.png" width="15%" alt="" />
                  </span>
                  <span>Jane Cooper</span>
                  <span style={{ fontSize: "2rem" }}> $17.84</span>
                </p>
              </div>
            </div>
            <div className="card" style={{ width: "20rem" }}>
              <img
                className="card-img-top"
                src="/image@3x.png"
                alt="Card image cap"
              />
              <div className="card-body">
                <p className="card-text">Design</p>
                <h5 className="card-title">Figma UI UX Design..</h5>
                <p className="card-text">
                  Use Figma to get a job in UI Design, User Interface, User
                  Experience design.
                </p>
                <p className="card-text">
                  <span>4.3 </span>
                  <span>
                    <i
                      className="fa-solid fa-star"
                      style={{ color: "#ffae00" }}
                    ></i>
                  </span>
                  <span>
                    <i
                      className="fa-solid fa-star"
                      style={{ color: "#ffae00" }}
                    ></i>
                  </span>
                  <span>
                    <i
                      className="fa-solid fa-star"
                      style={{ color: "#ffae00" }}
                    ></i>
                  </span>
                  <span>
                    <i
                      className="fa-solid fa-star"
                      style={{ color: "#ffae00" }}
                    ></i>
                  </span>
                  <span>
                    <i
                      className="fa-solid fa-star"
                      style={{ color: "#ffae00" }}
                    ></i>
                  </span>
                  <span> (16,325)</span>
                </p>
                <p className="card-text">
                  <span>
                    <img src="/avatar@2x.png" width="15%" alt="" />
                  </span>
                  <span>Jane Cooper</span>
                  <span style={{ fontSize: "2rem" }}> $17.84</span>
                </p>
              </div>
            </div>
            <div className="card" style={{ width: "20rem" }}>
              <img
                className="card-img-top"
                src="/image@3x.png"
                alt="Card image cap"
              />
              <div className="card-body">
                <p className="card-text">Design</p>
                <h5 className="card-title">Figma UI UX Design..</h5>
                <p className="card-text">
                  Use Figma to get a job in UI Design, User Interface, User
                  Experience design.
                </p>
                <p className="card-text">
                  <span>4.3 </span>
                  <span>
                    <i
                      className="fa-solid fa-star"
                      style={{ color: "#ffae00" }}
                    ></i>
                  </span>
                  <span>
                    <i
                      className="fa-solid fa-star"
                      style={{ color: "#ffae00" }}
                    ></i>
                  </span>
                  <span>
                    <i
                      className="fa-solid fa-star"
                      style={{ color: "#ffae00" }}
                    ></i>
                  </span>
                  <span>
                    <i
                      className="fa-solid fa-star"
                      style={{ color: "#ffae00" }}
                    ></i>
                  </span>
                  <span>
                    <i
                      className="fa-solid fa-star"
                      style={{ color: "#ffae00" }}
                    ></i>
                  </span>
                  <span> (16,325)</span>
                </p>
                <p className="card-text">
                  <span>
                    <img src="/avatar@2x.png" width="15%" alt="" />
                  </span>
                  <span>Jane Cooper</span>
                  <span style={{ fontSize: "2rem" }}> $17.84</span>
                </p>
              </div>
            </div>
          </div>
          <button
            className="btn btn-primary mx-auto"
            style={{ width: "max-content" }}
          >
            Explore All Programs
          </button>
        </div>

        <div id="tutors">
          <p>Tutors</p>
          <h2>Meet The Heroes</h2>
          <p>
            On Ed-Circle, instructors from all over the world instruct millions
            of students. We offer the knowledge and abilities.
          </p>
          <div className="program-group">
            <div className="card text-center" style={{ width: "18rem" }}>
              <div className="card-body">
                <img src="avatar3@2x.png" width="30%" alt="Card image cap" />
                <h5 className="card-title">Theresa Webb</h5>
                <p className="card-text">Application Support Analyst</p>
                <p className="card-text">Lead</p>
                <p className="card-text">
                  Former Co-founder of Opendoor.Early staff at spotify and
                  clearbit
                </p>
                <ul className="list-group list-group-flush">
                  <span>
                    <i className="fa-brands fa-twitter fa-xl"></i>
                    <i className="fa-brands fa-linkedin fa-xl"></i>
                  </span>
                </ul>
              </div>
            </div>

            <div className="card card-margin text-center" style={{ width: "18rem" }}>
              <div className="card-body">
                <img src="avatar3@2x.png" width="30%" alt="Card image cap" />
                <h5 className="card-title">Theresa Webb</h5>
                <p className="card-text">Application Support Analyst</p>
                <p className="card-text">Lead</p>
                <p className="card-text">
                  Former Co-founder of Opendoor.Early staff at spotify and
                  clearbit
                </p>
                <ul className="list-group list-group-flush">
                  <span>
                    <i className="fa-brands fa-twitter fa-xl"></i>
                    <i className="fa-brands fa-linkedin fa-xl"></i>
                  </span>
                </ul>
              </div>
            </div>
            <div
              className="card text-center"
              style={{ width: "18rem" }}
            >
              <div className="card-body">
                <img src="avatar3@2x.png" width="30%" alt="Card image cap" />
                <h5 className="card-title">Theresa Webb</h5>
                <p className="card-text">Application Support Analyst</p>
                <p className="card-text">Lead</p>
                <p className="card-text">
                  Former Co-founder of Opendoor.Early staff at spotify and
                  clearbit
                </p>
                <ul className="list-group list-group-flush">
                  <span>
                    <i className="fa-brands fa-twitter fa-xl"></i>
                    <i className="fa-brands fa-linkedin fa-xl"></i>
                  </span>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div id="ed-circle">
          <div className="logo-name py-3">
            <span>
              <img className="logo" alt="" src="/group-296.svg" />
            </span>
            <span style={{ fontWeight: "bolder", fontSize: "1.4rem" }}>
              Ed-Circle.
            </span>
          </div>
          <h1>Courses was fantastic! It is Master platform for those looking to start a new career, or need a refresher.</h1>
          <img className="py-3" src="/avatar7@2x.png" width="8%" alt="" />
          <h6>Jacob Jones</h6>
          <p>Student, National University</p>
        </div>

        <div id="blogs">
          <h3>Our recent blogs</h3>
          <div className="blog-group">
            <div className="blog-left " style={{ padding: "1rem" }}>
              <div
                id="firstblog "
                style={{ display: "flex", marginBottom: "1rem" }}
              >
                <div>
                  <img src="/image3@2x.png" width="90%" alt="" />
                </div>
                <div>
                  <h6>November 16, 2014</h6>
                  <h4>Three Pillars of User Delight</h4>
                  <p>
                    Delight can be experienced viscerally, behaviourally, and
                    reflectively. A great design is ...
                  </p>
                  <p className="card-text">
                    <small className="text-muted">
                      <span>Research UI UX</span>
                    </small>
                  </p>
                </div>
              </div>
              <div id="firstblog" style={{ display: "flex" }}>
                <div>
                  <img src="/image3@2x.png" width="90%" alt="" />
                </div>
                <div>
                  <h6>November 16, 2014</h6>
                  <h4>Three Pillars of User Delight</h4>
                  <p>
                    Delight can be experienced viscerally, behaviourally, and
                    reflectively. A great design is ...
                  </p>
                  <p className="card-text">
                    <small className="text-muted">
                      <span>Research UI UX</span>
                    </small>
                  </p>
                </div>
              </div>
            </div>
            <div className="blog-right">
              <div className="card mb-3">
                <img
                  className="card-img-top"
                  src="/image5@2x.png"
                  width="10%"
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h6>March 13, 2014</h6>
                  <h3 className="card-title">
                    Agile Development Projects and Usability
                  </h3>
                  <p className="card-text">
                    Agile methods aim to overcome usability barriers in
                    traditional development, but post new threats to user
                    experience quality.
                  </p>
                  <p className="card-text">
                    <small className="text-muted">
                      <span>Programming Research Developments</span>
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="footer">
          <div className="footer-1">
            <div className="logo-name py-3">
              <span>
                <img className="logo" alt="" src="/group-296.svg" />
              </span>
              <span style={{ fontWeight: "bolder", fontSize: "1.4rem" }}>
                Ed-Circle.
              </span>
            </div>

            <p>
              Top learning experiences that create more talent in the world.
            </p>
          </div>
          <div className="footer-2">
            <ul id="product" style={{ listStyle: "none" }}>
              <li style={{ color: "#8892A3" }}>Product</li>
              <li>Overview</li>
              <li>Features</li>
              <li>Solutions</li>
              <li>Tutorials</li>
              <li>Pricing</li>
            </ul>
          </div>
          <div className="footer-3">
            <ul id="company" style={{ listStyle: "none" }}>
              <li style={{ color: "#8892A3" }}>Company</li>
              <li>About us</li>
              <li>Careers</li>
              <li>Press(New)</li>
              <li>News</li>
            </ul>
          </div>
          <div className="footer-4">
            <ul id="social" style={{ listStyle: "none" }}>
              <li style={{ color: "#8892A3" }}>Social</li>
              <li>Twitter</li>
              <li>LinkedIn</li>
              <li>GitHub</li>
              <li>Dribbble</li>
            </ul>
          </div>
          <div className="footer-5">
            <ul id="legal" style={{ listStyle: "none" }}>
              <li style={{ color: "#8892A3" }}>Legal</li>
              <li>Terms</li>
              <li>Privacy</li>
              <li>Cookies</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
        <p
          style={{
            fontWeight: "bold",
            backgroundColor: "#101828",
            color: "#ffffff",
            padding: "2rem",
            margin: "auto",
            textAlign: "center",
          }}
        >
          &copy; 2022 Ed-Circle. All rights reserved.
          <span>
            <i className="fa-brands fa-twitter mx-2 pt-4 fa-xl"></i>
            <i className="fa-brands fa-linkedin  fa-xl"></i>
            <i className="fa-brands fa-facebook mx-2 fa-xl"></i>
            <i className="fa-brands fa-github  fa-xl"></i>
          </span>
        </p>
      </div>
    </>
  );
};

export default MyFile;
