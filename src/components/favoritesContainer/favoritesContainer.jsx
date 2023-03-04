



import Bar from '../bar/bar';
import { FavoritesCenterBlock } from '../favoritesCenterblock/favoritesCenterblock';
import MainSideBar from '../sidebar/sidebar';
import Navigation from '../navigation/nav';
import { Footer } from '../footer/footer';
import * as Styled from './styles';





function FavoritesMain() {
    return(
        <Styled.Main>
            <Navigation />
            <FavoritesCenterBlock />
            <MainSideBar />
        </Styled.Main>
    )
}

export function FavoritesContainer() {
    return(
        <Styled.Container>
            <FavoritesMain />
            <Bar />
            <Footer />
        </Styled.Container>
    )
}

