import React from 'react'

import Script from 'dangerous-html/react'
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
          <div className="articles-container01">
            <h1 className="articles-hero-heading heading1">
              <span className="articles-text"> Published Content</span>
              <br></br>
            </h1>
            <span className="articles-hero-sub-heading">
              Advanced Manufacturing, 3D Printing, and More
            </span>
            <div className="articles-btn-group">
              <a
                href="#Mission Beach Sand Dunes"
                className="articles-hero-button1 button"
              >
                Get Started
              </a>
            </div>
          </div>
          <SmallSpacer rootClassName="small-spacer-root-class-name1"></SmallSpacer>
          <div className="articles-details">
            <div className="articles-details1">
              <div className="articles-container02">
                <span className="articles-text02 sectionTitle">
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
                <div className="articles-container03">
                  <span className="articles-text05 sectionTitle">
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
                <div className="articles-container04">
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
                <article
                  id="Mission Beach Sand Dunes"
                  className="articles-feature-card"
                >
                  <svg viewBox="0 0 1024 1024" className="articles-icon">
                    <path d="M809.003 291.328l-297.003 171.819-297.003-171.819 275.456-157.397c4.779-2.731 9.899-4.48 15.147-5.333 9.301-1.451 18.987 0.128 27.904 5.291zM491.776 979.669c6.016 3.243 12.928 5.077 20.224 5.077 7.381 0 14.336-1.877 20.395-5.163 15.189-2.475 29.909-7.68 43.392-15.36l298.709-170.709c26.368-15.232 45.269-38.315 55.424-64.597 5.675-14.592 8.619-30.165 8.747-46.251v-341.333c0-20.395-4.821-39.723-13.397-56.917-0.939-3.029-2.219-5.973-3.883-8.832-1.963-3.371-4.267-6.357-6.912-8.96-1.323-1.835-2.731-3.669-4.139-5.419-9.813-12.203-21.845-22.528-35.456-30.507l-299.051-170.88c-26.027-15.019-55.467-19.84-83.328-15.531-15.531 2.432-30.507 7.637-44.288 15.488l-298.709 170.709c-16.341 9.429-29.824 21.888-40.149 36.267-2.56 2.56-4.864 5.547-6.784 8.832-1.664 2.901-2.987 5.888-3.925 8.96-1.707 3.456-3.243 6.955-4.608 10.496-5.632 14.635-8.576 30.208-8.704 45.995v341.632c0.043 30.293 10.581 58.197 28.331 80.128 9.813 12.203 21.845 22.528 35.456 30.507l299.051 170.88c13.824 7.979 28.587 13.099 43.605 15.445zM469.333 537.045v340.949l-277.12-158.336c-4.736-2.773-8.832-6.315-12.16-10.411-5.931-7.381-9.387-16.512-9.387-26.581v-318.379zM554.667 877.995v-340.949l298.667-172.757v318.379c-0.043 5.163-1.067 10.496-2.987 15.445-3.413 8.789-9.6 16.384-18.176 21.333z"></path>
                  </svg>
                  <div className="articles-container05">
                    <div className="articles-container06">
                      <h3 className="articles-text08 heading3">
                        Measuring sand dunes in Mission Beach, San Diego
                        California
                      </h3>
                      <span className="articles-text09">
                        <span>
                          Dynamic Reference Geometry can easily be extended to
                          Volumes to intuitively demonstrate 3D Volumes when
                          utilizing Real-Time ray tracing in 3D projects.
                        </span>
                        <br></br>
                        <span>
                          This in conjunction with environments that support
                          Virtual reality enable the end user of this
                          information to rationalize and make meaningful
                          conclusions
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                        <br></br>
                        <span>with ambiguous or complex information. </span>
                        <br></br>
                        <br></br>
                        <span>
                          This all started with the question:
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                        <span className="articles-text18">
                          How much sand does the City of San Diego move every
                          year to protect the beaches from the high surf of the
                          winter? 
                        </span>
                        <br></br>
                      </span>
                      <img
                        alt="image"
                        src="/Articles/mission%20beach%20dune%20volume%20-700w.png"
                        className="articles-image"
                      />
                      <span className="articles-text20">
                        <span>
                          This project utilized hand held scan data that was
                          triangulated using AI tools on cloud servers. Google
                          Earth Studio was used to create videos and 3D
                          environments. With a streamlined workflow this project
                          took an afternoon to complete. 
                        </span>
                        <br></br>
                        <br></br>
                        <span>
                          Once all the data was gathered it was as simple as
                          applying the Dynamic Reference geometry concept to the
                          handheld scan data to volumetrically segment the data
                          in the reference frame of the beach. This allowed for
                          an origin to be anchored to the environment while the
                          grid can be scaled into a visually meaningful size. 
                        </span>
                        <br></br>
                        <br></br>
                        <span>With this workflow it comes out to about</span>
                        <span className="articles-text28">
                          {' '}
                          7 cubic feed of sand is piled for every foot of dune
                          created.
                        </span>
                        <span> </span>
                        <br></br>
                      </span>
                      <img
                        alt="image"
                        src="/Articles/mission_beach_snapshot_02-21-2024_14_55_28-700w.jpeg"
                        className="articles-image1"
                      />
                      <span className="articles-text31">
                        <span>
                          Here is a link to a quick video complication on this
                          project:  
                        </span>
                        <br></br>
                      </span>
                      <div className="articles-container07">
                        <div className="articles-container08">
                          <Script
                            html={`<iframe width="560" height="315" src="https://www.youtube.com/embed/JDnjHjKG-MQ?si=OHtra7whJ-qitsMx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`}
                          ></Script>
                        </div>
                      </div>
                      <span className="articles-text34">
                        <span>-SOLIDFORGE</span>
                        <br></br>
                      </span>
                    </div>
                  </div>
                </article>
                <article
                  id="Dynamic Reference Geometry"
                  className="articles-feature-card1"
                >
                  <svg viewBox="0 0 1024 1024" className="articles-icon2">
                    <path d="M809.003 291.328l-297.003 171.819-297.003-171.819 275.456-157.397c4.779-2.731 9.899-4.48 15.147-5.333 9.301-1.451 18.987 0.128 27.904 5.291zM491.776 979.669c6.016 3.243 12.928 5.077 20.224 5.077 7.381 0 14.336-1.877 20.395-5.163 15.189-2.475 29.909-7.68 43.392-15.36l298.709-170.709c26.368-15.232 45.269-38.315 55.424-64.597 5.675-14.592 8.619-30.165 8.747-46.251v-341.333c0-20.395-4.821-39.723-13.397-56.917-0.939-3.029-2.219-5.973-3.883-8.832-1.963-3.371-4.267-6.357-6.912-8.96-1.323-1.835-2.731-3.669-4.139-5.419-9.813-12.203-21.845-22.528-35.456-30.507l-299.051-170.88c-26.027-15.019-55.467-19.84-83.328-15.531-15.531 2.432-30.507 7.637-44.288 15.488l-298.709 170.709c-16.341 9.429-29.824 21.888-40.149 36.267-2.56 2.56-4.864 5.547-6.784 8.832-1.664 2.901-2.987 5.888-3.925 8.96-1.707 3.456-3.243 6.955-4.608 10.496-5.632 14.635-8.576 30.208-8.704 45.995v341.632c0.043 30.293 10.581 58.197 28.331 80.128 9.813 12.203 21.845 22.528 35.456 30.507l299.051 170.88c13.824 7.979 28.587 13.099 43.605 15.445zM469.333 537.045v340.949l-277.12-158.336c-4.736-2.773-8.832-6.315-12.16-10.411-5.931-7.381-9.387-16.512-9.387-26.581v-318.379zM554.667 877.995v-340.949l298.667-172.757v318.379c-0.043 5.163-1.067 10.496-2.987 15.445-3.413 8.789-9.6 16.384-18.176 21.333z"></path>
                  </svg>
                  <div className="articles-container09">
                    <h3 className="articles-text37 heading3">
                      Dynamic Reference Geometry Tech Demo
                    </h3>
                    <span className="articles-text38">
                      <span>
                        Reference Geometry is a standard across all CAD, CAM or
                        other digital engineering software. Typically reference
                        geometry has been used by these tools as static global
                        position based references. There are cases when it is
                        more useful to have the reference geometry more, or be
                        able to toggle between independent coordinate systems.
                        Here is a technical demo of some dynamic reference
                        geometry:
                      </span>
                      <br></br>
                    </span>
                    <video
                      src="/Video/drg.mp4"
                      poster="https://play.teleporthq.io/static/svg/videoposter.svg"
                      preload="auto"
                      controls="true"
                      className="articles-video"
                    ></video>
                    <span className="articles-text41">
                      <br></br>
                      <span>-SOLIDFORGE</span>
                      <br></br>
                    </span>
                  </div>
                </article>
                <article
                  id="SF AI Guidelines"
                  className="articles-feature-card2"
                >
                  <svg viewBox="0 0 1024 1024" className="articles-icon4">
                    <path d="M809.003 291.328l-297.003 171.819-297.003-171.819 275.456-157.397c4.779-2.731 9.899-4.48 15.147-5.333 9.301-1.451 18.987 0.128 27.904 5.291zM491.776 979.669c6.016 3.243 12.928 5.077 20.224 5.077 7.381 0 14.336-1.877 20.395-5.163 15.189-2.475 29.909-7.68 43.392-15.36l298.709-170.709c26.368-15.232 45.269-38.315 55.424-64.597 5.675-14.592 8.619-30.165 8.747-46.251v-341.333c0-20.395-4.821-39.723-13.397-56.917-0.939-3.029-2.219-5.973-3.883-8.832-1.963-3.371-4.267-6.357-6.912-8.96-1.323-1.835-2.731-3.669-4.139-5.419-9.813-12.203-21.845-22.528-35.456-30.507l-299.051-170.88c-26.027-15.019-55.467-19.84-83.328-15.531-15.531 2.432-30.507 7.637-44.288 15.488l-298.709 170.709c-16.341 9.429-29.824 21.888-40.149 36.267-2.56 2.56-4.864 5.547-6.784 8.832-1.664 2.901-2.987 5.888-3.925 8.96-1.707 3.456-3.243 6.955-4.608 10.496-5.632 14.635-8.576 30.208-8.704 45.995v341.632c0.043 30.293 10.581 58.197 28.331 80.128 9.813 12.203 21.845 22.528 35.456 30.507l299.051 170.88c13.824 7.979 28.587 13.099 43.605 15.445zM469.333 537.045v340.949l-277.12-158.336c-4.736-2.773-8.832-6.315-12.16-10.411-5.931-7.381-9.387-16.512-9.387-26.581v-318.379zM554.667 877.995v-340.949l298.667-172.757v318.379c-0.043 5.163-1.067 10.496-2.987 15.445-3.413 8.789-9.6 16.384-18.176 21.333z"></path>
                  </svg>
                  <div className="articles-container10">
                    <h3 className="articles-text45 heading3">
                      SOLIDFORGE&apos;s Guidelines for engaging with Large
                      Language AI Models 
                    </h3>
                    <span className="articles-text46">
                      <span>
                        AI is not well defined by general knowledge. This
                        guidance applies to the new wave of large language
                        models that have been advertised to the general public
                        in recent years. Their influence on Product teams and
                        their products at large. These guidelines should give
                        you some basis for creating your own approach on
                        interacting with technology: 
                      </span>
                      <br></br>
                      <br></br>
                      <span>
                        1.
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <span className="articles-text51">Use AI as a tool.</span>
                      <span> </span>
                      <br></br>
                      <span>
                        Conceptually AI models utilize historical data to give
                        you a response to a prompt. It would be reasonable to
                        trust their output can optimally provide a methods for
                        doing well established functions or actions. 
                      </span>
                      <br></br>
                      <br></br>
                      <span>
                        2.
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <span className="articles-text58">
                        AI can be entertainment, but it should only be
                        entertainment.
                      </span>
                      <span> </span>
                      <br></br>
                      <span>
                        Naturally technology can be tool for efficiently
                        optimizing social engagement. Historical implementations
                        of this idea have created countless issues and side
                        effects that we as a society are still navigating. If
                        you think what you are doing is on a slippery slope you
                        probably are. Trust your discretion on how to move
                        forward with this in mind. 
                      </span>
                      <br></br>
                      <br></br>
                      <span>
                        3.
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <span className="articles-text65">
                        There is no replacement for Expertise. 
                      </span>
                      <br></br>
                      <span>
                        A free agent or decision maker will always be required
                        to filter and check any AI output. The same way a google
                        search will need to be filtered through. The end goal,
                        good or service that an AI provides is human or user and
                        they will be the ultimate judge of the quality of your
                        product. 
                      </span>
                      <br></br>
                      <br></br>
                      <span>
                        4.
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <span className="articles-text71">
                        The Problem, Product, or Idea  does not need AI.
                      </span>
                      <span> </span>
                      <br></br>
                      <span>
                        As a cool tool it does a lot of cool things. If you are
                        attempting to create something truly new, novel  or
                        inventive sourcing this idea from mostly stollen content
                        from the internet at large. Fundamentally this work
                        needs to be done by you. AI can be a tool to execute
                        that vision but AI cannot give you the vision. 
                      </span>
                      <br></br>
                      <br></br>
                      <span>
                        At the end of the day, as with almost every industry or
                        piece of technology humans have invented, someone is
                        trying to sell you something so they can make money.
                        That doesn&apos;t make what they are selling any less
                        useful, be aware of the ulterior motive. 
                      </span>
                      <br></br>
                      <br></br>
                      <span>
                        Waiting for specific guidance from any person or
                        organization will likely not come. Treat AI as another
                        modern technology that has existed for years - because
                        it has. 
                      </span>
                      <br></br>
                      <br></br>
                      <span>
                        Oil Robber Barron&apos;s, Media Moguls; we already have
                        the colloquial term AI Overlords. We can choose to make
                        that a reality or not together. 
                      </span>
                      <br></br>
                      <br></br>
                      <span>- SOLIDFORGE</span>
                      <br></br>
                    </span>
                  </div>
                </article>
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
