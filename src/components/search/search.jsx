import { useState, useContext } from 'react';
import { ThemeContext } from '../../ThemeProvider';
import { ReactComponent as SearchSvg } from './search.svg';
import { ReactComponent as SearchSvgLight } from './searchSvgLight.svg';
import * as Styled from './styles';

export function Search(props) {
    const { theme} = useContext(ThemeContext);

    const[search, setSearch] = useState('');

    const handleKey = (e) => {
        if(e.keyCode === 13) {
            console.log("work");
            console.log(search);
            props.searchTracks(search)
        }
    }

    const handleChangeSearch = (e) => {
        setSearch(e.target.value)
    }
  
    return(
        <Styled.CenterblockSearch>
            <Styled.SearchSvg>
                {
                    theme === "dark" && (
                        <SearchSvg />
                    )
                }
                {
                    theme === "light" && (
                        <SearchSvgLight />
                    )
                }
                
            </Styled.SearchSvg>

            <Styled.SearchText data-testid="search" isTheme={theme} onChange={handleChangeSearch} onKeyDown={handleKey} type='search' placeholder='Поиск' name='search' style={{"backgroundColor": theme==="light" ? "#FFFFFF" : "#1C1C1C", "color": theme === "light" ? "#000000" : "#FFFFFF"}}/>
        </Styled.CenterblockSearch>
    )
} 