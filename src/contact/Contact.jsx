import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Navbar from "../components/Navbar";
import Swal from "sweetalert2";
import { Helmet } from 'react-helmet-async';
const Contact = () => {
  
  const formRef = useRef();

  const today = new Date().toLocaleDateString("en-PH", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const sendEmail = (e) => {
    e.preventDefault();

    const form = formRef.current;

    // Send confirmation to user
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
              text: "We’ve received your request, kindly check your email for confirmation.",
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
          text: "We couldn’t send your message. Please try again later.",
          confirmButtonColor: "#DC2626",
        });
      });
  };

  return (
    <section className="min-h-screen bg-white py-20 px-6 md:px-20 text-gray-900">
      <Helmet>
      <title>Contact Us | ChiroHealot</title>
      <meta
        name="description"
        content="Reach out to ChiroHealot for inquiries, support, or bookings. We're here to help you breathe easier."
      />
      <meta property="og:title" content="Contact Us | ChiroHealot" />
      <meta
        property="og:description"
        content="Have questions or want to schedule a session? Contact ChiroHealot today!"
      />
      <meta property="og:url" content="https://asthmasolutionsph.com/contact" />
      <meta property="og:type" content="website" />
      </Helmet>
      <Navbar />
      <div className="grid md:grid-cols-3 gap-12 max-w-7xl mx-auto pt-40">
        {/* Left: Contact Form */}
        <div className="md:col-span-2">
          <h2 className="text-4xl font-bold mb-4">ChiroHealot</h2>
          <h3 className="text-2xl font-medium mb-6">Have a question for us?</h3>
          <p className="text-gray-700 mb-10">
            You know what to do! Drop us a line and we'll get back to you as soon as possible.
          </p>

          <form ref={formRef} onSubmit={sendEmail} className="space-y-5">
            <select
              name="inquiry"
              className="w-full border border-gray-300 px-4 py-3 rounded-md"
              required
            >
              <option value="">Please choose your request</option>
              <option value="Booking Inquiry">Booking Inquiry</option>
              <option value="Follow-up Appointment">Follow-up Appointment</option>
              <option value="General Question">General Question</option>
            </select>

            <input
              type="text"
              name="first_name"
              placeholder="First name"
              required
              className="w-full border border-gray-300 px-4 py-3 rounded-md"
            />
            <input
              type="text"
              name="last_name"
              placeholder="Last name"
              required
              className="w-full border border-gray-300 px-4 py-3 rounded-md"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              required
              className="w-full border border-gray-300 px-4 py-3 rounded-md"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="w-full border border-gray-300 px-4 py-3 rounded-md"
            />
            <textarea
              name="message"
              rows="4"
              placeholder="Message"
              required
              className="w-full border border-gray-300 px-4 py-3 rounded-md resize-none"
            ></textarea>

            <input type="hidden" name="date" value={today} />

            <button
              type="submit"
              className="bg-purple-700 hover:bg-purple-800 text-white px-8 py-3 rounded-full font-medium tracking-wide"
            >
              SEND
            </button>
          </form>
        </div>

        {/* Right: Clinic Contact Info */}
        <div>
          <h4 className="uppercase text-sm font-bold text-gray-700 mb-3">Contact</h4>
          <p className="mb-3 leading-relaxed">
            3rd Floor E-MAX Building, Mastersons Ave,<br />
            Upper Carmen, Cagayan de Oro City,<br />
            9000 Misamis Oriental, Philippines
          </p>
          <p className="text-purple-700 font-medium">
            chirohealot.cdo@gmail.com
          </p>
          <p className="text-gray-700 mb-6">(+63) 917-147-3309</p>

          <p className="mt-8 leading-relaxed">
            Marietta Tower, 2nd Floor,<br />
            Manuel L. Quezon Ave, Iligan City,<br />
            9200 Lanao del Norte, Philippines
          </p>
          <p className="text-purple-700 font-medium">
            chirohealot.ph@gmail.com
          </p>
          <p className="text-gray-700">(+63) 927-392-0999</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;