import React from "react";
import {BrowserRouter as Router, Switch, Route, NavLink} from "react-router-dom";
import {LinkingWrapper} from './Navigation.styles';
import Home from '../Home/Home';
import Shop from "../Shop/Shop";
import Item from "../Item/Item";
import Login from "../Login/Login";
import {ShoppingCartOutlined, UserOutlined} from "@ant-design/icons";
import {IconsWrapper, StyledHeader} from "../App/Layout/Layout.styles";
import Basket from "../Basket/Basket";


const Navigation = () => (
    <Router>
        <LinkingWrapper>
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
            </ul>
            <Switch>
                <Route path="/Shop">
                    <Shop/>
                </Route>
                <Route path="/blog">
                    <div>information</div>
                </Route>
                <Route path="/Item">
                    <Item/>
                </Route>
                <Route path="/Home">
                    <Home/>
                </Route>
                <Route path="/Login">
                    <Login/>
                </Route>
                <Route path="/Basket">
                    <Basket/>
                </Route>
            </Switch>
        </LinkingWrapper>
    </Router>
);

export default Navigation;