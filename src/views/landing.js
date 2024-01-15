import React from 'react'

import { Helmet } from 'react-helmet'

import FeatureCard from '../components/feature-card'
import './landing.css'

const Landing = (props) => {
  return (
    <div className="landing-container">
      <Helmet>
        <title>Landing - Dark Majestic Hawk</title>
        <meta property="og:title" content="Landing - Dark Majestic Hawk" />
      </Helmet>
      <div className="landing-header">
        <header data-thq="thq-navbar" className="landing-navbar-interactive">
          <span className="landing-logo">COMPANYNAME</span>
          <div data-thq="thq-navbar-nav" className="landing-desktop-menu">
            <nav className="landing-links">
              <span>About</span>
              <span className="landing-nav2">Services</span>
              <span className="landing-nav3">Articles</span>
              <span className="landing-nav4">Projects</span>
              <span className="landing-nav5">Contact</span>
            </nav>
            <div className="landing-buttons">
              <button className="landing-login button">Login</button>
              <button className="landing-register button">Register</button>
            </div>
          </div>
          <div data-thq="thq-burger-menu" className="landing-burger-menu">
            <svg viewBox="0 0 1024 1024" className="landing-icon">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-thq="thq-mobile-menu" className="landing-mobile-menu">
            <div className="landing-nav">
              <div className="landing-top">
                <span className="landing-logo1">COMPANYNAME</span>
                <div data-thq="thq-close-menu" className="landing-close-menu">
                  <svg viewBox="0 0 1024 1024" className="landing-icon02">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav className="landing-links1">
                <span className="landing-nav11">About</span>
                <span className="landing-nav21">Services</span>
                <span className="landing-nav31">Articles</span>
                <span className="landing-nav41">Projects</span>
                <span className="landing-nav51">Contact</span>
              </nav>
              <div className="landing-buttons1">
                <button className="landing-login1 button">Login</button>
                <button className="landing-register1 button">Register</button>
              </div>
            </div>
            <div>
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="landing-icon04"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="landing-icon06"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="landing-icon08"
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
      </div>
      <div className="landing-hero">
        <div className="landing-hero1">
          <div className="landing-container1">
            <h1 className="landing-hero-heading heading1">
              Build Your Personal Company Website
            </h1>
            <span className="landing-hero-sub-heading">
              Advanced Manufacturing, 3D Printing, and More
            </span>
            <div className="landing-btn-group">
              <button className="landing-hero-button1 button">
                Get Started
              </button>
              <button className="landing-hero-button2 button">
                Learn More →
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="landing-details">
        <div className="landing-details1">
          <div className="landing-container2">
            <span className="landing-text sectionTitle">
              <span>Details</span>
              <br></br>
            </span>
            <h2 className="landing-details-heading heading2">
              Unleash Your Potential with Cutting-Edge Technology
            </h2>
            <span className="landing-details-sub-heading">
              Welcome to our website where we share articles, papers, research
              projects, and knowledge related to advanced manufacturing. Connect
              with us for potential business opportunities and contact
              information.
            </span>
          </div>
          <img
            alt="image"
            src="https://images.unsplash.com/photo-1580894897591-ff1e18c89183?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMjQ3MjMwMHw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
            className="landing-details-image"
          />
        </div>
      </div>
      <div className="landing-features">
        <div className="landing-features-container">
          <div className="landing-features1">
            <div className="landing-container3">
              <span className="landing-text3 sectionTitle">
                <span>features</span>
                <br></br>
              </span>
              <h2 className="landing-features-heading heading2">
                Enhance Your Capabilities
              </h2>
              <span className="landing-features-sub-heading">
                Discover the advanced features that will elevate your personal
                company&apos;s website and business potential.
              </span>
            </div>
            <div className="landing-container4">
              <FeatureCard
                Heading="Advanced Manufacturing"
                SubHeading="Utilize cutting-edge technology for efficient and precise production processes."
              ></FeatureCard>
              <FeatureCard
                Heading="3D Printing"
                SubHeading="Create complex and customized objects with additive manufacturing techniques."
              ></FeatureCard>
              <FeatureCard
                Heading="3D Scanning"
                SubHeading="Capture detailed digital representations of physical objects for various applications."
              ></FeatureCard>
              <FeatureCard
                Heading="Computational Geometry"
                SubHeading="Leverage mathematical algorithms to solve geometric problems in design and manufacturing."
              ></FeatureCard>
            </div>
          </div>
        </div>
      </div>
      <div className="landing-footer">
        <footer className="landing-footer1">
          <div className="landing-container5">
            <span className="landing-logo2">COMPANYNAME</span>
            <nav className="landing-nav1 landing-nav1">
              <span className="landing-nav12">About</span>
              <span className="landing-nav22">Services</span>
              <span className="landing-nav32">Articles</span>
              <span className="landing-nav42">Projects</span>
              <span className="landing-nav52">Contact</span>
            </nav>
          </div>
          <div className="landing-separator"></div>
          <div className="landing-container6">
            <span className="landing-text6">
              © 2023 myCompany, All Rights Reserved.
            </span>
            <div className="landing-icon-group1">
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="landing-icon10"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="landing-icon12"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="landing-icon14"
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Landing
