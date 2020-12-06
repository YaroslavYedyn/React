import React from 'react';
import {Button} from 'antd';
import {
    SelectBlock,
} from './FilterMenu.styled'
import {Input} from 'antd';
const {Search} = Input;



const FilterMenu = (props) => {
        return (
            <div style={SelectBlock}>
                <label>Sort:</label>
                <Button onClick={props.sortByPriceDesc} style={{marginLeft: '5px'}}>highest first</Button>
                <Button onClick={props.sortByPrice} style={{marginLeft: '10px', marginRight: '40px'}}>lowest first</Button>
                <Button onClick={props.totalPrice} style={{marginLeft: '5px', marginRight: '10px'}}>Total price</Button>
                <label id='total' htmlFor="">$</label>

                <Search placeholder="input search text" onSearch={props.onSearch}
                        style={{width: 200, height: 30, marginLeft: 890}}/>
            </div>);
}
export default FilterMenu;