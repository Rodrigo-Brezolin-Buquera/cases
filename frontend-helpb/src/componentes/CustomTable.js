import { useState } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import product from './product';

const columns = [
  { id: 'empresa', label: 'Empresa', minWidth: 50 },
  { id: 'grupoMarca', label: 'Grupo Marca', minWidth:100 },
  { id: 'item', label: 'Descrição', minWidth: 50},
  { id: 'precoFinal18', label: 'PF18%', minWidth: 50},
  { id: 'icmsPercentual', label: 'ICMS %', minWidth: 70 },
  { id: 'precoFinalAjustado', label: 'Preço Final Ajustado', minWidth: 150 },
  { id: 'repassePercentual', label: 'Repasse %', minWidth: 80 },
  { id: 'precoComRepasse', label: 'Preço com Repasse', minWidth: 150 },
  { id: 'descontoPercentual', label: 'Desconto %', minWidth: 80 },
  { id: 'custoFinal', label: 'Custo Final', minWidth: 100 },
  { id: 'icmsCompraPercentual', label: 'ICMS Compra %', minWidth: 120 },
  { id: 'custoLiquido', label: 'Custo Líquido', minWidth: 100 },
  { id: 'tributacao', label: 'Tributação', minWidth: 50 },
  { id: 'quantidadePF', label: 'Quantidade PF', minWidth: 100 },
  { id: 'preco', label: 'Preço', minWidth: 50 },
  { id: 'desconto', label: 'Desconto', minWidth: 50 },
  { id: 'rb', label: 'RB', minWidth: 50 },
  { id: 'impostos', label: 'Impostos', minWidth: 50 },
  { id: 'rl', label: 'RL', minWidth: 50 },
  { id: 'margemBrutaPercentual', label: 'Margem Bruta %', minWidth: 120 },
  { id: 'lucroBruto', label: 'Lucro Bruto', minWidth: 100 },
  { id: 'beneficioFiscal', label: 'Benefício Fiscal', minWidth: 110 },
  { id: 'cmv', label: 'CMV', minWidth: 50, align: 'right' }
];

export default function CustomTable() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [products, setProducts] = useState(product)

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440, minHeight:500 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {[products]
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={products.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
