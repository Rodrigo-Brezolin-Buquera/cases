import { render, screen } from "@testing-library/react";
import LoadingPortal from ".";

test("LoadingPortal", () => {
    render(<LoadingPortal />);
    const text = screen.getByAltText("LoadingPortal");
    expect(text).toBeInTheDocument();
});
