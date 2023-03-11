import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useSignupUserMutation } from '../../services/user';
import * as Styled from './styles';


export function RegisterForm () {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [signupUser] = useSignupUserMutation();
  //  const [errorMsg, setError] = useState({});

     const navigate = useNavigate();
     const path = "/login";

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(username && email && password) {
            await signupUser({username, email, password}).unwrap()
            .then(() => localStorage.setItem('name', username))    //
            .then(() => navigate( path, { replace: true }))
            .catch((error) => console.log(error.data))

           
        }   
      
        }

        console.log();

    return(
        <Styled.StartscreenForm>
            <Styled.StartscreenInput type='login' placeholder='Логин' value={username} onChange={(e)=>setUsername(e.target.value)}></Styled.StartscreenInput>
            <Styled.StartscreenInput type='email' placeholder='Введите email' value={email} onChange={(e)=>setEmail(e.target.value)}></Styled.StartscreenInput>
            <Styled.StartscreenInputNoMargin type='password' placeholder='Пароль' value={password} onChange={(e)=>setPassword(e.target.value)}></Styled.StartscreenInputNoMargin>
            <Styled.PasswordHelp>(Пароль должен содержать как минимум 8 символов)</Styled.PasswordHelp>
            <Styled.StartscreenInput type='password' placeholder='Повторите пароль'></Styled.StartscreenInput>
            <Styled.StartscreenButton onClick={handleSubmit}>Зарегистрироваться</Styled.StartscreenButton>

        </Styled.StartscreenForm>

    )
}