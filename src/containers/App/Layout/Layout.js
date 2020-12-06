import React from "react";
import {StyledHeader, IconsWrapper} from "./Layout.styles";
import {
    TwitterOutlined,
    InstagramOutlined,
    FacebookOutlined,
    GitlabOutlined, ShoppingCartOutlined, UserOutlined,
} from "@ant-design/icons";
import {BrowserRouter as Router, NavLink, Route, Switch,} from "react-router-dom";

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
                <IconsWrapper >
                        <NavLink exact to="Shop" activeClassName="selected">
                            <ShoppingCartOutlined/></NavLink>
                        <NavLink exact to="/Login" activeClassName="selected"><UserOutlined/></NavLink>
                </IconsWrapper>
            </div>
        </StyledHeader>
    </Router>
);

export default Layout;