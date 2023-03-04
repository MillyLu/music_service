
/* eslint-disable react/jsx-no-bind */

import { useState, useEffect, useContext} from 'react';
import { Filter } from '../filters/filters';
import { ContentPlaylistPlaylist } from '../contentPlaylist/contentPlaylist';
import { Search } from '../search/search';
import { ContentPlaylistTitle } from '../playListTitle/playListTitle';
import { SkeletonTrack } from '../skeletons/skeletonTrack';
import  Navigation  from "../navigation/nav";
import { ThemeContext } from '../../ThemeProvider';
import Bar from "../bar/bar";
import * as Styled from './styles'
import { useGetSelectionsByIdQuery } from '../../services/selections';



function HitsTitle() {
    const {theme} = useContext(ThemeContext);
    return(
        <Styled.CenterblockTitle theme={theme}>100 Танцевальных хитов</Styled.CenterblockTitle>
    )
}

function HitsCenterBlock() {


    const id = 3;
    const { theme } = useContext(ThemeContext);
    const [tracks, setTracks] = useState([]); // выводит трек-лист
    const [searchTracks, setSearchTracks] = useState([]); // трек-лист, сформированнный по поиску
    const [filterByAuthor, setFilterByAuthor] = useState([]); // трек-лист фильтрации по автору
    const [filterByYear, setFilterByYear] = useState([]); // трек-лист для фильтрации по году
    const [filterByGenre, setFiltersByGenre] = useState([]); // трек-лист для фильтрации по жанру
    const [shuffleTracks, setShuffleTracks] = useState([]);
    const [openBar, setOPenBar] = useState(false);



    const { data: tracksAll =[], isSuccess: isTracksSuccess, isLoading: isTracksLoading, error } = useGetSelectionsByIdQuery(id);

    console.log(tracksAll);
    const trackList = structuredClone(tracksAll.items);
    console.log(trackList);

// /////////////////

// //////////////////////////////////
    let searchingTracks;
    let tracksByAuthor;
    let tracksByData;
    let tracksByGenre;
    let shuffle;

    if(error) console.log(error.message);

    function getTracksByAuthor (auth) {
        tracksByAuthor = tracksAll.items.filter((item) => 
        item.author.toLowerCase().includes(auth.toLowerCase()));
        setFilterByAuthor(tracksByAuthor)
    }

    function getTracksByGenre (genr) {
        tracksByGenre = tracksAll.items.filter((item) => 
        item.genre.toLowerCase().includes(genr.toLowerCase()));
        setFiltersByGenre(tracksByGenre);
    }

    function getSearchTracks (str) {
       searchingTracks = tracksAll.items.filter((item) => 
           item.name.toLowerCase().includes(str.toLowerCase())
       );
       console.log(searchingTracks);
      setSearchTracks(searchingTracks);
    }

    function getTracksByData (year) {
        console.log(year);
        if(year === "new") {
            tracksByData = structuredClone(tracksAll.items);
            tracksByData.sort((a, b) => a.release_date > b.release_date ? -1 : 1);
        }
        if(year === "old") {
            tracksByData = structuredClone(tracksAll.items);
            tracksByData.sort((a, b) => a.release_date < b.release_date ? -1 : 1);
        }
        console.log(tracksByData);
        setFilterByYear(tracksByData);
    }

    function getShuffleTracks () {
        shuffle = structuredClone(tracksAll.items);
        shuffle.sort(() => Math.random() - 0.5);
        console.log(shuffle);
        setShuffleTracks(shuffle)
    }

 



   
    useEffect(() => {
    if(!trackList) return
    if(searchTracks) setTracks(searchTracks);
    // if(filterByAuthor) setTracks(filterByAuthor);
    if(searchTracks.length < 1 && filterByAuthor.length < 1 && filterByAuthor.length < 1 && filterByYear.length < 1 && filterByGenre.length < 1) {
        setTracks(tracksAll.items)
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

 /* useEffect(() => {
    if(shuffleTracks.length < 1) return
    if(shuffleTracks.length > 1) setTracks(shuffleTracks)
}, [isTracksSuccess, shuffleTracks]) */



 console.log(tracks);


 
    return(
        <Styled.MainCenterblock style={{ backgroundColor: theme === "light" ? "#FFFFFF" : "#1C1C1C" }}>
            <Search searchTracks={getSearchTracks}/>
            <HitsTitle />
            <Filter data={tracks} getTracksByAuthor={getTracksByAuthor} getTracksByData={getTracksByData} getTracksByGenre={getTracksByGenre}/>

            <Styled.CenterblockContent>
            <ContentPlaylistTitle />
            {isTracksLoading && (
              [...new Array(20).keys()].map((key) => <SkeletonTrack key={key} />) ) }
             {(tracks.length > 1 || tracks.length === 1) && ( 
              <ContentPlaylistPlaylist tracks={tracks} setOPenBar={setOPenBar}/>)}
             
            
            </Styled.CenterblockContent>
            {(openBar === true) && (tracks.length > 1 || tracks.length === 1) && ( 
              <Bar tracks={shuffleTracks.length > 1 ? shuffleTracks : tracks} getShuffleTracks={getShuffleTracks}/>)}

        </Styled.MainCenterblock>
    )
}





function Footer() {
    return(
        <footer className='footer' />
    )
}

function Main() {
    const {theme} = useContext(ThemeContext);
    return(
        <Styled.Main theme={theme}>
            <Navigation />
            <HitsCenterBlock />
        </Styled.Main>
    )
}

export function PlaylistContainer() {
    const {theme} = useContext(ThemeContext);
    return(
        <Styled.PlaylistContainer theme={theme}>
            <Main />
            <Bar />
            <Footer />
        </Styled.PlaylistContainer>
    )
}