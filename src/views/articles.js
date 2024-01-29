import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import NavbarInteractive from '../components/navbar-interactive'
import SmallSpacer from '../components/small-spacer'
import FeatureCard from '../components/feature-card'
import Footer from '../components/footer'
import './articles.css'

const Articles = (props) => {
  return (
    <div className="articles-container">
      <Helmet>
        <title>Articles - Dark Majestic Hawk</title>
        <meta property="og:title" content="Articles - Dark Majestic Hawk" />
      </Helmet>
      <NavbarInteractive rootClassName="navbar-interactive-root-class-name1"></NavbarInteractive>
      <div className="articles-hero">
        <div className="articles-hero1">
          <SmallSpacer rootClassName="small-spacer-root-class-name2"></SmallSpacer>
          <div className="articles-container1">
            <h1 className="articles-hero-heading heading1">
              <span className="articles-text">
                SOLIDFORGE Published Content
              </span>
              <br></br>
              <span>Coming Soon</span>
              <br></br>
            </h1>
            <span className="articles-hero-sub-heading">
              Advanced Manufacturing, 3D Printing, and More
            </span>
            <div className="articles-btn-group">
              <Link
                to="/contact-and-about"
                className="articles-hero-button1 button"
              >
                Get Started
              </Link>
            </div>
          </div>
          <SmallSpacer rootClassName="small-spacer-root-class-name1"></SmallSpacer>
          <div className="articles-details">
            <div className="articles-details1">
              <div className="articles-container2">
                <span className="articles-text04 sectionTitle">
                  <span>Details</span>
                  <br></br>
                </span>
                <h2 className="articles-details-heading heading2">
                  Unleash Your Potential with Cutting-Edge Technology
                </h2>
                <span className="articles-details-sub-heading">
                  Please find shared articles, papers, research projects, and
                  general knowledge that I&apos;ve complied over my career. With
                  all evidenced based learnings, new developments and
                  discoveries can contradict past findings. Reach out directly
                  to Chris@TheSolidForge about any content 
                </span>
              </div>
              <img
                alt="image"
                src="/Images/pink%20buckwheat1-400h.png"
                className="articles-details-image"
              />
            </div>
          </div>
          <SmallSpacer rootClassName="small-spacer-root-class-name"></SmallSpacer>
          <div className="articles-features">
            <div className="articles-features-container">
              <div className="articles-features1">
                <div className="articles-container3">
                  <span className="articles-text07 sectionTitle">
                    <span>features</span>
                    <br></br>
                  </span>
                  <h2 className="articles-features-heading heading2">
                    Enhance Your Capabilities
                  </h2>
                  <span className="articles-features-sub-heading">
                    Discover the advanced features that will elevate your
                    personal company&apos;s website and business potential.
                  </span>
                </div>
                <div className="articles-container4">
                  <FeatureCard
                    heading="Advanced Manufacturing"
                    subHeading="Utilize cutting-edge technology for efficient and precise production processes."
                  ></FeatureCard>
                  <FeatureCard
                    heading="3D Printing"
                    subHeading="Create complex and customized objects with additive manufacturing techniques."
                  ></FeatureCard>
                  <FeatureCard
                    heading="3D Scanning"
                    subHeading="Capture detailed digital representations of physical objects for various applications."
                  ></FeatureCard>
                  <FeatureCard
                    heading="Computational Geometry"
                    subHeading="Leverage mathematical algorithms to solve geometric problems in design and manufacturing."
                  ></FeatureCard>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="articles-footer">
        <Footer rootClassName="footer-root-class-name2"></Footer>
      </div>
    </div>
  )
}

export default Articles
