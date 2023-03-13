/* eslint-disable no-undef */
import * as ShallowRenderer from 'react-shallow-renderer';
// import { ShallowRenderer, createRenderer } from 'react-shallow-renderer';
import { SidebarList } from './sidebarList';



describe('<SidebarList/>', () => {
        it('should render successfully and match snapshot', () => {
            const shallowRenderer = ShallowRenderer.createRenderer();
            const renderer = shallowRenderer;
            renderer.render(<SidebarList />);
            const result = renderer.getRenderOutput();
            expect(result).toMatchSnapshot();
          })
      });