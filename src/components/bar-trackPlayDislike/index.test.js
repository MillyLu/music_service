/* eslint-disable no-undef */
import * as ShallowRenderer from 'react-shallow-renderer';
// import { ShallowRenderer, createRenderer } from 'react-shallow-renderer';
import { TrackPlayDislike } from './trackPlayDislike';



describe('<TrackPlayDislike/>', () => {
        it('should render successfully and match snapshot', () => {
            const shallowRenderer = ShallowRenderer.createRenderer();
            const renderer = shallowRenderer;
            renderer.render(<TrackPlayDislike />);
            const result = renderer.getRenderOutput();
            expect(result).toMatchSnapshot();
          })
      });
