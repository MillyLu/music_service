import styled from "styled-components";

export const SidebarItem = styled.div`
width: 250px;
height: 150px;

&:not(:last-child) {
    margin-bottom: 30px;
}
`;


export const SidebarSkeleton = styled.div`
width: 250px;
height: 150px;
background: #313131;
`;