/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */
import * as ShallowRenderer from 'react-shallow-renderer';
import { FavoritesContainer } from "./favoritesContainer";


describe('<FavoritesContainer/>', () => {
    it('should render successfully and match the snapshot', () => {
        const shallowRenderer = ShallowRenderer.createRenderer();
        const renderer = shallowRenderer;
        renderer.render(<FavoritesContainer />);
        const result = renderer.getRenderOutput();
        expect(result).toMatchSnapshot();
    })
})