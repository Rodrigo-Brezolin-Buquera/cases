import { FilterContainer, TextInput, StyledSelect } from "./styled"


const FilterInputs = ({ handleGender, handleName, handleOrigin, handleSpecies, handleStatus }) => {
    return (
        <FilterContainer>
            <TextInput
                onChange={handleName}
                placeholder="Search by name"
                pattern="[a-zA-Z]{0,10}"
            />

            <TextInput
                onChange={handleOrigin}
                placeholder="Search by origin"
                pattern="[a-zA-Z]{0,10}"
            />
            <TextInput
                onChange={handleSpecies}
                placeholder="Search by specie"
                pattern="[a-zA-Z]{0,10}"
            />

            <StyledSelect
                placeholder='Gender'
                onChange={handleGender}
            >
                <option value="" > Gender </option>
                <option value="Female" > Female </option>
                <option value="Male" > Male </option>
                <option value="Genderless" > Genderless </option>
                <option value="unknown" > Unknown </option>
            </StyledSelect>

            <StyledSelect
                placeholder='Status'
                onChange={handleStatus}
            >
                <option value="" > Status </option>
                <option value="Alive" > Alive </option>
                <option value="Dead" > Dead </option>
                <option value="unknown" > Unknown </option>
            </StyledSelect>
        </FilterContainer>
    )
}




export default FilterInputs