import { useContext } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import * as Styled from './styles'
import { ThemeContext } from '../../ThemeProvider';
import { deleteUser } from '../../store/state';
import { ThemeSwitcher } from '../nav-themeSwitcher/themeSwitcher';





 export function Menu() {
    const { theme} = useContext(ThemeContext);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    const path = "/login";

    const handleLogout = (e)  => {
        e.preventDefault();
        dispatch(deleteUser())
        localStorage.removeItem("token")
        localStorage.removeItem('name')
        navigate( path)
    }
    return(
        <Styled.NavMenu>
            <Styled.MenuList>
                <Styled.MenuItem>
                    <Styled.NavLink to='/' style={{ color: theme === "light" ? "#000000" : "#FFFFFF" }}>Главная</Styled.NavLink>
                </Styled.MenuItem>
                <Styled.MenuItem>
                    <Styled.NavLink to="/favorites" style={{ color: theme === "light" ? "#000000" : "#FFFFFF" }}>Мой треки</Styled.NavLink>
                </Styled.MenuItem>
                <Styled.MenuItem>
                    <Styled.NavLink onClick={handleLogout} style={{ color: theme === "light" ? "#000000" : "#FFFFFF" }}>Выйти</Styled.NavLink>
                </Styled.MenuItem>
                <Styled.MenuItem>
                    <ThemeSwitcher />
                </Styled.MenuItem>
            </Styled.MenuList>
        </Styled.NavMenu>
    )
}