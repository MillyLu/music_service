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

export const SidebarBlock = styled.div`
height: 100%;
padding: 240px 0 0 0;
display: flex;
flex-direction: column;
justify-content: flex-start;
`;

export const SidebarPersonalName = styled.p`
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
color: ${props => props.theme === "light" ? "#000000" : "#FFFFFF"};
margin-right: 16px;
`;


export const SidebarList = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`;

export const SidebarItem = styled.div`
width: 250px;
height: 150px;

&:not(:last-child) {
    margin-bottom: 30px;
}
`;

export const SidebarLink = styled.a`
width: 100%;
height: 100%;
`;

export const SidebarImage = styled.img`
width: 100%;
height: auto;
`;

export const SidebarSkeleton = styled.div`
width: 250px;
height: 150px;
background: #313131;
`;



