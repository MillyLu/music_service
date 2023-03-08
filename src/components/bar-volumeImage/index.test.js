/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-undef */
/* import * as ShallowRenderer from 'react-shallow-renderer';
import { shallow } from 'enzyme';
// import { ShallowRenderer, createRenderer } from 'react-shallow-renderer';
import { VolumeImage } from './volumeImage';
import * as Styled from './styles'

const Wrapped = ({ children }) => {
  return <VolumeImage>{children}</VolumeImage>
}



describe('<VolumeImage/>', () => {
        it('should render successfully and match snapshot', () => {
            const shallowRenderer = ShallowRenderer.createRenderer();
            const renderer = shallowRenderer;
            renderer.render(<Wrapped>album</Wrapped>);
            const tree = renderer.getRenderOutput();
            expect(tree).toMatchSnapshot();
          })
      });


test('it calls start change muteVolume on button click', () => {
    const mockClick = jest.fn();
     const wrapper = shallow(<Styled.VolumeImage on>
            <Styled.VolumeSvg onClick={mockClick} alt='volume'>

            </Styled.VolumeSvg>
        </Styled.VolumeImage>);
   wrapper.find('svg').simulate('click');
    expect(mockLogout).toHaveBeenCalled();
});

import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event' 

import { render } from '@testing-library/react';
import { customRender } from '../../test-utils';
*/
