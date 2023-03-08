import * as Styled from './styles'


export function ButtonNext({findNextTrack}){

    /* function handleNext() {
         setNext(true);
     } */
     return(
         <Styled.PlayerButtonNext onClick={findNextTrack}>
             <Styled.PlayerButtonNextSvg alt='next'>
 
             </Styled.PlayerButtonNextSvg>
         </Styled.PlayerButtonNext>
     )
 }