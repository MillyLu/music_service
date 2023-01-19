import * as Styled from './styles';
import logo from './logo-log.png'

function RegisterLogo () {
    return(
        <Styled.StartscreenDivLogo>
            <Styled.StartscreenLogo src={logo}/>
        </Styled.StartscreenDivLogo>
        
    )

}

function RegisterLogin () {
    return(
        <>
        <Styled.StartscreenInput type='login' placeholder='Логин'></Styled.StartscreenInput>
        <Styled.StartscreenInput type='password' name='password' placeholder='Пароль'></Styled.StartscreenInput>
        <Styled.StartscreenInput type='password' name='passwordR' placeholder='Повторите пароль'></Styled.StartscreenInput>
        </>

    )
}


function RegisterButton () {
    return(
        <Styled.StartscreenButton>Зарегистрироваться</Styled.StartscreenButton>
    )
}

function RegisterForm() {
    return(
        <Styled.StartscreenForm>
            <RegisterLogin />
            <RegisterButton />
        </Styled.StartscreenForm>

    )
}

function RegisterModal () {
    return(
        <Styled.StartscreenRegister>
            <RegisterLogo />
            <RegisterForm />
        </Styled.StartscreenRegister>

    )
}

function RegisterScreen () {
    return(
        <Styled.StartscreenContainer>
            <RegisterModal />
        </Styled.StartscreenContainer>
    )

}

export default RegisterScreen;
