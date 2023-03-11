import * as Styled from './styles';



export function ButtonPrevious({findPrevTrack}){
    return(
        <Styled.PlayerButtonPrev onClick={findPrevTrack}>
            <Styled.PlayerButtonPrevSvg alt='prev'>

            </Styled.PlayerButtonPrevSvg>
        </Styled.PlayerButtonPrev>
    )
}