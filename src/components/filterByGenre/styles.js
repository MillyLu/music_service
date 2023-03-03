
import styled from "styled-components";

export const Dropdown = styled.div`
position: absolute;
width: 248px;
height: 305px;
background: ${props => props.theme === "light" ? "#FFFFFF" : "#313131"}; 
border: ${props => props.theme === "light" ? "2px solid #AD61FF" : 'none'}; 
border-radius: 12px;
`;

export const DropdownPerformer = styled(Dropdown)`
left: 443px;
top: 288px;
`;

export const DropdownGenre = styled(Dropdown)`
left: 741px;
top: 288px;
`;

export const DropdownList = styled.ul`
display: flex;
margin: 34px;
flex-direction: column;
align-items: flex-start;
width: 180px;
gap: 30px;  
overflow: scroll;        
width: 180px;
height: 237px;
&::-webkit-scrollbar{
    width: 2px;
}
&::-webkit-scrollbar-thumb {
    max-height: 20px;
    background-color: #FFFFFF;
}
`;

export const Li = styled.li`
list-style: none;
`;

export const DropdownItem = styled(Li)`
cursor: pointer;
margin: 0 -2px;
padding: 2px 2px;
color: ${props => props.theme === "light" ? "#000000" : "#FFFFFF"};
:hover{
    border-color: #AD61FF;
    color: #AD61FF;
    text-decoration: underline;
}
:active{
    border-color: #AD61FF;
    color: #AD61FF;
    cursor: pointer;
}
`;