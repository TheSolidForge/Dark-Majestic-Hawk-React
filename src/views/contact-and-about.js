import React from 'react'

import { Helmet } from 'react-helmet'

import NavbarInteractive from '../components/navbar-interactive'
import Question from '../components/question'
import Footer from '../components/footer'
import './contact-and-about.css'

const ContactAndAbout = (props) => {
  return (
    <div className="contact-and-about-container">
      <Helmet>
        <title>Contact-and-About - Dark Majestic Hawk</title>
        <meta
          property="og:title"
          content="Contact-and-About - Dark Majestic Hawk"
        />
      </Helmet>
      <NavbarInteractive rootClassName="navbar-interactive-root-class-name"></NavbarInteractive>
      <div className="contact-and-about-details">
        <div className="contact-and-about-details1">
          <div className="contact-and-about-container1">
            <span className="contact-and-about-text sectionTitle">
              <span>Details</span>
              <br></br>
            </span>
            <h2 className="contact-and-about-details-heading heading2">
              Unleash Your Potential with Cutting-Edge Technology
            </h2>
            <span className="contact-and-about-details-sub-heading">
              Welcome to our website where we share articles, papers, research
              projects, and knowledge related to advanced manufacturing. Connect
              with us for potential business opportunities and contact
              information.
            </span>
          </div>
          <img
            alt="image"
            src="/Images/pavona%20decussatus-500w.png"
            className="contact-and-about-details-image"
          />
        </div>
      </div>
      <div className="contact-and-about-faq">
        <div className="contact-and-about-faq-container">
          <div className="contact-and-about-faq1">
            <img
              alt="image"
              src="/Images/orange%20calendula%20officinalis-500w.png"
              className="contact-and-about-details-image1"
            />
            <div className="contact-and-about-container2">
              <span className="contact-and-about-text03 sectionTitle">
                <span>FAQ</span>
                <br></br>
              </span>
              <h2 className="contact-and-about-text06 heading2">
                Career Experience
              </h2>
              <span className="contact-and-about-text07">
                <span>Feeding my Curiosity</span>
                <br></br>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
            </div>
            <div className="contact-and-about-container3">
              <Question
                Question="What is SOLIDFORGE"
                Answer="Solidforge is a company developed to share and capitalize of the human generated knowledge gather over a decade of interacting with succesful US Domestic and International organizations"
              ></Question>
              <Question
                Answer="Many projects content is professionally confidential. I am able to discuss these projects from an operational and technical perspective. Please reach out with specific questions. Common topics include: High Precision inspection with Structured Light Scanners or Coordinate Measurement Machines (CMMs) in automated production environments - Computation geometry algorithm and workflow  generation for patient specific healthcare applications concerning Dental, cosmetic and functioning fairing prosthetic, complex injection mold design, and 3D metal printed implants "
                Question="Can you provide examples of your work in advanced manufacturing?"
              ></Question>
              <Question
                Answer="Consulting Services are available on a first come first serve basis. Current contracts and projects include: - Saltwater Aquaculture for Sustainable Protein generation - Hydrogen Cell Production and Design -chemical and elemental analysis of Saltwater and Brackish Ecosystems "
                Question="Do you offer consulting services or assistance with research projects?"
              ></Question>
              <Question
                Answer="Yes, our website will serve as a platform for sharing articles and papers written by our team. Contracting services are avalible for publishing case studies of industrial and theoretical processes"
                Question="Will you be posting articles and papers on your website?"
              ></Question>
              <Question
                Answer="Contact me directly at Chris@TheSolidForge.com or +1 858 630 8468"
                Question="How can potential customers contact your company?"
              ></Question>
            </div>
          </div>
        </div>
      </div>
      <Footer rootClassName="footer-root-class-name1"></Footer>
    </div>
  )
}

export default ContactAndAbout
