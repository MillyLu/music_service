/* eslint-disable react/jsx-no-bind */

import { useContext} from 'react';
import  Navigation  from "../navigation/nav";
import { ThemeContext } from '../../ThemeProvider';
import * as Styled from './styles';
import { Footer } from '../footer/footer';
import { MainPlaylistCenterBlock } from '../playlistOfTheDay/centerPlaylistOfTheDay';





export function PlaylistContainer() {
    const {theme} = useContext(ThemeContext);
    return(
        <Styled.PlaylistContainer theme={theme}>
            <Styled.Main theme={theme}>
                <Navigation />
                <MainPlaylistCenterBlock />
            </Styled.Main>
            <Footer />
        </Styled.PlaylistContainer>
    )
}