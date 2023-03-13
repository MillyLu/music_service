import {  useContext} from 'react';
import { ThemeContext } from '../../ThemeProvider';
import * as Styled from './styles';

export function TrackPlayLike({handleAddFavorites}){
    const {theme} = useContext(ThemeContext);
    return(
        <Styled.TrackPlayLike>
            <Styled.TrackPlayLikeSvg data-testid="like" alt='like' theme={theme} onClick={handleAddFavorites}>
            </Styled.TrackPlayLikeSvg>
        </Styled.TrackPlayLike>
    )
}