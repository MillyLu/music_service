import styled from 'styled-components';
import {ReactComponent as LikeSvg} from './like.svg';

export const LikeIcon = styled(LikeSvg)`
width: 12px;
height: 10px;
fill: transparent;
stroke: #696969;
&:hover {
    fill: ${props => props.theme === "light" ? "transparent" :  "transparent"};
    stroke: ${props => props.theme === "light" ? "#AD61FF" :  "#ACACAC"};;
    cursor: pointer;
  };
&:active {
    fill: ${props => props.theme === "light" ? "#AD61FF" :  "#696969"};
    stroke: ${props => props.theme === "light" ? "#AD61FF" :  "#FFFFFF"};
    cursor: pointer;
  }
`;
