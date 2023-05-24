import styled from "styled-components";
import {ReactComponent as VolumerSvg} from '../svg/volume/volume.svg';


export const VolumeImage = styled.div`
width: 13px;
height: 18px;
margin-right: 17px;
`;

export const VolumeSvg = styled(VolumerSvg)`
width: 13px;
height: 18px;
fill: transparent;
stroke: ${props => props.theme === "light" ? "#B1B1B1" :  "#FFFFFF"};
`;