import React from "react";
import {BrowserRouter as Router, Switch, Route, NavLink} from "react-router-dom";
import {LinkingWrapper} from './Navigation.styles';
import Home from '../Home/Home';
import Shop from "../Shop/Shop";
import Contact from "../Contact/Contact";
import Login from "../Login/Login";
import {ShoppingCartOutlined, UserOutlined} from "@ant-design/icons";
import {IconsWrapper, StyledHeader} from "../App/Layout/Layout.styles";


const Navigation = () => (
    <Router>
        <LinkingWrapper>
            <StyledHeader>
                <IconsWrapper>
                    <NavLink exact to="/" activeClassName="selected"
                             style={{marginRight: 20, marginLeft: 1600,}}>
                        <ShoppingCartOutlined/></NavLink>
                    <NavLink exact to="/Login" activeClassName="selected"><UserOutlined/></NavLink>
                </IconsWrapper>
            </StyledHeader>
            <ul>
                <li>
                    <NavLink exact to="/Home" activeClassName="selected">Home</NavLink>
                </li>
                <li>
                    <NavLink exact to="/Shop" activeClassName="selected">Shop</NavLink>
                </li>
                <li>
                    <NavLink exact to="/blog" activeClassName="selected">Information</NavLink>
                </li>
                <li>
                    <NavLink exact to="/Contact" activeClassName="selected">Contact</NavLink>
                </li>
            </ul>
            <Switch>
                <Route path="/Shop">
                    <Shop/>
                </Route>
                <Route path="/blog">
                    <div>information</div>
                </Route>
                <Route path="/contact">
                    <Contact/>
                </Route>
                <Route path="/Home">
                    <Home/>
                </Route>
                <Route path="/Login">
                    <Login/>
                </Route>
            </Switch>
        </LinkingWrapper>
    </Router>
);

export default Navigation;