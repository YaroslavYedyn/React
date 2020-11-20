import React from "react";
import {UserOutlined,MobileOutlined,MailOutlined} from "@ant-design/icons";
import { Input,Select  } from 'antd';
import{
    InputBlockStyle,
} from './Input.styled'
const { Option } = Select;

const selectAfter = (
    <Select defaultValue=".com" className="select-after">
        <Option value=".com">@gmail.com</Option>
        <Option value=".jp">@mail.ru</Option>
        <Option value=".cn">@urk.net</Option>
        <Option value=".org"></Option>
    </Select>
);

const InputBlock = () => (
    <div style={InputBlockStyle}>
        <Input size="large" placeholder="Please enter a name" prefix={<UserOutlined/>}/>
        <br/>
        <br/>
        <Input size="large" placeholder="Please enter a last name" prefix={<UserOutlined/>}/>
        <br/>
        <br/>
        <Input size="large" placeholder="Please enter a mobile number" prefix={<MobileOutlined/>}/>
        <br/>
        <br/>
        <div style={{ marginBottom: 16 }}>
            <Input addonAfter={selectAfter} defaultValue="my email" prefix={<MailOutlined />} />
        </div>
    </div>
)
export default InputBlock