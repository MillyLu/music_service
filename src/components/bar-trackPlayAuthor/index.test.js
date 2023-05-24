/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-undef */
import * as ShallowRenderer from 'react-shallow-renderer';
import { TrackPlayAuthor } from './trackPlayAuthor';

const Wrapped = ({ children }) => {
  return <TrackPlayAuthor>{children}</TrackPlayAuthor>
}



describe('<TrackPlyAuthor/>', () => {
        it('should render successfully and match snapshot', () => {
            const shallowRenderer = ShallowRenderer.createRenderer();
            const renderer = shallowRenderer;
            renderer.render(<Wrapped>author</Wrapped>);
            const tree = renderer.getRenderOutput();
            expect(tree).toMatchSnapshot();
          })
      });