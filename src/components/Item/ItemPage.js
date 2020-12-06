import React, {Component} from 'react';
import { Card} from 'antd';
import {Footer} from "../Car/Car.styled";
import ImageModel4 from "../../Icons/car_item1.jpg";

class ItemPage extends Component {
    render() {
        const { Meta } = Card;
        let {item,id}=this.props
        item.id=id

        return (
            <div>
                <Card
                    style={{ width: 1000,margin:'0 auto' }}
                    cover={<img alt="example" src={ImageModel4} />}
                >
                    <Meta title={item.model} description={item.producerName} />
                    <Footer>
                        <p>${item.priceInUaH}</p>
                        <div>{item.productionYear}</div>
                        <div>{item.id}</div>

                    </Footer>
                </Card>
            </div>
        );
    }
}

export default ItemPage;