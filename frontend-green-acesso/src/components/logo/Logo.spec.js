import { render, screen } from "@testing-library/react";
import Logo from ".";

test("Logo", () => {
    render(<Logo />);
    const text = screen.getByAltText("Logo");
    expect(text).toBeInTheDocument();
});
