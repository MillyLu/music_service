/* eslint-disable no-undef */
import { screen, render,  fireEvent } from "@testing-library/react";
// eslint-disable-next-line import/no-unresolved

import { BarProgress } from "./barProgress";
import * as Styled from './styles';



describe("<BarProgress />", () => {
  describe("Snapshots tests", () => {
    it("should render successfully and match snapshot", () => {
      const { container } = render(<BarProgress></BarProgress>);

      expect(container).toMatchSnapshot();
    });
  });
});


  test('It should change onChange', () => {
    const handleProgressChange = jest.fn();
    render(<Styled.Progress type="range" data-testid="progress" defaultValue='0' onChange={handleProgressChange}></Styled.Progress>)
    const input = screen.getByTestId("progress")
    fireEvent.change(input, {target: {value: '60'}})
    expect(handleProgressChange).toHaveBeenCalledTimes(1)
    expect(input.value).toBe('60')
  })


