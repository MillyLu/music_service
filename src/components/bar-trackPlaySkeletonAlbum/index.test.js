/* eslint-disable no-undef */
import * as ShallowRenderer from 'react-shallow-renderer';
// import { ShallowRenderer, createRenderer } from 'react-shallow-renderer';
import { TrackPlaySkeletonAlbum } from './trackPlaySkeletonAlbum';



describe('<TrackPlaySkeletonAlbum/>', () => {
        it('should render successfully and match snapshot', () => {
            const shallowRenderer = ShallowRenderer.createRenderer();
            const renderer = shallowRenderer;
            renderer.render(<TrackPlaySkeletonAlbum />);
            const result = renderer.getRenderOutput();
            expect(result).toMatchSnapshot();
          })
      });
