import React from "react";

const faqs = [
  {
    q: "How do I book a trip?",
    a: "Browse trips → Select your preferred one → Complete payment → Get confirmation.",
  },
  {
    q: "Are the agents verified?",
    a: "Yes — all agents go through verification including identity & reviews.",
  },
  {
    q: "What’s the cancellation policy?",
    a: "Full refund if cancelled before deadline, partial/no refund after.",
  },
  {
    q: "Do you provide pick-up / drop-off?",
    a: "Some agents do — check on the trip detail page.",
  },
];

const FAQs = () => {
  return (
    <section id="faqs" className="wrapper style1">
      <div className="inner">
        <header className="align-center">
          <h2>FAQs</h2>
        </header>
        <ul>
          {faqs.map((f, idx) => (
            <li key={idx}>
              <strong>{f.q}</strong>
              <p>{f.a}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FAQs;
