import "../components/Main.css";
import Mynavbar from "../components/Mynavbar";
import MySection from "../components/Mysection";
import { Carousel } from "react-bootstrap";
import { useSelector } from "react-redux";

function Main() {

  let { db } = useSelector((state) => { return state })
  return (
    <>

      {/* <li>{db[0].x_gps}</li> */}
      {/*   async  await했는데 왜 에러뜨는지 */}
      <Mynavbar />
      {/* <Carousel>
        <Carousel.Item interval={4000}>
          <img
            className="d-block w-100"
            src={process.env.PUBLIC_URL + "/img/business01.jpg"}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={4000}>
          <img
            className="d-block w-100"
            src={process.env.PUBLIC_URL + "/img/business02.jpg"}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel> */}
      <MySection />

    </>
  );
}
export default Main;


