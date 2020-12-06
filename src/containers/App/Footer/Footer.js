import React from "react";
import {Wrapper, IconsWrapper, VerticalLine, LogoWrapper, StyledText, IconBase} from "./Footer.styled";
import Icon, {
    TwitterOutlined,
    InstagramOutlined,
    LinkedinOutlined,
    YoutubeOutlined,
    GitlabOutlined
} from "@ant-design/icons";

const Footer = () => {
    return (
        <Wrapper>
            <LogoWrapper>
                <IconBase component={GitlabOutlined}/>
                <h1>My Showroom</h1>
            </LogoWrapper>
            <p>Lorem ipsum dolor sit amet <br/>, consectetur adipisicing elit. Aliquam aliquid architecto cumque expedita ipsum laborum libero maiores nam nesciunt numquam, odio omnis provident quasi quia ratione repudiandae voluptatum. Architecto, commodi!.</p>
            <VerticalLine/>
            <IconsWrapper>
                <a href="https://www.youtube.com/"><IconBase component={YoutubeOutlined} color='#FF0000'/></a>
                <a href="https://twitter.com/"> <IconBase component={TwitterOutlined} color='#03A9F4'/></a>
                <a href="https://www.linkedin.com/"><IconBase component={LinkedinOutlined} color='#007AB9'/></a>
                <a href="https://www.instagram.com/"> <IconBase component={InstagramOutlined} color='#3A9F4'/></a>
            </IconsWrapper>
            <VerticalLine/>
            <StyledText>© My Showroom all rights reserved</StyledText>
        </Wrapper>
    );
};

export default Footer;
