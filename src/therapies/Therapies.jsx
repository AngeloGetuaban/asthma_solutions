import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
// ChiroHealot therapy images
import structuralRenewal from "../images/structural_renewal.webp";
import bodyRejuvenation from "../images/body_rejuvenation.webp";
import bodyRestoration from "../images/body_restoration.webp";
import healingTouch from "../images/healing_touch.webp";
import lymphaticDetox from "../images/lymphatic_detox.webp";
import faceBodyMassage from "../images/face_body_massage.webp";
import footReflexology from "../images/foot_reflexology.webp";
import { Helmet } from "react-helmet-async"; // ✅ added  

const therapies = [
  {
    title: "Structural Renewal Therapy",
    label: "Bestseller",
    outcome: "Postural realignment, spinal decompression, long-term musculoskeletal balance",
    description: `Structural Renewal Therapy goes beyond deep tissue massage. Using advanced neuromuscular re-education and joint mobilization, it corrects misalignments that interfere with breathing and movement. It opens the chest cavity and improves oxygen intake.`,
    details: [
      "✅ Ideal for: posture correction, back/neck pain, chest tension",
      "✅ Techniques: Torque Release Technique (TRT), joint mobilization"
    ],
    image: structuralRenewal,
  },
  {
    title: "Body Rejuvenation",
    outcome: "Circulatory improvement, cellular refreshment, systemic energy reset",
    description: `Combining massage, energy balancing, and meridian activation, this therapy stimulates the body’s detox systems, boosts lymphatic flow, and improves oxygenation. Perfect for chronic fatigue and immune support.`,
    details: [
      "✅ Ideal for: low immunity, sluggish energy, poor circulation",
      "✅ Techniques: lymph stimulation, energy channel work"
    ],
    image: bodyRejuvenation,
  },
  {
    title: "Body Restoration",
    outcome: "Stress release, mind-body harmony, somatic calm",
    description: `This therapy integrates cranial holds, polarity techniques, and Therapy Localization (TL) to calm the nervous system, resolve emotional blocks, and help regulate breathing and overall balance.`,
    details: [
      "✅ Ideal for: stress-triggered asthma, trauma recovery",
      "✅ Techniques: energy balancing, cranial holds, TL mapping"
    ],
    image: bodyRestoration,
  },
  {
    title: "Healing Touch",
    outcome: "Energetic balance, pain relief, nervous system reset",
    description: `Rooted in Hilot wisdom and magnetic therapy, this session clears emotional congestion and spiritual fatigue. Especially helpful for patients experiencing emotional overwhelm or sleep issues.`,
    details: [
      "✅ Ideal for: emotional imbalance, sleep issues",
      "✅ Techniques: magnetic balancing, healing oils"
    ],
    image: healingTouch,
  },
  {
    title: "Lymphatic & Detox Therapy",
    outcome: "Deep purification, inflammation control, immune defense boost",
    description: `Gentle wave-like strokes promote lymphatic drainage, reduce swelling, and flush toxins. Ideal for asthma sufferers and those undergoing seasonal detox protocols.`,
    details: [
      "✅ Ideal for: detox, inflammation, immune boost",
      "✅ Techniques: rhythmic lymph drainage, abdominal flush"
    ],
    image: lymphaticDetox,
  },
  {
    title: "Face & Body Massage",
    outcome: "Facial clarity, nervous reset, improved lymph flow",
    description: `Combines facial massage with full-body therapeutic touch. Clears facial sinuses, reduces jaw tension, and restores skin vitality while deeply relaxing the nervous system.`,
    details: [
      "✅ Ideal for: sinus tension, facial fatigue, whole-body reset",
      "✅ Techniques: gua sha, neck drainage, aromatherapy"
    ],
    image: faceBodyMassage,
  },
  {
    title: "Foot Reflexology",
    outcome: "Organ support, hormonal balance, energetic grounding",
    description: `Applies pressure to foot zones linked to organs, calming the nervous system and aiding digestion, lung function, and overall balance.`,
    details: [
      "✅ Ideal for: asthma management, circulation, anxiety",
      "✅ Techniques: reflex zones, acupressure paths"
    ],
    image: footReflexology,
  }
];

const Therapies = () => {
  return (
    <div className="bg-white text-gray-900">
    <Helmet>
      <title>Our Therapies | ChiroHealot Asthma Solutions</title>
      <meta
        name="description"
        content="Explore our 7 proven therapies designed to relieve asthma naturally — from structural to emotional healing."
      />
      <meta property="og:title" content="Our Therapies | ChiroHealot Asthma Solutions" />
      <meta
        property="og:description"
        content="Learn about our holistic approach using 7 unique therapies for effective asthma relief."
      />
      <meta property="og:url" content="https://asthmasolutionsph.com/therapies" />
      <meta property="og:type" content="website" />
    </Helmet>
      <Navbar />
      <div className="pt-28 pb-16 px-6 md:px-16 max-w-6xl mx-auto">
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            7 Signature Therapies of ChiroHealot
          </h1>
          <p className="text-lg md:text-xl text-gray-600">
            Tailored treatments to restore balance, relieve pain, and rejuvenate your body.
          </p>
        </header>

        <div className="space-y-24">
          {therapies.map((therapy, idx) => (
            <div
              key={idx}
              className={`flex flex-col ${
                idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } gap-8 md:gap-14 items-center`}
            >
              {/* Image */}
              <div className="w-full md:w-1/2">
                <img
                  src={therapy.image}
                  alt={therapy.title}
                  className="rounded-xl w-full object-cover shadow-lg"
                />
              </div>

              {/* Text */}
              <div className="w-full md:w-1/2">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-semibold">
                    {idx + 1}
                  </div>
                  <h2 className="text-2xl font-semibold">
                    {therapy.title}
                    {therapy.label && (
                      <span className="ml-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-md">
                        {therapy.label}
                      </span>
                    )}
                  </h2>
                </div>
                <p className="text-sm text-gray-600 italic mb-3">
                  {therapy.outcome}
                </p>
                <p className="text-base text-gray-700 mb-4">{therapy.description}</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  {therapy.details.map((line, i) => (
                    <li key={i}>{line}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Therapies;
