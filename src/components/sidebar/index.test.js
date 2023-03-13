/* eslint-disable no-undef */
import * as ShallowRenderer from 'react-shallow-renderer';
// import { ShallowRenderer, createRenderer } from 'react-shallow-renderer';
import MainSideBar from './sidebar';



describe('<MainSideBar/>', () => {
        it('should render successfully and match snapshot', () => {
            const shallowRenderer = ShallowRenderer.createRenderer();
            const renderer = shallowRenderer;
            renderer.render(<MainSideBar />);
            const result = renderer.getRenderOutput();
            expect(result).toMatchSnapshot();
          })
      });
