import { render, screen } from "@testing-library/react";
import Header from ".";

describe("Header Tests", () => {
    test("HomeButton", () => {
        render(<Header />);
        const text = screen.getByText("Home");
        expect(text).toBeInTheDocument();
    });

    test("FavoritesButton", () => {
        render(<Header />);
        const text = screen.getByText("Favorites");
        expect(text).toBeInTheDocument();
    });

})

