/* eslint-disable no-undef */
import { render } from "@testing-library/react";

import { UserAvatar } from "./userAvatar";


describe('<UserAvatar />', () => {
    it('should render and match snapshot', () => {
        const {container} = render(<UserAvatar />);

        expect(container).toMatchSnapshot();
    })
})