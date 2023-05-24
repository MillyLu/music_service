/* eslint import/no-cycle: [2, { maxDepth: 1 }] */



import { useNavigate } from 'react-router-dom';
import { useState} from 'react';
 import { useDispatch} from 'react-redux';
import { useGetUserTokenMutation, useLoginUserMutation } from '../../services/user';
import { setUser} from '../../store/state';


import * as Styled from './styles';
import { StartscreenButtonRegister } from '../startScreen-buttonRegister/buttonRegister';

export function StartscreenForm() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [loginUser] = useLoginUserMutation();
     const [getUserToken] = useGetUserTokenMutation();
     const navigate = useNavigate();
     const path = "/";
    const dispatch = useDispatch();
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(username && password) {
            await loginUser({username, email, password}).unwrap()
            // localStorage.setItem('token', 'true');
            .then(() => localStorage.setItem('name', username)) 
             await getUserToken({username, email, password}).unwrap()
             // .then((data) => localStorage.setItem('toki', data.refresh))
              .then((data) => {dispatch(setUser({refresh: data.refresh, access: data.access}))} )
             .then(() => localStorage.setItem('token', 'true'))
             .then(()=> navigate( path, { replace: true }))
            // .then((data) => localStorage.setItem('userToken', data.access))

             
            

             
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