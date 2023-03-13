
import * as Styled from './styles';


// import Bar from '../bar/bar';
import MainCenterBlock from '../centerblock/centerblock';
import MainSideBar from '../sidebar/sidebar';
import Navigation from '../navigation/nav';
import { Footer } from '../footer/footer';



export function Container() {
    return(
        <Styled.Container>
             <Styled.Main>
                <Navigation />
                <MainCenterBlock />
                <MainSideBar />
            </Styled.Main>
            <Footer />
        </Styled.Container>
    )
}

