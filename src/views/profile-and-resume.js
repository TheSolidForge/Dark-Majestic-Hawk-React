import React from 'react'

import { Helmet } from 'react-helmet'

import NavbarInteractive from '../components/navbar-interactive'
import SmallSpacer from '../components/small-spacer'
import GalleryCard3 from '../components/gallery-card3'
import Footer from '../components/footer'
import './profile-and-resume.css'

const ProfileAndResume = (props) => {
  return (
    <div className="profile-and-resume-container">
      <Helmet>
        <title>Profile-and-Resume - Dark Majestic Hawk</title>
        <meta
          property="og:title"
          content="Profile-and-Resume - Dark Majestic Hawk"
        />
      </Helmet>
      <div className="profile-and-resume-header">
        <NavbarInteractive rootClassName="navbar-interactive-root-class-name3"></NavbarInteractive>
        <SmallSpacer rootClassName="small-spacer-root-class-name3"></SmallSpacer>
      </div>
      <div className="profile-and-resume-banner">
        <div className="profile-and-resume-banner1">
          <h1 className="profile-and-resume-banner-heading heading2">
            Background and Experience
          </h1>
          <span className="profile-and-resume-banner-sub-heading">
            <span>
              Expertise is hard to come by, even harder is recognizing it.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <br></br>
            <span>
              Outlined on this page are previous projects, job descriptions, and
              research content. 
            </span>
          </span>
          <button className="profile-and-resume-banner-button button">
            Future Opportunities -&gt;
          </button>
        </div>
      </div>
      <div className="profile-and-resume-experience">
        <div className="profile-and-resume-pricing">
          <div className="profile-and-resume-container01">
            <span className="profile-and-resume-text04 sectionTitle">
              <span>Profile and Resume</span>
              <br></br>
            </span>
            <h2 className="profile-and-resume-pricing-heading heading2">
              The intersection of Curiosity and Reality
            </h2>
            <span className="profile-and-resume-pricing-sub-heading">
              Topics outlined contain non-exhaustivedescriptions. For more
              information and details contact me.
            </span>
          </div>
          <div className="profile-and-resume-container02">
            <GalleryCard3 rootClassName="gallery-card3-root-class-name24"></GalleryCard3>
            <div className="profile-and-resume-feature-card">
              <svg viewBox="0 0 1024 1024" className="profile-and-resume-icon">
                <path d="M809.003 291.328l-297.003 171.819-297.003-171.819 275.456-157.397c4.779-2.731 9.899-4.48 15.147-5.333 9.301-1.451 18.987 0.128 27.904 5.291zM491.776 979.669c6.016 3.243 12.928 5.077 20.224 5.077 7.381 0 14.336-1.877 20.395-5.163 15.189-2.475 29.909-7.68 43.392-15.36l298.709-170.709c26.368-15.232 45.269-38.315 55.424-64.597 5.675-14.592 8.619-30.165 8.747-46.251v-341.333c0-20.395-4.821-39.723-13.397-56.917-0.939-3.029-2.219-5.973-3.883-8.832-1.963-3.371-4.267-6.357-6.912-8.96-1.323-1.835-2.731-3.669-4.139-5.419-9.813-12.203-21.845-22.528-35.456-30.507l-299.051-170.88c-26.027-15.019-55.467-19.84-83.328-15.531-15.531 2.432-30.507 7.637-44.288 15.488l-298.709 170.709c-16.341 9.429-29.824 21.888-40.149 36.267-2.56 2.56-4.864 5.547-6.784 8.832-1.664 2.901-2.987 5.888-3.925 8.96-1.707 3.456-3.243 6.955-4.608 10.496-5.632 14.635-8.576 30.208-8.704 45.995v341.632c0.043 30.293 10.581 58.197 28.331 80.128 9.813 12.203 21.845 22.528 35.456 30.507l299.051 170.88c13.824 7.979 28.587 13.099 43.605 15.445zM469.333 537.045v340.949l-277.12-158.336c-4.736-2.773-8.832-6.315-12.16-10.411-5.931-7.381-9.387-16.512-9.387-26.581v-318.379zM554.667 877.995v-340.949l298.667-172.757v318.379c-0.043 5.163-1.067 10.496-2.987 15.445-3.413 8.789-9.6 16.384-18.176 21.333z"></path>
              </svg>
              <div className="profile-and-resume-container03">
                <h3 className="profile-and-resume-text07 heading3">
                  Formal Education
                </h3>
                <span className="profile-and-resume-text08">
                  <span>
                    I graduated from North Carolina State University, also known
                    as NC State, in 2013 with a Bachelors in Physics and a Minor
                    in Applied Mathematics
                  </span>
                  <br></br>
                  <br></br>
                  <span>
                    My senior projects, labs and papers focused on Chaos Theory
                    and Computational Modeling and Analysis of closed and open
                    inorganic systems of naturally occurring chaotic behavior. 
                  </span>
                  <br></br>
                  <br></br>
                  <span>
                    Additional areas of interest was applying these studies on
                    extreme low temperature physics utilizing statistical
                    mechanics and the Law of Large Numbers. 
                  </span>
                  <br></br>
                  <br></br>
                  <span>Projects include: </span>
                  <br></br>
                  <span>
                    - Utilization of clean room and cascade amplified vision
                    equipment studying Volumetric Brownian motion of suspended
                    particles in viscus solutions
                  </span>
                  <br></br>
                  <span>
                    - Study and analytical modeling of spontaneous Muon
                    detection
                  </span>
                  <br></br>
                  <span>
                    - Semiconductor specific Bifurcation analysis of resonance
                    frequencies in capacitors dependent of frequency
                  </span>
                  <br></br>
                </span>
              </div>
            </div>
            <div className="profile-and-resume-feature-card1">
              <svg viewBox="0 0 1024 1024" className="profile-and-resume-icon2">
                <path d="M809.003 291.328l-297.003 171.819-297.003-171.819 275.456-157.397c4.779-2.731 9.899-4.48 15.147-5.333 9.301-1.451 18.987 0.128 27.904 5.291zM491.776 979.669c6.016 3.243 12.928 5.077 20.224 5.077 7.381 0 14.336-1.877 20.395-5.163 15.189-2.475 29.909-7.68 43.392-15.36l298.709-170.709c26.368-15.232 45.269-38.315 55.424-64.597 5.675-14.592 8.619-30.165 8.747-46.251v-341.333c0-20.395-4.821-39.723-13.397-56.917-0.939-3.029-2.219-5.973-3.883-8.832-1.963-3.371-4.267-6.357-6.912-8.96-1.323-1.835-2.731-3.669-4.139-5.419-9.813-12.203-21.845-22.528-35.456-30.507l-299.051-170.88c-26.027-15.019-55.467-19.84-83.328-15.531-15.531 2.432-30.507 7.637-44.288 15.488l-298.709 170.709c-16.341 9.429-29.824 21.888-40.149 36.267-2.56 2.56-4.864 5.547-6.784 8.832-1.664 2.901-2.987 5.888-3.925 8.96-1.707 3.456-3.243 6.955-4.608 10.496-5.632 14.635-8.576 30.208-8.704 45.995v341.632c0.043 30.293 10.581 58.197 28.331 80.128 9.813 12.203 21.845 22.528 35.456 30.507l299.051 170.88c13.824 7.979 28.587 13.099 43.605 15.445zM469.333 537.045v340.949l-277.12-158.336c-4.736-2.773-8.832-6.315-12.16-10.411-5.931-7.381-9.387-16.512-9.387-26.581v-318.379zM554.667 877.995v-340.949l298.667-172.757v318.379c-0.043 5.163-1.067 10.496-2.987 15.445-3.413 8.789-9.6 16.384-18.176 21.333z"></path>
              </svg>
              <div className="profile-and-resume-container04">
                <h3 className="profile-and-resume-text26 heading3">
                  Further Experience 
                </h3>
                <span className="profile-and-resume-text27">
                  <span>
                    Turbomachinery design and manufacturing, 3D Scanning
                    Computer Aided Engineering, Direct Metal, prototype and
                    production plastic Additive Manufacturing, Application, SaaS
                    and enterprise software operations and implementation
                  </span>
                  <br></br>
                </span>
              </div>
            </div>
            <div className="profile-and-resume-blog">
              <div className="profile-and-resume-container05">
                <div className="profile-and-resume-blog-post-card">
                  <img
                    alt="image"
                    src="https://images.unsplash.com/photo-1439853949127-fa647821eba0?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE4fHxuYXR1cmV8ZW58MHx8fHwxNjI2NDQ3ODAw&amp;ixlib=rb-1.2.1&amp;w=1400"
                    className="profile-and-resume-image"
                  />
                  <div className="profile-and-resume-container06">
                    <span className="profile-and-resume-text30">
                      Nordson Asymtech, Nordson Pacific Inc 
                    </span>
                    <h1 className="profile-and-resume-text31">
                      Real Time Machine Control Product Ownership
                    </h1>
                    <div className="profile-and-resume-container07">
                      <span className="profile-and-resume-text32">
                        <span>
                          Developed and lead software development strategies to
                          reduce release cycle time by 25% and increased team
                          velocity 75% leading to 2x features per release every
                          4-6 months
                        </span>
                        <br className="profile-and-resume-text34"></br>
                        <br></br>
                        <span>
                          Represent Software Development as a stakeholder in
                          interdisciplinary product development
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                        <br className="profile-and-resume-text37"></br>
                        <br></br>
                        <span>
                          Oversee day to day development activities of a 5 team
                          Agile Sprint software organization
                        </span>
                        <br className="profile-and-resume-text40"></br>
                        <br></br>
                        <span>
                          Feature development for Semiconductor near-real-time
                          robotic precision fluid dispensing precision high
                          volume manufacturing solution
                        </span>
                        <br className="profile-and-resume-text43"></br>
                        <br></br>
                      </span>
                      <span className="profile-and-resume-text45">
                        Read More
                      </span>
                    </div>
                    <span className="profile-and-resume-text46">
                      by Jon Doe 5 hours ago
                    </span>
                  </div>
                </div>
              </div>
              <div className="profile-and-resume-container08">
                <div className="profile-and-resume-blog-post-card1">
                  <img
                    alt="image"
                    src="https://images.unsplash.com/photo-1529948723647-8b7bd77b441c?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDExfHxjbGlmZnxlbnwwfHx8fDE2MjY0NDc4MjQ&amp;ixlib=rb-1.2.1&amp;w=1400"
                    className="profile-and-resume-image1"
                  />
                  <div className="profile-and-resume-container09">
                    <span className="profile-and-resume-text47">
                      SmileDirectClub
                    </span>
                    <h1 className="profile-and-resume-text48">
                      International Shipping and Enterprise integrations 
                    </h1>
                    <div className="profile-and-resume-container10">
                      <span className="profile-and-resume-text49">
                        <span>
                          Oversee .Net microservice Cloud inventory system and
                          python service integrations team
                        </span>
                        <br className="profile-and-resume-text51"></br>
                        <br></br>
                        <span>
                          Facilitated conversations across interdisciplinary
                          teams to optimize financial, medical order and
                          fulfillment tracking across internal systems and
                          services with volume of 100s - 1000s
                        </span>
                      </span>
                      <span className="profile-and-resume-text54">
                        Read More
                      </span>
                    </div>
                    <span className="profile-and-resume-text55">
                      by Jon Doe 5 hours ago
                    </span>
                  </div>
                </div>
              </div>
              <div className="profile-and-resume-container11">
                <div className="profile-and-resume-blog-post-card2">
                  <img
                    alt="image"
                    src="https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEyfHxmb3Jlc3R8ZW58MHx8fHwxNjI2MjUxMjg4&amp;ixlib=rb-1.2.1&amp;w=1400"
                    className="profile-and-resume-image2"
                  />
                  <div className="profile-and-resume-container12">
                    <span className="profile-and-resume-text56">
                      kellermeyer bergensons services
                    </span>
                    <h1 className="profile-and-resume-text57">
                      Analytic IT and Product Management 
                    </h1>
                    <div className="profile-and-resume-container13">
                      <span className="profile-and-resume-text58">
                        <span>
                          Standardized KPIs and analytics of customer delivered
                          Services (Google Analytics)
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                        <br className="profile-and-resume-text60"></br>
                        <br></br>
                        <span>
                          Maintain and execute order data via a vendor platform
                          to provide scheduling, service verification, invoicing
                          and payment records of 35,000+ contractor and
                          employees
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                        <br className="profile-and-resume-text63"></br>
                        <br></br>
                        <span>
                          Collaboration with Strategic AMs to aggregate and
                          present quantitative customer data
                        </span>
                        <br className="profile-and-resume-text66"></br>
                        <br></br>
                      </span>
                      <span className="profile-and-resume-text68">
                        Read More
                      </span>
                    </div>
                    <span className="profile-and-resume-text69">
                      by Jon Doe 5 hours ago
                    </span>
                  </div>
                </div>
              </div>
              <div className="profile-and-resume-container14">
                <div className="profile-and-resume-blog-post-card3">
                  <img
                    alt="image"
                    src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDl8fHdvcmt8ZW58MHx8fHwxNjI2NDUwNzky&amp;ixlib=rb-1.2.1&amp;h=1000"
                    className="profile-and-resume-image3"
                  />
                  <div className="profile-and-resume-container15">
                    <span className="profile-and-resume-text70">
                      3D Systems
                    </span>
                    <h1 className="profile-and-resume-text71">
                      Technical Development and Product Management
                    </h1>
                    <div className="profile-and-resume-container16">
                      <span className="profile-and-resume-text72">
                        <span>
                          Start to finish ownership of 3 independent advanced
                          manufacturing and IIOT products representing $5M of
                          $20M of software specific revenue
                        </span>
                        <br className="profile-and-resume-text74"></br>
                        <br></br>
                        <span>
                          Define marketing and sales strategy with direct and
                          indirect Go-To-Market organizations
                        </span>
                        <br className="profile-and-resume-text77"></br>
                        <br></br>
                        <span>
                          Patent development of special projects for industrial
                          and healthcare solutions
                        </span>
                        <br className="profile-and-resume-text80"></br>
                        <br></br>
                      </span>
                      <span className="profile-and-resume-text82">
                        Read More
                      </span>
                    </div>
                    <span className="profile-and-resume-text83">
                      by Jon Doe 5 hours ago
                    </span>
                  </div>
                </div>
              </div>
              <div className="profile-and-resume-container17">
                <div className="profile-and-resume-blog-post-card4">
                  <img
                    alt="image"
                    src="https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHdvcmtpbmclMjBkZXNrfGVufDB8fHx8MTYyNjI1MDYwMg&amp;ixlib=rb-1.2.1&amp;h=1200"
                    className="profile-and-resume-image4"
                  />
                  <div className="profile-and-resume-container18">
                    <span className="profile-and-resume-text84">
                      Pilot Turbine Service
                    </span>
                    <h1 className="profile-and-resume-text85">
                      Manufacturing Turbo Machinery
                    </h1>
                    <div className="profile-and-resume-container19">
                      <span className="profile-and-resume-text86">
                        Gas and Steam engines and generators provide power,
                        locomotion and technological advancements to modern
                        society. Based in North Carolina responsibilities in
                        this position cover Warehouse inventory, maintenance and
                        design of CAD files, and research and development of low
                        flow renewable energy focusing on Wind and low flow
                        hydro-turbines
                      </span>
                      <span className="profile-and-resume-text87">
                        Read More
                      </span>
                    </div>
                    <span className="profile-and-resume-text88">
                      References: Steve, Founder and CEO
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SmallSpacer rootClassName="small-spacer-root-class-name4"></SmallSpacer>
      <Footer></Footer>
    </div>
  )
}

export default ProfileAndResume
