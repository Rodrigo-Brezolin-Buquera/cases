import { render, screen } from "@testing-library/react";
import ErrorMessage from ".";

test("ErrorMessage", () => {
    render(<ErrorMessage />);
    const text = screen.getByText("Failed to load, try again");
    expect(text).toBeInTheDocument();
});
