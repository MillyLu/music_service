import * as Styled from './styles';


export function VolumeProgress({volume, setVolume}){
    return(
        <Styled.VolumeProgress>
            <Styled.VolumeProgressLine data-testid="progress" value={volume} name='range' min={0} max={100} onChange={(e) => setVolume(e.target.value)} />
        </Styled.VolumeProgress>
    )
}