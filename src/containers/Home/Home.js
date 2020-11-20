import React from "react";
import ModelPicture from "../../Icons/car.jpg";
import ImageModel1 from "../../Icons/car_item1.jpg";
import ImageModel2 from "../../Icons/car_item2.jpg";
import ImageModel3 from "../../Icons/car_item3.jpg";
import ImageModel4 from "../../Icons/car_item4.jpg";
import ImageSlider1 from "../../Icons/img_slider1.jpg"
import ImageSlider2 from "../../Icons/img_slider2.jpg"
import ImageSlider3 from "../../Icons/img_slider3.jpg"
import ImageSlider4 from "../../Icons/img_slider4.jpg"
import CallBack from "../../components/Callback/Callback"
import { Carousel } from 'antd';
import {
  SectionWrapper,
  StyledText,
  StyledButton,
  CardWrapper,
    contentStyle,
  imgStyle,

} from "./Home.styled";
import CardItem from "../../components/CardItem/CardItem";

const data = [
  {
    title: "BMW M850i xDrive",
    text: "The new BMW 8 Series Coupé unites the character of a sports car with the spirit of the BMW luxury class – creating a whole new standard of aesthetics. Thanks to the irrepressible power of its M TwinPower Turbo 8-cylinder petrol engine, a racetrack-ready chassis and the expressive design language, the BMW M850i xDrive fulfills your every driving desire.",
    image: ImageModel1,
    price: 715,
  },
  {
    title: "BMW M3 Sedan",
    text:
      "As this iconic sports car enters its sixth generation the BMW M3 Sedan and M3 Competition Sedan show just how much racing performance is possible with a BMW 3 Series. This comes courtesy of a 480 hp BMW M ",
    image: ImageModel2,
    price: 540,
  },
  {
    title: "BMW M5 F90",
    text:
      "The most inspiring combination of impulsive sporting character and comfortable everyday utility: The BMW M550i xDrive Sedan confidently combines the best features of the BMW 5 Series with the dynamic characteristics of BMW M.",
    image: ImageModel3,
    price: 1610,
  },
  {
    title: "BMW M760Li xDrive Sedan",
    text:
        "Refined design. Outstanding power unit. Fascinating Driving Dynamics. The BMW M760Li xDrive sets unprecedented standards in every discipline. ",
    image: ImageModel4,
    price: 1610,
  },
];

const Home = () => {
  return (
    <div>
      <SectionWrapper>
        <img src={ModelPicture} style={{ marginRight:'50px', width: 550, borderRadius: "20px" }}/>
        <StyledText>
          <h1>BMW NEW CAR LOCATOR.</h1>
          <p>
            Welcome to the BMW New Car Locator where you can search for new BMWs that are in stock and ready for you to drive away without the wait. Select your preferred Model and Body Type, then confirm your budget and location to browse the vehicles available through nearby retailers.
            Your perfect BMW is already waiting for you. Find yours today.
          </p>
          <StyledButton size="large">Show More</StyledButton>
        </StyledText>
      </SectionWrapper>
      <CardWrapper>
        {data.map(({ title, text, image, price }, idx) => (
          <CardItem
            title={title}
            text={text}
            imageSrc={image}
            price={price}
            id={idx}
          />
        ))}
      </CardWrapper>
      <CallBack>
      </CallBack>
      <Carousel autoplay>
        <div>
          <h3 style={contentStyle}><img src={ImageSlider1} style={imgStyle} alt=""/></h3>
        </div>
        <div>
          <h3 style={contentStyle}><img src={ImageSlider2} style={imgStyle} alt=""/></h3>
        </div>
        <div>
          <h3 style={contentStyle}><img src={ImageSlider3} style={imgStyle} alt=""/></h3>
        </div>
        <div>
          <h3 style={contentStyle}><img src={ImageSlider4} style={imgStyle} alt=""/></h3>
        </div>
      </Carousel>,
    </div>
  );
};

export default Home;