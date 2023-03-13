/* eslint-disable no-undef */


import * as ShallowRenderer from 'react-shallow-renderer';
import { FilterButtonGenre } from './filterByGenre';




describe('<FilterButtonGenre/>', () => {
        it('should render successfully and match snapshot', () => {

             const shallowRenderer = ShallowRenderer.createRenderer();
             const renderer = shallowRenderer;
             renderer.render(<FilterButtonGenre />);
             const result = renderer.getRenderOutput();
             expect(result).toMatchSnapshot();  

          })
      });