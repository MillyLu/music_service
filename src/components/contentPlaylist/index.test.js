/* eslint-disable no-undef */

import { Provider } from 'react-redux';

import * as ShallowRenderer from 'react-shallow-renderer';
import { ContentPlaylistPlaylist } from './contentPlaylist';




describe('<ContentPlaylistPlaylist/>', () => {
        it('should render successfully and match snapshot', () => {

            const store = {
                dispatch: jest.fn(),
                getState: jest.fn(() => ({})),
             };
             const shallowRenderer = ShallowRenderer.createRenderer();
             const renderer = shallowRenderer;
             renderer.render(<Provider store={store}><ContentPlaylistPlaylist /></Provider>);
             const result = renderer.getRenderOutput();
             expect(result).toMatchSnapshot();  

          })
      });