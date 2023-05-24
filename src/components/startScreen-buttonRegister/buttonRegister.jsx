import { useNavigate } from "react-router-dom";
import * as Styled from './styles';



export function StartscreenButtonRegister () {
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