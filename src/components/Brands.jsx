import "./Brands.css";
import Netflix from "../img/netflix.png";
import Amazon from "../img/amazon.png";
import Discord from "../img/discord.png";
import Spotify from "../img/spotify.png";
import Reddit from "../img/reddit.png";

const Brands = () => {
  return (
    <div className="brands">
      <div className="brands-img">
        <img src={Netflix} alt="Netflix" />
      </div>
      <div className="brands-img">
        <img src={Reddit} alt="Reddit" />
      </div>
      <div className="brands-img">
        <img src={Amazon} alt="Amazon" />
      </div>
      <div className="brands-img">
        <img src={Discord} alt="Discord" />
      </div>
      <div className="brands-img">
        <img src={Spotify} alt="Spotify" />
      </div>
    </div>
  );
};

export default Brands;
