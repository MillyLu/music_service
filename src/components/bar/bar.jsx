/* eslint-disable no-nested-ternary */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-param-reassign */
import { useState, useEffect, useRef, useContext, useCallback} from 'react';
import { useSelector } from 'react-redux';
import { ThemeContext } from '../../ThemeProvider';
import * as Styled from './styles';
import { ReactComponent as StopSvg } from './stop.svg';

import { selectTrack } from '../../store/trackSlice';
import { useGetTrackByIdQuery } from '../../services/track';





// -------------------Player__Controls----------------------//


function BarContent({setIsNext, nextTrack, setIsPrev, prevTrack, setCurrentTrack}) {

    const [isPlaying, setPlaying] = useState(false);

     const [timeProgress, setTimeProgress ] = useState(0);
     const [duration, setDuration] = useState(0);
     const [volume, setVolume] = useState(60);
     const [muteVolume, setMuteVolume] = useState(false);
const [onPlay, setOnPlay] =useState('');

    const aud = useRef(null);
    const inputRef = useRef(null);
console.log(timeProgress);
// /////////////////////
    const trackId = useSelector(selectTrack);

    const { data } = useGetTrackByIdQuery(trackId, { skip: !trackId});
useEffect(() => {
    if(!data) return
    setOnPlay(data);
    console.log(onPlay);
    setCurrentTrack(data.id);
}, [data])


    const playAnimationRef = useRef();

    const repeat = useCallback(() => {
      const currentTime = aud.current.currentTime;
      setTimeProgress(currentTime);
      inputRef.current.value = currentTime;
      inputRef.current.style.setProperty(
        '--range-progress',
        `${(inputRef.current.value / duration) * 100}%`
      );
  
      playAnimationRef.current = requestAnimationFrame(repeat);
    }, [aud, duration, inputRef, setTimeProgress]);
  
    useEffect(() => {
      if (isPlaying) {
        aud.current.play();
      } else {
        aud.current.pause();
      }
      playAnimationRef.current = requestAnimationFrame(repeat);
    }, [isPlaying, aud, repeat]);

    useEffect(() => {
        if (aud) {
          aud.current.volume = volume / 100;
          aud.current.muted = muteVolume;
        }
      }, [volume, aud, muteVolume]);
 
 const handlePause = () => {
    aud.current.pause()
 }

 const handlePlay = () => {
    aud.current.play()
 }

 const toggleAudio = () => {
    if(isPlaying) handlePause()
    if(!isPlaying) handlePlay()
    setPlaying(!isPlaying)
 }


     const onLoadedMetadata = () => {
        const seconds = aud.current.duration;
        setDuration(seconds);
        console.log(duration);
        inputRef.current.max = seconds;
      };

      /* 
        <Styled.PlayerButtonPlay isSelected={isPlaying} onClick={toggleAudio}>
                 <Styled.PlayerButtonPlaySvg >
                    {
                        isPlaying ? 
                        <StopSvg />
                            :
                        <use xlinkHref='img/icon/sprite.svg#icon-play' />
                        
                    }
                     
                 </Styled.PlayerButtonPlaySvg>

                 <Styled.Audio  onLoadedMetadata={onLoadedMetadata}  ref={aud} src={data ? data?.track_file : '' } onPlay={()=>setPlaying(true)} onPause={()=>{setPlaying(false)}} autoPlay></Styled.Audio>
                         
                     
            
                </Styled.PlayerButtonPlay> */

return(
    <Styled.BarContent>
        <BarProgress {...{ inputRef, aud }}/>
        <Styled.BarPlayerBlock>
            <Styled.BarPlayer>
                <Styled.PlayerControls>
                <ButtonPrevious {...{setIsPrev}}/>
               < ButtonPlay {...{data, isPlaying, toggleAudio, aud, onLoadedMetadata, setPlaying, nextTrack, prevTrack }}/> 
                <ButtonNext {...{setIsNext}} />
                <ButtonRepeat />
                <ButtonShuffle />
                </Styled.PlayerControls>
                <PlayerTrackPlay onPlay={onPlay}/>     
            </Styled.BarPlayer>
        <BarVolumeBlock {...{setMuteVolume, volume, setVolume}}/>    
        </Styled.BarPlayerBlock>    


    </Styled.BarContent>
)

}

function ButtonPlay({ data, isPlaying, toggleAudio, aud, onLoadedMetadata, setPlaying, nextTrack, prevTrack }) {

    return(
        <Styled.PlayerButtonPlay isSelected={isPlaying} onClick={toggleAudio}>
                 <Styled.PlayerButtonPlaySvg >
                    {
                        isPlaying ? 
                        <StopSvg />
                            :
                        <use xlinkHref='img/icon/sprite.svg#icon-play' />
                        
                    }
                     
                 </Styled.PlayerButtonPlaySvg>

                 <Styled.Audio  onLoadedMetadata={onLoadedMetadata}  ref={aud} src={nextTrack ? nextTrack?.track_file : (data ? data?.track_file : (prevTrack ? prevTrack?.track_file : '')) } onPlay={()=>setPlaying(true)} onPause={()=>{setPlaying(false)}} autoPlay></Styled.Audio>
                         
                     
            
                </Styled.PlayerButtonPlay> 
    )
}



function ButtonPrevious({setIsPrev}){
    return(
        <Styled.PlayerButtonPrev onClick={() => setIsPrev(true)}>
            <Styled.PlayerButtonPrevSvg alt='prev'>
                <use xlinkHref='img/icon/sprite.svg#icon-prev' />
            </Styled.PlayerButtonPrevSvg>
        </Styled.PlayerButtonPrev>
    )
}



function ButtonNext({setIsNext}){

   /* function handleNext() {
        setNext(true);
    } */
    return(
        <Styled.PlayerButtonNext  onClick={() => setIsNext(true)}>
            <Styled.PlayerButtonNextSvg alt='next'>
                <use xlinkHref='img/icon/sprite.svg#icon-next' />
            </Styled.PlayerButtonNextSvg>
        </Styled.PlayerButtonNext>
    )
}

function ButtonRepeat(){
    return(
        <Styled.PlayerButtonRepeat>
            <Styled.PlayerButtonRepeatSvg alt='repeat'>
                <use xlinkHref='img/icon/sprite.svg#icon-repeat' />
            </Styled.PlayerButtonRepeatSvg>
        </Styled.PlayerButtonRepeat>
    )
}

function ButtonShuffle(){
    return(
        <Styled.PlayerButtonShuffle>
            <Styled.PlayerButtonShuffleSvg alt='shuffle'>
                <use xlinkHref='img/icon/sprite.svg#icon-shuffle' />
            </Styled.PlayerButtonShuffleSvg>
        </Styled.PlayerButtonShuffle>
    )
}
/*

function PlayerControls() {
    return(
        <Styled.PlayerControls>
            <ButtonPrevious />
            <ButtonPlay />
            <ButtonNext />
            <ButtonRepeat />
            <ButtonShuffle />
        </Styled.PlayerControls>
    )
}
*/

// ------------------------------Player__Track-Play-----------------------//

function TrackPlayImage(){
    const {theme} = useContext(ThemeContext);
    return(
        <Styled.TrackPlayImage theme={theme}>
            <Styled.TrackPlaySvg>
                <use xlinkHref='img/icon/sprite.svg#icon-note' />
            </Styled.TrackPlaySvg>
        </Styled.TrackPlayImage>
    )
}

function TrackPlayAuthor({onPlay}){
    const {theme} = useContext(ThemeContext)
    return(
        <Styled.TrackPlayAuthor>
            <Styled.TrackPlayLinkAuthor theme={theme} >{onPlay.author}</Styled.TrackPlayLinkAuthor>
        </Styled.TrackPlayAuthor>
    )
}

function TrackPlayAlbum({onPlay}){
    const {theme} = useContext(ThemeContext)
    return(
        <Styled.TrackPlayAlbum>
            <Styled.TrackPlayLinkAlbum theme={theme} >{onPlay.album}</Styled.TrackPlayLinkAlbum>
        </Styled.TrackPlayAlbum>
    )
}

function TrackPlaySkeletonImage() {
    return(
        <Styled.TrackPlayImage>
            <Styled.SkeletonTrackImage></Styled.SkeletonTrackImage>
        </Styled.TrackPlayImage>
        )
}

function TrackPlaySkeletonAuthor() {
    return(
        <Styled.TrackPlayAuthor>
           <Styled.SkeletonTrackAlbum></Styled.SkeletonTrackAlbum>
        </Styled.TrackPlayAuthor>
    )
}

function TrackPlaySkeletonAlbum(){
    return(
        <Styled.TrackPlayAlbum>
            <Styled.SkeletonTrackAlbum></Styled.SkeletonTrackAlbum>
        </Styled.TrackPlayAlbum>
    )
}

function TrackPlayContain({onPlay}) {
    console.log(onPlay);
    const [skeleton, setSkeleton] = useState(true);
  
    useEffect(() => {
        if(!onPlay) return
        setSkeleton(false);

    }, [onPlay]); 

    return(
        <Styled.TrackPlayContain>
             {!skeleton ?
             (
            <>
            <TrackPlayImage />
            <TrackPlayAuthor onPlay={onPlay}/>
            <TrackPlayAlbum onPlay={onPlay}/>
            </>) :
            (
                <>
                <TrackPlaySkeletonImage />
                <TrackPlaySkeletonAuthor />
                <TrackPlaySkeletonAlbum />
                </>
            )
            }          
        </Styled.TrackPlayContain>
    )
}

function TrackPlayLike(){
    const {theme} = useContext(ThemeContext);
    return(
        <Styled.TrackPlayLike>
            <Styled.TrackPlayLikeSvg alt='like' theme={theme}>
                <use xlinkHref='img/icon/sprite.svg#icon-like' />
            </Styled.TrackPlayLikeSvg>
        </Styled.TrackPlayLike>
    )
}

function TrackPlayDislike(){
    const {theme} = useContext(ThemeContext);
    return(
        <Styled.TrackPlayDislike>
            <Styled.TrackPlayDislikeSvg alt='dislike' theme={theme}>
                <use xlinkHref='img/icon/sprite.svg#icon-dislike' />
            </Styled.TrackPlayDislikeSvg>
        </Styled.TrackPlayDislike>
    )
}

function TrackPlayLikeDislike(){
    return(
        <Styled.TrackPlayLikeDis>
            <TrackPlayLike />
            <TrackPlayDislike />
        </Styled.TrackPlayLikeDis>
    )
}

function PlayerTrackPlay({data}){
    return(
        <Styled.TrackPlay>
            <TrackPlayContain data={data} />
            <TrackPlayLikeDislike  />
        </Styled.TrackPlay>
    )
}


// ----------------------------Bar__Player-------------------------//
/*
function BarPlayer(){
    return(
        <Styled.BarPlayer>
            <PlayerControls />
            <PlayerTrackPlay />
        </Styled.BarPlayer>
    )
}
*/
// ----------------------------Bar__Volume---------------------------//

function VolumeImage({setMuteVolume}) {

    const muteVolume = () => setMuteVolume((prev) => !prev);
    return(
        <Styled.VolumeImage on>
            <Styled.VolumeSvg onClick={muteVolume} alt='volume'>
                <use xlinkHref='img/icon/sprite.svg#icon-volume' />
            </Styled.VolumeSvg>
        </Styled.VolumeImage>
    )
}

function VolumeProgress({volume, setVolume}){
    return(
        <Styled.VolumeProgress>
            <Styled.VolumeProgressLine value={volume} name='range' min={0} max={100} onChange={(e) => setVolume(e.target.value)} />
        </Styled.VolumeProgress>
    )
}

function BarVolumeBlock({setMuteVolume, volume, setVolume}) {
    return(
        <Styled.BarVolumeBlock>
            <Styled.VolumeContent>
                <VolumeImage setMuteVolume={setMuteVolume}/>
                <VolumeProgress volume={volume} setVolume={setVolume}/>
            </Styled.VolumeContent>
        </Styled.BarVolumeBlock>
    )
}

function BarProgress({
    inputRef,
    aud

  }) {

    const handleProgressChange = () => {
        aud.current.currentTime = inputRef.current.value;
      };


    return (
        <Styled.BarPlayerProgress>
             
              <Styled.Progress type="range" defaultValue='0' ref={inputRef} onChange={handleProgressChange}></Styled.Progress>

        </Styled.BarPlayerProgress>
    )
}

/*

function BarPlayerBlock(){
    return(
        <Styled.BarPlayerBlock>
            <BarPlayer />
            <BarVolumeBlock />
        </Styled.BarPlayerBlock>
    )
}

function BarContent() {
    return(
        <Styled.BarContent>
            <Progress  />
            <BarPlayerBlock />
        </Styled.BarContent>
    )
}
*/

function Bar({setIsNext, nextTrack, setIsPrev, prevTrack, setCurrentTrack}) {
    const {theme} = useContext(ThemeContext);
    return(
        <Styled.Bar theme={theme}>
            <BarContent {...{setIsNext, nextTrack, setIsPrev, prevTrack, setCurrentTrack}}/>
        </Styled.Bar>
    )
}

export default Bar;