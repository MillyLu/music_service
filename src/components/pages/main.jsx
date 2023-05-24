import { useContext,   } from "react"; 
// import {  useSelector} from "react-redux";
 // import {   authSelector,  } from "../../store/state";
// import {useRefreshUserTokenMutation} from "../../services/user"
import { ThemeContext } from "../../ThemeProvider";
import  {Container}  from "../wrapper/wrapper";




export function MainPage() {
    const { theme} = useContext(ThemeContext);
  // const dispatch = useDispatch();
  // const [refresh, setRefresh] = useState('');
 // const [refreshUserToken] = useRefreshUserTokenMutation();

 // const isLoggedIn = useSelector(authSelector);
  //  const {token} = isLoggedIn.token;



  // const token = authSelector();

   // equality function
// const customEqual = (oldValue, newValue) => oldValue === newValue;
/* let token;
   useEffect(() => {token = useSelector(state => state.auth.token, shallowEqual);
    const oldToken = token.token;
    setRefresh(oldToken);})

   // const token = useSelector(state => state.auth, shallowEqual);
   // const oldToken = token.token;
   // setRefresh(oldToken);
   // console.log(oldToken, refresh);
   let ref;

     useEffect(()=> {    
        setTimeout(async() => { await refreshUserToken({refresh}).unwrap()
        .then(()=> console.log('!!!'))
       .then((data) => {ref = data.refresh})
       .then(() => {dispatch(setUser({token:ref}))})}, 5000)
        },    
    [refresh]); 

    

    /* useEffect(()=> {
        dispatch(setUser({token: ref}))
    }, [dispatch]); */             
    

       
    return(
        <Container style={{ backgroundColor: theme === "light" ? "#FFFFFF" : "#1C1C1C" }}/>
    )
}
