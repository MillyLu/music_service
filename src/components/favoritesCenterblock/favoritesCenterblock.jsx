/* eslint-disable react/jsx-no-bind */



import { useState, useEffect, useContext} from 'react';
import { ThemeContext } from '../../ThemeProvider';
import { useGetFavoritesQuery } from '../../services/favorites';
import { Search } from '../search/search';
import { Title } from '../title/title';
// import { Filter } from '../filters/filters';
import { SkeletonTrack } from '../skeletons/skeletonTrack';
import { ContentPlaylistTitle } from '../playListTitle/playListTitle';
import { ContentPlaylistPlaylist } from '../contentPlaylist/contentPlaylist';
import * as Styled from './styles';





export function FavoritesCenterBlock() {

const { theme } = useContext(ThemeContext);

    const [tracks, setTracks] = useState([]); // выводит трек-лист

    const [searchTracks, setSearchTracks] = useState([]); // трек-лист, сформированнный по поиску
   // const [filterByAuthor, setFilterByAuthor] = useState([]); // трек-лист фильтрации по автору
   // const [filterByYear, setFilterByYear] = useState([]); // трек-лист для фильтрации по году
  //  const [filterByGenre, setFiltersByGenre] = useState([]); // трек-лист для фильтрации по жанру

    const { data: tracksAll =[], isSuccess: isTracksSuccess, isLoading: isTracksLoading, error } = useGetFavoritesQuery();

    const trackList = structuredClone(tracksAll);
    console.log(trackList);

    let searchingTracks;
  
    if(error) console.log(error.message);

  /*  function getTracksByAuthor (auth) {
        tracksByAuthor = tracksAll.filter((item) => 
        item.author.toLowerCase().includes(auth.toLowerCase()));
        setFilterByAuthor(tracksByAuthor)
    }

    function getTracksByGenre (genr) {
        tracksByGenre = tracksAll.filter((item) => 
        item.genre.toLowerCase().includes(genr.toLowerCase()));
        setFiltersByGenre(tracksByGenre);
    } */

    function getSearchTracks (str) {
       searchingTracks = tracksAll.filter((item) => 
           item.name.toLowerCase().includes(str.toLowerCase())
       );
       console.log(searchingTracks);
      setSearchTracks(searchingTracks);
    }

  /* function getTracksByData (year) {
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
    } */
useEffect(() => {
    if(!trackList) return
    if(trackList) setTracks(trackList)
}, [isTracksSuccess])
   
    useEffect(() => {
    if(!trackList) return
    if(searchTracks) setTracks(searchTracks);
    // if(filterByAuthor) setTracks(filterByAuthor);
    if(searchTracks.length < 1 ) {
        setTracks(tracksAll)
    }
 
 }, [isTracksSuccess, searchTracks]); 

 /* useEffect(() => {
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
 }, [isTracksSuccess, filterByGenre]) */

 

 console.log(tracks);


 
    return(
        <Styled.MainCenterblock style={{ backgroundColor: theme === "light" ? "#FFFFFF" : "#1C1C1C" }}>
            <Search searchTracks={getSearchTracks}/>
            <Title />
          

            <Styled.CenterblockContent>
            <ContentPlaylistTitle />
            {isTracksLoading && (
              [...new Array(10).keys()].map((key) => <SkeletonTrack key={key} />) ) }
             {(tracks.length > 1 || tracks.length === 1) && ( 
              <ContentPlaylistPlaylist tracks={tracks}  />)}
            
        </Styled.CenterblockContent>


        </Styled.MainCenterblock>
    )
}

