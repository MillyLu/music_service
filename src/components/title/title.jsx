import { useContext } from 'react';
import * as Styled from './styles';
import { ThemeContext } from '../../ThemeProvider';

export function Title() {               
    const {theme} = useContext(ThemeContext);
    return(
        <Styled.CenterblockTitle style={{ color: theme === "light" ? "#000000" : "#FFFFFF" }}>Треки</Styled.CenterblockTitle>
    )
}