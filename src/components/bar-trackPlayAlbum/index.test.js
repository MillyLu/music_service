/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-undef */
import * as ShallowRenderer from 'react-shallow-renderer';
// import { ShallowRenderer, createRenderer } from 'react-shallow-renderer';
import { TrackPlayAlbum } from './trackPlayAlbum';

const Wrapped = ({ children }) => {
  return <TrackPlayAlbum>{children}</TrackPlayAlbum>
}



describe('<PlaylistContainer/>', () => {
        it('should render successfully and match snapshot', () => {
            const shallowRenderer = ShallowRenderer.createRenderer();
            const renderer = shallowRenderer;
            renderer.render(<Wrapped>album</Wrapped>);
            const tree = renderer.getRenderOutput();
            expect(tree).toMatchSnapshot();
          })
      });