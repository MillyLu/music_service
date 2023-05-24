/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */
import * as ShallowRenderer from 'react-shallow-renderer';
import { PlaylistContainer } from './indi';


describe('<PlaylistContainer/>', () => {
    it('should render successfully and match the snapshot', () => {
        const shallowRenderer = ShallowRenderer.createRenderer();
        const renderer = shallowRenderer;
        renderer.render(<PlaylistContainer />);
        const result = renderer.getRenderOutput();
        expect(result).toMatchSnapshot();
    })
})