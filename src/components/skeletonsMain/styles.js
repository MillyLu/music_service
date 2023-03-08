import styled from "styled-components";

export const PlaylistTrack = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
`;

export const A = styled.a`
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
color: #FFFFFF;
&:visited {
    text-decoration: none;
    font-family: 'StratosSkyeng', sans-serif;
    cursor: pointer;
}
`;
export const PlaylistTrackSkeleton = styled(PlaylistTrack)`
justify-content: flex-start;
gap:14px;
`;

export const SkeletonImage = styled.div`
padding: 0;
width: 51px;
height: 51px;
background: #313131
`;

export const SkeletonTitle = styled(SkeletonImage)`
padding-right: 46px;
width: 350px;
height: 19px;
`;

export const SkeletonAuthor = styled(SkeletonImage)`
padding-right: 36px;
width: 200px;
height: 19px;
`;

export const SkeletonAlbum = styled(SkeletonImage)`
width: 250px; 
height: 19px;
`;

export const TrackTitle = styled.div`
display: flex;
flex-direction: row;
align-items: center;
width: 447px;
`;

export const TrackTitleImage = styled.div`
width: 51px;
height: 51px;
padding: 16px;
background: #313131;
display: flex;
align-items: center;
justify-content: center;
margin-right: 17px;
`;

export const TrackTitleSvg = styled.svg`
width: 18px;
height: 17px;
fill: transparent;
stroke: #4E4E4E;
`;

export const TrackTitleLink = styled(A)`
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
color: #FFFFFF;
&:visited {
    text-decoration: none;
    font-family: 'StratosSkyeng', sans-serif;
    cursor: pointer;
}
`;

export const TrackTitleSpan = styled.span`
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
color: #4E4E4E;
`;

export const TrackAuthor = styled.div`
width: 200px;
display: flex;
justify-content: flex-start;
`;

export const TrackAuthorLink = styled(A)`
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
color: #FFFFFF;
text-align: left;
`;

export const TrackAlbum = styled.div`
width: 200px;
`;

export const TrackAlbumLink = styled(A)`
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
color: #696969;
`;

export const TrackTimeSvg = styled.svg`
width: 14px;
height: 12px;
margin-right: 17px;
fill: transparent;
stroke: #696969;
`;
// !!!!!!!!!!!!!!!!!!!!!!!//
export const TrackTitleText = styled.div`
width: 430px;
`;

export const TrackTime = styled.div`
width: 60px;
display: flex;
flex-direction: raw;
align-items: center;
`

export const TrackTimeText = styled.span`
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
text-align: right;
color: #696969;
`;

export const PlaylistItem = styled.div`
width: 100%;
display: block;
margin-bottom: 12px;
`;

