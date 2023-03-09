import { useContext, useState } from 'react';


import * as Styled from './styles'
import { ThemeContext } from '../../ThemeProvider';

import { Logo } from '../nav-logo/logo';

import { Menu } from '../nav-menu/menu';









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