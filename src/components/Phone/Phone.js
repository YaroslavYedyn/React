import React from "react";
import {
    Form,
    Input,
    Select,
} from 'antd';
const { Option } = Select;

const prefixSelector = (
    <Form.Item name="prefix" noStyle>
        <Select style={{ width: 80 }}>
            <Option value="38">+380</Option>
            <Option value="87">87</Option>
        </Select>
    </Form.Item>
);

const Phone=()=>{
    return(
        <div><Form.Item
            name="phone"
            label="Phone Number"
            rules={[{ required: true, message: 'Please input your phone number!' }]}
        >
            <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
        </Form.Item></div>
    )
}
export default Phone