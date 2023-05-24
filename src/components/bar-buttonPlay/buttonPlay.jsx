
import { ReactComponent as StopSvg } from '../bar/stop.svg';
import {ReactComponent as PlaySvg} from '../svg/play/play.svg';
import * as Styled from './styles';

 export function ButtonPlay({ data, isPlaying, toggleAudio, aud, onLoadedMetadata, setPlaying, setEnd, reloop}) {

    return(
        <Styled.PlayerButtonPlay data-testid="play" isSelected={isPlaying} onClick={toggleAudio}>
                 <Styled.PlayerButtonPlaySvg >
                    {
                        isPlaying ? 
                        <StopSvg />
                            :
                        <PlaySvg />
                        
                    }
                     
                 </Styled.PlayerButtonPlaySvg>

                 <Styled.Audio loop={reloop}  onLoadedMetadata={onLoadedMetadata}  ref={aud} src={(data ? data?.track_file : '')} onPlay={()=>setPlaying(true)} onPause={()=>{setPlaying(false)}} onEnded={()=>{setEnd(true)}} autoPlay></Styled.Audio>
                         
                     
            
                </Styled.PlayerButtonPlay> 
    )
}