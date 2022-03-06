import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Welcome = () => {
  return (
    <div className="rectangle">
      <div className="title-box">
        <h1 className="title">Calender 2021</h1>
      </div>
      <div className="rectangle-2">
        <div className="text-1">
          <h2 className="text">Hi Aman,</h2>
        </div>
        <div className="des">
          <p className="des-text">
            Welcome to your daily event calendar. Be more engaging &
            personalised than ever before. We’ll help you in{" "}
            <b>
              Tracking Upcoming Events, Scheduling Meetings & Creating New
              Event!
            </b>
          </p>
        </div>
        <div className="arrow">
          <img
            className="arrowIcon"
            src="https://cdn.animaapp.com/projects/6221a5b2c7526107f0d03a80/releases/6221a60c0d419fda033a0707/img/group-2@1x.png"
          />
        </div>
      </div>
    </div>
  );
};
export default Welcome;
