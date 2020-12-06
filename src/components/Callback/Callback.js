import React from "react";
import CallBackImage from '../../Icons/callback_car.jpg'
import {Steps,Button } from 'antd';
import {UserOutlined, SolutionOutlined, LoadingOutlined, SmileOutlined} from '@ant-design/icons';
import {
    ImageStyle,
    ImageTag,
    CallBack,
    Information,
    buttonStyle,
    CallAndInput,
    InformationText
} from "./Callback.styled";
import InputBlock from "../Input/Input";


const {Step} = Steps;
const Callback = () => (
    <div style={CallBack}>
        <div style={ImageTag}>
            <div><img style={ImageStyle} src={CallBackImage} alt=""/></div>
        </div>
        <div style={Information}>
            <div>
            <Steps>
                <Step status="finish" title="You on the site" icon={<UserOutlined/>}/>
                <Step status="process" title="Fill out the form" icon={<LoadingOutlined/>}/>
                <Step status="wait" title="Registration of documents" icon={<SolutionOutlined/>}/>
                <Step status="wait" title="You have a car" icon={<SmileOutlined/>}/>
            </Steps>
                <div style={CallAndInput} >
                <h3 style={InformationText}>Order a mobile call to receive
                    detailed information on the car</h3>
            <InputBlock/>
                </div>
            </div>
            <Button style={buttonStyle} type="primary">Submit</Button>
        </div>
    </div>
);
export default Callback;