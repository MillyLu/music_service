/* eslint-disable no-nested-ternary */
/* eslint-disable no-unneeded-ternary */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable camelcase */
/* eslint-disable react/jsx-no-duplicate-props */


import { useState, useEffect, useContext } from 'react';
 import { useDispatch, useSelector } from 'react-redux';
import * as Styled from './styles';
import { ThemeContext } from '../../ThemeProvider';
import { useGetAllTracksQuery, useGetTrackByIdQuery } from '../../services/track';
 import { setTrack, selectTrack } from '../../store/trackSlice';
import { Search } from '../search/search';
import { Title } from '../title/title';
import { Filter } from '../filters/filters';
import { SkeletonTrack } from '../skeletons/skeletonTrack';
// import { CenterBlockContent } from '../center/centerBlock';
// import { SkeletonTrack } from '../skeletons/skeletonTrack';
// import { Content } from '../contentTracks/contentTracks';
import { ContentPlaylistTitle } from '../playListTitle/playListTitle';
import { ContentPlaylistPlaylist } from '../contentPlaylist/contentPlaylist';
import  Bar  from '../bar/bar';






function MainCenterBlock() {



    const { theme } = useContext(ThemeContext);
    const [tracks, setTracks] = useState([]); // выводит трек-лист
    const [searchTracks, setSearchTracks] = useState([]); // трек-лист, сформированнный по поиску
    const [filterByAuthor, setFilterByAuthor] = useState([]); // трек-лист фильтрации по автору
    const [filterByYear, setFilterByYear] = useState([]); // трек-лист для фильтрации по году
    const [filterByGenre, setFiltersByGenre] = useState([]); // трек-лист для фильтрации по жанру




    const { data: tracksAll =[], isSuccess: isTracksSuccess, isLoading: isTracksLoading, error } = useGetAllTracksQuery();

    console.log(tracksAll);
    const trackList = structuredClone(tracksAll);
    console.log(trackList);

// /////////////////

const [currentTrack, setCurrentTrack] = useState(null);
 const [nextTrack, setNextTrack ] = useState(null);
const [isNext, setIsNext] = useState(false);
const trackId = useSelector(selectTrack);

const [prevTrack, setPrevTrack] = useState(null);
const [isPrev, setIsPrev] = useState(false);

const [skip, setSkip] = useState(trackId ? false : true);
const { dataTrack } = useGetTrackByIdQuery(trackId, { skip });
// const [skip, setSkip] = useState(nextTrack ? false : true);
 const dispatch = useDispatch();
function findNextTrack() {
    console.log(currentTrack);
    const nextIndex = ((tracks.findIndex(el => el.id === currentTrack)) + 1 ) // % tracks.length
    console.log(nextIndex);
setNextTrack(tracks[nextIndex]);
   dispatch(setTrack(nextIndex))
       setIsNext(false);
       setSkip(false);
       console.log(dataTrack);
}

function findPrevTrack() {
    const prevIndex = ((tracks.findIndex(el => el.id === currentTrack)) - 1)
    if (prevIndex >= 0) {
        setPrevTrack(tracks[prevIndex]);
        dispatch(setTracks(prevIndex))
        setIsPrev(false);
        setSkip(false);
}
}

useEffect(() => {
    findPrevTrack();
}, [isPrev])

const handleLoadTrack = () => {
    findNextTrack();
  }

useEffect(() => {
    handleLoadTrack()
    console.log(isNext);
}, [isNext])


// //////////////////////////////////
    let searchingTracks;
    let tracksByAuthor;
    let tracksByData;
    let tracksByGenre;

    if(error) console.log(error.message);

    function getTracksByAuthor (auth) {
        tracksByAuthor = tracksAll.filter((item) => 
        item.author.toLowerCase().includes(auth.toLowerCase()));
        setFilterByAuthor(tracksByAuthor)
    }

    function getTracksByGenre (genr) {
        tracksByGenre = tracksAll.filter((item) => 
        item.genre.toLowerCase().includes(genr.toLowerCase()));
        setFiltersByGenre(tracksByGenre);
    }

    function getSearchTracks (str) {
       searchingTracks = tracksAll.filter((item) => 
           item.name.toLowerCase().includes(str.toLowerCase())
       );
       console.log(searchingTracks);
      setSearchTracks(searchingTracks);
    }

    function getTracksByData (year) {
        console.log(year);
        if(year === "new") {
            tracksByData = structuredClone(tracksAll);
            tracksByData.sort((a, b) => a.release_date > b.release_date ? -1 : 1);
        }
        if(year === "old") {
            tracksByData = structuredClone(tracksAll);
            tracksByData.sort((a, b) => a.release_date < b.release_date ? -1 : 1);
        }
        console.log(tracksByData);
        setFilterByYear(tracksByData);
    }



   
    useEffect(() => {
    if(!trackList) return
    if(searchTracks) setTracks(searchTracks);
    // if(filterByAuthor) setTracks(filterByAuthor);
    if(searchTracks.length < 1 && filterByAuthor.length < 1 && filterByAuthor.length < 1 && filterByYear.length < 1 && filterByGenre.length < 1) {
        setTracks(tracksAll)
    }
 
 }, [isTracksSuccess, searchTracks]); 

 useEffect(() => {
    if(filterByAuthor.length < 1) return
    if(filterByAuthor.length > 1 || filterByAuthor.length === 1) setTracks(filterByAuthor)        
 }, [isTracksSuccess, filterByAuthor]); 

 useEffect(() => {
    if(!filterByYear) return
    if(filterByYear.length > 1) setTracks(filterByYear)
 }, [isTracksSuccess, filterByYear])

 useEffect(() => {
    if(filterByGenre.length < 1) return
    if(filterByGenre.length >= 1) setTracks(filterByGenre)
 }, [isTracksSuccess, filterByGenre])



 console.log(tracks);


 
    return(
        <Styled.MainCenterblock style={{ backgroundColor: theme === "light" ? "#FFFFFF" : "#1C1C1C" }}>
            <Search searchTracks={getSearchTracks}/>
            <Title />
            <Filter data={tracks} getTracksByAuthor={getTracksByAuthor} getTracksByData={getTracksByData} getTracksByGenre={getTracksByGenre}/>

            <Styled.CenterblockContent>
            <ContentPlaylistTitle />
            {isTracksLoading && (
              [...new Array(20).keys()].map((key) => <SkeletonTrack key={key} />) ) }
             {(tracks.length > 1 || tracks.length === 1) && ( 
              <ContentPlaylistPlaylist tracks={tracks} setCurrentTrack={setCurrentTrack}/>)}
             
            
            </Styled.CenterblockContent>
           <Bar setIsNext={setIsNext} setIsPrev={setIsPrev}setCurrentTrack={setCurrentTrack} nextTrack={nextTrack ? nextTrack : ''}  prevTrack={prevTrack ? prevTrack : ''}/>

        </Styled.MainCenterblock>
    )
}

export default MainCenterBlock;