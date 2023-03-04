import { useState, useEffect, useContext } from 'react';
import * as Styled from './styles';
import { ThemeContext } from '../../ThemeProvider';

export function FilterButtonAuthor(props) {
    const {theme} = useContext(ThemeContext); 
 
    const [authors, setAuthors] = useState([]);
    const [chosenAuthor, setChosenAuthor] = useState('');
 
    useEffect(() => {
 const object = {};
 // eslint-disable-next-line no-return-assign
 const unicAuthors = props.data.filter(({author}) =>(!object[author] && (object[author] = 1)));
     setAuthors(unicAuthors)
    },[])
    
 let value;
 
    const handleAuthorChoose = (e) => {
         // eslint-disable-next-line prefer-destructuring
         value = e.target.childNodes[0].data;
         setChosenAuthor(value); 
         console.log(chosenAuthor);
         
    }
 
    useEffect(() => {
     props.getTracksByAuthor(chosenAuthor);
 }, [chosenAuthor])
    
 
    const authorsList = authors.map((item) => 
    <Styled.DropdownItem key={item.id} value={item.author} theme={theme} onClick={handleAuthorChoose}>{item.author}</Styled.DropdownItem>
    )
     return(
         <Styled.DropdownPerformer theme={theme}>
 
                 <Styled.DropdownList>
                     {authorsList}
                   
                 </Styled.DropdownList>     
         </Styled.DropdownPerformer> 
     )
 }