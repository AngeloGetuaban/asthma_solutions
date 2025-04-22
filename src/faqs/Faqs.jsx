import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet-async"; // ✅ added

const faqs = [
  {
    question: "What is ChiroHealot’s approach to asthma relief?",
    answer:
      "ChiroHealot uses a holistic, non-invasive chiropractic model that targets the spine, nervous system, and soft tissues to reduce asthma symptoms and improve respiratory function naturally.",
  },
  {
    question: "Do I need a doctor’s referral to start therapy?",
    answer:
      "No referral is required. Anyone seeking natural asthma management or wellness support can directly book a consultation with us.",
  },
  {
    question: "How many sessions will I need?",
    answer:
      "Therapy plans vary per individual. Most clients begin feeling results after 3–5 sessions. We customize the frequency based on your condition, goals, and body response.",
  },
  {
    question: "Is chiropractic therapy painful?",
    answer:
      "Not at all. Our techniques are gentle and precise, especially Torque Release Technique (TRT), which is light-touch and safe for all ages—even children.",
  },
  {
    question: "Can children with asthma benefit from these therapies?",
    answer:
      "Absolutely. Pediatric chiropractic care can help open up the chest and support the immune and nervous systems to manage asthma and allergies in children.",
  },
  {
    question: "What’s the difference between the therapies you offer?",
    answer:
      "Each therapy targets a specific root cause—some focus on structural alignment, others on emotional blockages or detoxification. We help you find the right match based on your symptoms.",
  },
  {
    question: "Do you treat conditions beyond asthma?",
    answer:
      "Yes, we support clients with allergies, chronic fatigue, scoliosis, posture issues, stress-related disorders, and more—our therapies promote whole-body healing.",
  },
  {
    question: "Are the therapies covered by insurance?",
    answer:
      "Currently, ChiroHealot does not partner with HMO or insurance plans. However, we can provide official receipts if needed for reimbursement or documentation.",
  },
  {
    question: "How long is each session?",
    answer:
      "Session durations vary from 30 to 60 minutes depending on the therapy and your specific needs.",
  },
  {
    question: "What should I wear to my session?",
    answer:
      "Wear comfortable, loose-fitting clothing. We may request access to your back or shoulders during assessments or therapy.",
  },
  {
    question: "Can I book a session for a family member?",
    answer:
      "Yes! You can book for your children, parents, or loved ones. Just let us know during the intake form or message.",
  },
  {
    question: "Is there any downtime after therapy?",
    answer:
      "Most people feel relaxed or recharged after a session. You may be advised to rest and hydrate, especially after detox therapies.",
  },
  {
    question: "Where are your clinics located?",
    answer:
      "We have two branches: CDO Uptown (E-MAX Building, Mastersons Ave) and Manticao Branch (National Highway, Poblacion). You can view the maps on our Location page.",
  },
  {
    question: "What is Therapy Localization (TL)?",
    answer:
      "TL is a form of energy testing where we assess how your body responds to specific points or emotional triggers. It helps us find underlying causes with precision.",
  },
  {
    question: "How do I get started?",
    answer:
      "You can book via our website, social media, or contact us directly through our clinic numbers or emails. We’ll guide you every step of the way.",
  },
];

const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="bg-white text-gray-900 min-h-screen">

      <Helmet>
        <title>FAQs | ChiroHealot Asthma Support</title>
        <meta
          name="description"
          content="Got questions about our asthma therapy approach? Check our FAQs for answers about sessions, therapies, and more."
        />
        <meta property="og:title" content="FAQs | ChiroHealot Asthma Support" />
        <meta
          property="og:description"
          content="Common questions about ChiroHealot's holistic asthma relief answered."
        />
        <meta property="og:url" content="https://asthmasolutionsph.com/faqs" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://asthmasolutionsph.com/og-faqs.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <Navbar />

      <div className="pt-28 pb-20 px-6 md:px-16 max-w-5xl mx-auto">
        <header className="text-center mb-14">
          <h1 className="text-4xl font-bold mb-2">Frequently Asked Questions</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Everything you need to know about ChiroHealot’s therapies, process, and philosophy.
          </p>
        </header>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg shadow-sm overflow-hidden"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full text-left px-5 py-4 flex justify-between items-center bg-white hover:bg-gray-50 transition"
              >
                <span className="text-lg font-medium">{faq.question}</span>
                <span className="text-2xl text-green-600">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </button>
              {activeIndex === index && (
                <div className="px-5 pb-5 text-gray-700 text-sm leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Faqs;
