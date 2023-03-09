import styled from "styled-components";

export const StartscreenForm = styled.form`
width: 278px;
`;

export const StartscreenInput = styled.input`
width: 278px;
font-family: 'StratosSkyeng',sans-serif;
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 24px;
letter-spacing: -0.003em;
color: #E1E1E1;
padding: 8px 10px;
border-width: 0 0 1px 0;
border-color: #D0CECE;
margin-bottom: 25px;
`;

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