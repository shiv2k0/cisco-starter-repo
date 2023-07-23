import Img1 from "../assets/images/Dashboard1.jpg";
import Img2 from "../assets/images/Dashboard2.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { IpAddress, Latency } from "../components";

const Home = () => {
  return (
    <div className="Home">
      <div className="carousel">
        <Carousel
          showStatus={false}
          centerMode={false}
          showThumbs={false}
          interval={3000}
        >
          <div>
            <img src={Img1} alt="" />
          </div>
          <div>
            <img src={Img2} alt="" />
          </div>
        </Carousel>
      </div>
      <IpAddress />
      <Latency />
    </div>
  );
};
export default Home;
