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
            src="https://images.unsplash.com/photo-1580894897591-ff1e18c89183?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMjQ3MjMwMHw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
            className="contact-and-about-details-image"
          />
        </div>
      </div>
      <div className="contact-and-about-faq">
        <div className="contact-and-about-faq-container">
          <div className="contact-and-about-faq1">
            <div className="contact-and-about-container2">
              <span className="contact-and-about-text03 sectionTitle">
                <span>FAQ</span>
                <br></br>
              </span>
              <h2 className="contact-and-about-text06 heading2">
                Career Experience
              </h2>
              <span className="contact-and-about-text07">
                <span>Here are some of the most common answers.</span>
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
                Answer="Our company specializes in advanced manufacturing, including 3D printing, 3D scanning, computational geometry, and high precision inspection."
                Question="What services does your company offer?"
              ></Question>
              <Question
                Answer="Yes, we have successfully completed numerous projects in advanced manufacturing. Please visit our website to view case studies and examples of our work."
                Question="Can you provide examples of your work in advanced manufacturing?"
              ></Question>
              <Question
                Answer="Absolutely! We provide consulting services and can assist with research projects related to advanced manufacturing. Feel free to contact us for more information."
                Question="Do you offer consulting services or assistance with research projects?"
              ></Question>
              <Question
                Answer="Yes, our website will serve as a platform for sharing articles and papers written by our team. You can find valuable insights and knowledge related to advanced manufacturing on our site."
                Question="Will you be posting articles and papers on your website?"
              ></Question>
              <Question
                Answer="To get in touch with us, please visit our website and navigate to the contact page. You will find various contact methods, including phone, email, and a contact form."
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
