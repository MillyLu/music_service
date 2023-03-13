/* eslint-disable no-undef */


import * as ShallowRenderer from 'react-shallow-renderer';
import { FilterButtonAuthor } from './filterByAuthor';




describe('<FilterButtonAuthor/>', () => {
        it('should render successfully and match snapshot', () => {

             const shallowRenderer = ShallowRenderer.createRenderer();
             const renderer = shallowRenderer;
             renderer.render(<FilterButtonAuthor />);
             const result = renderer.getRenderOutput();
             expect(result).toMatchSnapshot();  

          })
      });