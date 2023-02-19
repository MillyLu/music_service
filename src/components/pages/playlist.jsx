import { useContext } from "react"; 
import { ThemeContext } from "../../ThemeProvider";
import  {PlaylistContainer}  from "../playList/playlistOfTheDay";


export function Playlist() {
    const { theme} = useContext(ThemeContext);
    return(

            <PlaylistContainer style={{ backgroundColor: theme === "light" ? "#FFFFFF" : "#1C1C1C" }}/>

        
    )
}