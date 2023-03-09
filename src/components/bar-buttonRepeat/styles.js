import styled from "styled-components";
import {ReactComponent as RepeatSvg} from '../svg/repeat/repeat.svg';


export const PlayerButton = styled.div`
padding: 5px;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-align: center;
    -ms-flex-align: center;
        align-items: center;
`;

export const PlayerButtonIcon = styled(PlayerButton)``;

export const PlayerButtonRepeat = styled(PlayerButtonIcon)`
margin-right: 24px;
`;

export const PlayerButtonRepeatSvg = styled(RepeatSvg)`
width: 18px;
height: 12px;
fill: none;
stroke: ${props => props.theme === "light" ? "#B1B1B1" : "#696969"};

${PlayerButtonRepeat}:hover & {
    fill: none;
    stroke: ${props => props.theme === "light" ? "#707070" : "#ACACAC"};
    cursor: pointer;
  }
${PlayerButtonRepeat}:active & {
    fill: ${props => props.theme === "light" ? "#000000" : "#FFFFFF"};
    stroke: ${props => props.theme === "light" ? "#000000" : "#FFFFFF"};
    cursor: pointer;
  }
`;