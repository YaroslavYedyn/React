import React from "react";
import FilterMenu from "../../components/FIlterMenu/FilterMenu";
import CardItem from "../../components/CardItem/CardItem";
import {CardWrapper} from "../Home/Home.styled";
import ImageModel1 from "../../Icons/car_item1.jpg";
import ImageModel2 from "../../Icons/car_item2.jpg";
import ImageModel3 from "../../Icons/car_item3.jpg";
import ImageModel4 from "../../Icons/car_item4.jpg";
import {
    ShopStyled,
    WrapperStyle,
} from './Shop.styled'


const cars = [
    {
        title: "BMW M850i xDrive",
        text: "The new BMW 8 Series Coupé unites the character of a sports car with the spirit of the BMW luxury class – creating a whole new standard of aesthetics. Thanks to the irrepressible power of its M TwinPower Turbo 8-cylinder petrol engine, a racetrack-ready chassis and the expressive design language, the BMW M850i xDrive fulfills your every driving desire.",
        image: ImageModel1,
        price: 71105,
    },
    {
        title: "BMW M3 Sedan",
        text:
            "As this iconic sports car enters its sixth generation the BMW M3 Sedan and M3 Competition Sedan show just how much racing performance is possible with a BMW 3 Series. This comes courtesy of a 480 hp BMW M ",
        image: ImageModel2,
        price: 17000,
    },
    {
        title: "BMW M5 F90",
        text:
            "The most inspiring combination of impulsive sporting character and comfortable everyday utility: The BMW M550i xDrive Sedan confidently combines the best features of the BMW 5 Series with the dynamic characteristics of BMW M.",
        image: ImageModel3,
        price: 12310,
    },
    {
        title: "BMW M760Li xDrive Sedan",
        text:
            "Refined design. Outstanding power unit. Fascinating Driving Dynamics. The BMW M760Li xDrive sets unprecedented standards in every discipline. ",
        image: ImageModel4,
        price: 12100,
    },
    {
        title: "BMW M760Li xDrive Sedan",
        text:
            "Refined design. Outstanding power unit. Fascinating Driving Dynamics. The BMW M760Li xDrive sets unprecedented standards in every discipline. ",
        image: ImageModel4,
        price: 23410,
    },
    {
        title: "BMW M760Li xDrive Sedan",
        text:
            "Refined design. Outstanding power unit. Fascinating Driving Dynamics. The BMW M760Li xDrive sets unprecedented standards in every discipline. ",
        image: ImageModel4,
        price: 45010,
    },
    {
        title: "BMW M3 Sedan",
        text:
            "As this iconic sports car enters its sixth generation the BMW M3 Sedan and M3 Competition Sedan show just how much racing performance is possible with a BMW 3 Series. This comes courtesy of a 480 hp BMW M ",
        image: ImageModel2,
        price: 50040,
    },
    {
        title: "BMW M760Li xDrive Sedan",
        text:
            "Refined design. Outstanding power unit. Fascinating Driving Dynamics. The BMW M760Li xDrive sets unprecedented standards in every discipline. ",
        image: ImageModel4,
        price: 16110,
    },
    {
        title: "BMW M760Li xDrive Sedan",
        text:
            "Refined design. Outstanding power unit. Fascinating Driving Dynamics. The BMW M760Li xDrive sets unprecedented standards in every discipline. ",
        image: ImageModel4,
        price: 19010,
    },
    {
        title: "BMW M3 Sedan",
        text:
            "As this iconic sports car enters its sixth generation the BMW M3 Sedan and M3 Competition Sedan show just how much racing performance is possible with a BMW 3 Series. This comes courtesy of a 480 hp BMW M ",
        image: ImageModel2,
        price: 54000,
    },
    {
        title: "BMW M760Li xDrive Sedan",
        text:
            "Refined design. Outstanding power unit. Fascinating Driving Dynamics. The BMW M760Li xDrive sets unprecedented standards in every discipline. ",
        image: ImageModel4,
        price: 34010,
    },
    {
        title: "BMW M760Li xDrive Sedan",
        text:
            "Refined design. Outstanding power unit. Fascinating Driving Dynamics. The BMW M760Li xDrive sets unprecedented standards in every discipline. ",
        image: ImageModel4,
        price: 34410,
    },
];



class Shop extends React.Component {

    state = {
        cars: [...cars]
    }

    sortByPrice = () => {
        const sortedArray = this.state.cars.sort((a,b) => a.price - b.price)

        this.setState({
            cars: sortedArray
        })
    }

    sortByPriceDesc = () => {
        const sortedArrayDesc = this.state.cars.sort((a,b) =>{
          return  b.price - a.price
    });

        this.setState({
            cars: sortedArrayDesc
        })
    }

    filterByCars=()=>{
        const filterByCars=this.state.cars.filter(onSearch => {
            cars.title.includes(onSearch)
        })
    }


    totalPrice=()=>{
        const totalPrice=this.state.cars.reduce((acc, value) => {
            return acc+value.price;
        },0)
        const total=document.getElementById('total')
        total.textContent=`$  ${totalPrice}`
    };




    render() {
        return (
            <div style={ShopStyled}>
                <FilterMenu totalPrice={this.totalPrice} sortByPriceDesc={this.sortByPriceDesc} sortByPrice={this.sortByPrice}/>
                <CardWrapper style={WrapperStyle}>
                    {this.state.cars.map(({ title, text, image, price }, idx) => (
                        <CardItem
                            title={title}
                            text={text}
                            imageSrc={image}
                            price={price}
                            id={idx}
                        />
                    ))}
                </CardWrapper>
            </div>
        );
    };
    }

export default Shop;