import { useContext, useState, useEffect } from "react";
import { ThemeContext } from "../../ThemeProvider";
import * as Styled from './styles'

export function UserName() {
    const {theme} = useContext(ThemeContext);
    const [name, setName] = useState('');
    useEffect (() => {
        if(localStorage.getItem('name')) {
        setName(localStorage.getItem('name'))
    }
},[]);

    return(
        <Styled.SidebarPersonalName theme={theme}>{name}</Styled.SidebarPersonalName>
    )
}