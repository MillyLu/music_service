import styled from "styled-components";

export const SidebarPersonalName = styled.p`
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
color: ${props => props.theme === "light" ? "#000000" : "#FFFFFF"};
margin-right: 16px;
`;