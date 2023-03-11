
/* eslint-disable react/jsx-no-bind */

import { useContext} from 'react';

import  Navigation  from "../navigation/nav";
import { ThemeContext } from '../../ThemeProvider';
import * as Styled from './styles'

import { Footer } from '../footer/footer';
import { HitsCenterBlock } from '../100hits-centerBlock/hitsCenterBlock';



/* function HitsTitle() {
    const {theme} = useContext(ThemeContext);
    return(
        <Styled.CenterblockTitle theme={theme}>100 Танцевальных хитов</Styled.CenterblockTitle>
    )
} */




/* function Footer() {
    return(
        <footer className='footer' />
    )
} */

/* function Main() {
    const {theme} = useContext(ThemeContext);
    return(
        <Styled.Main theme={theme}>
            <Navigation />
            <HitsCenterBlock />
        </Styled.Main>
    )
} */

export function PlaylistContainer() {
    const {theme} = useContext(ThemeContext);
    return(
        <Styled.PlaylistContainer theme={theme}>
            <Styled.Main theme={theme}>
                <Navigation />
                <HitsCenterBlock />
            </Styled.Main>
            <Footer />
        </Styled.PlaylistContainer>
    )
}