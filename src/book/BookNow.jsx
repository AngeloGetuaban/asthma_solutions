import React, { useState, useRef  } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { Helmet } from 'react-helmet-async';

const timeSlots = {
  regular: ["8:30 AM", "10:00 AM", "10:30 AM", "1:00 PM", "1:30 PM", "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM", "6:00 PM"],
  new: ["9:00 AM", "11:00 AM", "2:00 PM", "5:00 PM"],
};

const BookNow = () => {
  const [isNewPatient, setIsNewPatient] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const today = new Date();

  const generateDays = () => {
    const days = [];
    const monthEnd = new Date(today.getFullYear(), today.getMonth() + 1, 0);
    for (let d = 1; d <= monthEnd.getDate(); d++) {
      const date = new Date(today.getFullYear(), today.getMonth(), d);
      const isPast = date < new Date(today.toDateString());
      days.push({ day: d, full: date, isPast });
    }
    return days;
  };

  const handleDateSelect = (date) => {
    if (date.isPast) return;
    setSelectedDate(date.full);
    setSelectedTime(null);
    };

    const getTimeOptions = () => (isNewPatient ? timeSlots.new : timeSlots.regular);
    const formRef = useRef();

    const sendBookingEmail = (e) => {
      e.preventDefault();
    
      if (!selectedDate || !selectedTime) {
        Swal.fire({
          icon: "warning",
          title: "Missing Info",
          text: "Please select a date and time for your session.",
          confirmButtonColor: "#D97706",
        });
        return;
      }
    
      const form = formRef.current;
    
      const formattedDate = selectedDate.toLocaleDateString("en-PH", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    
      const patientType = isNewPatient ? "New Patient" : "Regular Patient";

      const message = `Booking Request\nPatient Type: ${patientType}\nDate: ${formattedDate}\nTime: ${selectedTime}`;
    
      // Create a hidden input to inject the message into the form
      const messageInput = document.createElement("input");
      messageInput.type = "hidden";
      messageInput.name = "message";
      messageInput.value = message;
      form.appendChild(messageInput);
    
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
            setSelectedDate(null);
            setSelectedTime(null);
            form.removeChild(messageInput);
          })
          .catch((error) => {
            console.error("Failed to send to team:", error.text);
            Swal.fire({
              icon: "warning",
              title: "Partial Success",
              text: "Message sent to user, but failed to notify our team.",
              confirmButtonColor: "#D97706",
            });
            form.reset();
            setSelectedDate(null);
            setSelectedTime(null);
            form.removeChild(messageInput);
          });
      })
      .catch((error) => {
        console.error("Email to user failed:", error.text);
        Swal.fire({
          icon: "error",
          title: "Oops!",
          text: "We couldn’t send your request. Please try again later.",
          confirmButtonColor: "#DC2626",
        });
        form.reset();
        setSelectedDate(null);
        setSelectedTime(null);
        form.removeChild(messageInput);
      });
      };
  

  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <title>Book Now | ChiroHealot Asthma Therapy</title>
        <meta
          name="description"
          content="Secure your healing appointment with ChiroHealot. Book your personalized asthma therapy session now."
        />
        <meta property="og:title" content="Book Now | ChiroHealot Asthma Therapy" />
        <meta
          property="og:description"
          content="Take the first step towards breathing freely again. Book a session at ChiroHealot."
        />
        <meta property="og:url" content="https://asthmasolutionsph.com/book-now" />
        <meta property="og:type" content="website" />
      </Helmet>
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="pt-36 pb-12 px-6 text-center bg-gradient-to-br from-green-100 to-green-50">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
            Book Your Healing Session
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Take the next step toward lasting relief and respiratory ease. Schedule your personalized ChiroHealot therapy today.
          </p>
        </section>

        {/* Booking Section */}
        <section className="px-6 md:px-16 py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
            {/* Form */}
            <form
                  ref={formRef}
                  onSubmit={sendBookingEmail}
                  className="bg-white shadow-lg rounded-xl p-6 space-y-6 md:col-span-1"
                >
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">Your Information</h2>

              <input
              type="text"
              name="first_name"
              placeholder="First name"
              required
              className="w-full border px-4 py-2 rounded"
            />
            <input
              type="text"
              name="last_name"
              placeholder="Last name"
              required
              className="w-full border px-4 py-2 rounded"
            />
              <input type="tel" placeholder="Contact Number" name='phone' className="w-full border px-4 py-2 rounded" required />
              <input type="email" placeholder="Email" name='email' className="w-full border px-4 py-2 rounded" required />

              <div className="flex items-center gap-4">
                <label className="flex items-center gap-2">
                  <input type="radio" checked={!isNewPatient} onChange={() => setIsNewPatient(false)} />
                  <span>Regular Patient</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" checked={isNewPatient} onChange={() => setIsNewPatient(true)} />
                  <span>New Patient</span>
                </label>
              </div>

              <select className="w-full border px-4 py-2 rounded" required>
                <option value="">Select Branch</option>
                <option value="cdo">CDO Uptown</option>
                <option value="manticao">Manticao</option>
              </select>

              <div>
                <p className="text-sm font-medium text-gray-600">Service:</p>
                <p className="text-md font-mono text-gray-800 mt-1">Chiro-Healot Therapy</p>
              </div>

              {selectedDate && selectedTime && (
                <div className="text-sm text-gray-700">
                  Selected: <span className="font-semibold">{selectedDate.toDateString()} at {selectedTime}</span>
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-green-600 text-white py-3 rounded-full hover:bg-green-700 transition"
              >
                Confirm Booking
              </button>
            </form>

            {/* Calendar */}
            <div className="bg-white p-6 shadow-lg rounded-xl md:col-span-1">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Choose a Date</h3>
              <div className="grid grid-cols-7 gap-2 text-center">
                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day, idx) => (
                  <div key={idx} className="text-xs font-semibold text-gray-500">{day}</div>
                ))}
                {generateDays().map((day, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleDateSelect(day)}
                    disabled={day.isPast}
                    className={`text-sm p-2 rounded transition-all duration-200 ${
                      day.isPast
                        ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                        : selectedDate?.getDate() === day.day
                        ? "bg-green-600 text-white"
                        : "bg-gray-50 hover:bg-green-100 text-gray-800"
                    }`}
                  >
                    {day.day}
                  </button>
                ))}
              </div>
            </div>

            {/* Time Slots */}
            <div className="bg-white p-6 shadow-lg rounded-xl md:col-span-1">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Choose a Time</h3>
              <div className="flex flex-wrap gap-4">
                {getTimeOptions().map((time, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedTime(time)}
                    className={`px-4 py-2 rounded text-sm border transition ${
                      selectedTime === time
                        ? "bg-green-600 text-white"
                        : "bg-gray-100 hover:bg-green-100"
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BookNow;
