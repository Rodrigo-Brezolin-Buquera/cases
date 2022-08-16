import { StyledTable, StyledTr, StyledTh  } from "./styled"

export const Table = ({ data }) => {

    const tableData = data?.map((item) => {
        return (
            <StyledTr>
                <StyledTh>{item.firstName}</StyledTh>
                <StyledTh>{item.lastName}</StyledTh>
                <StyledTh>{item.participation * 100} %</StyledTh>
            </StyledTr>
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