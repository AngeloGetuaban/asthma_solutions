import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Practice from '../components/practice'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container10">
      <Helmet>
        <title>Asthma Solutions by ChiroHealot</title>
        <meta
          name="description"
          content="Discover natural and effective asthma relief with ChiroHealot's innovative approach. Our holistic solutions integrate advanced chiropractic care, kinesiology, and essential oil therapy to improve breathing and overall lung health. Experience safe, drug-free relief today!"
        />
        <meta property="og:title" content="Asthma Solutions by ChiroHealot" />
        <meta
          property="og:description"
          content="Discover natural and effective asthma relief with ChiroHealot's innovative approach. Our holistic solutions integrate advanced chiropractic care, kinesiology, and essential oil therapy to improve breathing and overall lung health. Experience safe, drug-free relief today!"
        />
      </Helmet>
      <div data-modal="practices" className="home-modal1"></div>
      <section className="home-hero">
        <header className="home-header1">
          <header data-thq="thq-navbar" className="home-navbar">
            <div className="home-left1">
              <nav className="home-links1">
                <img
                  alt="image"
                  src="/chiro%20healot%20logo-03%20(1)-1500h.png"
                  className="home-image10"
                />
                <a href="#how-it-works" className="home-link10">
                  Services
                </a>
                <a href="#meet" className="home-link11">
                  About
                </a>
                <a href="#contact" className="home-link12">
                  Contact
                </a>
              </nav>
            </div>
            <div data-thq="thq-navbar-btn-group" className="home-right1">
              <a href="#book" className="home-book1 button button-main">
                <span className="home-text10">GET STARTED</span>
              </a>
            </div>
            <div data-thq="thq-burger-menu" className="home-burger-menu">
              <svg viewBox="0 0 1024 1024" className="home-icon10">
                <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
            </div>
            <div data-thq="thq-mobile-menu" className="home-mobile-menu">
              <div
                data-thq="thq-mobile-menu-nav"
                data-role="Nav"
                className="home-nav1"
              >
                <div className="home-container11">
                  <img
                    alt="image"
                    src="/chiro%20healot%20logo-03%20(1)-1500h.png"
                    className="home-image11"
                  />
                  <div data-thq="thq-close-menu" className="home-menu-close">
                    <svg viewBox="0 0 1024 1024" className="home-icon12">
                      <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                    </svg>
                  </div>
                </div>
                <nav
                  data-thq="thq-mobile-menu-nav-links"
                  data-role="Nav"
                  className="home-nav2"
                >
                  <a href="#how-it-works" className="home-link13">
                    Services
                  </a>
                  <a href="#meet" className="home-link14">
                    <span>About</span>
                    <br></br>
                  </a>
                  <a href="#contact" className="home-link15">
                    Contact
                  </a>
                  <a href="#book" className="home-book2 button button-main">
                    <img
                      alt="image"
                      src="/Icons/calendar.svg"
                      className="home-image12"
                    />
                    <span className="home-text13">Book an appointment</span>
                  </a>
                </nav>
              </div>
            </div>
          </header>
        </header>
        <div className="home-main">
          <div className="home-content1">
            <div className="home-heading10">
              <h1 className="home-header2">
                Breathe Easier with Chiro Healot Asthma Solutions
              </h1>
              <p className="home-caption">
                Experience natural asthma relief through our specialized
                chiropractic treatments. We help you achieve better breathing
                and improved quality of life.
              </p>
            </div>
            <a href="#book" className="home-book3 button button-main">
              <img
                alt="image"
                src="/Icons/calendar.svg"
                className="home-image13"
              />
              <span>Book an appointment</span>
            </a>
          </div>
          <div className="home-container12">
            <video
              src="/videos/hero_video.mp4"
              poster="/thumbnail_hero-800h.png"
              autoPlay
              controls
              className="home-video1"
            ></video>
          </div>
        </div>
        <div className="home-background"></div>
      </section>
      <section className="home-practices1">
        <div className="home-dre">
          <div className="home-container13">
            <img
              alt="image"
              src="/thumbnail_t2-1000h.webp"
              className="home-image14"
            />
          </div>
          <div className="home-container14">
            <p className="home-text15">Dr. Steven Ellsworth</p>
            <p className="home-text16">Creator of Chiro Healot </p>
          </div>
        </div>
        <p className="home-text17">
          <span>
            Hello everyone, I’m Dr. Ellsworth, living in paradise—the
            Philippines.
          </span>
          <br></br>
          <br></br>
          <span>
            This day, March 13th, 2025, marks the official launch of Asthma
            Solutions—a safe, natural, and effective breakthrough in respiratory
            care. It’s fitting that this launch aligns with Tony Robbins’
            Unleash the Power Within—a symbol of transformation.
          </span>
          <br></br>
          <br></br>
          <span>
            For over 40 years, I’ve focused on the nervous system. In
            embryology, our Creator designed the nervous system to be laid down
            first, as it controls and regulates every organ and tissue in the
            body.
          </span>
          <br></br>
          <br></br>
          <span>
            I have discovered a revolutionary way to access the nervous system,
            utilizing Michelangelo’s Vitruvian Man to tap into the body&apos;s
            biocomputer on the physical, emotional, and chemical levels. By
            accessing the body’s innate wisdom, we identify and release blocks,
            restoring health and well-being across all three levels.
          </span>
          <br></br>
          <br></br>
          <span>
            Partnering with Dr. Johan Gerardo, we used scientifically validated
            asthma questionnaires to measure results. The data is clear: 700+
            patients, 97% success rate—not just weeks, but years of asthma-free
            living.
          </span>
          <br></br>
          <br></br>
          <span>
            Now, we’re bringing this transformative solution worldwide. Over the
            next four days, I’m seeking the right mentors, coaches, and
            investors to scale this movement.
          </span>
          <br></br>
          <br></br>
          <span>
            As we gather for our Team Asthma Solutions group photo, scan the
            barcode for more details.
          </span>
          <br></br>
          <br></br>
          <span>
            Let’s redefine respiratory health and create something
            extraordinary—together.
          </span>
        </p>
      </section>
      <section className="home-practices2">
        <div className="home-heading11">
          <h2 className="home-text40">Holistic Approach</h2>
          <p className="home-text41">
            Discover how our specialized chiro healot treatments can help manage
            asthma symptoms naturally
          </p>
        </div>
        <div className="home-content2">
          <div className="home-grid">
            <Link to="/">
              <div className="home-practice-wrapper1">
                <Practice
                  title="Better Quality of Life"
                  header={
                    <Fragment>
                      <span className="home-text42">
                        Better Quality of Life
                      </span>
                    </Fragment>
                  }
                  description="Experience overall improvements in health and well-being, from increased energy to a more positive outlook on daily activities."
                ></Practice>
              </div>
            </Link>
            <Link to="/">
              <div className="home-practice-wrapper2">
                <Practice
                  title="Improved Breathing"
                  header={
                    <Fragment>
                      <span className="home-text43">Improved Breathing</span>
                    </Fragment>
                  }
                  description="Support proper respiratory function by addressing misalignments that can contribute to restricted airways and reduced lung capacity."
                ></Practice>
              </div>
            </Link>
            <Link to="/">
              <div className="home-practice-wrapper3">
                <Practice
                  title="Released Trapped Emotions"
                  header={
                    <Fragment>
                      <span className="home-text44">
                        Released Trapped Emotions
                      </span>
                    </Fragment>
                  }
                  description="Facilitate a healthier mind-body connection, helping you let go of lingering emotional blockages and promoting inner calm."
                ></Practice>
              </div>
            </Link>
            <Link to="/">
              <div className="home-practice-wrapper4">
                <Practice
                  title="Released Trapped Emotions"
                  header={
                    <Fragment>
                      <span className="home-text45">Nutrition</span>
                    </Fragment>
                  }
                  description="Optimize your body’s natural healing processes by focusing on a balanced diet that complements chiropractic care and overall wellness."
                ></Practice>
              </div>
            </Link>
            <Link to="/">
              <div className="home-practice-wrapper5">
                <Practice
                  title="Nutrition"
                  header={
                    <Fragment>
                      <span className="home-text46">
                        <span>Enhanced Immune Support</span>
                        <br></br>
                        Cardiology
                      </span>
                    </Fragment>
                  }
                  description="Strengthen your body’s defense mechanisms by ensuring optimal nerve function and reducing stressors that can weaken immunity."
                ></Practice>
              </div>
            </Link>
            <Link to="/">
              <div className="home-practice-wrapper6">
                <Practice
                  title="Reduced Stress Levels"
                  header={
                    <Fragment>
                      <span className="home-text49">Reduced Stress Levels</span>
                    </Fragment>
                  }
                  description="Alleviate tension and improve relaxation, helping you manage daily stressors more effectively and maintain mental clarity."
                ></Practice>
              </div>
            </Link>
          </div>
        </div>
      </section>
      <section id="how-it-works" className="home-why">
        <div className="home-heading12">
          <h2 className="home-header3">Why choose us</h2>
          <p className="home-header4">
            Experience real healing through the stories of our patients—watch
            how ChiroHealot has transformed lives with expert care and holistic
            treatments!
          </p>
        </div>
        <div className="home-videos-testimonials">
          <video
            src="/asthma_testimony.mov"
            poster="/thumbnail_asthma-1900w.png"
            controls
            playsInline
            className="home-video2"
          ></video>
          <video
            src="/videos/testimonial_2.mp4"
            poster="/thumbnail_testimiony2-1900w.png"
            controls
            playsInline
            className="home-video3"
          ></video>
        </div>
      </section>
      <section id="book" className="home-book4">
        <div className="home-heading13">
          <h2 className="home-text50">Need more Information?</h2>
          <p className="home-text51">
            <span>Send us your question through your email</span>
            <br></br>
          </p>
        </div>
        <div className="home-form1">
          <div className="home-types1"></div>
          <div className="home-inputs1">
            <input
              type="email"
              placeholder="Email"
              autoComplete="email"
              className="input book-input"
            />
            <input
              type="text"
              placeholder="Question/s"
              className="input book-input"
            />
            <div className="home-lower1">
              <div className="home-button1">
                <button className="home-book5 button button-main">
                  <span>Send</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-features">
        <h1 className="home-text55">
          Breathe Easy with ChiroHealot: A Holistic Solution for Asthma Relief
        </h1>
        <div className="home-section1">
          <div className="home-content3">
            <div className="home-header5">
              <h2 className="home-heading14">Structural Realignment</h2>
              <p className="home-capton1">
                helps improve lung function by correcting misalignments in the
                upper spine that may interfere with nerve signals to the lungs
                and diaphragm. Using the Torque Release Technique (TRT), we
                ensure that the nervous system communicates properly, allowing
                for smoother, unrestricted breathing. Many asthma sufferers find
                relief as their body regains balance and airflow improves.
              </p>
            </div>
          </div>
          <video
            src="/trt%20(2).mp4"
            poster="/thumbnail_trt-500w.png"
            controls
            className="home-video4"
          ></video>
        </div>
        <div className="home-section2">
          <div className="home-content4">
            <div className="home-header6">
              <h2 className="home-heading15">Massage Therapy</h2>
              <p className="home-capton2">
                focuses on relaxing tight muscles in the chest, back, and neck
                that can restrict breathing. Through Neuromuscular Re-Education
                and Myofascial Release, we help loosen these areas, improve
                circulation, and enhance lymphatic drainage. This reduces muscle
                tension around the ribcage, making it easier to take deep, full
                breaths.
              </p>
            </div>
          </div>
          <video
            src="/massage.mov"
            poster="/thumbnail_massage-400h.png"
            controls
            className="home-video5"
          ></video>
        </div>
        <div className="home-section3">
          <div className="home-content5">
            <div className="home-header7">
              <h2 className="home-heading16">Emotional Release Therapy</h2>
              <p className="home-capton3">
                {' '}
                addresses stress and anxiety, which are common triggers for
                asthma. Using energy balancing and Therapy Localization (TL), we
                identify emotional blockages that may be contributing to
                breathing difficulties. By releasing stored stress and promoting
                relaxation, patients often experience fewer asthma attacks and
                better overall respiratory health.
              </p>
            </div>
          </div>
          <video
            src="/emotional.mp4"
            poster="/thumbnail_emotional-500w.png"
            controls="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
            className="home-video6"
          ></video>
        </div>
      </section>
      <section id="book" className="home-book6">
        <div className="home-heading17">
          <h2 className="home-text56">Book an appointment</h2>
          <p className="home-text57">
            Take the first step towards better health. Book your consultation
            today and let our experts help you find relief and healing.
          </p>
        </div>
        <div className="home-form2">
          <div className="home-types2"></div>
          <div className="home-inputs2">
            <input
              type="text"
              placeholder="Name"
              autoComplete="name"
              className="input book-input"
            />
            <input
              type="email"
              placeholder="Email"
              autoComplete="email"
              className="input book-input"
            />
            <input
              type="tel"
              placeholder="Phone"
              autoComplete="tel"
              className="input book-input"
            />
            <div className="home-date">
              <input
                type="date"
                placeholder="Date"
                className="input book-input"
              />
              <img
                alt="image"
                src="/Icons/calendar-2.svg"
                className="home-image15"
              />
            </div>
            <input
              type="text"
              placeholder="Tell us about your concern"
              className="input book-input"
            />
            <div className="home-lower2">
              <div className="home-button2">
                <button className="home-book7 button button-main">
                  <span>Book</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="meet" className="home-meet1">
        <div className="home-heading18">
          <div className="home-heading19">
            <h2 className="home-text59">Meet the Doctor</h2>
            <p className="home-text60">
              Introducing Dr. Steven Ellsworth, Creator of Chiro Healot Asthma
              Solutions
            </p>
          </div>
        </div>
        <img
          alt="image"
          src="/dr-e-funnels-v2-700h.webp"
          className="home-image16"
        />
        <span className="home-text61">
          Dr. Steven Ellsworth is a dedicated chiropractor with a passion for
          helping individuals achieve lasting relief from respiratory
          challenges. As the creator of Chiro Healot Asthma Solutions, he
          combines his extensive clinical experience with a holistic approach to
          wellness, focusing on non-invasive techniques that address the root
          causes of asthma. Dr. Ellsworth’s commitment to ongoing research and
          professional development ensures that his practice remains at the
          forefront of innovative care, while his compassionate,
          patient-centered philosophy fosters trust and confidence in those
          seeking healthier, more vibrant lives. Through Chiro Healot, Dr.
          Ellsworth continues to empower patients to breathe easier and embrace
          a renewed sense of well-being.
        </span>
        <video
          src="/chiro_healot.mp4"
          poster="/chiro_healot_works-1100w.png"
          controls
          className="home-video7"
        ></video>
      </section>
      <div id="contact" className="home-contact">
        <section className="home-meet2">
          <div className="home-heading20">
            <div className="home-heading21">
              <h2 className="home-text62">Contact us</h2>
              <p className="home-text63">
                Ready to take control of your respiratory health and live more
                comfortably? Reach out to us today!
              </p>
            </div>
          </div>
          <div className="home-cdo">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3946.641927119145!2d124.6173709758622!3d8.436779097976236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32ff8d8240092ff1%3A0x5b3336455dc41ee!2sChiro-Healot!5e0!3m2!1sen!2sph!4v1741743895691!5m2!1sen!2sph"
              className="home-google-maps1"
            ></iframe>
            <div className="home-cdo-uptown">
              <h1 className="home-text64">CDO UPTOWN BRANCH</h1>
              <p className="home-text65">
                3rd floor E-MAX Building, Mastersons Avenue, Upper, Cagayan de
                Oro, 9000 Misamis Oriental
              </p>
              <p className="home-text66">chirohealot.cdo@gmail.com</p>
              <p className="home-text67">(+63)917-147-3309</p>
            </div>
          </div>
          <div className="home-iligan1">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3948.7393627003403!2d124.23408568500977!3d8.228943979882475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x325575e722b15555%3A0x915165a8c9f6c711!2sChiro-Healot!5e0!3m2!1sen!2sph!4v1741743974394!5m2!1sen!2sph"
              className="home-google-maps2"
            ></iframe>
            <div className="home-iligan2">
              <h1 className="home-text68">ILIGAN BRANCH</h1>
              <p className="home-text69">
                Marietta Tower, 2nd Floor, Manuel L. Quezon Ave, Iligan City,
                9200 Lanao del Norte
              </p>
              <p className="home-text70">chirohealot.ph@gmail.com</p>
              <p className="home-text71">(+63)927-392-0999</p>
            </div>
          </div>
        </section>
      </div>
      <div className="home-footer">
        <div className="home-left2">
          <div className="home-brand">
            <img
              alt="image"
              src="/chiro%20healot%20logo-03%20(1)-1500h.png"
              className="home-image17"
            />
            <p className="home-text72">
              Chiro Healot is an innovative, non-invasive approach that
              harnesses chiropractic techniques to help individuals find lasting
              relief from asthma symptoms and improve overall respiratory
              health.
            </p>
          </div>
          <div className="home-socials">
            <div className="home-social1 social">
              <img
                alt="image"
                src="/Icons/facebook-200h.png"
                className="home-image18"
              />
            </div>
            <div className="home-social2 social">
              <img
                alt="image"
                src="/Icons/instagram.svg"
                className="home-image19"
              />
            </div>
            <div className="home-social3 social">
              <img
                alt="image"
                src="/tiktok-200h.png"
                className="home-image20"
              />
            </div>
          </div>
          <div className="home-legal1">
            <span className="home-copyright">© 2025. All Rights Reserved.</span>
          </div>
        </div>
        <div className="home-right2">
          <div className="home-list1">
            <span className="home-header8">Menu</span>
            <div className="home-links2">
              <a href="#how-it-works" className="home-link16">
                Services
              </a>
              <a href="#meet" className="home-link17">
                About
              </a>
              <a href="#contact" className="home-link18">
                Contact
              </a>
            </div>
          </div>
          <div className="home-list2">
            <span className="home-header9">Contact</span>
            <div className="home-links3">
              <div className="home-address1">
                <svg width="24" height="24" viewBox="0 0 24 24">
                  <path
                    d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7m0 9.5a2.5 2.5 0 0 1 0-5a2.5 2.5 0 0 1 0 5"
                    fill="currentColor"
                  ></path>
                </svg>
                <span className="home-link19">
                  3rd floor E-MAX Building, Mastersons Avenue, Upper, Cagayan de
                  Oro, 9000 Misamis Oriental
                </span>
              </div>
              <div className="home-email1">
                <svg width="24" height="24" viewBox="0 0 24 24">
                  <path
                    d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 4l-8 5l-8-5V6l8 5l8-5z"
                    fill="currentColor"
                  ></path>
                </svg>
                <a
                  href="mailto:contact@template.new?subject=Main"
                  className="home-link20"
                >
                  chirohealot.cdo@gmail.com
                </a>
              </div>
              <div className="home-phone1">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="home-icon18"
                >
                  <path
                    d="M16.5 11.462q-.31 0-.54-.23t-.23-.54t.23-.539t.54-.23t.54.23t.23.54t-.23.539t-.54.23M18.93 20q-2.528 0-5.184-1.266t-4.944-3.555q-2.27-2.288-3.536-4.935T4 5.07q0-.45.3-.76T5.05 4h2.473q.408 0 .712.257t.411.659L9.142 7.3q.07.42-.025.733t-.333.513L6.59 10.592q.616 1.117 1.361 2.076t1.59 1.817q.87.87 1.874 1.62q1.004.749 2.204 1.414l2.139-2.177q.244-.263.549-.347q.304-.083.674-.033l2.103.43q.408.1.662.411t.254.712v2.435q0 .45-.31.75t-.76.3"
                    fill="currentColor"
                  ></path>
                </svg>
                <a href="tel:(004) 234 - 5678" className="home-link21">
                  (+63)917-147-3309
                </a>
              </div>
              <div className="home-address2">
                <svg width="24" height="24" viewBox="0 0 24 24">
                  <path
                    d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7m0 9.5a2.5 2.5 0 0 1 0-5a2.5 2.5 0 0 1 0 5"
                    fill="currentColor"
                  ></path>
                </svg>
                <span className="home-link22">
                  Marietta Tower, 2nd Floor, Manuel L. Quezon Ave, Iligan City,
                  9200 Lanao del Norte
                </span>
              </div>
              <div className="home-email2">
                <svg width="24" height="24" viewBox="0 0 24 24">
                  <path
                    d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 4l-8 5l-8-5V6l8 5l8-5z"
                    fill="currentColor"
                  ></path>
                </svg>
                <a
                  href="mailto:contact@template.new?subject=Main"
                  className="home-link23"
                >
                  chirohealot.ph@gmail.com
                </a>
              </div>
              <div className="home-phone2">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="home-icon24"
                >
                  <path
                    d="M16.5 11.462q-.31 0-.54-.23t-.23-.54t.23-.539t.54-.23t.54.23t.23.54t-.23.539t-.54.23M18.93 20q-2.528 0-5.184-1.266t-4.944-3.555q-2.27-2.288-3.536-4.935T4 5.07q0-.45.3-.76T5.05 4h2.473q.408 0 .712.257t.411.659L9.142 7.3q.07.42-.025.733t-.333.513L6.59 10.592q.616 1.117 1.361 2.076t1.59 1.817q.87.87 1.874 1.62q1.004.749 2.204 1.414l2.139-2.177q.244-.263.549-.347q.304-.083.674-.033l2.103.43q.408.1.662.411t.254.712v2.435q0 .45-.31.75t-.76.3"
                    fill="currentColor"
                  ></path>
                </svg>
                <a href="tel:(004) 234 - 5678" className="home-link24">
                  (+63)927-392-0999
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="home-legal2">
          <div className="home-row"></div>
        </div>
      </div>
      <div>
        <div className="home-container16">
          <Script
            html={`<script>
const modalOpen = document.querySelectorAll('[data-open]');
const modalClose = document.querySelectorAll('[data-close]');

modalOpen.forEach(button => {
    button.addEventListener('click', event => {
        const modal = document.querySelector(\`[data-modal="\${event.target.dataset.open}"]\`);
        modal.style.display = "flex";
    });
});

modalClose.forEach(button => {
    button.addEventListener('click', event => {
        const modal = document.querySelector(\`[data-modal="\${event.target.dataset.close}"]\`);
        modal.style.display = "none";
    });
});
</script>
`}
          ></Script>
        </div>
      </div>
      <div>
        <div className="home-container18">
          <Script
            html={`<script>
const dataLetters = document.querySelectorAll("[data-letter]");
let activeLetters = [];
const maxResults = 6;

dataLetters.forEach(letter => {
  letter.addEventListener("click", function() {
    if (this.classList.contains("letter-active")) {
      this.classList.remove("letter-active");
      activeLetters = activeLetters.filter(a => a !== this.dataset.letter);
    } else {
      this.classList.add("letter-active");
      activeLetters.push(this.dataset.letter);
    }
    if (activeLetters.length == 0) {
      document.querySelector("[data-teleport='results']").style.display = "none";
      return;
    }
    showResults();
  });
});

const showResults = () => {
  fetch("https://raw.githubusercontent.com/Shivanshu-Gupta/web-scrapers/master/medical_ner/medicinenet-diseases.json")
    .then(response => response.json())
    .then(data => {
      const filteredData = data.filter(item => {
        const firstLetter = item.disease.charAt(0).toLowerCase();
        if (activeLetters.includes(firstLetter)) {
          return true;
        }
        return false;
      });

      document.querySelector("[data-teleport='results']").style.display = "flex";
      const resultsContainer = document.querySelector("[data-results='letters']");
      resultsContainer.innerHTML = "";

      let counter = 0;
      const diseaseGroups = {};
      const totalActiveLetters = activeLetters.length;

      filteredData.forEach(disease => {
        const firstLetter = disease.disease[0].toLowerCase();
        if (diseaseGroups[firstLetter]) {
          diseaseGroups[firstLetter].push(disease);
        } else {
          diseaseGroups[firstLetter] = [disease];
        }
      });

      Object.keys(diseaseGroups).sort().forEach((firstLetter, index) => {
        const diseasesForThisLetter = diseaseGroups[firstLetter];
        const diseasesToShow = diseasesForThisLetter.slice(0, Math.ceil(maxResults / totalActiveLetters));

        diseasesToShow.forEach(disease => {
          const resultContainer = document.createElement("div");
          resultContainer.classList.add("search-result");
          resultContainer.classList.add("invisible");
          resultContainer.style.animationDelay = \`\${counter * 0.25}s\`;

          const resultText = document.createElement("span");
          resultText.classList.add("result-text");
          resultText.textContent = disease.disease;

          resultContainer.appendChild(resultText);
          resultsContainer.appendChild(resultContainer);
          counter++;

          if (counter === maxResults) {
            const moreContainer = document.createElement("div");
            moreContainer.classList.add("search-result");
            moreContainer.classList.add("more-results");

            const moreText = document.createElement("span");
            moreText.classList.add("result-text");
            moreText.textContent = "More";

            moreContainer.appendChild(moreText);
            resultsContainer.appendChild(moreContainer);
            addedMoreContainer = true;
            return;
          }
        });
      });
    });
};
</script>
`}
          ></Script>
        </div>
      </div>
      <div>
        <div className="home-container20">
          <Script
            html={`<script>
function scroll(direction) {
  const doctorsDiv = document.querySelector('[data-teleport="doctors"]');
  const scrollAmount = 300;
  if (direction === 'previous') {
    doctorsDiv.scrollBy({
      left: -scrollAmount,
      behavior: 'smooth'
    });
  } else if (direction === 'next') {
    doctorsDiv.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    });
  }
}

const buttons = document.querySelectorAll('[data-doctors]');
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const direction = button.dataset.doctors;
    scroll(direction);
  });
});
</script>`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

export default Home
