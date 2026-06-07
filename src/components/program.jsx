import React from "react";
import "../css/program.css";
import {
  FaDumbbell,
  FaFire,
  FaRunning,
  FaHeartbeat,
  FaAppleAlt,
  FaUserTie
} from "react-icons/fa";

function Programs() {
  const programs = [
    {
      icon: <FaDumbbell />,
      title: "Strength Training",
      desc: "Build muscle, increase strength and improve overall performance."
    },
    {
      icon: <FaFire />,
      title: "Fat Loss",
      desc: "Scientifically designed workouts to burn fat and stay fit."
    },
    {
      icon: <FaRunning />,
      title: "Cardio Training",
      desc: "Boost endurance, stamina and cardiovascular health."
    },
    {
      icon: <FaHeartbeat />,
      title: "CrossFit",
      desc: "High-intensity workouts for maximum results."
    },
    {
      icon: <FaAppleAlt />,
      title: "Nutrition Plan",
      desc: "Customized meal plans to support your fitness goals."
    },
    {
      icon: <FaUserTie />,
      title: "Personal Coaching",
      desc: "One-on-one guidance from certified fitness experts."
    }
  ];

  return (
    <section className="programs" id="programs">

      <div className="program-header">
        <span>OUR PROGRAMS</span>
        <h2>Choose Your Perfect Fitness Program</h2>
        <p>
          Professional training programs designed to help you
          achieve your fitness goals faster and smarter.
        </p>
      </div>

      <div className="program-grid">
        {programs.map((item, index) => (
          <div className="program-card" key={index}>
            <div className="icon-box">
              {item.icon}
            </div>

            <h3>{item.title}</h3>

            <p>{item.desc}</p>

            <button>
              Learn More →
            </button>
          </div>
        ))}
      </div>

    </section>
  );
}

export default Programs;