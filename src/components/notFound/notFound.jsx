import { Search } from "../search/search";
import Bar from "../bar/bar";
import Navigation from "../navigation/nav";
import * as Styled from './styles'

export function NotFoundCenterBlock() {

    return(
        <Styled.Main>
            <Navigation />
            <Styled.MainCenterblock style={{ backgroundColor:  "#1C1C1C" }}>
            <Search />



            <Styled.CenterblockContent>
                <Styled.Center>
                    <Styled.NotFoundTitle>404</Styled.NotFoundTitle>
                    <Styled.NotFoundGroup>
                        <Styled.NotFoundSubtitle>Страница не найдена </Styled.NotFoundSubtitle>

                    </Styled.NotFoundGroup>
                    <Styled.NotFoundText>Возможно она была удалена или перенесена на другой адрес</Styled.NotFoundText>
                    <Styled.NotFoundButton to='/'>Вернуться на главную</Styled.NotFoundButton>
                </Styled.Center>
                
            </Styled.CenterblockContent>

              <Bar />

        </Styled.MainCenterblock>
        </Styled.Main>
        
    )
}

