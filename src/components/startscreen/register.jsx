import * as Styled from './styles';
import { StartscreenLogo } from '../startScreenLogo/startScreenLogo';
import { RegisterForm } from '../registerForm/registerForm';







function RegisterScreen () {
    return(
        <Styled.StartscreenContainer>
            <Styled.StartscreenRegister>
                <StartscreenLogo />
                <RegisterForm />
            </Styled.StartscreenRegister>
        </Styled.StartscreenContainer>
    )

}

export default RegisterScreen;

