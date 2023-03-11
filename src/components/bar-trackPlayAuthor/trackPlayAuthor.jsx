import { useContext } from "react";
import { ThemeContext } from '../../ThemeProvider';
import * as Styled from './styles';


export function TrackPlayAuthor({data}){
    const {theme} = useContext(ThemeContext)
    return(
        <Styled.TrackPlayAuthor>
            <Styled.TrackPlayLinkAuthor theme={theme} >{data.author}</Styled.TrackPlayLinkAuthor>
        </Styled.TrackPlayAuthor>
    )
}