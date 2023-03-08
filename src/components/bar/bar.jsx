import { useContext} from 'react';
import { ThemeContext } from '../../ThemeProvider';
import { BarContent } from '../barContent/barContent';
import * as Styled from './styles';








function Bar({tracks, getShuffleTracks}) {
    const {theme} = useContext(ThemeContext);
    return(
        <Styled.Bar theme={theme}>
            <BarContent {...{tracks, getShuffleTracks}}/>
        </Styled.Bar>
    )
}

export default Bar;