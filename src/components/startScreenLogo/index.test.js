/* eslint-disable no-undef */
import * as ShallowRenderer from 'react-shallow-renderer';
// import { ShallowRenderer, createRenderer } from 'react-shallow-renderer';
import { StartscreenLogo } from './startScreenLogo';



describe('<StartscreenLogo/>', () => {
        it('should render successfully and match snapshot', () => {
            const shallowRenderer = ShallowRenderer.createRenderer();
            const renderer = shallowRenderer;
            renderer.render(<StartscreenLogo />);
            const result = renderer.getRenderOutput();
            expect(result).toMatchSnapshot();
          })
      });