import styled from "styled-components";

export const StartscreenRegister = styled.div`
width: 366px;
height: 439px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: #FFFFFF;
border-radius: 12px;
`;

const NavLogo = styled.div`
width: 113.33px;
  height: 43px;
  padding: 13px 0 13px 0;
  background-color: transparent;
  margin-bottom: 20px;
`;

export const LogoImage = styled.img`
width: 113.33px;
height: 17px;
color: #181818;
`;


export const StartscreenDivLogo = styled(NavLogo)`
width: 140px;
height: 21px;
padding: 0;
margin-button: 42px;
background-color: transparent;
`

export const StartscreenLogo = styled(LogoImage)`
width: 140px;
height: 21px;
color: black;
`;

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

export const StartscreenInputNoMargin = styled(StartscreenInput)`
margin-bottom: 0px;
`

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

export const StartscreenContainer = styled.div`
width: 100wh;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
background-color: #000000D9;
`;

export const PasswordHelp = styled.p`
width: 278px;
text-align: center;
font-family: 'StratosSkyeng',sans-serif;
font-style: normal;
font-weight: 400;
font-size: 10px;
line-height: 18px;
letter-spacing: -0.003em;
color: black;
`

