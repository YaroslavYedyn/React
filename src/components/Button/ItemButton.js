import React, {Component} from 'react';
import { Button } from 'antd';
import Shop from '../../containers/Shop/Shop'

class ItemButton extends Component {
     GoBack=(e)=>{
             e.preventDefault();
             window.location = `Shop`
     }
    Basket=(e)=>{
         e.preventDefault();
        console.log('hello i am basket');
    }
    render() {
        return (
            <div>
                <button onClick={this.GoBack}>Go back</button>
                <Button onClick={this.Basket} type="primary">Basket</Button>

            </div>
        );
    }
}

export default ItemButton;