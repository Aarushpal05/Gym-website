import React from "react";
import "../css/whychoose.css";
import {
  FaDumbbell,
  FaUserTie,
  FaHeartbeat,
  FaTrophy
} from "react-icons/fa";

function WhyChoose() {
  return (
    <section className="why-choose" id="whychoose">

      <div className="blur blur1"></div>
      <div className="blur blur2"></div>

      <div className="why-header">
        <span className="section-tag">
          WHY CHOOSE US
        </span>

        <h2>
          Transform Your Body With
          <span> Elite Fitness Training</span>
        </h2>

        <p>
          Experience world-class fitness facilities, expert coaching,
          personalized workout plans and a motivating environment
          designed to help you achieve your goals faster.
        </p>
      </div>

      <div className="choose-container">

        <div className="choose-card">
          <div className="shine"></div>
          <FaDumbbell />
          <h3>Modern Equipment</h3>
          <p>
            Latest strength and cardio equipment for maximum performance.
          </p>
        </div>

        <div className="choose-card">
          <div className="shine"></div>
          <FaUserTie />
          <h3>Expert Trainers</h3>
          <p>
            Certified fitness coaches to guide every step of your journey.
          </p>
        </div>

        <div className="choose-card">
          <div className="shine"></div>
          <FaHeartbeat />
          <h3>Healthy Lifestyle</h3>
          <p>
            Customized nutrition and fitness programs for long-term success.
          </p>
        </div>

        <div className="choose-card">
          <div className="shine"></div>
          <FaTrophy />
          <h3>Proven Results</h3>
          <p>
            Thousands of successful transformations and happy members.
          </p>
        </div>

      </div>

  

      

    </section>
  );
}

export default WhyChoose;