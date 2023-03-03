import * as Styled from './styles';



export function ContentPlaylistTitle(){
    return(
        <Styled.ContentTitle>
            <Styled.PlaylistTitleCol01>Трек</Styled.PlaylistTitleCol01>
            <Styled.PlaylistTitleCol02>ИСПОЛНИТЕЛЬ</Styled.PlaylistTitleCol02>
            <Styled.PlaylistTitleCol03>АЛЬБОМ</Styled.PlaylistTitleCol03>
            <Styled.PlaylistTitleCol04>
                <Styled.PlaylistTitleSvg alt='time'>
                    <use xlinkHref='img/icon/sprite.svg#icon-watch' />
                </Styled.PlaylistTitleSvg>
            </Styled.PlaylistTitleCol04>
        </Styled.ContentTitle>
    )
}