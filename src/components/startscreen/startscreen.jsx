/* eslint import/no-cycle: [2, { maxDepth: 1 }] */



import { useNavigate } from 'react-router-dom';
import { useState} from 'react';
import { useDispatch} from 'react-redux';
import { useGetUserTokenMutation, useLoginUserMutation } from '../../services/user';
import { setUser} from '../../store/state';


import * as Styled from './styles';
import logo from './logo-log.png';







function StartscreenLogo () {
    return(
        <Styled.StartscreenDivLogo>
            <Styled.StartscreenLogo src={logo}/>
        </Styled.StartscreenDivLogo>
        
    )

}


function StartscreenButtonRegister () {
    const navigate = useNavigate();
    const path = "/register";

    const handleClick = (e) => {
        e.preventDefault();
        navigate( path, { replace: true });
      
        }


    return(
        <Styled.StartscreenButtonReg onClick={handleClick}>Зарегистрироваться</Styled.StartscreenButtonReg>
    )
}

function StartscreenForm() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [loginUser] = useLoginUserMutation();
     const [getUserToken] = useGetUserTokenMutation();
    // const navigate = useNavigate();
     // const path = "/";
     const dispatch = useDispatch();
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(username && password) {
            await loginUser({username, email, password}).unwrap()
            // localStorage.setItem('token', 'true');
             await getUserToken({username, email, password}).unwrap()
             .then((data) => dispatch(setUser({token: data.access})))
            // .then((data) => localStorage.setItem('userToken', data.access))
            
             
            

            // navigate( path, { replace: true });
        }

        // const token = useSelector((state) => state.auth);


      
        }

    return(
        <Styled.StartscreenForm onSubmit={handleSubmit}>
            <Styled.StartscreenInput type='login' placeholder='Логин' value={username} onChange={(e)=>setUsername(e.target.value)}></Styled.StartscreenInput>
            <Styled.StartscreenInput type='email' placeholder='Введите email' value={email} onChange={(e)=>setEmail(e.target.value)}></Styled.StartscreenInput>
            <Styled.StartscreenInput type='password' placeholder='Пароль' value={password} onChange={(e)=>setPassword(e.target.value)}></Styled.StartscreenInput>
            <Styled.StartscreenButton >Войти</Styled.StartscreenButton>
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