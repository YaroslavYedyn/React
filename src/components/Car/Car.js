import React, {Component} from 'react';
import { Card,Button } from 'antd';
import { Footer } from "./Car.styled";
import ImageModel4 from "../../Icons/car_item1.jpg";



class Car extends Component {
    render() {
        const { Meta } = Card;
        let {item,id,onCarChose}=this.props
        item.id=id

        return (
            <Card
                hoverable
                style={{  width: 350, borderRadius: "20px", marginBottom:'30px' }}
                cover={<img alt="example" src={ImageModel4} />}
            >
                <Meta title={item.model} description={item.producerName} />

                <Footer>
                    <p>${item.priceInUaH}</p>
                    <div>{item.productionYear}</div>
                    <div>{item.id}</div>
                    <Button  onClick={()=>onCarChose(item.id)}>Show More</Button>
                </Footer>
            </Card>
        );
    }
}

export default Car;