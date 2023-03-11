/* eslint-disable prefer-destructuring */
import { useState, useEffect} from 'react';
import {useGetFavoritesQuery, useAddFavoritesMutation, useDeleteFavoritesMutation} from '../../services/favorites';
import { TrackPlayLike } from '../bar-trackPlayLike/trackPlayLike';
import { TrackPlayDislike } from '../bar-trackPlayDislike/trackPlayDislike';
import * as Styled from './styles';

export function TrackPlayLikeDislike({data}){


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