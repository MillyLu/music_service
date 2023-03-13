/* eslint-disable no-undef */
import { render, fireEvent, screen } from "@testing-library/react";

import { Search } from "./search";

describe('<Search/>', () => {
    it ('should render successfully and change value on input Change', () => {


        const setup = () => {
            const utils = render(<Search />)
            const input = screen.getByTestId('search')
            return {
              input,
              ...utils,
            }
          }
       // const onSearch = getByTestId(container, "search");
        const {input} = setup()
  fireEvent.change(input, {target: {value: '23'}})
  expect(input.value).toBe('23')


    })
})