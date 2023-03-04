
import * as Styled from './styles';


// import Bar from '../bar/bar';
import MainCenterBlock from '../centerblock/centerblock';
import MainSideBar from '../sidebar/sidebar';
import Navigation from '../navigation/nav';
import { Footer } from '../footer/footer';






function Main() {
    return(
        <Styled.Main>
            <Navigation />
            <MainCenterBlock />
            <MainSideBar />
        </Styled.Main>
    )
}

export function Container() {
    return(
        <Styled.Container>
            <Main />

            <Footer />
        </Styled.Container>
    )
}

