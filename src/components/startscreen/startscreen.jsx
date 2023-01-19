/* eslint import/no-cycle: [2, { maxDepth: 1 }] */



import { useNavigate } from 'react-router-dom';

import * as Styled from './styles';
import logo from './logo-log.png';







function StartscreenLogo () {
    return(
        <Styled.StartscreenDivLogo>
            <Styled.StartscreenLogo src={logo}/>
        </Styled.StartscreenDivLogo>
        
    )

}

function StartscreenLogin () {
    return(
        <>
        <Styled.StartscreenInput type='login' placeholder='Логин'></Styled.StartscreenInput>
        <Styled.StartscreenInput type='password' name='password' placeholder='Пароль'></Styled.StartscreenInput>
        </>

    )
}

function StartscreenEnter () {

const handle = () => {
    localStorage.setItem("token", 'true');
}

    return(
        <Styled.StartscreenButton onClick={handle}>Войти</Styled.StartscreenButton>
    )
}

function StartscreenButtonRegister () {
    return(
        <Styled.StartscreenButtonReg>Зарегистрироваться</Styled.StartscreenButtonReg>
    )
}

function StartscreenForm() {
    const navigate = useNavigate();


    const handleSubmit = () => {
       
        navigate("/", { replace: true });
      
        }

    return(
        <Styled.StartscreenForm onsubmit={handleSubmit}>
            <StartscreenLogin />
            <StartscreenEnter />
            <StartscreenButtonRegister />          

        </Styled.StartscreenForm>

    )
}

function StartscreenModal () {
    return(
        <Styled.StartscreenRegister>
            <StartscreenLogo />
            <StartscreenForm />
        </Styled.StartscreenRegister>

    )
}

function StartScreen () {
    return(
        <Styled.StartscreenContainer>
            <StartscreenModal />
        </Styled.StartscreenContainer>
    )

}

export default StartScreen;