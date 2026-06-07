import React from "react";
import "../css/about.css";
import { FaDumbbell, FaUsers, FaHeartbeat, FaAward } from "react-icons/fa";

function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">

        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48"
            alt="Gym"
          />
        </div>

        <div className="about-content">

          <span className="about-tag">ABOUT OUR GYM</span>

          <h2>
            Build Your Dream Body With
            <span> Professional Trainers</span>
          </h2>

          <p>
            We are committed to helping you achieve your fitness goals through
            expert coaching, modern equipment, personalized workout plans,
            and a motivating environment.
          </p>

          <div className="about-features">

            <div className="feature-card">
              <FaDumbbell />
              <h4>Modern Equipment</h4>
            </div>

            <div className="feature-card">
              <FaUsers />
              <h4>Expert Trainers</h4>
            </div>

            <div className="feature-card">
              <FaHeartbeat />
              <h4>Healthy Lifestyle</h4>
            </div>

            <div className="feature-card">
              <FaAward />
              <h4>Best Results</h4>
            </div>

          </div>

          <div className="about-stats">

            <div className="stat">
              <h3>5000+</h3>
              <p>Happy Members</p>
            </div>

            <div className="stat">
              <h3>50+</h3>
              <p>Certified Trainers</p>
            </div>

            <div className="stat">
              <h3>15+</h3>
              <p>Years Experience</p>
            </div>

          </div>


        </div>

      </div>
    </section>
  );
}

export default About;