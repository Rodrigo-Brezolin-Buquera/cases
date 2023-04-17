import { render, screen } from "@testing-library/react";
import HeartIcon from ".";

test("HeartIcon", () => {
    render(<HeartIcon />);
    const text = screen.getByAltText("HeartIcon");
    expect(text).toBeInTheDocument();
});
