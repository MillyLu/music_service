import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useSignupUserMutation } from '../../services/user';
import * as Styled from './styles';


export function RegisterForm () {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');
    const [passWrong, setPassWrong] = useState(false);
    const [loginError, setLoginError] = useState(false);
    const [passError, setPassError] = useState(false);
    const [signupUser] = useSignupUserMutation();
  //  const [errorMsg, setError] = useState({});

     const navigate = useNavigate();
     const path = "/login";

    const handleSubmit = async (e) => {
        e.preventDefault();
        setPassWrong(false);
        if(password !== rePassword) {
            setPassWrong(true);
        }
        if(username && email && password) {
            await signupUser({username, email, password}).unwrap()
            .then(() => localStorage.setItem('name', username))    //
            .then(() => navigate( path, { replace: true }))
           // .catch((error) => console.log(error.data))
           .catch((error)  => {
            setLoginError('')
            setPassError('')
            if(error.data) {
                const errorText = error.data;
                if(errorText.username) {
                    setLoginError(errorText.username[0]);
                }
                if(errorText.password) {
                    setPassError(errorText.password[0]);
                }
                setUsername('')
                setPassword('')
                setRePassword('')
            }
        })

           
        }   
      
        }

        console.log();

    return(
        <Styled.StartscreenForm>
            <Styled.StartscreenInput type='login' placeholder='Логин' value={username} onChange={(e)=>setUsername(e.target.value)}></Styled.StartscreenInput>
            <Styled.StartscreenInput type='email' placeholder='Введите email' value={email} onChange={(e)=>setEmail(e.target.value)}></Styled.StartscreenInput>
            <Styled.StartscreenInputNoMargin type='password' placeholder='Пароль' value={password} onChange={(e)=>setPassword(e.target.value)}></Styled.StartscreenInputNoMargin>
            <Styled.PasswordHelp>(Пароль должен содержать как минимум 8 символов)</Styled.PasswordHelp>
            <Styled.StartscreenInput type='password' placeholder='Повторите пароль' value={rePassword} onChange={(e)=>setRePassword(e.target.value)}></Styled.StartscreenInput>
            {passWrong  && 
                    <Styled.Error>Оба введеных пароля должны совпадать</Styled.Error>
            }
            {loginError && 
            <Styled.Error>{loginError}</Styled.Error>
            }
            {passError && 
            <Styled.Error>{passError}</Styled.Error>
            }
            <Styled.StartscreenButton  onClick={handleSubmit}>Зарегистрироваться</Styled.StartscreenButton>

        </Styled.StartscreenForm>

    )
}