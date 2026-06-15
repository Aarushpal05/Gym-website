import React from "react";
import "../css/trainer.css";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";

function Trainers() {
  const trainers = [
    {
      name: "Michael Carter",
      role: "Strength Coach",
      image:
        "https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=600",
    },
    {
      name: "David Wilson",
      role: "Fitness Trainer",
      image:
        "https://images.unsplash.com/photo-1549476464-37392f717541?w=600",
    },
    {
      name: "Chris Morgan",
      role: "Bodybuilding Expert",
      image:
        "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=600",
    },
  ];

  return (
    <section className="trainers-section" id="trainers">
      <div className="section-title">
        <span>OUR EXPERTS</span>
        <h2>Meet Our Professional Trainers</h2>
      </div>

      <div className="trainers-container">
        {trainers.map((trainer, index) => (
          <div className="trainer-card" key={index}>
            <div className="trainer-image">
              <img src={trainer.image} alt={trainer.name} />
            </div>

            <div className="trainer-info">
              <h3>{trainer.name}</h3>
              <p>{trainer.role}</p>

              <div className="social-icons">
                <a href="https://instagram.com"><FaInstagram /></a>
                <a href="https://facebook.com"><FaFacebookF /></a>
                <a href="https://linkedin.com"><FaLinkedinIn /></a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Trainers;
