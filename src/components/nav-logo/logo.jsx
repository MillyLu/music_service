import { useContext } from 'react';
import { ThemeContext } from '../../ThemeProvider';
import logo from './logo.png';
import logoLight from './logoLight.png';
import * as Styled from './styles';

export function Logo() {
    const { theme} = useContext(ThemeContext);
    return (
    <Styled.NavLogo>
        <Styled.LogoImage src={theme === "dark"? logo : logoLight} alt="logo" />
    </Styled.NavLogo>
    );
}