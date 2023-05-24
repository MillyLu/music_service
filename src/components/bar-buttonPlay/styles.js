import styled from "styled-components";

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

export const Audio = styled.audio`
display: none;
`