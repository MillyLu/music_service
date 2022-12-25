import './css/style.css';


function Search() {
    return(
        <div className='centerblock__search search'>
            <svg className='search__svg'>
                <use xlinkHref='public/icon/sprite.svg#icon-search' />
            </svg>
            <input className='search__text' type={Search} placeholder='Поиск' name='search' />
        </div>
    )
}

function Title() {
    return(
        <h2 className='centerblock__h2'>Треки</h2>
    )
}

function Filter() {
    return(
        <div className='centerblock__filter filter'>
            <div className='filter__title'>Искать по:</div>
            <div className='filter__button button-author _btn-text'>исполнителю</div>
            <div className='filter__button button-year _btn-text'>году выпуска</div>
            <div className='filter__button button-genre _btn-text'>жанру</div>
        </div>
    )
}

// --------------------------CenterBlock__Content-------------------//

function ContentPlaylistTitle(){
    return(
        <div className='content__title playlist-title'>
            <div className='playlist-title__col col01'>Трек</div>
            <div className='playlist-title__col col02'>ИСПОЛНИТЕЛЬ</div>
            <div className='playlist-title__col col03'>АЛЬБОМ</div>
            <div className='playlist-title__col col04'>
                <svg className='playlist-title__svg' alt='time'>
                    <use xlinkHref='public/icon/sprite.svg#icon-watch' />
                </svg>
            </div>
        </div>
    )
}

function TrackTitleImage(){
    return(
        <div className='track__title-image'>
            <svg className='rack__title-svg' alt='music'>
                <use xlinkHref='public/icon/sprite.svg#icon-note' />
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
        <div className='track__album'>
            <a className='track__album-link' href={props.link}>{props.text}</a>
        </div>
    )
}

function TrackTime(props) {
    return(
        <div className='track__time'>
            <svg className='track__time-svg' alt='time'>
                <use xlinkHref='public/icon/sprite.svg#icon-like' />
            </svg>
            <span className='track__time-text'>{props.time}</span>
        </div>
    )
}

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

function ContentPlaylistPlaylist() {
    return(
        <div className='content__playlist playlist'>
            <PlayListItem />
            <PlayListItem />
        </div>
    )
}

function CenterBlockContent(){
    return(
        <div className='centerblock__content'>
            <ContentPlaylistTitle />
            <ContentPlaylistPlaylist />
        </div>
    )
}

// ------------------------------------ //

function MainCenterBlock() {
    return(
        <div className='main__centerblock centerblock'>
            <Search />
            <Title />
            <Filter />
            <CenterBlockContent />
        </div>
    )
}

export default MainCenterBlock;