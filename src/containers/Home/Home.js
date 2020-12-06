import React from "react";
import ModelPicture from "../../Icons/car.jpg";
import ImageSlider1 from "../../Icons/img_slider1.jpg"
import ImageSlider2 from "../../Icons/img_slider2.jpg"
import ImageSlider3 from "../../Icons/img_slider3.jpg"
import ImageSlider4 from "../../Icons/img_slider4.jpg"
import CallBack from "../../components/Callback/Callback"
import {Carousel, Button} from 'antd';
import {
    SectionWrapper,
    WrapperStyleHome,
    StyledText,
    StyledButton,
    CardWrapper,
    contentStyle,
    imgStyle,
    ButtonStyled,

} from "./Home.styled";
import Car from "../../components/Car/Car";
import {Api} from "../services/Api";

class Home extends React.Component {


    carService=new Api();

    state = {startId:0,carsArr:[]}

    componentDidMount() {
this.carService.getAllCars().then(value => this.setState({carsArr:value.splice(0,4)}))

    }

    showCars= async ()=>{
        let {carsArr,startId} = this.state;
      let carsResponse= await  this.carService.getShowCars(startId);
      let {carById2,carById1,carById3,carById4}=carsResponse
        carsArr.push(carById1)
        carsArr.push(carById2)
        carsArr.push(carById3)
        carsArr.push(carById4)
        console.log(carsArr)
        startId+=4
        this.setState({carsArr,startId:startId})
    }


    render() {
        let {carsArr} = this.state;
        return (
            <div>
                <SectionWrapper>
                    <img src={ModelPicture} style={{marginRight: '50px', width: 550, borderRadius: "20px"}}/>
                    <StyledText>
                        <h1>BMW NEW CAR LOCATOR.</h1>
                        <p>
                            Welcome to the BMW New Car Locator where you can search for new BMWs that are in stock and
                            ready for you
                            to drive away without the wait. Select your preferred Model and Body Type, then confirm your
                            budget and
                            location to browse the vehicles available through nearby retailers.
                            Your perfect BMW is already waiting for you. Find yours today.
                        </p>
                        <StyledButton size="large">Show More</StyledButton>
                    </StyledText>
                </SectionWrapper>
                <CardWrapper style={WrapperStyleHome}>
                    {
                        carsArr.map(car=><Car isShowButton={true} item={car}/>)
                    }
                </CardWrapper>
                <Button onClick={this.showCars} style={ButtonStyled} type="primary">View more!</Button>
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
}

export default Home;