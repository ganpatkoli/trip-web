import React, { useState } from "react";
import "./PopularTrips.css";

const popularTrips = [
  {
    headline: "Indore to Kalakund",
    subtitle: "2-Day Adventure Trek",
    description: "Escape the city noise with an exciting 2-day trip to Kalakund. Enjoy a scenic train ride, a night in a cozy tent, a bonfire with a DJ, and some local trekking. It's the perfect weekend escape.",
    imageUrl: "src/images/banner3.jpg",
  },
  {
    headline: "Jaipur",
    subtitle: "The Pink City Getaway",
    description: "Experience the royal history and vibrant culture of Jaipur. This trip includes a visit to majestic forts, colorful markets, and delicious Rajasthani food. Discover the beauty of the Pink City with a local expert.",
    imageUrl: "src/images/banner4.jpg",
  },
  {
    headline: "Munnar",
    subtitle: "The Green Hills Retreat",
    description: "Need a peaceful break? Travel to Munnar and get lost in its beautiful tea plantations and misty hills. Enjoy a calm, relaxing trip away from the hustle, surrounded by nature and fresh air.",
    imageUrl: "src/images/banner1.jpg",
  },
  {
    headline: "Goa",
    subtitle: "Coastal Charms & Fun",
    description: "Indulge in Goa's sun-kissed beaches, vibrant nightlife, and Portuguese heritage. From serene sunsets to thrilling water sports, Goa has it all for an unforgettable holiday.",
    imageUrl: "src/images/banner5.jpg",
  },
  {
    headline: "Rishikesh",
    subtitle: "Yoga & Adventure Capital",
    description: "Find your inner peace and adrenaline rush in Rishikesh. Explore ancient ashrams, brave the rapids with river rafting, and enjoy scenic treks in the Himalayan foothills.",
    imageUrl: "src/images/banner3.jpg",
  },
  {
    headline: "Udaipur",
    subtitle: "City of Lakes & Palaces",
    description: "Step into royalty in Udaipur. Explore magnificent palaces, romantic lakes, and vibrant bazaars. A truly majestic experience in the heart of Rajasthan.",
    imageUrl: "src/images/banner5.jpg",
  },
  {
    headline: "Manali",
    subtitle: "Himalayan Hill Station",
    description: "Bask in the beauty of Manali, surrounded by snow-capped peaks and lush valleys. Enjoy adventure sports, local markets, and peaceful nature walks. Your perfect mountain retreat awaits.",
    imageUrl: "src/images/banner1.jpg",
  },
  {
    headline: "Coorg",
    subtitle: "Scotland of India",
    description: "Immerse yourself in the misty hills and coffee plantations of Coorg. Discover serene waterfalls, lush greenery, and the rich culture of this beautiful South Indian gem.",
    imageUrl: "src/images/banner.jpg",
  },
  {
    headline: "Hampi",
    subtitle: "Ancient Ruins & History",
    description: "Explore the fascinating ruins of Hampi, a UNESCO World Heritage site. Wander among ancient temples, impressive boulders, and captivating historical narratives of the Vijayanagara Empire.",
    imageUrl: "src/images/banner6.jpg",
  },
  {
    headline: "Darjeeling",
    subtitle: "Queen of the Hills",
    description: "Experience the charm of Darjeeling with its iconic tea estates, the historic Toy Train, and breathtaking views of the Kanchenjunga. A serene escape in the Eastern Himalayas.",
    imageUrl: "src/images/banner2.jpg",
  },
  {
    headline: "Varanasi",
    subtitle: "Spiritual Ganges Journey",
    description: "Witness the spiritual heart of India in Varanasi. Experience ancient rituals along the Ganges ghats, explore narrow alleys, and immerse yourself in a city rich with devotion and history.",
    imageUrl: "src/images/banner2.jpg",
  },
  {
    headline: "Amritsar",
    subtitle: "Golden Temple's Glory",
    description: "Visit the revered Golden Temple, the spiritual center of Sikhism. Explore the vibrant city of Amritsar, indulge in delicious Punjabi cuisine, and witness the patriotic Wagah Border ceremony.",
    imageUrl: "src/images/banner.jpg",
  },
];

const PopularTripsSection = () => {
  const [visibleTripsCount, setVisibleTripsCount] = useState(6);
  const totalTrips = popularTrips.length;
  const hasMoreTrips = visibleTripsCount < totalTrips;

  const handleViewMore = () => {
    setVisibleTripsCount((prevCount) => prevCount + 6);
  };

  return (
    <div className="popular-trips-container">
      <div className="section-header">
        <h2 className="section-title">Popular Trips</h2>
        <p className="section-subtitle">Discover Your Next Adventure</p>
      </div>

      <div className="trip-cards-grid">
        {popularTrips.slice(0, visibleTripsCount).map((trip, index) => (
          <div
            className="popular-trip-card"
            key={index}
            style={{ backgroundImage: `url(${trip.imageUrl})` }}
          >
            <div className="card-overlay">
              <div className="card-content">
                <h3 className="card-headline">{trip.headline}</h3>
                <p className="card-subtitle">{trip.subtitle}</p>
                <p className="card-description">{trip.description}</p>
              </div>
              <div className="card-footer">
                <a href="#" className="view-details-button">
                  View Details
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {hasMoreTrips && (
        <div className="view-more-section">
          <button className="view-more-button" onClick={handleViewMore}>
            View More
          </button>
        </div>
      )}

      <div className="cta-section">
        <h2 className="cta-headline">Ready for a Great Trip?</h2>
        <p className="cta-description">
          Your perfect trip is just a click away. We’ve made it simple to find
          and book your next adventure with trusted local agents. Stop dreaming
          and start traveling.
        </p>
        <a href="#" className="cta-button">
          Find Your Trip Now
        </a>
      </div>
    </div>
  );
};

export default PopularTripsSection;