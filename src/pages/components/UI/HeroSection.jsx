import { FaLongArrowAltRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export const HeroSection = () => {
  return (
    <main className="hero-section main">
      <div className="container grid grid-two-cols">
        <div className="hero-content">
          <h1 className="heading-xl">
            A World of Information at Your Fingertips.
          </h1>
          <p className="paragraph">
            Explore the world, one country at a time.
            <b> Sort, search, and filter </b>
            through countries to find the details you need. Discover in-depth
            information on every nation, from their history and culture to their
            geography and economy.
          </p>
          <NavLink to="/country" className="backBtn">
            <button className="btn btn-darken btn-inline bg-white-box">
              Start Exploring <FaLongArrowAltRight />
            </button>
          </NavLink>
        </div>
        <div className="hero-image">
          <img
            src="/images/world.png"
            alt="world is beauty"
            className="banner-image"
          />
        </div>
      </div>
    </main>
  );
};
