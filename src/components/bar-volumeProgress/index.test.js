/* eslint-disable import/extensions */
/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-undef */
 // import * as ShallowRenderer from 'react-shallow-renderer';
 import { screen, render,  fireEvent } from "@testing-library/react";
// eslint-disable-next-line import/no-unresolved

import { VolumeProgress } from "./volumeProgress";
// import * as Styled from './styles';



describe("<VolumeProgress />", () => {
  describe("Snapshots tests", () => {
    it("should render successfully and match snapshot", () => {
      const { container } = render(<VolumeProgress></VolumeProgress>);

      expect(container).toMatchSnapshot();
    });
  });
});


const setup = () => {
    const setVolume = jest.fn();
    const utils = render(<VolumeProgress volume={60} setVolume={setVolume} />)

    const input = screen.getByTestId("progress")
    return {
      input,
      ...utils,
    }
  }

  test('It should take value 60', () => {

    const {input} = setup()
    fireEvent.change(input, {target: {value: '60'}})

    expect(input.value).toBe('60')
  })


