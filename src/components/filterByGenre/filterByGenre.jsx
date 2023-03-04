import { useState, useEffect, useContext } from 'react';
import * as Styled from './styles';
import { ThemeContext } from '../../ThemeProvider';

export function FilterButtonGenre(props) {
    const {theme} = useContext(ThemeContext);
    
    const[genres, setGenres] = useState([]);
    const [chosenGenre, setChosenGenre] = useState('');

    useEffect(() => {
        const object = {};
        // eslint-disable-next-line no-return-assign
        const unicGenres = props.data.filter(({genre}) =>(!object[genre] && (object[genre] = 1)));
            setGenres(unicGenres)
           },[]);

         
           
           let value;

   const handleGenreChoose = (e) => {
        // eslint-disable-next-line prefer-destructuring
        value = e.target.childNodes[0].data;
        setChosenGenre(value); 
        console.log(chosenGenre);
        
   }

   useEffect(() => {
    props.getTracksByGenre(chosenGenre);
}, [chosenGenre])
   
const genreList = genres.map((item) => 
<Styled.DropdownItem key={item.id} theme={theme} onClick={handleGenreChoose}>{item.genre}</Styled.DropdownItem>
)  
    return(
        <Styled.DropdownGenre theme={theme}>
                <Styled.DropdownList >
                    {genreList}
                </Styled.DropdownList>     
        </Styled.DropdownGenre> 
    )
}