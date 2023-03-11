import styled from "styled-components";


export const StartscreenButton = styled.button`
width: 278px;
height: 52px;
background: #580EA2;
border-radius: 6px;
font-family: 'StratosSkyeng';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 24px;
letter-spacing: -0.003em;
color: #FFFFFF;
display: flex;
justify-content: center;
align-items: center;
margin-top: 20px;
border-radius: 6px;
&:hover{
    background: #3F007D;
}
&:active{
    background: #271A58;
}
`;


export const StartscreenButtonReg = styled(StartscreenButton)`
color: #000000;
border: 1px solid #D0CECE;
border-radius: 6px;
background: white;
border: 1px solid #D0CECE;
&:hover{
    background: #F4F5F6;
}
&:active{
    background: #D9D9D9;
}
`;