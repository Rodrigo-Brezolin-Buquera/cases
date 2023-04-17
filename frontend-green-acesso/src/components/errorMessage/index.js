import styled from "styled-components"
import { colors } from "../../constants/colors"

export const ErrorH1 = styled.h1`
color: ${colors.white};
`
const ErrorMessage = () => {
    return (
        <ErrorH1>Failed to load, try again</ErrorH1>
    )
}

export default ErrorMessage