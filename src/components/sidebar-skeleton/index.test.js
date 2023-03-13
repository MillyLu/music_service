/* eslint-disable no-undef */
import { render } from "@testing-library/react"

import { SidebarSkeleton } from "./sidebarSkeleton"


describe('<SidebarSkeleton/>' , () => {
    it('should render and match the snapshot', () => {
        const {container} = render(<SidebarSkeleton/>);
        expect(container).toMatchSnapshot();
    })
})