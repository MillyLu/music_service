/* eslint-disable no-undef */
import { render } from "@testing-library/react";

import { ContentPlaylistTitle } from "./playListTitle";

describe('<ContentPlaylistTitle/>', () => {
    it('should render successfully and match the snapshots', () => {
        const {container} = render(<ContentPlaylistTitle/>);
        expect(container).toMatchSnapshot();
    })
})