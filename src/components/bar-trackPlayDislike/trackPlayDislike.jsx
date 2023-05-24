import { useContext} from 'react';
import { ThemeContext } from '../../ThemeProvider';
import * as Styled from './styles';

export function TrackPlayDislike(props){
    const {theme} = useContext(ThemeContext);
    return(
        <Styled.TrackPlayDislike>
            <Styled.TrackPlayDislikeSvg alt='dislike' theme={theme} onClick={props.handleDeleteFavorites}>

            </Styled.TrackPlayDislikeSvg>
        </Styled.TrackPlayDislike>
    )
}
