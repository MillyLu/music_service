/* eslint-disable no-undef */
import { render, screen, fireEvent } from "@testing-library/react";
import { ButtonRepeat } from "./buttonRepeat";
import { PlayerButtonRepeat } from "./styles";



describe('<ButtonPlay />', () => {
    it("should render successfully", async () => {

        const {container} = render(<ButtonRepeat />);
        expect(container).toMatchSnapshot();


})

it("should render successfully and call onClick", async () => {
    const changeLoop = jest.fn();
    render(<PlayerButtonRepeat data-testid="repeat" onClick={changeLoop} /> );
    fireEvent.click(screen.getByTestId('repeat'));
expect(changeLoop).toBeCalledTimes(1)

    
})
})