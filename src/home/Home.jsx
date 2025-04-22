import React, { useEffect, useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import "./Home.css";
import img1 from "../images/image_1.png";
import img2 from "../images/image_2.png";
import img3 from "../images/image_3.png";
import img4 from "../images/image_4.png";
import img5 from "../images/image_5.png";
import docSteven from "../images/doctor_steven_ellsworth.webp";
import structuralRenewal from "../images/structural_renewal.webp";
import bodyRejuvenation from "../images/body_rejuvenation.webp";
import bodyRestoration from "../images/body_restoration.webp";
import healingTouch from "../images/healing_touch.webp";
import lymphaticDetox from "../images/lymphatic_detox.webp";
import faceBodyMassage from "../images/face_body_massage.webp";
import footReflexology from "../images/foot_reflexology.webp";
import Footer from "../components/Footer";
import Swal from "sweetalert2";
import { Helmet } from 'react-helmet-async';
import { motion } from "framer-motion";
const images = [img1, img2, img3, img4, img5];

// Fade-in variant
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Home = () => {

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 6000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const goToIndex = (index) => {
    setCurrentIndex(index);
  };

  const therapyScrollRef = useRef(null);

  const scrollLeft = () => {
    therapyScrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    therapyScrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  const therapies = [
    {
      title: "Structural Renewal Therapy",
      description:
        "Goes beyond deep tissue by realigning muscles and mobilizing joints. Offers pain relief and long-term structural health.",
      image: structuralRenewal,
    },
    {
      title: "Body Rejuvenation",
      description:
        "Combines revitalization, circulation, and energy balancing for full-body reset — recharges and enhances mobility.",
      image: bodyRejuvenation,
    },
    {
      title: "Body Restoration",
      description:
        "Integrates manual therapy, energy healing, and neuromuscular re-education to address body-mind tension and emotional balance.",
      image: bodyRestoration,
    },
    {
      title: "Healing Touch",
      description:
        "Holistic healing combining energetic work, magnetic therapy, and touch to relieve pain and restore spiritual balance.",
      image: healingTouch,
    },
    {
      title: "Lymphatic & Detox Therapy",
      description:
        "Promotes detoxification, immunity, circulation, and internal cleansing with gentle pressure targeting the lymphatic system.",
      image: lymphaticDetox,
    },
    {
      title: "Face & Body Massage",
      description:
        "Soothing combination of facial and body massage to deeply relax, nourish the skin, and refresh the mind.",
      image: faceBodyMassage,
    },
    {
      title: "Foot Reflexology",
      description:
        "Pressure point therapy that restores balance and relieves tension through your feet — promoting wellness one step at a time.",
      image: footReflexology,
    },
  ];

  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
  
    const form = formRef.current;
  
    // Get raw input date (e.g., "2025-04-25")
    const inputDate = form.querySelector("input[name='date']").value;
  
    // Convert to readable format: "April 25, 2025"
    const formattedDate = new Date(inputDate).toLocaleDateString("en-PH", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  
    // Append date to the message
    const messageField = form.querySelector("textarea[name='message']");
    messageField.value += `\n\nYou requested an appointment at ${formattedDate}.`;
  
    // Send EmailJS form
    emailjs
      .sendForm(
        "service_153zv8b",       // ✅ Template for user
        "template_ltd4pwl", // e.g., "template_userReply"
        form,
        "yVmvtZhR_Py7Th7Bm"
      )
      .then(() => {
        console.log("User auto-reply sent.");

        // Send internal copy to ChiroHealot team
        emailjs
          .sendForm(
            "service_153zv8b",       // Can be same service
            "template_4zla68o", // e.g., "template_teamNotify"
            form,
            "yVmvtZhR_Py7Th7Bm"
          )
          .then(() => {
            Swal.fire({ 
              icon: "success",
              title: "Message Sent!",
              text: "We’ve received your appointment request, kindly check your email for confirmation.",
              confirmButtonColor: "#6B46C1", // Tailwind's purple-700
            });
            form.reset();
          })
          .catch((error) => {
            console.error("Failed to send to team:", error.text);
            Swal.fire({
              icon: "warning",
              title: "Partial Success",
              text: "Message sent to user, but failed to notify our team.",
              confirmButtonColor: "#D97706",
            });
          });
      })
      .catch((error) => {
        console.error("Email to user failed:", error.text);
        Swal.fire({
          icon: "error",
          title: "Oops!",
          text: "We couldn’t send your appointment request. Please try again later.",
          confirmButtonColor: "#DC2626",
        });
      });
  };

  

  return (
  <div className="relative min-h-screen overflow-hidden bg-white text-gray-800">
    <Helmet>
      <title>Asthma Solutions | ChiroHealot Holistic Healing</title>
      <meta
        name="description"
        content="Discover ChiroHealot’s holistic therapies for asthma. Heal naturally with structural realignment, massage, emotional release, and more."
      />
      <meta property="og:title" content="Asthma Solutions | ChiroHealot" />
      <meta
        property="og:description"
        content="Breathe easier with ChiroHealot's holistic asthma relief therapies. Explore our treatments for better respiratory health."
      />
      <meta property="og:url" content="https://asthmasolutionsph.com/" />
      <meta property="og:type" content="website" />
    </Helmet>
    <Navbar />

      {/* Background Slides */}
      <motion.section variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className="z-10">
      <div className="absolute inset-0 z-0 w-screen h-screen">
        {images.map((src, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              idx === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={src}
              alt={`Slide ${idx}`}
              className={`w-full h-full object-cover ${
                idx === currentIndex ? "zoom-animated" : ""
              }`}
            />
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute top-1/2 left-6 z-20 text-white text-4xl font-thin transform -translate-y-1/2 hover:scale-110 transition"
      >
        ‹
      </button>
      <button
        onClick={goToNext}
        className="absolute top-1/2 right-6 z-20 text-white text-4xl font-thin transform -translate-y-1/2 hover:scale-110 transition"
      >
        ›
      </button>

      {/* Overlay Content */}
      <div className="relative z-10 h-screen flex flex-col items-center justify-center text-white text-center bg-black/20">
        <h1 className="text-2xl md:text-4xl tracking-widest uppercase mb-4 font-semibold">
          ChiroHealot
        </h1>
        <h2 className="text-5xl md:text-7xl font-light leading-tight">
          Asthma Solutions
        </h2>

        {/* Dot Indicators */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex gap-2 z-30">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToIndex(idx)}
              className={`w-2.5 h-2.5 rounded-full ${
                idx === currentIndex ? "bg-white" : "bg-white/50"
              } transition-all duration-300`}
            />
          ))}
        </div>
      </div>
      </motion.section>

      <motion.section variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className="relative z-10 bg-white text-gray-800 py-16 px-6 md:px-16">
        {/* Therapies Section */}
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">
            7 Therapies of ChiroHealot
          </h2>

          <div className="flex flex-col md:flex-row gap-10">
            {/* Left Column - Therapy Carousel */}
            <div className="md:w-2/3 w-full relative">
              <div className="relative">
                <div
                  ref={therapyScrollRef}
                  className="overflow-x-auto scroll-smooth no-scrollbar"
                >
                  <div className="flex gap-6 py-2">
                    {therapies.map((therapy, idx) => (
                      <motion.div
                        key={idx}
                        className="min-w-[220px] md:min-w-[260px] bg-gray-50 border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition flex flex-col items-center text-center"
                      >
                        <img
                          src={therapy.image}
                          alt={therapy.title}
                          className="w-full h-40 object-cover rounded-md mb-4"
                        />
                        <h3 className="text-base font-semibold text-gray-800 mb-2">
                          {therapy.title}
                        </h3>
                        <p className="text-sm text-gray-500">
                          {therapy.description}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Arrow Buttons */}
                <button
                  onClick={scrollLeft}
                  className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 shadow rounded-full hover:scale-110 transition"
                >
                  ‹
                </button>
                <button
                  onClick={scrollRight}
                  className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 shadow rounded-full hover:scale-110 transition"
                >
                  ›
                </button>
              </div>
              {/* CTA Button Below Therapies */}
              <div className="mt-10 flex justify-center">
                <Link
                  to="/therapies"
                  className="inline-block bg-green-600 text-white font-medium px-6 py-3 rounded-full shadow hover:bg-green-700 transition"
                >
                  Learn More About Our Therapies
                </Link>
              </div>
            </div>

            {/* Right Column - Clinic Hours */}
            <div className="md:w-1/3 w-full text-sm space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Clinic Hours</h3>
                <p className="mb-1">CDO Clinic: Opens daily from 8:30 AM – 6:00 PM</p>
                <p>Manticao Clinic: Opens daily from 8:30 AM – 6:00 PM</p>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase mb-2">Contact Us</h4>
                <div className="mb-4">
                  <p className="font-semibold text-gray-700">CDO:</p>
                  <p>chirohealot.cdo@gmail.com</p>
                  <p>0917-147-3309</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-700">Manticao:</p>
                  <p>chirohealot.ph@gmail.com</p>
                  <p>0927-392-0999</p>
                </div>
              </div>
            </div>

          </div>
        </motion.section>

        {/* Video Section */}
        <motion.section variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className="relative z-10 bg-white py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="relative w-full pb-[56.25%] h-0 overflow-hidden rounded-xl shadow-lg">
              <iframe
                src="https://drive.google.com/file/d/1s5EFpWcRKU_q0Smd4jloq4vY5cpT0iAq/preview"
                title="ChiroHealot Asthma Solutions"
                className="absolute top-0 left-0 w-full h-full"
                allow="autoplay"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </motion.section>

        <motion.section variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className="relative z-10 bg-green-50 py-16 px-4 md:px-16">
        {/* Holistic Approach Section */}
          <div className="max-w-7xl mx-auto">
            <div className="mb-12 max-w-xl">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Holistic Approach</h2>
              <p className="text-gray-700 text-base">
                Discover how our specialized chiro healot treatments can help manage asthma symptoms naturally
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-12 border-t border-gray-300 pt-8">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Better Quality of Life</h3>
                <p className="text-sm text-gray-700">
                  Experience overall improvements in health and well-being, from increased energy to a more positive outlook on daily activities.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Improved Breathing</h3>
                <p className="text-sm text-gray-700">
                  Support proper respiratory function by addressing misalignments that can contribute to restricted airways and reduced lung capacity.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Released Trapped Emotions</h3>
                <p className="text-sm text-gray-700">
                  Facilitate a healthier mind-body connection, helping you let go of lingering emotional blockages and promoting inner calm.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Nutrition</h3>
                <p className="text-sm text-gray-700">
                  Optimize your body's natural healing processes by focusing on a balanced diet that complements chiropractic care and overall wellness.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Enhanced Immune Support Cardiology</h3>
                <p className="text-sm text-gray-700">
                  Strengthen your body’s defense mechanisms by ensuring optimal nerve function and reducing stressors that can weaken immunity.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Reduced Stress Levels</h3>
                <p className="text-sm text-gray-700">
                  Alleviate tension and improve relaxation, helping you manage daily stressors more effectively and maintain mental clarity.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Why Choose Us Section */}
        <motion.section variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className="relative z-10 bg-white py-20 px-4 md:px-16">
          <div className="max-w-7xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why choose us</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Experience real healing through the stories of our patients—watch how ChiroHealot has transformed lives with expert care and holistic treatments!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {/* Video 1 */}
            <div className="w-full aspect-[9/16] rounded-xl overflow-hidden shadow-lg">
              <iframe
                className="w-full h-full"
                src="https://drive.google.com/file/d/1NuimnrGw9rLGtIyGCYTJA9RMyXYWL2ES/preview"
                allow="autoplay"
                allowFullScreen
                title="Testimonial Video 1"
              ></iframe>
            </div>

            {/* Video 2 */}
            <div className="w-full aspect-[9/16] rounded-xl overflow-hidden shadow-lg">
              <iframe
                className="w-full h-full"
                src="https://drive.google.com/file/d/1RSJ4gsYjVRwXWe9xvzomEtv1iL_n8Dog/preview"
                allow="autoplay"
                allowFullScreen
                title="Testimonial Video 2"
              ></iframe>
            </div>
          </div>
        </motion.section>

        {/* Asthma Relief Therapies Section */}
        <motion.section variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className="bg-white py-20 px-6" style={{ backgroundColor: "#F0F0F0" }}>
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-16">
              Breathe Easy with ChiroHealot: A Holistic Solution for Asthma Relief
            </h2>

            {/* Therapy 1: Structural Realignment */}
            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <h3 className="text-3xl font-bold mb-4">Structural Realignment</h3>
                <p className="text-gray-700 text-base leading-relaxed">
                  Helps improve lung function by correcting misalignments in the upper spine
                  that may interfere with nerve signals to the lungs and diaphragm. Using
                  the Torque Release Technique (TRT), we ensure that the nervous system
                  communicates properly, allowing for smoother, unrestricted breathing.
                  Many asthma sufferers find relief as their body regains balance and
                  airflow improves.
                </p>
              </div>
              <div className="w-full aspect-[16/9]">
                <iframe
                  src="https://drive.google.com/file/d/1l_7E_7dxwWHLFWw3KigedkKWRWYF8H6k/preview"
                  title="Structural Realignment"
                  className="w-full h-full rounded-xl shadow-lg"
                  allow="autoplay"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            {/* Therapy 2: Massage Therapy */}
            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
              <div className="w-full aspect-[16/9] md:order-1 order-2">
                <iframe
                  src="https://drive.google.com/file/d/1Yz_KHxjO415n9gTwkOjHHmqRWk-Qfhu0/preview"
                  title="Massage Therapy"
                  className="w-full h-full rounded-xl shadow-lg"
                  allow="autoplay"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="md:order-2 order-1">
                <h3 className="text-3xl font-bold mb-4">Massage Therapy</h3>
                <p className="text-gray-700 text-base leading-relaxed">
                  Focuses on relaxing tight muscles in the chest, back, and neck that can
                  restrict breathing. Through Neuromuscular Re-Education and Myofascial
                  Release, we help loosen these areas, improve circulation, and enhance
                  lymphatic drainage. This reduces muscle tension around the ribcage,
                  making it easier to take deep, full breaths.
                </p>
              </div>
            </div>

            {/* Therapy 3: Emotional Release Therapy */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-4">Emotional Release Therapy</h3>
                <p className="text-gray-700 text-base leading-relaxed">
                  Addresses stress and anxiety, which are common triggers for asthma. Using
                  energy balancing and Therapy Localization (TL), we identify emotional
                  blockages that may be contributing to breathing difficulties. By releasing
                  stored stress and promoting relaxation, patients often experience fewer
                  asthma attacks and better overall respiratory health.
                </p>
              </div>
              <div className="w-full aspect-[16/9]">
                <iframe
                  src="https://drive.google.com/file/d/1tccwL_-Bmg4fdbABqcilpltzU8JaLgJ-/preview"
                  title="Emotional Release Therapy"
                  className="w-full h-full rounded-xl shadow-lg"
                  allow="autoplay"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Book Appointment Section */}
        <motion.section variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className="bg-blue-100 py-20 px-4">
        <div className="max-w-xl mx-auto text-center mb-10">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-3">Book an appointment</h2>
        <p className="text-md text-gray-700">
          Take the first step towards better health. Book your consultation today and let our experts help you find relief and healing.
        </p>
          </div>

          <form
            ref={formRef}
            onSubmit={sendEmail}
            className="max-w-xl mx-auto space-y-6"
          >
            <input
              type="text"
              name="first_name"
              placeholder="First name"
              required
              className="w-full bg-transparent border-b border-gray-400 focus:outline-none py-2 px-1"
            />
            <input
              type="text"
              name="last_name"
              placeholder="Last name"
              required
              className="w-full bg-transparent border-b border-gray-400 focus:outline-none py-2 px-1"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="w-full bg-transparent border-b border-gray-400 focus:outline-none py-2 px-1"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              required
              className="w-full bg-transparent border-b border-gray-400 focus:outline-none py-2 px-1"
            />
            <input
              type="date"
              name="date"
              required
              className="w-full bg-transparent border-b border-gray-400 focus:outline-none py-2 px-1 text-gray-600"
            />
            <textarea
              name="message"
              placeholder="Tell us about your concern"
              rows="3"
              required
              className="w-full bg-transparent border-b border-gray-400 focus:outline-none py-2 px-1 resize-none"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-3 rounded-full hover:bg-blue-700 transition"
            >
              Book
            </button>
          </form>
          </motion.section>

        {/* Meet the Doctor Section */}
        <motion.section variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className="bg-blue-100 py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-2">Meet the Doctor</h2>
            <p className="text-lg font-medium text-gray-800 mb-8">
              Introducing Dr. Steven Ellsworth, Creator of Chiro Healot Asthma Solutions
            </p>

            <div className="flex justify-center mb-10">
              <img
                src={docSteven}
                alt="Dr. Steven Ellsworth"
                className="border border-gray-700 max-w-sm w-full"
              />
            </div>

            <p className="text-gray-800 text-base max-w-3xl mx-auto leading-relaxed text-justify">
              Dr. Steven Ellsworth is a dedicated chiropractor with a passion for helping individuals achieve
              lasting relief from respiratory challenges. As the creator of Chiro Healot Asthma Solutions, he
              combines his extensive clinical experience with a holistic approach to wellness, focusing on
              non-invasive techniques that address the root causes of asthma. Dr. Ellsworth’s commitment to
              ongoing research and professional development ensures that his practice remains at the
              forefront of innovative care, while his compassionate, patient-centered philosophy fosters
              trust and confidence in those seeking healthier, more vibrant lives. Through Chiro Healot, Dr.
              Ellsworth continues to empower patients to breathe easier and embrace a renewed sense of
              well-being.
            </p>
          </div>
          <div className="max-w-6xl mx-auto mt-20">
            <div className="relative w-full pb-[56.25%] h-0 overflow-hidden rounded-xl shadow-lg">
              <iframe
                src="https://drive.google.com/file/d/16mEUp5BEL6Sxfu9v9XcOyjtg3I_6RkSm/preview"
                title="ChiroHealot Asthma Solutions"
                className="absolute top-0 left-0 w-full h-full"
                allow="autoplay"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </motion.section>

        <motion.section variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className="bg-white py-20 px-4 md:px-12">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact us</h2>
          <p className="text-lg text-gray-700 mb-12 max-w-2xl mx-auto">
            Ready to take control of your respiratory health and live more comfortably? Reach out to us today!
          </p>

          {/* Branches */}
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* CDO Branch */}
            <div className="flex flex-col items-center">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3946.641927119145!2d124.61737097586219!3d8.436779097976245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32ff8d8240092ff1%3A0x5b3336455dc41ee!2sChiro-Healot!5e0!3m2!1sen!2sph!4v1744876596358!5m2!1sen!2sph"
                width="100%"
                height="300"
                className="rounded-xl border shadow"
                allowFullScreen=""
                title="CDO Branch"
                loading="lazy"
              ></iframe>
              <div className="text-center mt-6">
                <h3 className="font-semibold text-lg">CDO UPTOWN BRANCH</h3>
                <p className="text-sm mt-2">
                  3rd floor E-MAX Building, Mastersons Avenue, Upper,<br />
                  Cagayan de Oro, 9000 Misamis Oriental<br />
                  <span className="block mt-1">chirohealot.cdo@gmail.com</span>
                  <span>(+63)917-147-3309</span>
                </p>
              </div>
            </div>

            {/* Manticao Branch */}
            <div className="flex flex-col items-center">
              <iframe
                src="https://www.google.com/maps/embed?pb=!4v1745194084286!6m8!1m7!1s7W4TRB3HHFZ9yqVPmy9DDA!2m2!1d8.40565568378864!2d124.2930271357969!3f243.99444433117162!4f-14.39125491588014!5f0.7820865974627469"
                width="100%"
                height="300"
                className="rounded-xl border shadow"
                allowFullScreen=""
                loading="lazy"
                title="Manticao Branch"
              ></iframe>
              <div className="text-center mt-6">
                <h3 className="font-semibold text-lg">MANTICAO BRANCH</h3>
                <p className="text-sm mt-2">
                  Butuan - Cagayan de Oro - Iligan Rd, Manticao, Misamis Oriental<br />
                  <span className="block mt-1">chirohealot.ph@gmail.com</span>
                  <span>(+63)927-392-0999</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        </motion.section>
      <Footer />
        </div>
  );
};

export default Home;