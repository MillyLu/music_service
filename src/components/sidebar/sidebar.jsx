import { useContext } from 'react';
import { ThemeContext } from '../../ThemeProvider';
import * as Styled from './styles';
import { SidebarPersonal } from "../sidebar-personal/sidebarPersonal";
import { SidebarList } from '../sidebar-list/sidebarList';




function MainSideBar() {
    const {theme} = useContext(ThemeContext);
    return(
        <Styled.MainSidebar theme={theme}>
            <SidebarPersonal />
            <Styled.SidebarBlock>
            <SidebarList />
        </Styled.SidebarBlock>
        </Styled.MainSidebar>
    )
}

export default MainSideBar