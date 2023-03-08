import { NotFoundCenterBlock } from "../notFound/notFound";
import { Footer } from '../footer/footer';
import * as Styled from '../notFound/styles'




export function NotFound() {
    return(
        <Styled.Container>
            <NotFoundCenterBlock />

            <Footer />
        </Styled.Container>
    )
}