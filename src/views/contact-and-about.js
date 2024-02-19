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
        <title>Contact and About SOLIDFORGE</title>
        <meta
          name="description"
          content="Advanced Manufacturing consulting services Product Management Software Development"
        />
        <meta property="og:title" content="Contact and About SOLIDFORGE" />
        <meta
          property="og:description"
          content="Advanced Manufacturing consulting services Product Management Software Development"
        />
      </Helmet>
      <NavbarInteractive rootClassName="navbar-interactive-root-class-name"></NavbarInteractive>
      <div className="contact-and-about-banner">
        <span className="contact-and-about-text">How to Contact:</span>
        <span className="contact-and-about-text01">
          <span>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
              volutpat turpis.
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
          <span>
            <span>
              Mauris luctus rutrum mi ut rhoncus. Integer in dignissim tortor.
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
        </span>
        <div className="contact-and-about-container1">
          <button className="contact-and-about-button button">
            <span className="contact-and-about-text08">
              <span>Email:</span>
              <br></br>
              <span>Chris@TheSolidForge.com</span>
            </span>
          </button>
          <button className="contact-and-about-button1 button">
            <span className="contact-and-about-text12">
              <span>Phone:</span>
              <br></br>
              <span>+1 858 630 8468</span>
            </span>
          </button>
        </div>
      </div>
      <div className="contact-and-about-details">
        <div className="contact-and-about-details1">
          <div className="contact-and-about-container2">
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
            <div className="contact-and-about-container3">
              <h2 className="contact-and-about-text16 heading2">
                Career Experience
              </h2>
              <img
                alt="image"
                src="/Images/orange%20calendula%20officinalis-400w.png"
                className="contact-and-about-details-image1"
              />
            </div>
            <div className="contact-and-about-container4">
              <Question
                answer="Solidforge is a company developed to share and capitalize of the human generated knowledge gather over a decade of interacting with succesful US Domestic and International organizations"
                question="What is SOLIDFORGE?"
              ></Question>
              <Question
                answer="Many projects content is professionally confidential. I am able to discuss these projects from an operational and technical perspective. Please reach out with specific questions. Common topics include: High Precision inspection with Structured Light Scanners or Coordinate Measurement Machines (CMMs) in automated production environments - Computation geometry algorithm and workflow  generation for patient specific healthcare applications concerning Dental, cosmetic and functioning fairing prosthetic, complex injection mold design, and 3D metal printed implants "
                question="Can you provide examples of your work in advanced manufacturing?"
              ></Question>
              <Question
                answer="Consulting Services are available on a first come first serve basis. Current contracts and projects include: - Saltwater Aquaculture for Sustainable Protein generation - Hydrogen Cell Production and Design -chemical and elemental analysis of Saltwater and Brackish Ecosystems "
                question="Do you offer consulting services or assistance with research projects?"
              ></Question>
              <Question
                answer="Yes, our website will serve as a platform for sharing articles and papers written by our team. Contracting services are avalible for publishing case studies of industrial and theoretical processes"
                question="Will you be posting articles and papers on your website?"
              ></Question>
              <Question
                answer="Contact me directly at Chris@TheSolidForge.com or +1 858 630 8468"
                question="How can potential customers contact your company?"
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
