/* eslint-disable no-undef */
import * as ShallowRenderer from 'react-shallow-renderer';
// import { ShallowRenderer, createRenderer } from 'react-shallow-renderer';
import { PlaylistContainer } from "./100hit";



describe('<PlaylistContainer/>', () => {
        it('should render successfully and match snapshot', () => {
            const shallowRenderer = ShallowRenderer.createRenderer();
            const renderer = shallowRenderer;
            renderer.render(<PlaylistContainer />);
            const result = renderer.getRenderOutput();
            expect(result).toMatchSnapshot();
          })
      });

