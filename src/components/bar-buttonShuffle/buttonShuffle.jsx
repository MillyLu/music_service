import { useContext } from 'react';
import { ThemeContext } from '../../ThemeProvider';
import * as Styled from './styles';


export function ButtonShuffle({getShuffleTracks}){

    const {theme} = useContext(ThemeContext);

    return(
        <Styled.PlayerButtonShuffle onClick={getShuffleTracks}>
            <Styled.PlayerButtonShuffleSvg theme={theme} alt='shuffle'>
            </Styled.PlayerButtonShuffleSvg>
        </Styled.PlayerButtonShuffle>
    )
}