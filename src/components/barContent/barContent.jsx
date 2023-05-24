/* eslint-disable react/jsx-no-bind */
/* eslint-disable no-nested-ternary */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-param-reassign */
import { useState, useEffect, useRef, useCallback} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as Styled from './styles';

import { setTrack, selectTrack } from '../../store/trackSlice';
import { useGetTrackByIdQuery } from '../../services/track';


import { ButtonPlay } from '../bar-buttonPlay/buttonPlay';
import { ButtonPrevious } from '../bar-buttonPrevious/buttonPrevious';
import { ButtonNext } from '../bar-buttonNext/buttonNext';
import { ButtonRepeat } from '../bar-buttonRepeat/buttonRepeat';
import { ButtonShuffle } from '../bar-buttonShuffle/buttonShuffle';
import { PlayerTrackPlay } from '../bar-playerTrackPlay/playerTrackPlay';

import { BarVolumeBlock } from '../bar-volumeBlock/barVolumeBlock';
import { BarProgress } from '../barProgress/barProgress';



export function BarContent({tracks, getShuffleTracks}) {

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
