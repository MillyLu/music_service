import styled from "styled-components";
import {ReactComponent as PrevSvg} from '../svg/prev/prev.svg';

export const PlayerButton = styled.div`
padding: 5px;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-align: center;
    -ms-flex-align: center;
        align-items: center;
`;

export const PlayerButtonPrev = styled(PlayerButton)`
margin-right: 23px;
`;

export const PlayerButtonPrevSvg = styled(PrevSvg)`
width: 15px;
height: 14px;
fill: ${props => props.theme === "light" ? "#B1B1B1" : "#D9D9D9"};
 & :hover {
    fill: ${props => props.theme === "light" ? "#707070" : "#696969"};
 }
`;