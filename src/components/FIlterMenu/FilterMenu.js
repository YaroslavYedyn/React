import React from 'react';
import {Button} from 'antd';
import {
    SelectBlock,
} from './FilterMenu.styled'

const FilterMenu = (props) => {
        return (
            <div style={SelectBlock}>
                <label>Sort:</label>
                <Button onClick={props.sortByPriceDesc} style={{marginLeft: '5px'}}>highest first</Button>
                <Button onClick={props.sortByPrice} style={{marginLeft: '10px', marginRight: '40px'}}>lowest first</Button>
                <Button onClick={props.totalPrice} style={{marginLeft: '5px', marginRight: '10px'}}>Total price</Button>
                <label id='total' htmlFor="">$</label>
            </div>);
}
export default FilterMenu;