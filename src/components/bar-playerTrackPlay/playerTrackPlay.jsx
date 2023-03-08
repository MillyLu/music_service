import { TrackPlayContain } from '../bar-trackPlayContent/trackPlayContain';

import { TrackPlayLikeDislike } from '../bar-trackPlayLikeDislike/trackPlayLikeDislike'; 
import * as Styled from './styles';

export function PlayerTrackPlay({data}){
    return(
        <Styled.TrackPlay>
            <TrackPlayContain data={data} />
            <TrackPlayLikeDislike data={data} />
        </Styled.TrackPlay>
    )
}
