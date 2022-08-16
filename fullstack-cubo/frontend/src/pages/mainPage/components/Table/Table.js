import { StyledTable } from "./styled"

export const Table = ({ data }) => {

    const tableData = data?.map((item) => {
        return (
            <tr>
                <th>{item.firstName}</th>
                <th>{item.lastName}</th>
                <th>{item.participation * 100} %</th>
            </tr>
        )
    })


    return (
        <StyledTable>
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Participation</th>
            </tr>
            {tableData}
        </StyledTable>
    )
}