import React from "react";
import { Card, Button} from "antd";
import {EllipsisOutlined } from '@ant-design/icons';
import { Footer } from "./CardItem.styled";

const { Meta } = Card;

function Item(){
  console.log( )
}

const CardItem = ({ title='No title.', text, imageSrc, price }) => (
  <Card
    hoverable
    style={{ backgroundColor:'rgb(39, 29, 44,7%)', width: 350,marginBottom:'30px', borderRadius: "20px" }}
    cover={
      <img style={{ borderRadius: "20px" }} alt="example" src={imageSrc} />
    }
  >
    <Meta title={title} description={text} />
    <Footer>
      <p>${price}</p>
      <Button onClick={Item}>Show More</Button>
    </Footer>
      <EllipsisOutlined key="ellipsis"
                        style={{ color:'#000'}}
      />
  </Card>
);

export default CardItem;
