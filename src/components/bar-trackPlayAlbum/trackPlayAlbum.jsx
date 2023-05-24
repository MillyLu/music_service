import { useContext } from "react";
import { ThemeContext } from '../../ThemeProvider';
import * as Styled from './styles';

export function TrackPlayAlbum({data}){
    const {theme} = useContext(ThemeContext)
    return(
        <Styled.TrackPlayAlbum>
            <Styled.TrackPlayLinkAlbum theme={theme} >{data.album}</Styled.TrackPlayLinkAlbum>
        </Styled.TrackPlayAlbum>
    )
}