import { useContext } from "react";
import { ThemeContext } from '../../ThemeProvider';
import * as Styled from './styles';


export function TrackPlayImage(){
    const {theme} = useContext(ThemeContext);

    return(
        <Styled.TrackPlayImage theme={theme}>
            <Styled.TrackPlaySvg></Styled.TrackPlaySvg>
        </Styled.TrackPlayImage>
    )
}