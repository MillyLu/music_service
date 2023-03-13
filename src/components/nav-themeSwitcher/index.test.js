/* eslint-disable no-undef */
import { screen, fireEvent } from "@testing-library/react";

import { customRender } from "../../test-utils";

import { ThemeSwitcher } from "./themeSwitcher";

describe("<ThemeSwitcher />", () => {
  it("should change theme by click", () => {
    customRender(<ThemeSwitcher />);

    const button = screen.getByTestId("themeChange");
   
    const dark = screen.getByTitle("dark");

    expect(button).toBeInTheDocument();
    expect(dark).toBeInTheDocument();

    fireEvent.click(button);
    const light = screen.getByTitle("light");
    expect(light).toBeInTheDocument();
    });
  });
