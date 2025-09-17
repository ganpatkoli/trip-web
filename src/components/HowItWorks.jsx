import React from "react";

const HowItWorks = () => {
  return (
    <section id="how" className="wrapper style1">
      <div className="inner">
        <header className="align-center">
          <h2>How It Works</h2>
        </header>
        <div className="flex flex-4">
          <div className="box">
            <h3>Browse Trips</h3>
            <p>Search by city, interests, or budget.</p>
          </div>
          <div className="box">
            <h3>Choose & Book</h3>
            <p>Secure booking with verified local agents.</p>
          </div>
          <div className="box">
            <h3>Enjoy Journey</h3>
            <p>Hassle-free travel, memorable experience.</p>
          </div>
          <div className="box">
            <h3>Customer Support</h3>
            <p>24/7 assistance and easy cancellation policy.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
