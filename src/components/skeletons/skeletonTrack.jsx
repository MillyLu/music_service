import * as Styled from './styles'


export function SkeletonTrack() {
    return(
        <Styled.PlaylistItem> 
            <Styled.PlaylistTrackSkeleton>
                <Styled.TrackTitle>
                    <Styled.TrackTitleImage>
                        <Styled.SkeletonImage></Styled.SkeletonImage>
                    </Styled.TrackTitleImage>
                    <Styled.TrackTitleText>
                        <Styled.SkeletonTitle></Styled.SkeletonTitle>
                    </Styled.TrackTitleText>
                </Styled.TrackTitle>
                <Styled.TrackAuthor>
                    <Styled.SkeletonAuthor></Styled.SkeletonAuthor>
                </Styled.TrackAuthor>
                <Styled.TrackAlbum>
                    <Styled.SkeletonAlbum></Styled.SkeletonAlbum>
                </Styled.TrackAlbum>

            </Styled.PlaylistTrackSkeleton>
        </Styled.PlaylistItem>    
    )
}