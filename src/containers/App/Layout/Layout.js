import React from "react";
import {StyledHeader, IconsWrapper} from "./Layout.styles";
import {Input} from 'antd';
import {
    TwitterOutlined,
    InstagramOutlined,
    FacebookOutlined,
    GitlabOutlined,
} from "@ant-design/icons";
import {BrowserRouter as Router,} from "react-router-dom";

const {Search} = Input;
const onSearch = value => console.log(value.toLowerCase());

const Layout = () => (
    <Router>
        <StyledHeader title="My Showroom">
            <div>
                <IconsWrapper>
                    <GitlabOutlined/>
                </IconsWrapper>
                <p>My Showroom</p>
            </div>
            <div>
                <IconsWrapper>
                    <TwitterOutlined/>

                    <FacebookOutlined/>

                    <InstagramOutlined/>
                </IconsWrapper>
            </div>
            <div>
                <IconsWrapper>
                    <Search placeholder="input search text" onSearch={onSearch}
                            style={{width: 200, height: 30, marginRight: 30}}/>
                </IconsWrapper>
            </div>
        </StyledHeader>
    </Router>
);

export default Layout;