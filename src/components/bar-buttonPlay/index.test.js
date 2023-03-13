/* eslint-disable no-undef */
import { render, screen, fireEvent } from "@testing-library/react";
import { ButtonPlay } from "./buttonPlay";
import { PlayerButtonPlay } from "./styles";



describe('<ButtonPlay />', () => {
    it("should render successfully and call onClick", async () => {

        const {container} = render(<ButtonPlay />);
        expect(container).toMatchSnapshot();


})

it("should render successfully and call onClick", async () => {
    const toggleAudio = jest.fn();
    render(<PlayerButtonPlay data-testid="play" onClick={toggleAudio} /> );
    fireEvent.click(screen.getByTestId('play'));
expect(toggleAudio).toBeCalledTimes(1)

    
})
})