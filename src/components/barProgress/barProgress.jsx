/* eslint-disable no-param-reassign */
import * as Styled from './styles';


export function BarProgress({
    inputRef,
    aud

  }) {

    const handleProgressChange = () => {
        aud.current.currentTime = inputRef.current.value;
      };


    return (
        <Styled.BarPlayerProgress>
             
              <Styled.Progress data-testid="progress" type="range" defaultValue='0' ref={inputRef} onChange={handleProgressChange}></Styled.Progress>

        </Styled.BarPlayerProgress>
    )
}
