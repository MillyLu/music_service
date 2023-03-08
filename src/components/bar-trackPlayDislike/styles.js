import styled from "styled-components";
import {ReactComponent as DislikeSvg} from '../svg/dislike/dislike.svg';


export const TrackPlayLike = styled.div`
padding: 5px;
`;

export const TrackPlayDislike = styled(TrackPlayLike)`
margin-left: 28.5px;
`;

export const TrackPlayDislikeSvg = styled(DislikeSvg)`
width: 14.34px;
height: 13px;
fill: transparent;
stroke: #696969;
${TrackPlayDislike}:hover & {
    fill: ${props => props.theme === "light" ? "transparent" :  "transparent"};
    stroke: ${props => props.theme === "light" ? "#AD61FF" :  "#ACACAC"};
    cursor: pointer;
  }
${TrackPlayDislike}:active & {
    fill: ${props => props.theme === "light" ? "#AD61FF" :  "#696969"};
    stroke: ${props => props.theme === "light" ? "#AD61FF" :  "#FFFFFF"};
    cursor: pointer;
  }
`;