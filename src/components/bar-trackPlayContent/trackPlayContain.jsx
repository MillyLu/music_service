import { useState, useEffect } from 'react';
import * as Styled from './styles';
import { TrackPlayImage } from '../bar-trackPlayImage/trackPlayImage';
import { TrackPlayAuthor } from '../bar-trackPlayAuthor/trackPlayAuthor';
import { TrackPlayAlbum } from '../bar-trackPlayAlbum/trackPlayAlbum';
import { TrackPlaySkeletonImage } from '../bar-trackPlaySkeletonImage/trackPlaySkeletonImage';
import { TrackPlaySkeletonAuthor } from '../bar-trackPlaySkeletonAuthor/trackPlaySkeletonAuthor';
import { TrackPlaySkeletonAlbum } from '../bar-trackPlaySkeletonAlbum/trackPlaySkeletonAlbum';

export function TrackPlayContain({data}) {
 
    const [skeleton, setSkeleton] = useState(true);
  
    useEffect(() => {
        if(!data) return
        setSkeleton(false);

    }, [data]); 

    return(
        <Styled.TrackPlayContain>
             {!skeleton ?
             (
            <>
            <TrackPlayImage />
            <TrackPlayAuthor data={data}/>
            <TrackPlayAlbum data={data}/>
            </>) :
            (
                <>
                <TrackPlaySkeletonImage />
                <TrackPlaySkeletonAuthor />
                <TrackPlaySkeletonAlbum />
                </>
            )
            }          
        </Styled.TrackPlayContain>
    )
}