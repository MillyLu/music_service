import styled from "styled-components";
import { Link } from "react-router-dom";



export const NotFoundTitle = styled.h1`
font-family: StratosSkyeng;
font-weight: regular;
line-height: 168px;
font-size: 160px;
text-align: center;
`

export const NotFoundGroup = styled.div`
display: flex;
flex-direction: raw;
gap: 20px;
`
export const NotFoundSubtitle = styled.h3`
font-family: StratosSkyeng;
font-weight: regular;
line-height: 40px;
font-size: 32px;
text-align: center;
`
export const Center = styled.div`
width: 435px;
height: 366px;
display: flex;
flex-direction: column;
gap: 30px;
justify-content: center;
align-items: center;
margin-bottom: 250px;
margin-top: 100px;`


export const NotFoundText = styled.p`
width: 431px;
text-align: center;
color: 4E4E4E;
font-size: 18px;
line-height: 24px;
`

export const NotFoundButton = styled(Link)`
width: 278px;
height: 52px;
background-color: #580EA2;
border-radius: 6px;
color: #FFFFFF;
font-size: 18px;
line-height: 24px;
text-align: center;
padding: 10px 20px;
&:hover{
    background: #3F007D;
}
&:active{
    background: #271A58;
}
`;

export const CenterblockContent = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;

`;

export const MainCenterblock = styled.div`
width: auto;
flex-grow: 2;
padding: 20px 40px 20px 75px;
position: relative;
`;

export const Container = styled.div `
max-width: 1920px;
height: 100vh;
margin: 0 auto;
position: relative;
background-color: #181818;
`;

export const Main = styled.div`
-webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
        flex: 1 1 auto;
display: -webkit-box;
display: -ms-flexbox;
display: flex;

-ms-flex-wrap: no-wrap;
    flex-wrap: no-wrap;
-webkit-box-pack: justify;
    -ms-flex-pack: justify;
        justify-content: space-between;
`;

export const Image = styled.img`
width: 50px;
height: 50px;
`
