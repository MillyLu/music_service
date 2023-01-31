import { useContext } from "react"; 
import { ThemeContext } from "../../ThemeProvider";
import  {Container}  from "../wrapper/wrapper";




export function MainPage() {
    const { theme} = useContext(ThemeContext);
    

    return(
        <Container style={{ backgroundColor: theme === "light" ? "#FFFFFF" : "#1C1C1C" }}/>
    )
}