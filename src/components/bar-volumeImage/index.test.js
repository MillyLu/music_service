/* eslint-disable import/extensions */
/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-undef */
 // import * as ShallowRenderer from 'react-shallow-renderer';
 import { screen, render,  fireEvent } from "@testing-library/react";
// eslint-disable-next-line import/no-unresolved

// import { ShallowRenderer, createRenderer } from 'react-shallow-renderer';
import { VolumeImage } from './volumeImage';
import * as Styled from './styles';



describe("<VolumeImage />", () => {
  describe("Snapshots tests", () => {
    it("should render successfully and match snapshot", () => {
      const { container } = render(<VolumeImage></VolumeImage>);

      expect(container).toMatchSnapshot();
    });
  });
});

describe("Callbacks tests", () => {
  it("should call 'onClick' prop", () => {
    const cb = jest.fn();

    render(
      <Styled.VolumeImage >
            <Styled.VolumeSvg data-testid="volumeButton" onClick={cb} alt='volume'>

            </Styled.VolumeSvg>
        </Styled.VolumeImage> 
    );

    const volumeButton = screen.getByTestId("volumeButton");
    fireEvent.click(volumeButton);

    expect(cb).toBeCalledTimes(1);
  })
}); 