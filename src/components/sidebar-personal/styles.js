import styled from "styled-components";

export const MainSidebar = styled.div`
max-width: 418px;
padding: 20px 40px 20px 20px;
background-color: ${props => props.theme === "light" ? "#FFFFFF" : "#1C1C1C"};
`;

export const SidebarPersonal = styled(MainSidebar)`
display: flex;
flex-direction: row;
align-items: center;
justify-content: flex-end;
padding: 12px 0 15px 0;
`;