// WhyChoose.jsx
import React from "react";

const WhyChoose = () => {
  const points = [
    { title: "Trusted Local Agents", desc: "All agents are verified for your safety." },
    { title: "Affordable Prices", desc: "Get budget-friendly city trips & rentals." },
    { title: "Instant Booking", desc: "Book your trip in just a few clicks." },
    { title: "Secure Payments", desc: "Multiple safe & reliable payment options." },
  ];

  return (
    <section id="why-choose" className="wrapper bg-img" style={{ backgroundImage: `url("src/images/banner2.jpg")` }}>
      <div className="inner">
        <h2 data-aos="fade-up">Why Choose SafarMantra?</h2>
        <div className="grid">
          {points.map((p, i) => (
            <div key={i} className="box" data-aos="fade-up" data-aos-delay={i * 200}>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
