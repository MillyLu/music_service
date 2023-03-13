/* eslint-disable no-undef */
import React from "react";
import { render} from "@testing-library/react";

import Navigation from "./nav";


describe("<Navigation />", () => {
    it("should render successfully and match snapshot", () => {

      // Cache original functionality
const realUseState = React.useState

// Stub the initial state
const stubInitialState = ['isMenuOpen']

// Mock useState before rendering your component
jest
  .spyOn(React, 'useState')
  .mockImplementationOnce(() => realUseState(stubInitialState));

      const { container } = render(<Navigation></Navigation>);
  
      expect(container).toMatchSnapshot();


    });
  });