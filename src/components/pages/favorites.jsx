import { useContext } from "react"; 
import { ThemeContext } from "../../ThemeProvider";
import { FavoritesContainer } from "../favoritesContainer/favoritesContainer";




export function FavoritesPage() {
    
    const { theme} = useContext(ThemeContext);

       
    return(
        <FavoritesContainer style={{ backgroundColor: theme === "light" ? "#FFFFFF" : "#1C1C1C" }}/>
    )
}