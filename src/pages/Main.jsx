import "./Main.css";
import Illustration from "../img/Illustration1.png";

function Main() {
  return (
    <main className="main">
      <div className="get-started">
        <h1 className="get-started-title">
          Want anything to be easy with <strong>LaslesVPN.</strong>
        </h1>
        <h4 className="get-started-subtitle">
          Provide a network for all your needs with ease and fun using{" "}
          <b>LaslesVPN </b>
          discover interesting features from us.
        </h4>
        <button>Get Started</button>
      </div>
      <div className="get-started-ilst">
        <img src={Illustration} alt="Illustration" />
      </div>
    </main>
  );
}

export default Main;
