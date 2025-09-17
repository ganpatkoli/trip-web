import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const menuRef = useRef(null);

  // autoplay video logic
  const videoRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const videos = [
    "src/images/vdo1.mp4",
    "src/images/vdo2.mp4",
    "src/images/vdo3.mp4",
    "src/images/vdo4.mp4",
    "src/images/vdo5.mp4",
  ];
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.85; // smooth slow motion
    }
  }, [currentIndex]);


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

      {/* Navbar */}
      <header
        id="header"
        style={{
          position: "sticky",
          top: 0,
          width: "100%",
          zIndex: 10,
          background: "rgba(0,0,0,0.3)", // semi-transparent navbar
          color: "#fff",
          padding: "10px 20px",
        }}
      >
        <div className="logo">
          <a href="/" style={{ color: "#fff", fontWeight: "bold" }}>
            SAFAR-MANTRA
          </a>
        </div>
        <a href="#menu" onClick={handleMenuClick} style={{ color: "#fff" }}>
          <span>Menu</span>
        </a>
      </header>

      {/* Menu */}
      <nav
        id="menu"
        ref={menuRef}
        className={toggle ? "visible" : ""}
        style={{
          position: "absolute",
          top: "60px",
          right: 0,
          background: "rgba(0,0,0,0.9)",
          padding: "90px",
          display: toggle ? "block" : "none",
          zIndex: 20,
          height: "80vh",
        }}
      >
        <a
          href="#"
          className="close"
          onClick={(e) => {
            e.preventDefault();
            setToggle(false);
          }}
          style={{ color: "#fff", display: "block", marginBottom: "10px" }}
        ></a>
        <ul className="links" style={{ listStyle: "none", padding: 0 }}>
          <li>
            <Link to="/" style={{ color: "#fff" }}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" style={{ color: "#fff" }}>
              About
            </Link>
          </li>
          <li>
            <Link to="/privacy" style={{ color: "#fff" }}>
              Privacy & Policy
            </Link>
          </li>
          <li>
            <Link to="/terms" style={{ color: "#fff" }}>
              Terms & Conditions
            </Link>
          </li>
          <li>
            <Link to="/contact" style={{ color: "#fff" }}>
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>

    </>
  );
};

export default Navbar;
