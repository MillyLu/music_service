import { useState, useEffect, useRef, useContext} from 'react';
import { ThemeContext } from '../../ThemeProvider';
import * as Styled from './styles';
import { ReactComponent as StopSvg } from './stop.svg';





// -------------------Player__Controls----------------------//


function BarContent() {
    const [audio, turnAudio] = useState();

    const toggleAudio = () => turnAudio((isAudio) => !isAudio);

     const [currentTime, setCurrentTime] = useState(0);
     const [maxValue, setMaxValue] = useState(0);

    const aud = useRef(null);
    const inputRef = useRef(null);
 

 const handleChange = () => {
    //  eslint-disable-next-line prefer-destructuring
     setCurrentTime(aud.current.currentTime);
     setMaxValue(aud.current.duration);



 }

 useEffect(() => {
        
    //  eslint-disable-next-line prefer-destructuring
inputRef.current.value = currentTime;
inputRef.current.max = maxValue;
     }, [currentTime]);

return(
    <Styled.BarContent>
        <Styled.BarPlayerProgress>
            <Styled.Progress ref={inputRef} value ={currentTime} max={maxValue}></Styled.Progress>
        </Styled.BarPlayerProgress>
        <Styled.BarPlayerBlock>
            <Styled.BarPlayer>
                <Styled.PlayerControls>
                <ButtonPrevious />
                <Styled.PlayerButtonPlay isSelected={audio} onClick={toggleAudio}>
                 <Styled.PlayerButtonPlaySvg >
                    {
                        audio ? 
                        <StopSvg />
                            :
                        <use xlinkHref='img/icon/sprite.svg#icon-play' />
                        
                    }
                     
                 </Styled.PlayerButtonPlaySvg>
                     {
                         audio && (
                         <Styled.Audio onTimeUpdate={handleChange}  ref={aud} src='Bobby_Marleni_-_Dropin.mp3' autoPlay></Styled.Audio>
                         )
                     }
            
                </Styled.PlayerButtonPlay>
                <ButtonNext />
                <ButtonRepeat />
                <ButtonShuffle />
                </Styled.PlayerControls>
                <PlayerTrackPlay />     
            </Styled.BarPlayer>
        <BarVolumeBlock />    
        </Styled.BarPlayerBlock>    


    </Styled.BarContent>
)

}





function ButtonPrevious(){
    return(
        <Styled.PlayerButtonPrev>
            <Styled.PlayerButtonPrevSvg alt='prev'>
                <use xlinkHref='img/icon/sprite.svg#icon-prev' />
            </Styled.PlayerButtonPrevSvg>
        </Styled.PlayerButtonPrev>
    )
}


/*
function ButtonPlay() {

    const [audio, turnAudio] = useState();

    const toggleAudio = () => turnAudio((isAudio) => !isAudio);

     const [currentTime, setCurrentTime] = useState(0);
     const [maxValue, setMaxValue] = useState(0);

    const aud = useRef(null);
    const inputRef = useRef(null);
 

 const handleChange = () => {
    //  eslint-disable-next-line prefer-destructuring
     setCurrentTime(aud.current.currentTime);
     console.log(currentTime);
     setMaxValue(aud.current.duration);
     console.log(maxValue);


 }

 useEffect(() => {
        
    //  eslint-disable-next-line prefer-destructuring
inputRef.current.value = currentTime;
inputRef.current.max = maxValue;
     }, [currentTime]);



    return(
        <Styled.PlayerButtonPlay onClick={toggleAudio}>
            <Styled.PlayerButtonPlaySvg>
                <use xlinkHref='img/icon/sprite.svg#icon-play' />
            </Styled.PlayerButtonPlaySvg>
            {
                audio && (
                    <Styled.Audio onTimeUpdate={handleChange}  ref={aud} src='Bobby_Marleni_-_Dropin.mp3' autoPlay></Styled.Audio>
                    )
            }
            <Progress ref={inputRef} value ={currentTime} max={maxValue} />
        </Styled.PlayerButtonPlay>
    )
}

*/
function ButtonNext(){
    return(
        <Styled.PlayerButtonNext>
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

function TrackPlayAuthor(props){
    const {theme} = useContext(ThemeContext)
    return(
        <Styled.TrackPlayAuthor>
            <Styled.TrackPlayLinkAuthor theme={theme} href={props.link}>{props.text}</Styled.TrackPlayLinkAuthor>
        </Styled.TrackPlayAuthor>
    )
}

function TrackPlayAlbum(props){
    const {theme} = useContext(ThemeContext)
    return(
        <Styled.TrackPlayAlbum>
            <Styled.TrackPlayLinkAlbum theme={theme} href={props.link}>{props.text}</Styled.TrackPlayLinkAlbum>
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

function TrackPlayContain(){
    const [skeleton, setSkeleton] = useState(false);
  
    useEffect(() => {
        setSkeleton(true);
        setTimeout(async () => {

            setSkeleton(false);

        }, 5000);
    }, []);

    return(
        <Styled.TrackPlayContain>
             {!skeleton ?
             (
            <>
            <TrackPlayImage />
            <TrackPlayAuthor text='Ты та...'/>
            <TrackPlayAlbum text='Баста'/>
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

function PlayerTrackPlay(){
    return(
        <Styled.TrackPlay>
            <TrackPlayContain />
            <TrackPlayLikeDislike />
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

function VolumeImage() {
    return(
        <Styled.VolumeImage>
            <Styled.VolumeSvg alt='volume'>
                <use xlinkHref='img/icon/sprite.svg#icon-volume' />
            </Styled.VolumeSvg>
        </Styled.VolumeImage>
    )
}

function VolumeProgress(){
    return(
        <Styled.VolumeProgress>
            <Styled.VolumeProgressLine name='range' />
        </Styled.VolumeProgress>
    )
}

function BarVolumeBlock() {
    return(
        <Styled.BarVolumeBlock>
            <Styled.VolumeContent>
                <VolumeImage />
                <VolumeProgress />
            </Styled.VolumeContent>
        </Styled.BarVolumeBlock>
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

function Bar() {
    const {theme} = useContext(ThemeContext);
    return(
        <Styled.Bar theme={theme}>
            <BarContent />
        </Styled.Bar>
    )
}

export default Bar;