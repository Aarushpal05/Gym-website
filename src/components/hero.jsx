import react from 'react';
import "../css/hero.css";

function Hero() {
  return (
    <section className="hero" id="home">

      <div className="hero-overlay"></div>

      <div className="hero-content">
        <span className="hero-tag">
          #1 FITNESS DESTINATION
        </span>

        <h1>
          BUILD YOUR
          <span> DREAM BODY</span>
        </h1>

        <p>
          Transform your physique with world-class trainers,
          modern equipment, and personalized fitness programs.
        </p>

           <div className="hero-buttons">
  <a href="/Contact" className="primary-btn">
    Join Now
  </a>
 
      <a href="/plans" className="secondary-btn">
  Explore Plans
</a>
        </div>
      </div>

      <div className="floating-card card-1">
        <h3>5000+</h3>
        <p>Members</p>
      </div>

      <div className="floating-card card-2">
        <h3>25+</h3>
        <p>Expert Trainers</p>
      </div>

    </section>
  );
}

export default Hero;