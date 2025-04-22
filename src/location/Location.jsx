import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet-async"; // ✅ added

const locations = [
  {
    branch: "CDO Uptown Clinic",
    address: `3rd Floor E-MAX Building, Mastersons Ave,\nUpper Carmen, Cagayan de Oro City,\n9000 Misamis Oriental, Philippines`,
    email: "chirohealot.cdo@gmail.com",
    phone: "+63 917-147-3309",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3946.641927119145!2d124.61737097586219!3d8.436779097976245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32ff8d8240092ff1%3A0x5b3336455dc41ee!2sChiro-Healot!5e0!3m2!1sen!2sph!4v1744876596358!5m2!1sen!2sph",
  },
  {
    branch: "Manticao Branch",
    address: `National Highway, Brgy. Poblacion,\nManticao, Misamis Oriental,\n90212 Philippines`,
    email: "chirohealot.ph@gmail.com",
    phone: "+63 927-392-0999",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!4v1745194084286!6m8!1m7!1s7W4TRB3HHFZ9yqVPmy9DDA!2m2!1d8.40565568378864!2d124.2930271357969!3f243.99444433117162!4f-14.39125491588014!5f0.7820865974627469",
  },
];

const Location = () => {
  return (
    <div className="bg-white text-gray-900">

      <Helmet>
        <title>Our Clinics | ChiroHealot Branch Locations</title>
        <meta
          name="description"
          content="Visit ChiroHealot at our CDO Uptown or Manticao clinic. View addresses, hours, and contact info."
        />
        <meta property="og:title" content="Our Clinics | ChiroHealot Locations" />
        <meta
          property="og:description"
          content="Find the ChiroHealot clinic nearest you. We're here to serve your asthma care needs."
        />
        <meta property="og:url" content="https://asthmasolutionsph.com/location" />
        <meta property="og:type" content="website" />
      </Helmet>
      <Navbar />
      <div className="pt-28 pb-20 px-6 md:px-20 max-w-7xl mx-auto">
        <header className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-3">Visit Our Clinics</h1>
          <p className="text-gray-600 text-lg max-w-xl mx-auto">
            Find us at our two welcoming locations — ready to support your journey to better breathing and whole-body wellness.
          </p>
        </header>

        <div className="space-y-20">
          {locations.map((loc, index) => (
            <div
              key={index}
              className="grid md:grid-cols-2 gap-12 items-start border border-gray-200 p-6 md:p-10 rounded-2xl shadow-sm hover:shadow-md transition"
            >
              {/* Contact Info */}
              <div>
                <h2 className="text-2xl font-semibold text-green-700 mb-2">{loc.branch}</h2>
                <p className="whitespace-pre-line text-gray-700 mb-4">{loc.address}</p>
                <p className="text-sm">
                  📧{" "}
                  <a href={`mailto:${loc.email}`} className="text-blue-600 hover:underline">
                    {loc.email}
                  </a>
                </p>
                <p className="text-sm mt-1">
                  📞{" "}
                  <a href={`tel:${loc.phone}`} className="text-blue-600 hover:underline">
                    {loc.phone}
                  </a>
                </p>
              </div>

              {/* Map Embed */}
              <div className="w-full h-[300px] md:h-full overflow-hidden rounded-xl shadow-md">
                <iframe
                  src={loc.mapSrc}
                  width="100%"
                  height="100%"
                  allowFullScreen=""
                  loading="lazy"
                  className="w-full h-full border-none"
                  title={`Map - ${loc.branch}`}
                ></iframe>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Location;
