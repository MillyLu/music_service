import styled from "styled-components";

export const TrackPlayAuthor = styled.div`
-ms-grid-row: 1;
-ms-grid-column: 2;
grid-area: author;
min-width: 49px;
`;


export const TrackPlayLinkAlbum = styled.a`
font-style: normal;
font-weight: 400;
font-size: 13px;
line-height: 24px;
color: ${props => props.theme === "light" ? "#000000" : "#FFFFFF"};
`;

export const TrackPlayLinkAuthor = styled(TrackPlayLinkAlbum)`
font-size: 16px;
line-height: 24px;
white-space: nowrap;
`;