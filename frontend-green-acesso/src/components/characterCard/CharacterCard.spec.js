import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import CharacterCard from ".";

describe("CharacterCard Tests", () => {
    const character = {
        id: 1,
        name: "Rick Sanchez",
        image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
        favorite: false,
    };
    const handler = jest.fn();

    test("Name", () => {
        render(
            <MemoryRouter>
                <CharacterCard character={character} handler={handler} />
            </MemoryRouter>
        );
        const text = screen.getByText("Rick Sanchez");
        expect(text).toBeInTheDocument();
    });

    test("DetailsButton", () => {
        render(
            <MemoryRouter>
                <CharacterCard character={character} handler={handler} />
            </MemoryRouter>
        );
        const detailsButton = screen.getByText("Details");
        expect(detailsButton).toBeInTheDocument();
    });

    test("HeartIcon", () => {
        render(
            <MemoryRouter>
                <CharacterCard character={character} handler={handler} />
            </MemoryRouter>
        );
        const text = screen.getByAltText("HeartIcon");
        expect(text).toBeInTheDocument();
    });
  
    test("Avatar", () => {
        render(
            <MemoryRouter>
                <CharacterCard character={character} handler={handler} />
            </MemoryRouter>
        );
        const text = screen.getByAltText("Rick Sanchez avatar");
        expect(text).toBeInTheDocument();
    });

})