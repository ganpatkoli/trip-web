import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const menuRef = useRef(null);

  // autoplay video logic
  const videoRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const videos = [
    "../images/vdo1.mp4",
    "../images/vdo2.mp4",
    "../images/vdo3.mp4",
    "../images/vdo4.mp4",
    "../images/vdo5.mp4",
  ];
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.85; // smooth slow motion
    }
  }, [currentIndex]);

  const handleEnded = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 < videos.length ? prevIndex + 1 : 0
    );
  };

  // navbar toggle logic
  const handleMenuClick = (event) => {
    event.preventDefault();
    setToggle(true);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setToggle(false);
      }
    };
    if (toggle) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [toggle]);

  return (
    <>
      {/* Background Video */}
      <video
        ref={videoRef}
        src={videos[currentIndex]}
        autoPlay
        muted
        playsInline
        onEnded={handleEnded}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          // height: "100%",
          objectFit: "cover",
          zIndex: -2,
        }}
      />

      {/* Dark Overlay */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgba(0,0,0,0.7)", // yaha se dark ka control hai
          zIndex: -1,
        }}
      />

   
      <section
        id="banner"
        className="bg-img"
      // style={{ backgroundImage: `url("src/images/banner.jpg")` }}
      >
        <div className="inner">
          <header>
            <h1>
              Safar - Mantra <br />
            </h1>
            <h2> The Best Way to Travel</h2>

            <h5>
              Want to have an incredible trip? We connect you with local experts
              who plan every detail. Get ready to travel, enjoy, and have fun.
              Your adventure is ready.
            </h5>
          </header>
        </div>
        <a href="#one" className="more">
          Learn More
        </a>
      </section>
    </>
  );
};

export default Navbar;
