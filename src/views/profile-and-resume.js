import React from 'react'

import { Helmet } from 'react-helmet'

import NavbarInteractive from '../components/navbar-interactive'
import SmallSpacer from '../components/small-spacer'
import GalleryCard3 from '../components/gallery-card3'
import ObjectCard from '../components/object-card'
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
          <div className="profile-and-resume-container1">
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
          <div className="profile-and-resume-container2">
            <GalleryCard3 rootClassName="gallery-card3-root-class-name24"></GalleryCard3>
            <div className="profile-and-resume-feature-card">
              <svg viewBox="0 0 1024 1024" className="profile-and-resume-icon">
                <path d="M809.003 291.328l-297.003 171.819-297.003-171.819 275.456-157.397c4.779-2.731 9.899-4.48 15.147-5.333 9.301-1.451 18.987 0.128 27.904 5.291zM491.776 979.669c6.016 3.243 12.928 5.077 20.224 5.077 7.381 0 14.336-1.877 20.395-5.163 15.189-2.475 29.909-7.68 43.392-15.36l298.709-170.709c26.368-15.232 45.269-38.315 55.424-64.597 5.675-14.592 8.619-30.165 8.747-46.251v-341.333c0-20.395-4.821-39.723-13.397-56.917-0.939-3.029-2.219-5.973-3.883-8.832-1.963-3.371-4.267-6.357-6.912-8.96-1.323-1.835-2.731-3.669-4.139-5.419-9.813-12.203-21.845-22.528-35.456-30.507l-299.051-170.88c-26.027-15.019-55.467-19.84-83.328-15.531-15.531 2.432-30.507 7.637-44.288 15.488l-298.709 170.709c-16.341 9.429-29.824 21.888-40.149 36.267-2.56 2.56-4.864 5.547-6.784 8.832-1.664 2.901-2.987 5.888-3.925 8.96-1.707 3.456-3.243 6.955-4.608 10.496-5.632 14.635-8.576 30.208-8.704 45.995v341.632c0.043 30.293 10.581 58.197 28.331 80.128 9.813 12.203 21.845 22.528 35.456 30.507l299.051 170.88c13.824 7.979 28.587 13.099 43.605 15.445zM469.333 537.045v340.949l-277.12-158.336c-4.736-2.773-8.832-6.315-12.16-10.411-5.931-7.381-9.387-16.512-9.387-26.581v-318.379zM554.667 877.995v-340.949l298.667-172.757v318.379c-0.043 5.163-1.067 10.496-2.987 15.445-3.413 8.789-9.6 16.384-18.176 21.333z"></path>
              </svg>
              <div className="profile-and-resume-container3">
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
            <ObjectCard></ObjectCard>
            <SmallSpacer rootClassName="small-spacer-root-class-name4"></SmallSpacer>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default ProfileAndResume
