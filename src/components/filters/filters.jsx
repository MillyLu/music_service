import { useState, useEffect, useRef, useContext } from 'react';
import * as Styled from './styles';
import { ThemeContext } from '../../ThemeProvider';
import { FilterButtonAuthor } from '../filterByAuthor/filterByAuthor';
import { FilterButtonGenre } from '../filterByGenre/filterByGenre';
import { FilterButtonYear } from '../filterByYear/filterByYear';

const useOutsideClickAuthor = (callback) => {
    const ref = useRef();
  
    useEffect(() => {
      const handleClick = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
          callback();
        }
      };
  
      document.addEventListener('click', handleClick);
  
      return () => {
        document.removeEventListener('click', handleClick);
      };
    }, [ref]);
  
    return ref;
  };

  const useOutsideClickYear = (callback) => {
    const year = useRef();
  
    useEffect(() => {
      const handleClick = (event) => {
        if (year.current && !year.current.contains(event.target)) {
          callback();
        }
      };
  
      document.addEventListener('click', handleClick);
  
      return () => {
        document.removeEventListener('click', handleClick);
      };
    }, [year]);
  
    return year;
  };

  const useOutsideClickGenre = (callback) => {
    const genre = useRef();
  
    useEffect(() => {
      const handleClick = (event) => {
        if (genre.current && !genre.current.contains(event.target)) {
          callback();
        }
      };
  
      document.addEventListener('click', handleClick);
  
      return () => {
        document.removeEventListener('click', handleClick);
      };
    }, [genre]);
  
    return genre;
  };

export function Filter({data, getTracksByAuthor, getTracksByData, getTracksByGenre}) {
    const [isFilterOpen, setVisible] = useState(false);
    const [isFilterGenreOpen, setOpen] = useState(false);
    const [isFilterYearOpen, setYearOpen] = useState(false);
    const {theme} = useContext(ThemeContext);

    const toggleVisibility = () => setVisible((isOpen) => !isOpen);

    const toggleGenreFilter = () => setOpen((isOpen) => !isOpen);

    const toggleYearFilter = () => setYearOpen((isOpen) => !isOpen);
        
    
    const handleClickOutsideAuthor = () => {
        setVisible(false);
    };
    
    const ref = useOutsideClickAuthor(handleClickOutsideAuthor);

    const handleClickOutsideYear = () => {
        setYearOpen(false);
    };
    
    const year = useOutsideClickYear(handleClickOutsideYear);

    const handleClickOutsideGenre = () => {
        setOpen(false);
    };
    
    const genre = useOutsideClickGenre(handleClickOutsideGenre);
        
       
    return(
        <Styled.CenterblockFilter data={data} getTracksByAuthor={getTracksByAuthor} getTracksByData={getTracksByData} getTracksByGenre={getTracksByGenre}>
            <Styled.FilterTitle style={{ color: theme === "light" ? "#000000" : "#FFFFFF" }}>Искать по:</Styled.FilterTitle>
            <Styled.FilterButtons getTracksByAuthor={getTracksByAuthor} data={data} theme={theme} isSelected={isFilterOpen} ref={ref} onClick={() => { toggleVisibility()}}  aria-hidden="true" role="button" tabIndex={0}>исполнителю</Styled.FilterButtons>
            {isFilterOpen && (
                    
                    <FilterButtonAuthor data={data} getTracksByAuthor={getTracksByAuthor}/>
                    
                )}
            <Styled.FilterButtons getTracksByData={getTracksByData} theme={theme} isSelected={isFilterYearOpen} ref={year} onClick={() => {toggleYearFilter()}} aria-hidden="true" role="button" tabIndex={0}>году выпуска</Styled.FilterButtons>
            {isFilterYearOpen && (
                <FilterButtonYear getTracksByData={getTracksByData} />
            )

            }
            <Styled.FilterButtons getTracksByGenre={getTracksByGenre} data={data} theme={theme} isSelected={isFilterGenreOpen} ref={genre} onClick={toggleGenreFilter} aria-hidden="true" role="button" tabIndex={0}>жанру</Styled.FilterButtons>
            {isFilterGenreOpen && (
                    
                    <FilterButtonGenre data={data} getTracksByGenre={getTracksByGenre}/>
                    
                )}
        </Styled.CenterblockFilter>
    )
}


