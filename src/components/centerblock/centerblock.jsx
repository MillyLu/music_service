/* eslint-disable no-unneeded-ternary */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable camelcase */
/* eslint-disable react/jsx-no-duplicate-props */


import { useState, useEffect, useRef, useContext } from 'react';
import * as Styled from './styles';
import { ThemeContext } from '../../ThemeProvider';
import { ReactComponent as SearchSvg } from './search.svg';
import { ReactComponent as SearchSvgLight } from './searchSvgLight.svg';
import { useGetAllTracksQuery } from '../../services/track';



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

            <Styled.SearchText isTheme={theme} onChange={handleChangeSearch} onKeyDown={handleKey} type='search' placeholder='Поиск' name='search' style={{"backgroundColor": theme==="light" ? "#FFFFFF" : "#1C1C1C", "color": theme === "light" ? "#000000" : "#FFFFFF"}}/>
        </Styled.CenterblockSearch>
    )
} 

export function Title() {               
    const {theme} = useContext(ThemeContext);
    return(
        <Styled.CenterblockTitle style={{ color: theme === "light" ? "#000000" : "#FFFFFF" }}>Треки</Styled.CenterblockTitle>
    )
}

function FilterButtonAuthor(props) {
   const {theme} = useContext(ThemeContext); 

   const [authors, setAuthors] = useState([]);
   const [chosenAuthor, setChosenAuthor] = useState('');

   useEffect(() => {
    setAuthors(props.data)
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

function FilterButtonGenre() {
    const {theme} = useContext(ThemeContext);
    return(
        <Styled.DropdownGenre theme={theme}>
                <Styled.DropdownList >
                    <Styled.DropdownItem theme={theme}>Рок</Styled.DropdownItem>
                    <Styled.DropdownItem theme={theme}>Хип-Хоп</Styled.DropdownItem>
                    <Styled.DropdownItem theme={theme}>Поп-музыка</Styled.DropdownItem>
                    <Styled.DropdownItem theme={theme}>Техно</Styled.DropdownItem>
                    <Styled.DropdownItem theme={theme}>Инди</Styled.DropdownItem>
                </Styled.DropdownList>     
        </Styled.DropdownGenre> 
    )
}

function FilterButtonYear(props) {  // /////////////////////// не работает useState!!!!

    const initialYear = [
        {title: 'new', done: false},
        {title: 'old', done: false}
    ]
    
    const [year,setYear] = useState(initialYear);


    // let value;

    const onChange =(e) => {setYear(e.target.checked)};
    useEffect(() => {
        console.log(year);
        props.getTracksByData(year)

    }, [onChange]);

    const {theme} = useContext(ThemeContext);
    return(
        <Styled.Year theme={theme}>
            <Styled.Item>
                <Styled.RadioButton
                theme={theme}
                    type="radio"
                    name="year"
                    value="new"
                    checked={year.done}
                    onChange={e => {
                        onChange({
                          ...year,
                          done: e.target.checked
                        });}}
                  
                />
                <Styled.RadioButtonLabel />
                <div style={{color:theme === "light" ? "#000000" : "#FFFFFF"}}>Более новые</div>
            </Styled.Item>
            <Styled.Item>
                <Styled.RadioButton
                theme={theme}
                type="radio"
                name="year"
                value="old"
                checked={year.done}
                    onChange={e => {
                        onChange({
                          ...year,
                          done: e.target.checked
                        });}}
                 />
                <Styled.RadioButtonLabel />
                <div style={{color:theme === "light" ? "#000000" : "#FFFFFF"}}>Более старые</div>
            </Styled.Item>
            
        </Styled.Year>
    )
}

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

function Filter({data, getTracksByAuthor, getTracksByData}) {
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
        <Styled.CenterblockFilter data={data} getTracksByAuthor={getTracksByAuthor} getTracksByData={getTracksByData}>
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
            <Styled.FilterButtons theme={theme} isSelected={isFilterGenreOpen} ref={genre} onClick={toggleGenreFilter} aria-hidden="true" role="button" tabIndex={0}>жанру</Styled.FilterButtons>
            {isFilterGenreOpen && (
                    
                    <FilterButtonGenre />
                    
                )}
        </Styled.CenterblockFilter>
    )
}

// --------------------------CenterBlock__Content-------------------//

/* const tracks = [
    {id: 1, author: 'Nero', album: 'Welcome Reality', title: 'Guilt', time: '4:44'},
    {id: 2, author: 'Dynoro, Outwork, Mr. Gee', album: 'Elektro', time: '2:22', title: 'Elektro'},
    {id: 3, author: 'Ali Bakgor', album: 'I’m Fire', time: '2:22', title: 'I’m Fire'},
    {id: 4, author: 'Стоункат, Psychopath', album: 'Non Stop', time: '4:12', title: 'Non Stop', subtitle: '(Remix)'},
    {id: 5, author: 'Jaded, Will Clarke, AR/CO', album: 'Run Run', time: '2:54', title: 'Run Run', subtitle: '(feat. AR/CO)'},
    {id: 6, author: 'Blue Foundation, Zeds Dead', album: 'Eyes on Fire', time: '5:20', title: 'Eyes on Fire', subtitle: '(Zeds Dead Remix)'},
    {id: 7, author: 'HYBIT, Mr. Black, Offer Nissim, Hi Profile', album: 'Mucho Bien', time: '3:41', title: 'Mucho Bien', subtitle: '(Hi Profile Remix)'},
    {id: 8, author: 'minthaze', album: 'Captivating', time: '1:48', title: 'Knives n Cherries'},
    {id: 9, author: 'Calvin Harris, Disciples', album: 'How Deep Is Your Love', time: '3:32', title: 'How Deep Is Your Love'},
    {id: 10, author: 'Tom Boxer', album: 'Soundz Made in Romania', time: '3:36', title: 'Morena'},
] */


export function ContentPlaylistTitle(){
    return(
        <Styled.ContentTitle>
            <Styled.PlaylistTitleCol01>Трек</Styled.PlaylistTitleCol01>
            <Styled.PlaylistTitleCol02>ИСПОЛНИТЕЛЬ</Styled.PlaylistTitleCol02>
            <Styled.PlaylistTitleCol03>АЛЬБОМ</Styled.PlaylistTitleCol03>
            <Styled.PlaylistTitleCol04>
                <Styled.PlaylistTitleSvg alt='time'>
                    <use xlinkHref='img/icon/sprite.svg#icon-watch' />
                </Styled.PlaylistTitleSvg>
            </Styled.PlaylistTitleCol04>
        </Styled.ContentTitle>
    )
}
/** 
function TrackTitleImage(){
    return(
        <div className='track__title-image'>
            <svg className='track__title-svg' alt='music'>
                <use xlinkHref='img/icon/sprite.svg#icon-note' />
            </svg>
        </div>
    )
}

function TrackTitleText(props){
    return(   
       <div className='track__title-text'>
        <a className='track__title-link' href={props.link}>
            {props.title}<span className='track__title-span' />
        </a>
       </div>
    )
}


function TrackTitle() {
    return(
        <div className='track__title'>
            <TrackTitleImage />
            <TrackTitleText />
        </div>
    )
}
 
function TrackAuthor(props) {
    return(
        <div className='track__author'>
            <a className='track__author-link' href={props.link}>{props.text}</a> 
        </div>
    )
}

function TrackAlbum(props) {
    return(
    <div className='track__album' >
        <a className='track__album-link' href={props.link}>{props.album}</a>
    </div>
    )
}

function TrackTime(props) {
    return(
    <div className='track__time' >
            <svg className='track__time-svg' alt='time'>
                <use xlinkHref='img/icon/sprite.svg#icon-like' />
            </svg>
            <span className='track__time-text'>{props.time}</span>
        </div>
    )
} 
   
*/
export function SkeletonTrack() {
    return(
        <Styled.PlaylistItem> 
            <Styled.PlaylistTrackSkeleton>
                <Styled.TrackTitle>
                    <Styled.TrackTitleImage>
                        <Styled.SkeletonImage></Styled.SkeletonImage>
                    </Styled.TrackTitleImage>
                    <Styled.TrackTitleText>
                        <Styled.SkeletonTitle></Styled.SkeletonTitle>
                    </Styled.TrackTitleText>
                </Styled.TrackTitle>
                <Styled.TrackAuthor>
                    <Styled.SkeletonAuthor></Styled.SkeletonAuthor>
                </Styled.TrackAuthor>
                <Styled.TrackAlbum>
                    <Styled.SkeletonAlbum></Styled.SkeletonAlbum>
                </Styled.TrackAlbum>

            </Styled.PlaylistTrackSkeleton>
        </Styled.PlaylistItem>    
    )
}



export function PlayListItem({author, album, time, title, subtitle}) { 
    const {theme} = useContext(ThemeContext);
    return(
        <Styled.PlaylistItem> 
            <Styled.PlaylistTrack>
                <Styled.TrackTitle>
                    <Styled.TrackTitleImage style={{ backgroundColor: theme === "light" ? "#F6F4F4" : "#313131" }}>
                        <Styled.TrackTitleSvg alt='music' >


                                <use xlinkHref='img/icon/sprite.svg#icon-note' />

                            
                        </Styled.TrackTitleSvg>
                    </Styled.TrackTitleImage>
                    <Styled.TrackTitleText>
                        <Styled.TrackTitleLink href='http://' style={{ color: theme === "light" ? "#000000" : "#FFFFFF" }}>{title}<Styled.TrackTitleSpan>{subtitle}</Styled.TrackTitleSpan></Styled.TrackTitleLink>
                       
                    </Styled.TrackTitleText>
                </Styled.TrackTitle>
                <Styled.TrackAuthor>
                    <Styled.TrackAuthorLink href='http://' style={{ color: theme === "light" ? "#000000" : "#FFFFFF" }}>{author}</Styled.TrackAuthorLink>
                </Styled.TrackAuthor>
                <Styled.TrackAlbum>
                    <Styled.TrackAlbumLink href='http://'>{album}</Styled.TrackAlbumLink>
                </Styled.TrackAlbum>
                <Styled.TrackTime>
                    <Styled.TrackTimeSvg alt='time'>
                        <use xlinkHref="img/icon/sprite.svg#icon-like" />
                    </Styled.TrackTimeSvg>
                    <Styled.TrackTimeText>{time}</Styled.TrackTimeText> 
                </Styled.TrackTime>
            </Styled.PlaylistTrack>
        </Styled.PlaylistItem>
    )



}
/**  
function PlayListItem(){
    return(
        <div className='playlist__item'>
            <div className='playlist__track track'>
                <TrackTitle />
                <TrackAuthor />
                <TrackAlbum />
                <TrackTime />
            </div>
        </div>
    )
}
*/

export function Content ({tracks}) {

    const timeConvert = (time) => {
        const minutes = Math.trunc(Number(time)/60);
        const seconds = Number(time) - minutes*60;
        return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`
    } 

    return(

            tracks.map((item) =>             
             <PlayListItem key={item.id} author={item.author} album={item.album} title={item.name} subtitle={item.extraName} time={timeConvert(item.duration_in_seconds)}/>
            
           
            )

    )
    
}


export function ContentPlaylistPlaylist({tracks}) {


    const [skeleton, setSkeleton] = useState(false);
  
    useEffect(() => {
        setSkeleton(true);
        setTimeout(async () => {

            setSkeleton(false);

        }, 5000);
    }, []);
 

    return(
        <Styled.ContentPlaylist>
             {!skeleton ?
             <Content tracks={tracks}/> :
             (
             <>
             <SkeletonTrack />
             <SkeletonTrack />
             <SkeletonTrack />
             <SkeletonTrack />
             <SkeletonTrack />
             <SkeletonTrack />
             <SkeletonTrack />
             <SkeletonTrack />
             <SkeletonTrack />
             <SkeletonTrack />
             </> 
             )
            } 
        </Styled.ContentPlaylist>
    )
     

}


export function CenterBlockContent({tracks}){
    return(
        <Styled.CenterblockContent>
            <ContentPlaylistTitle />
            <ContentPlaylistPlaylist tracks={tracks} />
        </Styled.CenterblockContent>
    )
}

// ------------------------------------ //

function MainCenterBlock() {



    const { theme } = useContext(ThemeContext);
    const [tracks, setTracks] = useState([]); // выводит трек-лист
    const [searchTracks, setSearchTracks] = useState([]); // трек-лист, сформированнный по поиску
    const [filterByAuthor, setFilterByAuthor] = useState([]); // трек-лист фильтрации по автору

    const { data: tracksAll =[], isSuccess: isTracksSuccess } = useGetAllTracksQuery();

    console.log(tracksAll);
    const trackList = structuredClone(tracksAll);


    let searchingTracks;
    let tracksByAuthor;
    let tracksByData;

    function getTracksByAuthor (auth) {
        tracksByAuthor = tracksAll.filter((item) => 
        item.author.toLowerCase().includes(auth.toLowerCase())
        );
        setFilterByAuthor(tracksByAuthor)
    }

    function getSearchTracks (str) {
       searchingTracks = tracksAll.filter((item) => 
           item.name.toLowerCase().includes(str.toLowerCase())
       )    
       console.log(searchingTracks);
      setSearchTracks(searchingTracks);
    }

    function getTracksByData (year) {
        if(year === "newOne") {
            tracksByData = tracksAll;
            tracksByData.sort((a, b) => a.year > b.year ? 1 : -1);
        }
        if(year === "oldOne") {
            tracksByData = tracksAll;
            tracksByData.sort((a, b) => a.year < b.year ? 1 : -1);
        }
        console.log(tracksByData);
    }
    useEffect(() => {
    if(!trackList) return
    if(searchTracks) setTracks(searchTracks);
    // if(filterByAuthor) setTracks(filterByAuthor);
    if(searchTracks.length < 1 && filterByAuthor.length < 1) {
        setTracks(tracksAll)
    }
 
 }, [isTracksSuccess, searchTracks]); 

 useEffect(() => {
    console.log(filterByAuthor);
    if(filterByAuthor.length < 1) return
    if(filterByAuthor.length >= 1) {
        console.log(filterByAuthor);
        setTracks(filterByAuthor)}
    
 
 }, [isTracksSuccess, filterByAuthor]); 

 

 console.log(tracks);
 
    return(
        <Styled.MainCenterblock style={{ backgroundColor: theme === "light" ? "#FFFFFF" : "#1C1C1C" }}>
            <Search searchTracks={getSearchTracks}/>
            <Title />
            <Filter data={tracks} getTracksByAuthor={getTracksByAuthor} getTracksByData={getTracksByData}/>

            <CenterBlockContent tracks={tracks} />


        </Styled.MainCenterblock>
    )
}

export default MainCenterBlock;