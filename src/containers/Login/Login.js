import React from "react";
import {Form, Input, InputNumber,Button} from 'antd';
import Password from "../../components/Password/Password";
import Phone from "../../components/Phone/Phone";
import {
    formDiv,
    titel,
    button
} from './Login.styled'

const layout = {
    labelCol: {span: 8},
    wrapperCol: {span: 16},
};

const validateMessages = {
    required: '${label} is required!',
    types: {
        email: '${label} is not a valid email!',
        number: '${label} is not a valid number!',
    },
    number: {
        range: '${label} must be between ${min} and ${max}',
    },
};

const Login = () => {
    return (
        <div style={formDiv}>

            <Form {...layout} name="nest-messages" validateMessages={validateMessages}>
                <h6 style={titel}>Login</h6>
                <Form.Item name={['user', 'name']} label="Name" rules={[{required: true}]}>
                    <Input/>
                </Form.Item>
                <Form.Item name={['user', 'email']} label="Email" rules={[{type: 'email'}]}>
                    <Input/>
                </Form.Item>
                <Form.Item name={['user', 'age']} label="Age" rules={[{type: 'number', min: 0, max: 99}]}>
                    <InputNumber/>
                </Form.Item>
                <Password/>
                <Phone/>
                <Form.Item wrapperCol={{...layout.wrapperCol, offset: 8}}>
                    <Button style={button} type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}
export default Login;