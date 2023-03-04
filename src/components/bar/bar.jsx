/* eslint-disable react/jsx-no-bind */
/* eslint-disable no-nested-ternary */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-param-reassign */
import { useState, useEffect, useRef, useContext, useCallback} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ThemeContext } from '../../ThemeProvider';
import * as Styled from './styles';
import { ReactComponent as StopSvg } from './stop.svg';
import { setTrack, selectTrack } from '../../store/trackSlice';
import { useGetTrackByIdQuery } from '../../services/track';
import {useGetFavoritesQuery, useAddFavoritesMutation, useDeleteFavoritesMutation} from '../../services/favorites';
import {ReactComponent as PlaySvg} from '../svg/play/play.svg';





// -------------------Player__Controls----------------------//


function BarContent({tracks, getShuffleTracks}) {

    const [isPlaying, setPlaying] = useState(false);
    const [isEnd, setEnd] = useState(false);

     const [timeProgress, setTimeProgress ] = useState(0);
     const [duration, setDuration] = useState(0);
     const [volume, setVolume] = useState(60);
     const [muteVolume, setMuteVolume] = useState(false);
     const [reloop, setReloop] = useState(false);


    const aud = useRef(null);
    const inputRef = useRef(null);

    const trackId = useSelector(selectTrack);

    const { data } = useGetTrackByIdQuery(trackId, { skip: !trackId});

    const dispatch = useDispatch();

console.log(timeProgress);
// /////////////////////



 function findNextTrack() {
    console.log(data);
    const nextIndex = ((tracks.findIndex(el => el.id === data.id)) + 1 ) // % tracks.length
    console.log(nextIndex);
    if (nextIndex) {
    const nextId = ((tracks[nextIndex].id))
    dispatch(setTrack(nextId))
    console.log(data);
    }
}

function findPrevTrack() {
    const prevIndex = ((tracks.findIndex(el => el.id === data.id)) - 1)
    if (prevIndex >= 0) {
        const prevId = ((tracks[prevIndex].id))
        dispatch(setTrack(prevId))

}
} 


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

    useEffect(() => {
        if(isEnd) {
            findNextTrack();
            setEnd(false)
        }
    }, [isEnd])  
 
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


return(
    <Styled.BarContent>
        <BarProgress {...{ inputRef, aud }}/>
        <Styled.BarPlayerBlock>
            <Styled.BarPlayer>
                <Styled.PlayerControls>
                <ButtonPrevious {...{findPrevTrack}}/>
               < ButtonPlay {...{data, isPlaying, toggleAudio, aud, onLoadedMetadata, setPlaying, setEnd, reloop }}/> 
                <ButtonNext {...{findNextTrack}}/>
                <ButtonRepeat {...{setReloop, reloop}}/>
                <ButtonShuffle {...{getShuffleTracks}}/>
                </Styled.PlayerControls>
                <PlayerTrackPlay data={data}/>     
            </Styled.BarPlayer>
        <BarVolumeBlock {...{setMuteVolume, volume, setVolume}}/>    
        </Styled.BarPlayerBlock>    


    </Styled.BarContent>
)

}

function ButtonPlay({ data, isPlaying, toggleAudio, aud, onLoadedMetadata, setPlaying, setEnd, reloop}) {

    return(
        <Styled.PlayerButtonPlay isSelected={isPlaying} onClick={toggleAudio}>
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



function ButtonPrevious({findPrevTrack}){
    return(
        <Styled.PlayerButtonPrev onClick={findPrevTrack}>
            <Styled.PlayerButtonPrevSvg alt='prev'>

            </Styled.PlayerButtonPrevSvg>
        </Styled.PlayerButtonPrev>
    )
}



function ButtonNext({findNextTrack}){

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

function ButtonRepeat({setReloop, reloop}){

    const {theme} = useContext(ThemeContext);

    function changeLoop () {
        if(reloop === false) setReloop(true);
        if(reloop === true) setReloop(false)
    }    
    return(
        <Styled.PlayerButtonRepeat  onClick={changeLoop}>
            <Styled.PlayerButtonRepeatSvg theme={theme}  alt='repeat'>

            </Styled.PlayerButtonRepeatSvg>
        </Styled.PlayerButtonRepeat>
    )
}

function ButtonShuffle({getShuffleTracks}){

    const {theme} = useContext(ThemeContext);

    return(
        <Styled.PlayerButtonShuffle onClick={getShuffleTracks}>
            <Styled.PlayerButtonShuffleSvg theme={theme} alt='shuffle'>
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
            </Styled.TrackPlaySvg>
        </Styled.TrackPlayImage>
    )
}

function TrackPlayAuthor({data}){
    const {theme} = useContext(ThemeContext)
    return(
        <Styled.TrackPlayAuthor>
            <Styled.TrackPlayLinkAuthor theme={theme} >{data.author}</Styled.TrackPlayLinkAuthor>
        </Styled.TrackPlayAuthor>
    )
}

function TrackPlayAlbum({data}){
    const {theme} = useContext(ThemeContext)
    return(
        <Styled.TrackPlayAlbum>
            <Styled.TrackPlayLinkAlbum theme={theme} >{data.album}</Styled.TrackPlayLinkAlbum>
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

function TrackPlayContain({data}) {
 
    const [skeleton, setSkeleton] = useState(true);
  
    useEffect(() => {
        if(!data) return
        setSkeleton(false);

    }, [data]); 

    return(
        <Styled.TrackPlayContain>
             {!skeleton ?
             (
            <>
            <TrackPlayImage />
            <TrackPlayAuthor data={data}/>
            <TrackPlayAlbum data={data}/>
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

function TrackPlayLike({handleAddFavorites}){
    const {theme} = useContext(ThemeContext);
    return(
        <Styled.TrackPlayLike>
            <Styled.TrackPlayLikeSvg alt='like' theme={theme} onClick={handleAddFavorites}>
            </Styled.TrackPlayLikeSvg>
        </Styled.TrackPlayLike>
    )
}

function TrackPlayDislike({handleDeleteFavorite}){
    const {theme} = useContext(ThemeContext);
    return(
        <Styled.TrackPlayDislike>
            <Styled.TrackPlayDislikeSvg alt='dislike' theme={theme} onClick={handleDeleteFavorite}>

            </Styled.TrackPlayDislikeSvg>
        </Styled.TrackPlayDislike>
    )
}

function TrackPlayLikeDislike({data}){


    const {data: favorites} = useGetFavoritesQuery();  
    const [addFavorites] = useAddFavoritesMutation();
    const [deleteFavorites] = useDeleteFavoritesMutation();
    const [favoritesItem, setFavorites] = useState([]); 
    
    useEffect(()=> {
        if(!favorites) return
        setFavorites(favorites.map((item) => item.id))
        console.log(favoritesItem);
      }, [favorites]);
    
      const handleAddFavorites = () => {
        const id = data.id;
        if(favoritesItem.includes(id)) {
            return
        }
        addFavorites(id)
      }

      const handleDeleteFavorites = () => {
        const id = data.id;
        if(favoritesItem.includes(id)) {
            deleteFavorites(id)
        }
      }

    return(
        <Styled.TrackPlayLikeDis>
            <TrackPlayLike handleAddFavorites={handleAddFavorites}/>
            <TrackPlayDislike handleDeleteFavorites={handleDeleteFavorites} />
        </Styled.TrackPlayLikeDis>
    )
}

function PlayerTrackPlay({data}){
    return(
        <Styled.TrackPlay>
            <TrackPlayContain data={data} />
            <TrackPlayLikeDislike data={data} />
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

    const { theme } = useContext(ThemeContext)

    const muteVolume = () => setMuteVolume((prev) => !prev);
    return(
        <Styled.VolumeImage on>
            <Styled.VolumeSvg theme={theme} onClick={muteVolume} alt='volume'>

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

function Bar({tracks, getShuffleTracks}) {
    const {theme} = useContext(ThemeContext);
    return(
        <Styled.Bar theme={theme}>
            <BarContent {...{tracks, getShuffleTracks}}/>
        </Styled.Bar>
    )
}

export default Bar;