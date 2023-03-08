import styled from "styled-components";
import {ReactComponent as NoteSvg} from '../svg/note/note.svg';

export const TrackPlayImage = styled.div`
width: 51px;
height: 51px;
background-color: ${props => props.theme === "light" ? "#F6F4F4" : "#313131"};
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-align: center;
    -ms-flex-align: center;
        align-items: center;
-webkit-box-pack: center;
    -ms-flex-pack: center;
        justify-content: center;
margin-right: 12px;
-ms-grid-row: 1;
-ms-grid-row-span: 2;
-ms-grid-column: 1;
grid-area: image;
`;

export const TrackPlaySvg = styled(NoteSvg)`
width: 18px;
height: 17px;
fill: transparent;
stroke: #4E4E4E;
`;