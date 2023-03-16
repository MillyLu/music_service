/* eslint-disable no-unneeded-ternary */
import { useContext} from 'react';
import * as Styled from './styles';
import { ThemeContext } from '../../ThemeProvider';

export function PlayListItem({id, author, album, time, title, subtitle, item, handleChangeOfFavorites, onFetchTrack}) { 
    const {theme} = useContext(ThemeContext);


    return(
        <Styled.PlaylistItem onClick={() => onFetchTrack(id)}> 
            <Styled.PlaylistTrack>
                <Styled.TrackTitle>
                    <Styled.TrackTitleImage style={{ backgroundColor: theme === "light" ? "#F6F4F4" : "#313131" }}>
                        <Styled.TrackTitleSvg alt='music' >
                            
                        </Styled.TrackTitleSvg>
                    </Styled.TrackTitleImage>
                    <Styled.TrackTitleText>
                        <Styled.TrackTitleLink onClick={() => onFetchTrack(id)} href='#' style={{ color: theme === "light" ? "#000000" : "#FFFFFF" }}>{title}<Styled.TrackTitleSpan>{subtitle}</Styled.TrackTitleSpan></Styled.TrackTitleLink>
                       
                    </Styled.TrackTitleText>
                </Styled.TrackTitle>
                <Styled.TrackAuthor>
                    <Styled.TrackAuthorLink href='#' style={{ color: theme === "light" ? "#000000" : "#FFFFFF" }}>{author}</Styled.TrackAuthorLink>
                </Styled.TrackAuthor>
                <Styled.TrackAlbum>
                    <Styled.TrackAlbumLink href='#'>{album}</Styled.TrackAlbumLink>
                </Styled.TrackAlbum>
                <Styled.TrackTime>
                    <Styled.TrackTimeSvg  theme={theme} alt='time' onClick={(event) => {
          handleChangeOfFavorites(item)
          event.stopPropagation()
        }}>
                    </Styled.TrackTimeSvg>
                    <Styled.TrackTimeText>{time}</Styled.TrackTimeText> 
                </Styled.TrackTime>
            </Styled.PlaylistTrack>
        </Styled.PlaylistItem>
    )



}
