import styled from "styled-components";

export const TrackPlayAlbum = styled.div`
-ms-grid-row: 2;
-ms-grid-column: 2;
grid-area: album;
min-width: 49px;
`;

export const TrackPlayLinkAlbum = styled.a`
font-style: normal;
font-weight: 400;
font-size: 13px;
line-height: 24px;
color: ${props => props.theme === "light" ? "#000000" : "#FFFFFF"};
`;