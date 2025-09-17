import React from "react";
import "./Aboutus.css";

const Aboutus = () => {
  return (
    <div className="about-us-container">
      {/* The SafarMantra Story Section */}
      <div className="about-us-section">
        <h2 className="section-headline">The SafarMantra Story</h2>
        <p className="section-paragraph">
          We believe the best trips don't have to be far away. They can be close
          to home, full of adventure and new things to see. For a long time, we
          felt that people were missing out on these local gems. Booking a
          simple weekend trip often meant endless hours of searching on
          different websites, and it was hard to know if the people providing
          the trips were trustworthy. We wanted to change that.
        </p>
        <p className="section-paragraph">
          That's why we built the SafarMantra platform. We created a solution to
          this problem by directly connecting you with local people who love
          their cities and know all the best spots. These{" "}
          <strong>local agents</strong> are not just guides; they are experts in
          their own areas, and they design unique, unforgettable trips you won't
          find anywhere else. Our main goal is to make travel simple, easy to
          afford, and a lot of fun. We are here to help you stop the difficult
          process of searching and start the exciting process of exploring. We
          are a community of travelers and experts, and we are happy to welcome
          you to our family.
        </p>
      </div>

      {/* Why We Are Different Section */}
      <div className="about-us-section">
        <h3 className="section-sub-headline">Why We Are Different</h3>
        <p className="section-paragraph">
          We are more than just a website; we are your dedicated travel partner.
          SafarMantra was built to be a reliable bridge that connects travelers
          and local experts, removing all the stress from your trip planning.
          This way, you get the best of both worlds: the ease of an online
          platform and the personal, trustworthy service of a local guide.
        </p>
        <ol className="principles-list">
          <li>
            <strong>We Focus on Passion</strong>: The best trips are always led
            by people who are truly passionate about what they do. We find and
            partner with these dedicated individuals who can't wait to share
            their local knowledge and favorite places with you. They provide the
            heart and soul of your journey.
          </li>
          <li>
            <strong>We Build Trust</strong>: We know that you need to feel safe
            and secure when you book a trip. That's why every single agent on
            our platform is carefully checked and <strong>verified</strong>. We
            review their experience, their past trips, and their customer
            reviews to make sure they meet our high standards. When you book
            with them, you can feel confident knowing you're in good hands.
          </li>
          <li>
            <strong>We Keep It Simple</strong>: You no longer have to waste time
            looking at many websites or calling different places. We put
            everything you need in one place. Our platform is designed to be
            easy to use, so you can find the perfect trip and talk directly with
            the agent. It's all about making your life easier so you can enjoy
            your travels.
          </li>
          <li>
            <strong>We Support Local</strong>: By choosing SafarMantra, you are
            directly helping local communities and small businesses. Your
            booking supports the families and individuals who are passionate
            about sharing their part of the world with you. It's a win-win for
            everyone involved.
          </li>
          <li>
            <strong>We are a Community</strong>: We are building a community of
            travelers who value authentic experiences and a community of agents
            who value sharing their passion. Our platform allows for a direct,
            personal connection that goes beyond a simple transaction.
          </li>
        </ol>
      </div>

      {/* How It Works Section */}
      <div className="about-us-section">
        <h3 className="section-sub-headline">How It Works</h3>
        <p className="section-paragraph">
          It's very easy to find and book your next trip with us. Just follow
          these simple steps, and you'll be on your way to an amazing adventure:
        </p>
        <ol className="how-it-works-list">
          <li>
            <strong>Find Your Trip</strong>: Start by looking through our list
            of amazing trips. You can search for what you like, whether it's a
            thrilling adventure in the mountains, a peaceful trip to a hidden
            lake, or a cultural tour of a historic city. Our categories help you
            find exactly what you're looking for, no matter your interest.
          </li>
          <li>
            <strong>Talk to an Expert</strong>: When you find a trip that
            catches your eye, you can contact the local agent directly. They are
            the experts and will answer all your questions. This direct
            communication allows you to get personalized advice and even plan a
            trip that is just right for you.
          </li>
          <li>
            <strong>Book Your Trip</strong>: After you've talked to the agent
            and are happy with the plan, you finalize your booking directly with
            them. We provide the platform for you to find each other, and they
            give you a great and unforgettable experience. We stay out of the
            way so you can build a direct relationship with your travel partner.
          </li>
          <li>
            <strong>Enjoy Your Adventure</strong>: Once your booking is
            complete, all that's left to do is get ready for your trip. You can
            relax knowing all the details are handled by an expert who is ready
            to welcome you.
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Aboutus;
