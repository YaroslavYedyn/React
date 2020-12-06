import React from "react";
import FilterMenu from "../../components/FIlterMenu/FilterMenu";
import {CardWrapper} from "../Home/Home.styled";
import {
    ShopStyled,
    WrapperStyle,
} from './Shop.styled'
import Car from "../../components/Car/Car";
import {Api} from "../services/Api";



class Shop extends React.Component {

    carService=new Api();
    state = {cars: [],chosenOne:null}




    componentDidMount() {
        this.carService.getAllCars().then(value => this.setState({cars:value}))
    }

    onCarChose=(id)=>{
        localStorage.setItem('key',id)
    }



    sortByPrice = () => {
        const sortedArray = this.state.cars.sort((a,b) => a.priceInUaH - b.priceInUaH)

        this.setState({
            cars: sortedArray
        })
    }

    sortByPriceDesc = () => {
        const sortedArrayDesc = this.state.cars.sort((a,b) =>{
          return  b.priceInUaH - a.priceInUaH
    });

        this.setState({
            cars: sortedArrayDesc
        })
    }

    totalPrice=()=>{
        const totalPrice=this.state.cars.reduce((acc, value) => {
            return acc+value.priceInUaH;
        },0)
        const total=document.getElementById('total')
        total.textContent=`$  ${totalPrice}`
    };

     onSearch = (value) =>{
         value.toLowerCase()
         let findCar = this.state.cars.find((value1,) =>console.log(value1.model,value1.producerName) );
         console.log()

     }







    render() {
        let {cars} = this.state;
        return (
            <div style={ShopStyled}>
                <FilterMenu onSearch={this.onSearch} totalPrice={this.totalPrice} sortByPriceDesc={this.sortByPriceDesc} sortByPrice={this.sortByPrice}/>
                <CardWrapper style={WrapperStyle}>
                    {
                        cars.map((car, index) =><Car item={car} id={index}  onCarChose={this.onCarChose} button={this.item}/>)
                    }

                </CardWrapper>

            </div>
        );
    };
    }

export default Shop;