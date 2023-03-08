import styled from "styled-components";
import {ReactComponent as ShuffleSvg} from '../svg/shuffle/shuffle.svg';

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

export const PlayerButtonShuffle = styled(PlayerButtonIcon)`
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-align: center;
    -ms-flex-align: center;
        align-items: center;
`;

export const PlayerButtonShuffleSvg = styled(ShuffleSvg)`
width: 19px;
height: 12px;
fill: none;
stroke: ${props => props.theme === "light" ? "#B1B1B1" : "#696969"};
${PlayerButtonShuffle}:hover & {
    fill: none;
    stroke: ${props => props.theme === "light" ? "#707070" : "#ACACAC"};
    cursor: pointer;
  }
${PlayerButtonShuffle}:active & {
    fill: ${props => props.theme === "light" ? "#000000" : "#FFFFFF"};
    stroke: ${props => props.theme === "light" ? "#000000" : "#FFFFFF"};
    cursor: pointer;
  }
`;