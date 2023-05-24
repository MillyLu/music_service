import styled from "styled-components";
import {ReactComponent as WatchSvg} from '../svg/time/watch.svg'

export const ContentTitle = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
margin-bottom: 24px;
`;

export const PlaylistTitleCol = styled.div`
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 24px;
letter-spacing: 2px;
color: #696969;
text-transform: uppercase;

`;

export const PlaylistTitleCol01 = styled(PlaylistTitleCol)`
width: 418px;
`;

export const PlaylistTitleCol02 = styled(PlaylistTitleCol)`
width: 200px;
`;

export const PlaylistTitleCol03 = styled(PlaylistTitleCol)`
width: 150px;
`;

export const PlaylistTitleCol04 = styled(PlaylistTitleCol)`
width: 60px;
text-align: end;
`;

export const PlaylistTitleSvg = styled(WatchSvg)`
width: 12px;
height: 12px;
fill: transparent;
stroke: #696969;
`;