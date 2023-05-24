
import styled from "styled-components";



export const Year = styled.div`
position: absolute;
left: 597px;
top: 288px;
width: 403px;
height: 92px;
background: ${props => props.theme === "light" ? "#FFFFFF" : "#313131"}; 
border: ${props => props.theme === "light" ? "2px solid #AD61FF" : 'none'}; 
border-radius: 12px;
display: flex;
flex-direction: row;
align-items: flex-start;
justify-content: center;
padding: 34px;
gap: 24px;
`;

export const YearInput = styled.input`
width: 0;
height: 0;
position: absolute;
opacity: 0;
z-index: -1;
`;

export const Label = styled.label``;



export const Item = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  box-sizing: border-box;
`;

export const RadioButtonLabel = styled.label`
  position: absolute;
  top: 25%;
  left: 4px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: black;
  border: 1px solid #ccc;
`;
export const RadioButton = styled.input`
  opacity: 0;
  z-index: 1;
  cursor: pointer;
  width: 20px;
  height: 20px;
  margin-right: 10px;
  &:hover ~ ${RadioButtonLabel} {
    background: white;
    &::after {
      content: "\f111";
      font-family: "FontAwesome";
      display: block;
      color: white;
      width: 10px;
      height: 10px;
      margin: 3px;
    }
  }
  &:checked + ${Item} {
    background: black;
    border: 2px solid black;
  }
  &:checked + ${RadioButtonLabel} {
    background: black;
    border: 1px solid black;
    &::after {
      content: "\f111";
      font-family: "FontAwesome";
      display: block;
      color: ${props => props.theme === "light" ? "#000000" : "#FFFFFF"};
      width: 10px;
      height: 10px;
      margin: 3px;
    }
  }
`;
