import { useContext } from "react";
import { ThemeContext } from "../../ThemeProvider";
import { UserName } from "../sidebar-userName/userName";
import { UserAvatar } from "../sidebar-userAvatar/userAvatar";
import * as Styled from './styles';


export function SidebarPersonal() {
    const {theme} = useContext(ThemeContext);
    return(
        <Styled.SidebarPersonal theme={theme}>
            <UserName />
            <UserAvatar />
        </Styled.SidebarPersonal>
    )
}