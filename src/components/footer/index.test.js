/* eslint-disable no-undef */
import { render } from "@testing-library/react";
import { Footer } from "./footer";


describe("<Footer />", () => {
  it("should render successfully and match snapshot", () => {
    const { container } = render(<Footer></Footer>);

    expect(container).toMatchSnapshot();
  });
});