import styled from "styled-components";


export const Bar = styled.div`
position: fixed;
bottom: 0;
left: 0;
width: 100%;
background:${props => props.theme === "light" ? "#FFFFFF" : "rgba(28, 28, 28, 0.5)"}; 
`;

/* export const BarContent = styled.div`
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-orient: vertical;
-webkit-box-direction: normal;
    -ms-flex-direction: column;
        flex-direction: column;
`;

export const BarPlayerProgress = styled.div`
width: 100%;
height: 5px;
background: #2E2E2E;
`;

export const Progress = styled.input`
width: 100%;
height: 5px;
vertical-align: top;
`

export const ProgressNone = styled(Progress)`
display: none;
`

export const BarPlayer = styled.div`
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-orient: horizontal;
-webkit-box-direction: normal;
    -ms-flex-direction: row;
        flex-direction: row;
-webkit-box-align: center;
    -ms-flex-align: center;
        align-items: center;
-webkit-box-pack: start;
    -ms-flex-pack: start;
        justify-content: flex-start;
`;

export const BarPlayerBlock = styled(BarPlayer)`
height: 73px;
-webkit-box-pack: justify;
-ms-flex-pack: justify;
justify-content: space-between;
`;

export const BarVolumeBlock = styled.div`
width: auto;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-align: center;
    -ms-flex-align: center;
        align-items: center;
padding: 0 92px 0 0;
`;

export const PlayerControls = styled.div`
display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
      -ms-flex-direction: row;
          flex-direction: row;
  padding: 0 27px 0 31px;
`;

export const PlayerButton = styled.div`
padding: 5px;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-align: center;
    -ms-flex-align: center;
        align-items: center;
`;

export const ButtonCursor = styled(PlayerButton)`
cursor: pointer;
`

export const PlayerButtonPrev = styled(PlayerButton)`
margin-right: 23px;
`;

export const PlayerButtonPrevSvg = styled(PrevSvg)`
width: 15px;
height: 14px;
fill: ${props => props.theme === "light" ? "#B1B1B1" : "#D9D9D9"};
 & :hover {
    fill: ${props => props.theme === "light" ? "#707070" : "#696969"};
 }
`;

export const PlayerButtonPlay = styled(ButtonCursor)`
margin-right: 23px;
`;

export const PlayerButtonPlaySvg = styled.svg`
width: 22px;
  height: 20px;
  fill: ${props => props.theme === "light" ? "#B1B1B1" : "#D9D9D9"};
  & :hover {
     fill: ${props => props.theme === "light" ? "#707070" : "#696969"};
  }
`;

export const PlayerButtonNext = styled(PlayerButton)`
margin-right: 28px;
fill: #a53939;
`;

export const PlayerButtonNextSvg = styled(NextSvg)`
width: 15px;
height: 14px;
fill: ${props => props.theme === "light" ? "#B1B1B1" : "#D9D9D9"};
 & :hover {
    fill: ${props => props.theme === "light" ? "#707070" : "#696969"};
 }
`;

export const PlayerButtonIcon = styled(PlayerButton)``;

export const PlayerButtonRepeat = styled(PlayerButtonIcon)`
margin-right: 24px;
`;

export const PlayerButtonRepeatSvg = styled(RepeatSvg)`
width: 18px;
height: 12px;
fill: none;
stroke: ${props => props.theme === "light" ? "#B1B1B1" : "#696969"};

${PlayerButtonRepeat}:hover & {
    fill: none;
    stroke: ${props => props.theme === "light" ? "#707070" : "#ACACAC"};
    cursor: pointer;
  }
${PlayerButtonRepeat}:active & {
    fill: ${props => props.theme === "light" ? "#000000" : "#FFFFFF"};
    stroke: ${props => props.theme === "light" ? "#000000" : "#FFFFFF"};
    cursor: pointer;
  }
`;

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

export const TrackPlay = styled.div`
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-orient: horizontal;
-webkit-box-direction: normal;
    -ms-flex-direction: row;
        flex-direction: row;
}
`;

export const TrackPlayContain = styled.div`
width: auto;
display: -ms-grid;
display: grid;
-ms-grid-columns: auto 1fr;
    grid-template-columns: auto 1fr;
    grid-template-areas: "image author" "image album";
-webkit-box-align: center;
    -ms-flex-align: center;
        align-items: center;
`;

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

export const TrackPlayAuthor = styled.div`
-ms-grid-row: 1;
-ms-grid-column: 2;
grid-area: author;
min-width: 49px;
`;

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

export const TrackPlayLinkAuthor = styled(TrackPlayLinkAlbum)`
font-size: 16px;
line-height: 24px;
white-space: nowrap;
`;

export const TrackPlayLikeDis = styled.div`
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-orient: horizontal;
-webkit-box-direction: normal;
    -ms-flex-direction: row;
        flex-direction: row;
-webkit-box-align: center;
    -ms-flex-align: center;
        align-items: center;
margin-left: 26%;
`;

export const TrackPlayLike = styled.div`
padding: 5px;
`;

export const TrackPlayDislike = styled(TrackPlayLike)`
margin-left: 28.5px;
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

export const VolumeContent = styled.div`
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-orient: horizontal;
-webkit-box-direction: normal;
    -ms-flex-direction: row;
        flex-direction: row;
-webkit-box-align: center;
    -ms-flex-align: center;
        align-items: center;
-webkit-box-pack: end;
    -ms-flex-pack: end;
        justify-content: end;
`;

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

export const VolumeProgress = styled.div`
width: 109px;
cursor: pointer;
`;

export const VolumeProgressLine = styled.input.attrs({ type: 'range'})`
width: 109px;
cursor: pointer;
`;

export const SkeletonTrackAlbum = styled.div`
width: 59px;
height: 15px;
background: #313131;
`;

export const SkeletonTrackImage = styled(SkeletonTrackAlbum)`
width: 51px;
height: 51px;
`;

export const Audio = styled.audio`
display: none;
`
*/
