/* eslint-disable import/order */
/* eslint-disable no-unneeded-ternary */
import { useState, useEffect } from 'react';
import * as Styled from './styles';
import { PlayListItem } from '../playlistItem/playlistItem';

import { useAddFavoritesMutation, useDeleteFavoritesMutation, useGetFavoritesQuery } from '../../services/favorites';
import { useDispatch, } from 'react-redux';
import { setTrack } from '../../store/trackSlice';
// import { useGetTrackByIdQuery } from '../../services/track';


export function ContentPlaylistPlaylist(props) {

  const dispatch = useDispatch();
 //  const trackId = useSelector(selectTrack);

 // const [skip, setSkip] = useState(trackId ? false : true);
  // const { dataTrack } = useGetTrackByIdQuery(trackId, { skip });
  // console.log(dataTrack);

    const {data: favorites} = useGetFavoritesQuery();  
    const [addFavorites] = useAddFavoritesMutation();
    const [deleteFavorites] = useDeleteFavoritesMutation();
    const [favoritesItem, setFavorites] = useState([]); 


  /*  useEffect(() => {
      if(!props.nextTrack) return
      dispatch(setTrack(props.nextTrack))
      props.setCurrentTrack(props.nextTrack);
      setSkip(false)
    }) */

 /*   useEffect(() => {
      if(props.isNext === "false") return
      console.log("NEXTTTTTT");
    }, [props.isNext]) */


const handleLoadTrack = (id) => {
  dispatch(setTrack(id));
  props.setOPenBar(true);
//  props.setCurrentTrack(id)
  // setSkip(false);
}

console.log(props.tracks);







  
    useEffect(()=> {
      if(!favorites) return
      setFavorites(favorites.map((item) => item.id))
      console.log(favoritesItem);
    }, [favorites]);
  
    const handleChangeOfFavorites = (item) => {
      const {id} = item;
      if(favoritesItem.includes(id)) {
          deleteFavorites(id)
          return
      }
      addFavorites(id)
    }
  
      const timeConvert = (time) => {
          const minutes = Math.trunc(Number(time)/60);
          const seconds = Number(time) - minutes*60;
          return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`
      } 
  

    return(
        <Styled.ContentPlaylist>        
              
             
            {props.tracks.length >= 1 && (
             props.tracks.map((item) => (            
             <PlayListItem onFetchTrack={handleLoadTrack}id={item.id} handleChangeOfFavorites={handleChangeOfFavorites} item={item} key={item.id} author={item.author} album={item.album} title={item.name} subtitle={item.extraName} time={timeConvert(item.duration_in_seconds)}/>      
           
            )))
             
}
             
        </Styled.ContentPlaylist>
    )   

}
