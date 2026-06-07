import React from "react";
import "../css/pricing.css";
import { FaCheck } from "react-icons/fa";

function Pricing() {
  const plans = [
    {
      name: "Basic",
      price: "999",
      featured: false,
      features: [
        "Gym Access",
        "Locker Facility",
        "Cardio Area",
        "Free WiFi",
      ],
    },
    {
      name: "Premium",
      price: "1999",
      featured: true,
      features: [
        "Everything in Basic",
        "Personal Trainer",
        "Diet Plan",
        "Body Analysis",
      ],
    },
    {
      name: "Elite",
      price: "2999",
      featured: false,
      features: [
        "Everything in Premium",
        "24/7 Access",
        "VIP Support",
        "Recovery Sessions",
      ],
    },
  ];

  return (
    <section className="pricing-section" id="pricing">
      <div className="pricing-header">
        <span>MEMBERSHIP PLANS</span>
        <h2>Choose Your Fitness Journey</h2>
        <p>
          Flexible plans designed to help you achieve your fitness goals.
        </p>
      </div>

      <div className="pricing-container">
        {plans.map((plan, index) => (
          <div
            className={`pricing-card ${plan.featured ? "featured" : ""}`}
            key={index}
          >
            {plan.featured && (
              <div className="popular-badge">MOST POPULAR</div>
            )}

            <h3>{plan.name}</h3>

            <div className="price">
              ₹{plan.price}
              <span>/month</span>
            </div>

            <ul>
              {plan.features.map((item, i) => (
                <li key={i}>
                  <FaCheck />
                  {item}
                </li>
              ))}
            </ul>

            <button>Join Now</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Pricing;