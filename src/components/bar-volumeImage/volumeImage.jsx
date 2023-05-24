import { useContext } from "react";
import { ThemeContext } from "../../ThemeProvider";
import * as Styled from './styles';


export function VolumeImage({setMuteVolume}) {

    const { theme } = useContext(ThemeContext)

    const muteVolume = () => setMuteVolume((prev) => !prev);
    return(
        <Styled.VolumeImage on>
            <Styled.VolumeSvg theme={theme} onClick={muteVolume} alt='volume'>

            </Styled.VolumeSvg>
        </Styled.VolumeImage>
    )
}