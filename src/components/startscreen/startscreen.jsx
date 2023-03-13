/* eslint import/no-cycle: [2, { maxDepth: 1 }] */



import * as Styled from './styles';
import { StartscreenLogo } from '../startScreenLogo/startScreenLogo';
import { StartscreenForm } from '../startScreenForm/startScreenForm';




function StartScreen () {
    return(
        <Styled.StartscreenContainer>
            <Styled.StartscreenRegister>
                <StartscreenLogo />
                <StartscreenForm />
            </Styled.StartscreenRegister>
        </Styled.StartscreenContainer>
    )

}

export default StartScreen;