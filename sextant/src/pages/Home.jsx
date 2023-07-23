import Img1 from "../assets/images/Dashboard1.jpg";
import Img2 from "../assets/images/Dashboard2.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Home = () => {
  return (
    <div className="Home">
      <div className="carousel">
        <Carousel showStatus={false} centerMode={0} showThumbs={0}>
          <div>
            <img src={Img1} alt="" />
          </div>
          <div>
            <img src={Img2} alt="" />
          </div>
        </Carousel>
      </div>
    </div>
  );
};
export default Home;
