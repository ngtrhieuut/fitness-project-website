import "./Plans.css";
import { plansData } from "../../data/plansData";
import whiteTick from "../../assets/img/whiteTick.png";

function Plans() {
  return (
    <div className="plans-container">
      <div className="blur blur-p-1"></div>
      <div className="blur blur-p-2"></div>
      <div className="programs-header" style={{ gap: "2rem" }}>
        <span className="stroke-text">READY TO START</span>
        <span>YOUR JOURNEY</span>
        <span className="stroke-text">NOW WITHUS</span>
      </div>

      <div className="plans">
        {plansData.map((plan, index) => (
          <div className="plan" key={index}>
            {plan.icon}
            <span>{plan.name}</span>
            <span>$ {plan.price}</span>

            <div className="features">
              {plan.features.map((features, index) => (
                <div className="feature" key={index}>
                  <img src={whiteTick} alt="white tick" />
                  <span>{features}</span>
                </div>
              ))}
            </div>

            <div>
              <span>See more benefits</span>
            </div>
            <button className="btn">Join now</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Plans;
