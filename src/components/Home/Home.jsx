import React, { useEffect, useRef, useState } from 'react'
import PopulerTrips from "../../components/PopularTrips";
import Hero from '../../components/Hero';
const Home = () => {

    // Refs and states for each post section's scroll animation
    const postOneRef = useRef(null);
    const [isOneVisible, setIsOneVisible] = useState(false);

    const postTwoRef = useRef(null);
    const [isTwoVisible, setIsTwoVisible] = useState(false);

    const postThreeRef = useRef(null);
    const [isThreeVisible, setIsThreeVisible] = useState(false);

    const postFourRef = useRef(null);
    const [isFourVisible, setIsFourVisible] = useState(false);

    const postFiveRef = useRef(null);
    const [isFiveVisible, setIsFiveVisible] = useState(false);

    // Scroll animation logic for each section
    const createObserver = (ref, setVisible) => {
        if (!ref.current) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                setVisible(entry.isIntersecting);
            },
            {
                rootMargin: "-40% 0px -40% 0px",
                threshold: 0,
            }
        );
        observer.observe(ref.current);

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    };

    useEffect(() => createObserver(postOneRef, setIsOneVisible), []);
    useEffect(() => createObserver(postTwoRef, setIsTwoVisible), []);
    useEffect(() => createObserver(postThreeRef, setIsThreeVisible), []);
    useEffect(() => createObserver(postFourRef, setIsFourVisible), []);
    useEffect(() => createObserver(postFiveRef, setIsFiveVisible), []);

    const offerings = [
        {
            title: "Curated Trips",
            description: "Book trips that are planned by real travel experts.",
        },
        {
            title: "Local Experts",
            description: "Get the best local experience with our trusted agents.",
        },
        {
            title: "Easy Booking",
            description: "A few clicks and you're ready to go.",
        },
    ];


    const finding = [
        {
            "id": 1,
            "headline": "For the Thrill-Seekers",
            "title": "Adventure & Trekking",
            "description": "Ready for a challenge? Book exciting trekking and adventure trips with our local experts. Explore mountain trails, trek through forests, and feel the rush of a true adventure.",
            "className": "adventure-card"
        },
        {
            "id": 2,
            "headline": "For the Quick Escapes",
            "title": "Weekend Getaways",
            "description": "Need a break from the daily grind? Our weekend getaways are perfect for you. Find relaxing trips to quiet hills, beautiful beaches, and local hotspots. Enjoy a short break that feels like a long holiday.",
            "className": "weekend-card"
        },
        {
            "id": 3,
            "headline": "For the Culture Lovers",
            "title": "Cultural & Local Tours",
            "description": "Dive into the real India. Our local tours let you experience the food, music, and traditions of different cities. Go beyond the usual tourist spots and travel like a local.",
            "className": "cultural-card"
        }
    ]



    const tripOfferings = [
        {
            id: 1,
            headline: "Trips Planned by Experts",
            title: "",
            description:
                "Our local agents are real travel experts who know their cities best. They design every trip to be an amazing experience, so you can just enjoy the ride.",
            className: "adventure-card"
        },
        {
            id: 2,
            headline: "Discover Hidden Gems",
            title: "Weekend Getaways",
            description:
                "Tired of the usual tourist spots? We help you find secret trails, local food, and unique places. Our trips are about seeing the real side of India, one local adventure at a time.",
            className: "weekend-card"
        },
        {
            id: 3,
            headline: "Book with Zero Stress",
            title: "Cultural & Local Tours",
            description:
                "We make travel easy. From finding the perfect trip to booking it in a few clicks, our platform is designed to be simple and hassle-free. Your next adventure is closer than you think.",
            className: "cultural-card"
        }
    ];

    return (
        <div>
            <Hero />
            {/* Four */}
            < section
                id="four"
                ref={postFourRef}
                className="wrapper post bg-img"
                style={{ backgroundImage: `url("src/images/banner3.jpg")` }}
            >
                <div className={`inner ${isFourVisible ? "current" : ""}`}>
                    <div className="manage-articles">
                        <img src="/images/banner3.jpg" alt="Banner" className="about-banner" />
                        <article className="box about-right">
                            <header>
                                <h2>The SafarMantra Story</h2>
                                <p>10.30.2016</p>
                            </header>
                            <div className="content ">
                                <p>
                                    We believe the best trips don't have to be far away. They can be close to home, full of adventure and new things to see. For a long time, we felt that people were missing out on these local gems. Booking a simple weekend trip often meant endless hours of searching on different websites, and it was hard to know if the people providing the trips were trustworthy. We wanted to change that.

                                    That's why we built the SafarMantra platform. We created a solution to this problem by directly connecting you with local people who love their cities and know all the best spots. These local agents are not just guides; they are experts in their own areas, and they design unique, unforgettable trips you won't find anywhere else. Our main goal is to make travel simple, easy to afford, and a lot of fun. We are here to help you stop the difficult process of searching and start the exciting process of exploring. We are a community of travelers and experts, and we are happy to welcome you to our family.
                                </p>
                            </div>
                            <footer>
                                <a href="generic.html" className="button alt">
                                    Learn More
                                </a>
                            </footer>
                        </article>
                    </div>

                </div>
            </section >

            {/* One */}
            <section
                id="one"
                ref={postOneRef}
                className="wrapper post bg-img"
                style={{ backgroundImage: `url("src/images/banner2.jpg")` }}
            >
                <div className={`inner ${isOneVisible ? "current" : ""}`}>
                    <article
                        className="box"
                        style={{
                            padding: "3rem",
                            borderRadius: "8px",
                            textAlign: "center",
                            margin: "0 auto",
                        }}
                    >
                        <header>
                            <h2
                                style={{
                                    color: "#fff",
                                    fontSize: "2.5rem",
                                    fontWeight: "600",
                                    marginBottom: "0.5rem",
                                }}
                            >
                                WHAT WE OFFER
                            </h2>
                            <p
                                style={{
                                    color: "#ccc",
                                    fontSize: "1.1rem",
                                    fontStyle: "italic",
                                    fontWeight: "300",
                                    marginBottom: "2rem",
                                    textShadow: "1px 1px 2px rgba(0,0,0,0.5)",
                                }}
                            >
                                Find Your Perfect Trip, Hassle-Free
                            </p>
                        </header>
                        <div className="content">
                            <p
                                style={{
                                    color: "#fff",
                                    fontSize: "1.1rem",
                                    lineHeight: "1.6",
                                    marginBottom: "1rem",
                                }}
                            >
                                With SafarMantra, finding your next trip is simple. We connect
                                you with trusted local agents who create amazing trips just for
                                you. No stress, no searching endlessly—just great travel and
                                unforgettable memories.
                            </p>
                            <p
                                style={{
                                    color: "#fff",
                                    fontSize: "1.2rem",
                                    fontWeight: "500",
                                    fontFamily: "'Kaushan Script', cursive",
                                    marginTop: "2rem",
                                    marginBottom: "1rem",
                                }}
                            >
                                Your Journey, Your Way:
                            </p>
                        </div>
                    </article>

                    {/* Separate cards for each offering */}
                    <div className="offer-cards-container">
                        {offerings.map((offer, index) => (
                            <article className="offer-card" key={index}>
                                <h3 className="card-title">{offer.title}</h3>
                                <p className="card-description">{offer.description}</p>
                            </article>
                        ))}
                    </div>
                </div>

                <a
                    href="#two"
                    className={`more scrolly ${isOneVisible ? "current" : ""}`}
                >
                    Learn More
                </a>
            </section>



            <section
                id="two"
                ref={postTwoRef}
                className="wrapper post bg-img"
                style={{ backgroundImage: `url("src/images/banner3.jpg")` }}
            >
                <div className={`inner ${isTwoVisible ? "current" : ""}`}>
                    <article
                        className="box"
                        style={{
                            padding: "3rem",
                            borderRadius: "8px",
                            textAlign: "center",
                            margin: "0 auto",
                        }}
                    >
                        <header>
                            <h2
                                style={{
                                    color: "#fff",
                                    fontSize: "2.5rem",
                                    fontWeight: "600",
                                    marginBottom: "0.5rem",
                                }}
                            >
                                Find Your Perfect Trip, Your Way.
                            </h2>
                            {/* <p
                style={{
                  color: "#ccc",
                  fontSize: "1.1rem",
                  fontStyle: "italic",
                  fontWeight: "300",
                  marginBottom: "2rem",
                  textShadow: "1px 1px 2px rgba(0,0,0,0.5)",
                }}
              >
                Whether you're looking for a thrilling escape or a peaceful
                getaway, SafarMantra has the perfect trip for you. Discover a
                world of adventure, all in one place.

              </p> */}
                        </header>
                        <div className="content">
                            <p
                                style={{
                                    color: "#fff",
                                    fontSize: "1.1rem",
                                    lineHeight: "1.6",
                                    marginBottom: "1rem",
                                }}
                            >
                                Ready for a challenge? Book exciting trekking and adventure
                                trips with our local experts. Explore mountain trails, trek
                                through forests, and feel the rush of a true adventure.
                            </p>

                        </div>
                    </article>

                    {/* Separate cards for each offering */}
                    <div className="offer-cards-container">
                        {finding.map((offer, index) => (
                            <article className="offer-card" key={index}>
                                <h3 className="card-headline">{offer.headline}</h3>
                                <h3 className="card-title">{offer.title}</h3>
                                <p className="card-description">{offer.description}</p>
                            </article>
                        ))}
                    </div>
                </div>

                <a
                    href="#two"
                    className={`more scrolly ${isOneVisible ? "current" : ""}`}
                >
                    Learn More
                </a>
            </section>



            {/* Three */}
            < section
                id="three"
                ref={postThreeRef}
                className="wrapper post bg-img"
                style={{ backgroundImage: `url("src/images/banner4.jpg")` }
                }
            >
                <div className={`inner ${isThreeVisible ? "current" : ""}`}>
                    <article className="box">
                        <header>
                            <h2>The SafarMantra Difference.</h2>
                            <p> Whether you're looking for a thrilling escape or a peaceful
                                getaway, SafarMantra has the perfect trip for you. Discover a
                                world of adventure, all in one place.
                            </p>
                        </header>
                    </article>
                    <div className="offer-cards-container">
                        {tripOfferings.map((offer, index) => (
                            <article className="offer-card" key={index}>
                                <h3 className="card-title">{offer.headline}</h3>
                                <p className="card-description">{offer.description}</p>
                            </article>
                        ))}
                    </div>
                </div>
                <a
                    href="#four"
                    className={`more scrolly ${isThreeVisible ? "current" : ""}`}
                >
                    Learn More
                </a>
            </section >

            < section
                id="five"
                ref={postFiveRef}
                className="wrapper post bg-img"
                style={{ backgroundImage: `url("src/images/banner3.jpg")` }}
            >
                <div className={`inner ${isFiveVisible ? "current" : ""}`}>
                    <div className='manage-width'>

                        <PopulerTrips />
                    </div>
                </div>
            </section >

        </div >
    )
}

export default Home