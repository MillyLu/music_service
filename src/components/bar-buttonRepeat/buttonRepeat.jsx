/* eslint-disable react/jsx-no-bind */
import { useContext } from 'react';
import { ThemeContext } from '../../ThemeProvider';
import * as Styled from './styles';

export function ButtonRepeat({setReloop, reloop}){

    const {theme} = useContext(ThemeContext);

    function changeLoop () {
        if(reloop === false) setReloop(true);
        if(reloop === true) setReloop(false)
    }    
    return(
        <Styled.PlayerButtonRepeat  onClick={changeLoop}>
            <Styled.PlayerButtonRepeatSvg theme={theme}  alt='repeat'>

            </Styled.PlayerButtonRepeatSvg>
        </Styled.PlayerButtonRepeat>
    )
}