import React, {Component} from 'react';
import {Api} from "../services/Api";
import Car from "../../components/Car/Car";
import ItemPage from "../../components/Item/ItemPage";
import {Button} from "antd";
import {NavLink} from "react-router-dom";



class Item extends Component {
    carService=new Api();


    state={cars:null}

    findCar= async ()=>{
        let carsId = await localStorage.getItem('key')
        let promise = await this.carService.getCarById(carsId).then(value => value);
        this.setState({cars:promise})
        console.log(this.state.cars);


    }


    render() {
        let {cars} = this.state;
        return (

            <div >
                <h1 style={{marginLeft:910,fontSize:40}}>Item</h1>
                <Button style={{marginLeft:880,marginBottom:30}} onClick={this.findCar}>Показати Товар</Button>
                {/*"productionYear, producerName, priceInUaH, model, weightInKilograms, cableForPower,numberOfButton "*/}
                {
                    cars && <ItemPage item={cars}/>
                }
                <div>
                <Button><NavLink exact to="/Shop"
                                 activeClassName="selected">Go back</NavLink></Button>
                <Button><NavLink exact to="/Basket"
                                 activeClassName="selected">Add to cart</NavLink></Button>
                </div>
            </div>
        );
    }
}

export default Item;