import React, {Component} from 'react';
import ImageModel4 from "../../Icons/car_item1.jpg";



class Contact extends Component {
    render() {

        let{title,price,text}=this.props
        return (
            <div>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad alias assumenda at atque cumque, deleniti doloribus illum iure molestiae neque placeat possimus, provident qui rerum sed tempora? Sit, veritatis.
                <h1>{title}</h1>
                <h1>{text}</h1>
                <h1>{price}$$$</h1>
                <img alt="example" src={ImageModel4} />
            </div>
        );
    }
}

export default Contact;