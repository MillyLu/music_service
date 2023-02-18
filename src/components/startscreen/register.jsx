import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useSignupUserMutation } from '../../services/user';
import * as Styled from './styles';
import logo from './logo-log.png'

function RegisterLogo () {
    return(
        <Styled.StartscreenDivLogo>
            <Styled.StartscreenLogo src={logo}/>
        </Styled.StartscreenDivLogo>
        
    )

}

function RegisterForm () {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [signupUser] = useSignupUserMutation();

     const navigate = useNavigate();
     const path = "/login";

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(username && email && password) {
            await signupUser({username, email, password}).unwrap()
            .then(() => navigate( path, { replace: true }))
            .catch((error) => console.error('rejected', error))
            
        }   
      
        }

    return(
        <Styled.StartscreenForm>
            <Styled.StartscreenInput type='login' placeholder='Логин' value={username} onChange={(e)=>setUsername(e.target.value)}></Styled.StartscreenInput>
            <Styled.StartscreenInput type='email' placeholder='Введите email' value={email} onChange={(e)=>setEmail(e.target.value)}></Styled.StartscreenInput>
            <Styled.StartscreenInput type='password' placeholder='Пароль' value={password} onChange={(e)=>setPassword(e.target.value)}></Styled.StartscreenInput>
            <Styled.StartscreenInput type='password' placeholder='Повторите пароль'></Styled.StartscreenInput>
            <Styled.StartscreenButton onClick={handleSubmit}>Зарегистрироваться</Styled.StartscreenButton>

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

