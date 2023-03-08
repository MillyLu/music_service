import styled from "styled-components";

export const MainCenterblock = styled.div`
width: auto;
flex-grow: 3;
padding: 20px 40px 20px 111px;
background-color: ${props => props.theme === "light" ? "#FFFFFF" : "#1C1C1C"}; 
`;

export const CenterblockContent = styled.div`
display: flex;
flex-direction: column;
width: 1107px;
`;