import { VolumeImage } from '../bar-volumeImage/volumeImage';
import { VolumeProgress } from '../bar-volumeProgress/volumeProgress';
import * as Styled from './styles';

export function BarVolumeBlock({setMuteVolume, volume, setVolume}) {
    return(
        <Styled.BarVolumeBlock>
            <Styled.VolumeContent>
                <VolumeImage setMuteVolume={setMuteVolume}/>
                <VolumeProgress volume={volume} setVolume={setVolume}/>
            </Styled.VolumeContent>
        </Styled.BarVolumeBlock>
    )
}