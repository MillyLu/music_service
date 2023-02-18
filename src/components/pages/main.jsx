import { useContext} from "react"; 
import { useSelector } from "react-redux";
import { authSelector } from "../../store/state";
// import {useRefreshUserTokenMutation} from "../../services/user"
import { ThemeContext } from "../../ThemeProvider";
import  {Container}  from "../wrapper/wrapper";




export function MainPage() {
    const { theme} = useContext(ThemeContext);
  //  const dispatch = useDispatch();
  //  const [refresh] = useState('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3NjgzNzkwOCwiaWF0IjoxNjc2NzUxNTA4LCJqdGkiOiIyYzAzNGVjMzcwYjE0NzMxOTgxYzc0ZmVjMmI4MTI0YSIsInVzZXJfaWQiOjIxM30.0u_cy6wOOaE0DdPcl1tcOb5ZTYGvSxjeGkfYzhWc7e8');
  //  const [refreshUserToken, {data}] = useRefreshUserTokenMutation();
     

  //  const refreshFunc = async () => {
   //     await refreshUserToken({refresh}).unwrap()
   //     .then(() => dispatch(setUser(data.access)))
   // }

  //  useEffect(()=>{
        // const userToken = localStorage.getItem('userToken');
        // setRefresh(userToken);
     //   refreshFunc();
      //  }
       

      //  ,[]);

       

        const token = useSelector(authSelector);
        console.log(token);
    return(
        <Container style={{ backgroundColor: theme === "light" ? "#FFFFFF" : "#1C1C1C" }}/>
    )
}
