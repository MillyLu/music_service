import { useContext, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// import { useTheme } from '../../ThemeProvider';
import logo from './logo.png';
import logoLight from './logoLight.png';
import { ReactComponent as SomeSvgSvg } from './darkTheme.svg';
import { ReactComponent as SomeSvgSvgLight } from './lightTheme.svg';
import * as Styled from './styles'
import { ThemeContext } from '../../ThemeProvider';
import { deleteUser } from '../../store/state';

function Logo() {
    const { theme} = useContext(ThemeContext);
    return (
    <Styled.NavLogo>
        <Styled.LogoImage src={theme === "dark"? logo : logoLight} alt="logo" />
    </Styled.NavLogo>
    );
}


export function ThemeSwitcher() {
   /* const {themeMode, changeTheme} = useTheme();
    const onChangeTheme = () => {
            if (themeMode === themes.dark) {
              changeTheme(themes.light);
              
    }
    } */
    const { theme, toggleTheme } = useContext(ThemeContext);


    return( <Styled.ThemeButton onClick={toggleTheme}>
       {
            theme === "dark" && (
                <SomeSvgSvg />
            )
        }
        {
            theme === "light" && (
                <SomeSvgSvgLight />
            )
        } 
        </Styled.ThemeButton>);
}




function Menu() {
    const { theme} = useContext(ThemeContext);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    const path = "/login";

    const handleLogout = (e)  => {
        e.preventDefault();
        dispatch(deleteUser())
        localStorage.removeItem("token")
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

function Navigation() {
    const [isMenuOpen, setVisible] = useState(false);
    const { theme} = useContext(ThemeContext);

    const toggleVisibility = () => setVisible((isOpen) => !isOpen);
    
    return (
        <Styled.MainNav style={{ backgroundColor: theme === "light" ? "#F6F5F3" : "#1C1C1C" }}>
            <Logo />
            <Styled.NavBurger onClick={toggleVisibility} aria-hidden="true" role="button" tabIndex={0}>
            <Styled.BurgerLine style={{ backgroundColor: theme === "light" ? "#000000" : "#FFFFFF" }} />
            <Styled.BurgerLine style={{ backgroundColor: theme === "light" ? "#000000" : "#FFFFFF" }}/>
            <Styled.BurgerLine style={{ backgroundColor: theme === "light" ? "#000000" : "#FFFFFF" }}/>
           
            </Styled.NavBurger>
            {isMenuOpen && (
                    
                <Menu />
                
            )}
        </Styled.MainNav>
        
        
    );
   
}

export default Navigation;