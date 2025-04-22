import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";

const Footer = () => {
  return (
    <footer className="text-white py-12 px-6" style={{ backgroundColor: "#D6C7FF" }}>
      <div className="max-w-7xl mx-auto grid gap-10 grid-cols-1 md:grid-cols-3 text-center md:text-left">

        {/* Left Column - Logo and Description */}
        <div>
          <img src={logo} alt="Chiro Healot" className="mb-4 h-20 mx-auto md:mx-0" />
          <p className="text-sm leading-relaxed text-gray-900">
            Chiro Healot is an innovative, non-invasive approach that harnesses chiropractic techniques
            to help individuals find lasting relief from asthma symptoms and improve overall respiratory health.
          </p>
          <div className="flex justify-center md:justify-start space-x-3 mt-6">
            <a
              href="https://www.facebook.com/drstevenchirohealot"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="bg-gray-900 hover:bg-white/30 p-2 rounded"
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a
              href="https://www.instagram.com/drstevenchirohealot/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="bg-gray-900 hover:bg-white/30 p-2 rounded"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              href="https://www.tiktok.com/@drstevenchirohealot"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="bg-gray-900 hover:bg-white/30 p-2 rounded"
            >
              <FontAwesomeIcon icon={faTiktok} />
            </a>
          </div>
          <p className="mt-6 text-sm text-gray-900">© 2025. All Rights Reserved.</p>
        </div>

        {/* Center Column - Menu */}
        <div>
          <h4 className="text-lg font-semibold mb-3 text-gray-900">Menu</h4>
          <ul className="space-y-2 text-sm text-gray-900">
            <li>
              <Link to="/#services" className="hover:underline">Services</Link>
            </li>
            <li>
              <Link to="/#about" className="hover:underline">About</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Right Column - Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-3 text-gray-900">Contact</h4>
          <ul className="space-y-4 text-sm text-gray-900">
            <li>
              <div className="flex items-start justify-center md:justify-start gap-2">
                <span>📍</span>
                <span>
                  3rd floor E-MAX Building, Mastersons Avenue, Upper,<br />
                  Cagayan de Oro, 9000 Misamis Oriental
                </span>
              </div>
              <p className="mt-1 flex justify-center md:justify-start items-center gap-2">📧 chirohealot.cdo@gmail.com</p>
              <p className="mt-1 flex justify-center md:justify-start items-center gap-2">📞 (+63)917-147-3309</p>
            </li>
            <li className="mt-4">
              <div className="flex items-start justify-center md:justify-start gap-2">
                <span>📍</span>
                <span>
                  National Highway, Brgy. Poblacion,<br />
                  Manticao, Misamis Oriental
                </span>
              </div>
              <p className="mt-1 flex justify-center md:justify-start items-center gap-2">📧 chirohealot.ph@gmail.com</p>
              <p className="mt-1 flex justify-center md:justify-start items-center gap-2">📞 (+63)927-392-0999</p>
            </li>
          </ul>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
