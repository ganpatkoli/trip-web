import React from "react";
import "./TermsandCondtion.css"; 

const TermsAndConditions = () => {
  return (
    <div className="terms-container">
      <h1 className="terms-title">SafarMantra Terms & Conditions</h1>
      
      {/* Section 1: About This Agreement */}
      <div className="terms-section">
        <h2 className="section-headline">1. About This Agreement</h2>
        <p className="section-paragraph">
          Welcome to SafarMantra. By using our website and services, you agree to follow the rules in this agreement. These rules are here to protect you, our travel agents, and us. If you don't agree with these terms, please do not use our website.
        </p>
      </div>
      
      {/* Section 2: What SafarMantra Does */}
      <div className="terms-section">
        <h2 className="section-headline">2. What SafarMantra Does</h2>
        <p className="section-paragraph">
          SafarMantra is a platform. We are like a trusted marketplace. We connect you, the traveler, with local travel agents who offer unique trips. When you book a trip, you are entering a direct agreement with the agent. SafarMantra is not the travel provider.
        </p>
      </div>
      
      {/* Section 3: Your SafarMantra Account */}
      <div className="terms-section">
        <h2 className="section-headline">3. Your SafarMantra Account</h2>
        <p className="section-paragraph">
          You must be at least 18 years old to create an account. You are responsible for everything that happens on your account. Please keep your login details safe and don't share them with anyone. If you find out that someone is using your account without your permission, please tell us right away.
        </p>
      </div>
      
      {/* Section 4: Booking and Payments */}
      <div className="terms-section">
        <h2 className="section-headline">4. Booking and Payments</h2>
        <p className="section-paragraph">
          When you book a trip on our website, you agree to the price and all the trip details shown by the agent. All payments are processed securely through our platform. We will send you a confirmation once your booking is complete.
        </p>
      </div>
      
      {/* Section 5: Cancellations and Refunds */}
      <div className="terms-section">
        <h2 className="section-headline">5. Cancellations and Refunds</h2>
        <p className="section-paragraph">
          Each trip has its own cancellation policy set by the local agent. You must read and understand this policy before you book. SafarMantra cannot guarantee a refund if you cancel your trip, as it depends on the agent’s specific rules. If you have an issue with a refund, we will do our best to help you work with the agent.
        </p>
      </div>

      {/* Section 6: Your Responsibilities as a Traveler */}
      <div className="terms-section">
        <h2 className="section-headline">6. Your Responsibilities as a Traveler</h2>
        <ul className="terms-list">
          <li><strong>Be Prepared:</strong> It is your job to have all the necessary documents for your trip, like ID or permits.</li>
          <li><strong>Behave Respectfully:</strong> You must act responsibly and respectfully during your trip. The local agent has the right to refuse service if your behavior is a problem.</li>
          <li><strong>Your Safety:</strong> Your safety is important. You are responsible for your own actions and well-being during the trip. SafarMantra is not responsible for any accidents, injuries, or loss of personal belongings.</li>
        </ul>
      </div>

      {/* Section 7: Our Responsibility */}
      <div className="terms-section">
        <h2 className="section-headline">7. Our Responsibility</h2>
        <ul className="terms-list">
          <li>We work hard to make sure our website is safe, secure, and works correctly.</li>
          <li>We make sure all the agents on our platform are verified and trustworthy.</li>
          <li>We will provide you with all the information we have about the trip and the agent.</li>
        </ul>
      </div>

      {/* Section 8: Website Content */}
      <div className="terms-section">
        <h2 className="section-headline">8. Website Content</h2>
        <p className="section-paragraph">
          All the content on the SafarMantra website, including text, photos, logos, and designs, belongs to us. You are not allowed to use our content without our written permission.
        </p>
      </div>

      {/* Section 9: Changes to These Terms */}
      <div className="terms-section">
        <h2 className="section-headline">9. Changes to These Terms</h2>
        <p className="section-paragraph">
          We may change these terms from time to time. When we do, we will update this page. The new terms will be effective as soon as they are posted. By continuing to use our website, you agree to any new terms.
        </p>
      </div>

      {/* Section 10: Questions? */}
      <div className="terms-section">
        <h2 className="section-headline">10. Questions?</h2>
        <p className="section-paragraph">
          If you have any questions about these terms or about our service, please contact us. We're here to help.
        </p>
      </div>

    </div>
  );
};

export default TermsAndConditions;