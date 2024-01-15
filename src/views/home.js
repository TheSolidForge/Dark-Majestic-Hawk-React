import React from 'react'

import { Helmet } from 'react-helmet'

import FeatureCard from '../components/feature-card'
import GalleryCard3 from '../components/gallery-card3'
import Question from '../components/question'
import Footer from '../components/footer'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Home - Dark Majestic Hawk</title>
        <meta property="og:title" content="Home - Dark Majestic Hawk" />
      </Helmet>
      <div className="home-header">
        <header data-thq="thq-navbar" className="home-navbar-interactive">
          <span className="home-logo">COMPANYNAME</span>
          <div data-thq="thq-navbar-nav" className="home-desktop-menu">
            <nav className="home-links">
              <span className="home-nav1">About</span>
              <span className="home-nav2">Services</span>
              <span className="home-nav3">Articles</span>
              <span className="home-nav4">Projects</span>
              <span className="home-nav5">Contact</span>
            </nav>
            <div className="home-buttons">
              <button className="home-login button">Login</button>
              <button className="home-register button">Register</button>
            </div>
          </div>
          <div data-thq="thq-burger-menu" className="home-burger-menu">
            <svg viewBox="0 0 1024 1024" className="home-icon">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-thq="thq-mobile-menu" className="home-mobile-menu">
            <div className="home-nav">
              <div className="home-top">
                <span className="home-logo1">COMPANYNAME</span>
                <div data-thq="thq-close-menu" className="home-close-menu">
                  <svg viewBox="0 0 1024 1024" className="home-icon02">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav className="home-links1">
                <span className="home-nav11">About</span>
                <span className="home-nav21">Services</span>
                <span className="home-nav31">Articles</span>
                <span className="home-nav41">Projects</span>
                <span className="home-nav51">Contact</span>
              </nav>
              <div className="home-buttons1">
                <button className="home-login1 button">Login</button>
                <button className="home-register1 button">Register</button>
              </div>
            </div>
            <div>
              <svg viewBox="0 0 950.8571428571428 1024" className="home-icon04">
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg viewBox="0 0 877.7142857142857 1024" className="home-icon06">
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg viewBox="0 0 602.2582857142856 1024" className="home-icon08">
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
      </div>
      <div className="home-hero">
        <div className="home-hero1">
          <div className="home-container01">
            <h1 className="home-hero-heading heading1">
              Build Your Personal Company Website
            </h1>
            <span className="home-hero-sub-heading">
              Advanced Manufacturing, 3D Printing, and More
            </span>
            <div className="home-btn-group">
              <button className="home-hero-button1 button">Get Started</button>
              <button className="home-hero-button2 button">Learn More →</button>
            </div>
          </div>
        </div>
      </div>
      <div className="home-details">
        <div className="home-details1">
          <div className="home-container02">
            <span className="home-text sectionTitle">
              <span>Details</span>
              <br></br>
            </span>
            <h2 className="home-details-heading heading2">
              Unleash Your Potential with Cutting-Edge Technology
            </h2>
            <span className="home-details-sub-heading">
              Welcome to our website where we share articles, papers, research
              projects, and knowledge related to advanced manufacturing. Connect
              with us for potential business opportunities and contact
              information.
            </span>
          </div>
          <img
            alt="image"
            src="https://images.unsplash.com/photo-1580894897591-ff1e18c89183?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMjQ3MjMwMHw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
            className="home-details-image"
          />
        </div>
      </div>
      <div className="home-features">
        <div className="home-features-container">
          <div className="home-features1">
            <div className="home-container03">
              <span className="home-text03 sectionTitle">
                <span>features</span>
                <br></br>
              </span>
              <h2 className="home-features-heading heading2">
                Enhance Your Capabilities
              </h2>
              <span className="home-features-sub-heading">
                Discover the advanced features that will elevate your personal
                company&apos;s website and business potential.
              </span>
            </div>
            <div className="home-container04">
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
      <div className="home-pricing">
        <div className="home-pricing1">
          <div className="home-container05">
            <span className="home-text06 sectionTitle">
              <span>Pricing</span>
              <br></br>
            </span>
            <h2 className="home-pricing-heading heading2">
              Choose the Right Plan for Your Company
            </h2>
            <span className="home-pricing-sub-heading">
              Select from our flexible pricing options to meet your specific
              needs
            </span>
          </div>
          <div className="home-container06">
            <div className="home-pricing-card">
              <div className="home-container07">
                <span className="home-text09 heading3">Free</span>
                <span className="home-free-plan-description">
                  A basic plan for personal use
                </span>
              </div>
              <div className="home-container08">
                <span className="home-text10">
                  <span>$</span>
                  <span></span>
                </span>
                <span className="home-free-plan-price">0</span>
              </div>
              <div className="home-container09">
                <div className="home-container10">
                  <span className="home-text13">✔</span>
                  <span className="home-free-plan-features">
                    Access to website builder
                  </span>
                </div>
                <div className="home-container11">
                  <span className="home-text14">✔</span>
                  <span className="home-free-plan-features1">
                    Limited storage space
                  </span>
                </div>
                <div className="home-container12">
                  <span className="home-text15">✔</span>
                  <span className="home-free-plan-features2">
                    Basic customer support
                  </span>
                </div>
                <div className="home-container13">
                  <span className="home-text16">✔</span>
                  <span className="home-free-plan-features3">
                    Free Plan Feature
                  </span>
                </div>
              </div>
              <button className="home-button button">Continue with Free</button>
            </div>
            <div className="home-pricing-card1">
              <div className="home-container14">
                <span className="home-text17 heading3">BASIC</span>
                <span className="home-basic-plan-description">
                  An affordable plan for small businesses
                </span>
              </div>
              <div className="home-container15">
                <span className="home-text18">
                  <span>$</span>
                  <span></span>
                </span>
                <span className="home-basic-plan-pricing">10</span>
                <span className="home-text21">/ month</span>
              </div>
              <div className="home-container16">
                <div className="home-container17">
                  <span className="home-text22">✔</span>
                  <span className="home-text23">All features of FREE plan</span>
                </div>
                <div className="home-container18">
                  <span className="home-text24">✔</span>
                  <span className="home-basic-plan-features">
                    Access to website builder
                  </span>
                </div>
                <div className="home-container19">
                  <span className="home-text25">✔</span>
                  <span className="home-basic-plan-features1">
                    Increased storage space
                  </span>
                </div>
                <div className="home-container20">
                  <span className="home-text26">✔</span>
                  <span className="home-basic-plan-features2">
                    Priority customer support
                  </span>
                </div>
                <div className="home-container21">
                  <span className="home-text27">✔</span>
                  <span className="home-basic-plan-features3">
                    Basic Plan Feature
                  </span>
                </div>
              </div>
              <button className="home-button1 button">
                Try the Basic plan
              </button>
            </div>
            <div className="home-pricing-card2">
              <div className="home-container22">
                <span className="home-text28 heading3">
                  <span>PRO</span>
                  <br></br>
                </span>
                <span className="home-pro-plan-description">
                  An advanced plan for professional companies
                </span>
              </div>
              <div className="home-container23">
                <span className="home-text31">
                  <span>$</span>
                  <span></span>
                </span>
                <span className="home-pro-plan-pricing">25</span>
                <span className="home-text34">/ month</span>
              </div>
              <div className="home-container24">
                <div className="home-container25">
                  <span className="home-text35">✔</span>
                  <span className="home-text36">
                     All features of BASIC plan
                  </span>
                </div>
                <div className="home-container26">
                  <span className="home-text37">✔</span>
                  <span className="home-pro-plan-features">
                    Access to website builder
                  </span>
                </div>
                <div className="home-container27">
                  <span className="home-text38">✔</span>
                  <span className="home-pro-plan-features1">
                    Unlimited storage space
                  </span>
                </div>
                <div className="home-container28">
                  <span className="home-text39">✔</span>
                  <span className="home-pro-plan-features2">
                    Dedicated customer support
                  </span>
                </div>
              </div>
              <button className="home-button2 button">Try the PRO plan</button>
            </div>
          </div>
        </div>
      </div>
      <div className="home-gallery">
        <div className="home-gallery1">
          <h1 className="home-gallery-heading heading2">Gallery</h1>
          <span className="home-gallery-sub-heading">
            Explore our work and expertise
          </span>
          <div className="home-container29">
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1650611250959-1e823abf6841?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMjQ3MjI5N3w&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1640904422940-f3070d65ae29?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMjQ3MjI5N3w&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName1"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1630926906914-f98970d8894c?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMjQ3MjI5N3w&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName3"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1632292220916-e9c34dd75db2?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMjQ3MjI5N3w&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName2"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMjQ3MjI5N3w&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName4"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1650984186744-ade500904ff7?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMjQ3MjI5N3w&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName5"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1648457147590-ef7dbec3cfc2?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMjQ3MjI5N3w&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName6"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1640997261734-f68eb03f9377?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMjQ3MjI5N3w&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName7"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1697707903242-dc15a6b56d45?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMjQ3MjI5N3w&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName8"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1663612864491-671a0672cc72?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMjQ3MjI5N3w&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName9"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1678986718987-76f0b9357e0f?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMjQ3MjI5N3w&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName10"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1664363243687-8d68b7d54283?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMjQ3MjI5N3w&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName11"
            ></GalleryCard3>
          </div>
        </div>
      </div>
      <div className="home-banner">
        <div className="home-banner1">
          <h1 className="home-banner-heading heading2">
            Showcasing Innovation in Advanced Manufacturing
          </h1>
          <span className="home-banner-sub-heading">
            Discover our expertise in 3D Printing, 3D Scanning, Computational
            Geometry, and High Precision Inspection.
          </span>
          <button className="home-banner-button button">Read More</button>
        </div>
      </div>
      <div className="home-faq">
        <div className="home-faq-container">
          <div className="home-faq1">
            <div className="home-container30">
              <span className="home-text40 sectionTitle">
                <span>FAQ</span>
                <br></br>
              </span>
              <h2 className="home-text43 heading2">Common questions</h2>
              <span className="home-text44">
                <span>
                  Here are some of the most common questions that we get.
                </span>
                <br></br>
                <span>
                  <span>
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
                  <span>
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
                </span>
                <span>
                  <span>
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
                  <span>
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
                </span>
              </span>
            </div>
            <div className="home-container31">
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
      <Footer></Footer>
    </div>
  )
}

export default Home
