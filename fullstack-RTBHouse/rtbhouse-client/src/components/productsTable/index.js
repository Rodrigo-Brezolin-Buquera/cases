import { formatPrice } from "../../utils/formatPrice"
import { AbsoluteText, ColumnHeader, Row, Table, TableContainer, TableItem } from "./styles"

export const ProductsTable = ({ products }) => {

    const productsList = products?.length && products.map((product) => {
        const { storeName, name, amountSold, price, totalRevenue, id } = product
        return (
            <Row key={id}>
                <TableItem width={"140px"}>{storeName}</TableItem>
                <TableItem width={"220px"}> {name}</TableItem>
                <TableItem width={"100px"} justify={"flex-end"} >{formatPrice(price)}</TableItem>
                <TableItem width={"60px"} justify={"center"} >{amountSold}</TableItem>
                <TableItem width={"120px"} justify={"flex-end"} >{formatPrice(totalRevenue)}</TableItem>
            </Row>
        )
    })

    return (
        <TableContainer>
            <h2>Product Sales</h2>
            <Table>
                <Row>
                    <ColumnHeader width={"140px"}>Store Name</ColumnHeader>
                    <ColumnHeader width={"220px"}> Product</ColumnHeader>
                    <ColumnHeader width={"100px"} justify={"center"} >Price</ColumnHeader>
                    <ColumnHeader width={"60px"} justify={"center"} >Amount</ColumnHeader>
                    <ColumnHeader width={"120px"} justify={"center"} >Total Revenue</ColumnHeader>
                </Row>
                {
                    products?.length
                        ?
                        productsList
                        :
                        <p>No items found</p>
                }
            </Table>
            <AbsoluteText>Rodrigo Brezolin Buquera, 2023</AbsoluteText>
        </TableContainer>
    )
}
