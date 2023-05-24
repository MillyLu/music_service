import { useContext } from 'react';
import { ThemeContext } from '../../ThemeProvider';
import { ReactComponent as SomeSvgSvg } from '../svg/darkTheme.svg';
import { ReactComponent as SomeSvgSvgLight } from '../svg/lightTheme.svg';
import * as Styled from './styles';


export function ThemeSwitcher() {
    /* const {themeMode, changeTheme} = useTheme();
     const onChangeTheme = () => {
             if (themeMode === themes.dark) {
               changeTheme(themes.light);
               
     }
     } */
     const { theme, toggleTheme } = useContext(ThemeContext);
 
 
     return( <Styled.ThemeButton data-testId="themeChange" onClick={toggleTheme}>
        {
             theme === "dark" && (
                 <SomeSvgSvg title="dark"/>
             )
         }
         {
             theme === "light" && (
                 <SomeSvgSvgLight title="light"/>
             )
         } 
         </Styled.ThemeButton>);
 }
 