/* eslint-disable no-undef */


import * as ShallowRenderer from 'react-shallow-renderer';
import { FilterButtonYear } from './filterByYear';




describe('<FilterButtonYear/>', () => {
        it('should render successfully and match snapshot', () => {

             const shallowRenderer = ShallowRenderer.createRenderer();
             const renderer = shallowRenderer;
             renderer.render(<FilterButtonYear />);
             const result = renderer.getRenderOutput();
             expect(result).toMatchSnapshot();  

          })
      });