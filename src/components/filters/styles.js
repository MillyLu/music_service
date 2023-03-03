/* eslint-disable no-nested-ternary */
import styled from "styled-components";

export const CenterblockFilter = styled.div`
display: flex;
flex-direction: row;
align-items: center;
margin-bottom: 51px;
`;

export const FilterTitle = styled.div`
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
margin-right: 15px;
`;

export const FilterButton = styled.button`
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
border-radius: 60px;
padding: 6px 20px;

&:not(:last-child) {
    margin-right: 10px;
}
`;


export const FilterButtons = styled.button`
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
border-radius: 60px;
padding: 6px 20px;
background-color: ${props => props.theme === "light" ? "#FFFFFF" : "#181818"};
color: ${props => props.isSelected ? '#AD61FF' : (props.theme === "light"? '#000000' : '#FFFFFF')};
border: ${props => props.isSelected ? '2px solid #AD61FF' : (props.theme === "light"? '1px solid #181818' : ' 1px solid #FFFFFF')};
&:not(:last-child) {
    margin-right: 10px;
};

`;