import React from 'react'

import { Helmet } from 'react-helmet'

import NavbarInteractive from '../components/navbar-interactive'
import SmallSpacer from '../components/small-spacer'
import GalleryCard3 from '../components/gallery-card3'
import Footer from '../components/footer'
import './projects.css'

const Projects = (props) => {
  return (
    <div className="projects-container">
      <Helmet>
        <title>Projects - Dark Majestic Hawk</title>
        <meta property="og:title" content="Projects - Dark Majestic Hawk" />
      </Helmet>
      <div className="projects-header">
        <NavbarInteractive rootClassName="navbar-interactive-root-class-name2"></NavbarInteractive>
      </div>
      <SmallSpacer rootClassName="small-spacer-root-class-name5"></SmallSpacer>
      <span className="projects-text">Please Log-In</span>
      <SmallSpacer rootClassName="small-spacer-root-class-name6"></SmallSpacer>
      <div className="projects-banner">
        <div className="projects-banner1">
          <h1 className="projects-banner-heading heading2">
            Showcasing Innovation in Advanced Manufacturing
          </h1>
          <span className="projects-banner-sub-heading">
            Discover expertise in 3D Printing, 3D Scanning, Computational
            Geometry, and High Precision Inspection
          </span>
          <button className="projects-banner-button button">
            Showcase -&gt;
          </button>
        </div>
      </div>
      <div className="projects-gallery">
        <div className="projects-gallery1">
          <h1 className="projects-gallery-heading heading2">Gallery</h1>
          <span className="projects-gallery-sub-heading">
            Explore our work and expertise
          </span>
          <div className="projects-container01">
            <GalleryCard3
              imageSrc="https://images.unsplash.com/photo-1650611250959-1e823abf6841?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMjQ3MjI5N3w&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName"
            ></GalleryCard3>
            <GalleryCard3
              imageSrc="https://images.unsplash.com/photo-1640904422940-f3070d65ae29?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMjQ3MjI5N3w&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName1"
            ></GalleryCard3>
            <GalleryCard3
              imageSrc="https://images.unsplash.com/photo-1630926906914-f98970d8894c?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMjQ3MjI5N3w&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName3"
            ></GalleryCard3>
            <GalleryCard3
              imageSrc="https://images.unsplash.com/photo-1632292220916-e9c34dd75db2?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMjQ3MjI5N3w&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName2"
            ></GalleryCard3>
            <GalleryCard3
              imageSrc="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMjQ3MjI5N3w&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName4"
            ></GalleryCard3>
            <GalleryCard3
              imageSrc="https://images.unsplash.com/photo-1650984186744-ade500904ff7?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMjQ3MjI5N3w&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName5"
            ></GalleryCard3>
            <GalleryCard3
              imageSrc="https://images.unsplash.com/photo-1648457147590-ef7dbec3cfc2?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMjQ3MjI5N3w&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName6"
            ></GalleryCard3>
            <GalleryCard3
              imageSrc="https://images.unsplash.com/photo-1640997261734-f68eb03f9377?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMjQ3MjI5N3w&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName7"
            ></GalleryCard3>
            <GalleryCard3
              imageSrc="https://images.unsplash.com/photo-1697707903242-dc15a6b56d45?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMjQ3MjI5N3w&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName8"
            ></GalleryCard3>
            <GalleryCard3
              imageSrc="https://images.unsplash.com/photo-1663612864491-671a0672cc72?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMjQ3MjI5N3w&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName9"
            ></GalleryCard3>
            <GalleryCard3
              imageSrc="https://images.unsplash.com/photo-1678986718987-76f0b9357e0f?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMjQ3MjI5N3w&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName10"
            ></GalleryCard3>
            <GalleryCard3
              imageSrc="https://images.unsplash.com/photo-1664363243687-8d68b7d54283?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMjQ3MjI5N3w&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName11"
            ></GalleryCard3>
          </div>
        </div>
      </div>
      <div className="projects-pricing">
        <div className="projects-pricing1">
          <div className="projects-container02">
            <span className="projects-text01 sectionTitle">
              <span>Pricing</span>
              <br></br>
            </span>
            <h2 className="projects-pricing-heading heading2">
              Choose the Right Plan for Your Company
            </h2>
            <span className="projects-pricing-sub-heading">
              Select from our flexible pricing options to meet your specific
              needs
            </span>
          </div>
          <div className="projects-container03">
            <div className="projects-pricing-card">
              <div className="projects-container04">
                <span className="projects-text04 heading3">Free</span>
                <span className="projects-free-plan-description">
                  A basic plan for personal use
                </span>
              </div>
              <div className="projects-container05">
                <span className="projects-text05">
                  <span>$</span>
                  <span></span>
                </span>
                <span className="projects-free-plan-price">0</span>
              </div>
              <div className="projects-container06">
                <div className="projects-container07">
                  <span className="projects-text08">✔</span>
                  <span className="projects-free-plan-features">
                    Access to website builder
                  </span>
                </div>
                <div className="projects-container08">
                  <span className="projects-text09">✔</span>
                  <span className="projects-free-plan-features1">
                    Limited storage space
                  </span>
                </div>
                <div className="projects-container09">
                  <span className="projects-text10">✔</span>
                  <span className="projects-free-plan-features2">
                    Basic customer support
                  </span>
                </div>
                <div className="projects-container10">
                  <span className="projects-text11">✔</span>
                  <span className="projects-free-plan-features3">
                    Free Plan Feature
                  </span>
                </div>
              </div>
              <button className="projects-button button">
                Continue with Free
              </button>
            </div>
            <div className="projects-pricing-card1">
              <div className="projects-container11">
                <span className="projects-text12 heading3">BASIC</span>
                <span className="projects-basic-plan-description">
                  An affordable plan for small businesses
                </span>
              </div>
              <div className="projects-container12">
                <span className="projects-text13">
                  <span>$</span>
                  <span></span>
                </span>
                <span className="projects-basic-plan-pricing">10</span>
                <span className="projects-text16">/ month</span>
              </div>
              <div className="projects-container13">
                <div className="projects-container14">
                  <span className="projects-text17">✔</span>
                  <span className="projects-text18">
                    All features of FREE plan
                  </span>
                </div>
                <div className="projects-container15">
                  <span className="projects-text19">✔</span>
                  <span className="projects-basic-plan-features">
                    Access to website builder
                  </span>
                </div>
                <div className="projects-container16">
                  <span className="projects-text20">✔</span>
                  <span className="projects-basic-plan-features1">
                    Increased storage space
                  </span>
                </div>
                <div className="projects-container17">
                  <span className="projects-text21">✔</span>
                  <span className="projects-basic-plan-features2">
                    Priority customer support
                  </span>
                </div>
                <div className="projects-container18">
                  <span className="projects-text22">✔</span>
                  <span className="projects-basic-plan-features3">
                    Basic Plan Feature
                  </span>
                </div>
              </div>
              <button className="projects-button1 button">
                Try the Basic plan
              </button>
            </div>
            <div className="projects-pricing-card2">
              <div className="projects-container19">
                <span className="projects-text23 heading3">
                  <span>PRO</span>
                  <br></br>
                </span>
                <span className="projects-pro-plan-description">
                  An advanced plan for professional companies
                </span>
              </div>
              <div className="projects-container20">
                <span className="projects-text26">
                  <span>$</span>
                  <span></span>
                </span>
                <span className="projects-pro-plan-pricing">25</span>
                <span className="projects-text29">/ month</span>
              </div>
              <div className="projects-container21">
                <div className="projects-container22">
                  <span className="projects-text30">✔</span>
                  <span className="projects-text31">
                     All features of BASIC plan
                  </span>
                </div>
                <div className="projects-container23">
                  <span className="projects-text32">✔</span>
                  <span className="projects-pro-plan-features">
                    Access to website builder
                  </span>
                </div>
                <div className="projects-container24">
                  <span className="projects-text33">✔</span>
                  <span className="projects-pro-plan-features1">
                    Unlimited storage space
                  </span>
                </div>
                <div className="projects-container25">
                  <span className="projects-text34">✔</span>
                  <span className="projects-pro-plan-features2">
                    Dedicated customer support
                  </span>
                </div>
              </div>
              <button className="projects-button2 button">
                Try the PRO plan
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Projects
