import React from "react";
import "./PrivacyandPolicy.css"; 

const PrivacyPolicy = () => {
  return (
    <div className="policy-container">
      <h1 className="policy-title">Privacy Policy</h1>
      
      {/* Section 1: Introduction */}
      <div className="policy-section">
        <h2 className="section-headline">1. Our Promise to You</h2>
        <p className="section-paragraph">
          Your privacy is very important to us at SafarMantra. This page explains how we collect, use, and protect your information when you use our website. By using our services, you agree to the rules in this policy.
        </p>
      </div>
      
      {/* Section 2: Information We Collect */}
      <div className="policy-section">
        <h2 className="section-headline">2. The Information We Collect</h2>
        <p className="section-paragraph">
          We collect information to help you book trips and to make our service better. This includes:
        </p>
        <ul className="policy-list">
          <li><strong>Personal Details:</strong> Your name, email, phone number, and any other information you provide when you create an account or book a trip.</li>
          <li><strong>Payment Information:</strong> Your payment details are collected to process your booking. We use a secure, third-party payment service, and we do not store your full payment information on our servers.</li>
          <li><strong>Website Use Data:</strong> We collect basic information about how you use our website, like your IP address, browser type, and the pages you visit. This helps us improve our website and fix problems.</li>
        </ul>
      </div>
      
      {/* Section 3: How We Use Your Information */}
      <div className="policy-section">
        <h2 className="section-headline">3. How We Use Your Information</h2>
        <p className="section-paragraph">
          We use your information for these purposes:
        </p>
        <ul className="policy-list">
          <li>To manage your account and bookings.</li>
          <li>To share your details with the local agent so they can prepare for your trip.</li>
          <li>To send you updates about your booking.</li>
          <li>To improve our website and the trips we offer.</li>
          <li>For security, to prevent fraud and protect our users.</li>
        </ul>
      </div>

      {/* Section 4: Sharing Your Information */}
      <div className="policy-section">
        <h2 className="section-headline">4. How We Share Your Information</h2>
        <p className="section-paragraph">
          We only share your information with trusted partners for specific reasons:
        </p>
        <ul className="policy-list">
          <li><strong>With Local Agents:</strong> We share your name and contact details with the agent you book a trip with. This is so they can contact you and manage your trip.</li>
          <li><strong>With Service Providers:</strong> We use other companies to help us run our service, like our secure payment processor. They only get the information they need to do their job.</li>
          <li><strong>For Legal Reasons:</strong> We may share your information if we are required to by law.</li>
        </ul>
      </div>

      {/* Section 5: Your Choices and Rights */}
      <div className="policy-section">
        <h2 className="section-headline">5. Your Choices and Rights</h2>
        <p className="section-paragraph">
          You have control over your personal information:
        </p>
        <ul className="policy-list">
          <li>You can ask to see a copy of the information we have about you.</li>
          <li>You can ask us to fix any wrong information.</li>
          <li>You can ask us to delete your account and information.</li>
          <li>You can choose not to receive marketing emails from us at any time.</li>
        </ul>
      </div>

      {/* Section 6: Data Security */}
      <div className="policy-section">
        <h2 className="section-headline">6. How We Keep Your Data Safe</h2>
        <p className="section-paragraph">
          We use security measures to protect your information from being lost or accessed by the wrong people. However, no system on the internet is 100% secure. We work hard to keep your data safe, but we cannot promise complete security.
        </p>
      </div>

      {/* Section 7: Changes to This Policy */}
      <div className="policy-section">
        <h2 className="section-headline">7. Changes to This Policy</h2>
        <p className="section-paragraph">
          We may update this policy in the future. We will post any changes on this page. By continuing to use our website, you agree to the new terms. We recommend you check this page now and then for updates.
        </p>
      </div>

      {/* Section 8: Contact Us */}
      <div className="policy-section">
        <h2 className="section-headline">8. Questions?</h2>
        <p className="section-paragraph">
          If you have any questions about this Privacy Policy, please contact us. We're here to help.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;