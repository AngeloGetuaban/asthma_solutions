import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./home/Home";
import Contact from "./contact/Contact";
import Therapies from "./therapies/Therapies";
import Location from "./location/Location";
import Faqs from "./faqs/Faqs";
import BookNow from "./book/BookNow";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/therapies" element={<Therapies />} />
        <Route path="/location" element={<Location />} />
        <Route path="/Faqs" element={<Faqs />} />
        <Route path="/book-now" element={<BookNow />} />
        {/* Add more pages/routes here later */}
      </Routes>
    </Router>
  );
}

export default App;