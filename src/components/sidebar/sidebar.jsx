import { NavLink } from "react-router-dom";
import { useState, useEffect, useContext } from 'react';
import { ThemeContext } from '../../ThemeProvider';
import * as Styled from './styles'

 // ------------------------------ SideBar-------------------------- //

function UserName() {
    const {theme} = useContext(ThemeContext);
    return(
        <Styled.SidebarPersonalName theme={theme}>Sergey.Ivanov</Styled.SidebarPersonalName>
    )
}

function UserAvatar() {
    return(
        <Styled.SidebarAvatar />
    )
}

function SidebarPersonal() {
    const {theme} = useContext(ThemeContext);
    return(
        <Styled.SidebarPersonal theme={theme}>
            <UserName />
            <UserAvatar />
        </Styled.SidebarPersonal>
    )
}

function SidebarItem(props) {

    return(
        <Styled.SidebarItem>
            <NavLink className="App-link" to={props.href}>
                <Styled.SidebarImage src={props.image} alt='day"s playlist' />
            </NavLink>
        </Styled.SidebarItem>
    )
}

function SidebarSkeleton() {
    return(
        <Styled.SidebarItem>
            <Styled.SidebarSkeleton></Styled.SidebarSkeleton>
        </Styled.SidebarItem>
    )
}

function SidebarList() {
    const [skeleton, setSkeleton] = useState(false);
  
    useEffect(() => {
        setSkeleton(true);
        setTimeout(async () => {

            setSkeleton(false);

        }, 5000);
    }, []);
 
    return(
        <Styled.SidebarList>
            {!skeleton ?
            (<>
                <SidebarItem image = "playlist01.png" href="/playlist/1" />
                <SidebarItem image = "playlist02.png" href="/hits/1" />
                <SidebarItem image = "playlist03.png" href="/indi/1" />
            </>)
                
                :
            (<>
                <SidebarSkeleton />
                <SidebarSkeleton />
                <SidebarSkeleton />
            </>)
                

            }
        </Styled.SidebarList>
    )
}

function SidebarBlock() {
    return(
        <Styled.SidebarBlock>
            <SidebarList />
        </Styled.SidebarBlock>
    )
}

function MainSideBar() {
    const {theme} = useContext(ThemeContext);
    return(
        <Styled.MainSidebar theme={theme}>
            <SidebarPersonal />
            <SidebarBlock />
        </Styled.MainSidebar>
    )
}

export default MainSideBar