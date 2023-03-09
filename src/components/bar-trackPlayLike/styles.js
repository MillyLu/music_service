import styled from "styled-components";
import {ReactComponent as LikeSvg} from '../svg/like/like.svg';

export const TrackPlayLike = styled.div`
padding: 5px;
`;

export const TrackPlayLikeSvg = styled(LikeSvg)`
width: 14px;
height: 12px;
fill: transparent;
stroke: #696969;

&:hover, &:focus  {
    stroke: ${props => props.theme === "light" ? "#AD61FF" :  "#ACACAC"}; 
    scale: 1.05;
    cursor: pointer;
  }
${TrackPlayLike}:active & {
    fill: ${props => props.theme === "light" ? "#AD61FF" :  "#696969"};
    stroke: ${props => props.theme === "light" ? "#AD61FF" :  "#ACACAC"};
    cursor: pointer;
  }
`;