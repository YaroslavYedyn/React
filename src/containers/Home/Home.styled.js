import styled from 'styled-components';
import { Button } from 'antd';

export const WrapperStyleHome={
    margin: '0 auto',
    width:'90%',
    display:'flex',
    flexWrap:'wrap',

}
export const contentStyle = {
    marginTop:'50px',
    height: '860px',
    color: '#fff',
    lineHeight: '560px',
    textAlign: 'center',
    background: 'rgb(32, 33, 37,98%)',
overflow:'hidden'
};
export const ButtonStyled={
    backgroundColor:'#000',
    color: '#fff',
    marginLeft:'1650px',
    borderColor:'#000'
}

export const imgStyle={
    width:'100 %',
    margin:'0 auto',
    justifyContent:'center',
    height: "100%",
    objectFit:'cover'
}

export const SectionWrapper = styled.div`
margin-bottom:40px;
    display: flex;
    background-color: rgb(32, 33, 37);
    height: 100%;
    width:100%;
    justify-content: space-between;
    padding: 0 200px;
`;

export const StyledText = styled.div`
    padding-top: 70px;
    color: white;
    font-size: 16px;
    h1 {
        font-size: 40px;
        color: white;
    }
`
export const StyledButton = styled(Button)`
    background: transparent;
    border-radius: 20px;
    color: white;
`;

export const CardWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
    margin-top: 20px;
`