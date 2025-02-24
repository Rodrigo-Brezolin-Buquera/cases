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
import { applyFormulas } from './applyFormulas';

const columns = [
  { id: 'empresa', label: 'Empresa', minWidth: 50, editable: true },
  { id: 'grupoMarca', label: 'Grupo Marca', minWidth:100, editable: false },
  { id: 'item', label: 'Descrição', minWidth: 50, editable: false},
  { id: 'precoFinal18', label: 'PF18%', minWidth: 50, editable: false},
  { id: 'icmsPercentual', label: 'ICMS %', minWidth: 70, editable: false },
  { id: 'precoFinalAjustado', label: 'Preço Final Ajustado', minWidth: 150, editable: false },
  { id: 'repassePercentual', label: 'Repasse %', minWidth: 80, editable: false },
  { id: 'precoComRepasse', label: 'PF - Repasse', minWidth: 100, editable: false },
  { id: 'descontoPercentual', label: 'Desconto %', minWidth: 80, editable: true },
  { id: 'custoFinal', label: 'Custo Final', minWidth: 100, editable: false },
  { id: 'icmsCompraPercentual', label: 'ICMS Compra %', minWidth: 120, editable: true },
  { id: 'custoLiquido', label: 'Custo Líquido', minWidth: 100, editable: false },
  { id: 'tributacao', label: 'Tributação', minWidth: 50, editable: false },
  { id: 'quantidadePF', label: 'Quantidade PF', minWidth: 100, editable: true },
  { id: 'preco', label: 'Preço', minWidth: 50, editable: false },
  { id: 'desconto', label: 'Desconto', minWidth: 50, editable: true },
  { id: 'rb', label: 'RB', minWidth: 50, editable: false },
  { id: 'impostos', label: 'Impostos', minWidth: 50, editable: false },
  { id: 'rl', label: 'RL', minWidth: 50, editable: false },
  { id: 'margemBrutaPercentual', label: 'MB %', minWidth: 50, editable: false },
  { id: 'lucroBruto', label: 'LB', minWidth: 50, editable: false },
  { id: 'beneficioFiscal', label: 'BF', minWidth: 50, editable: true },
  { id: 'cmv', label: 'CMV', minWidth: 50, align: 'right', editable: false }
];

export default function CustomTable() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [products, setProducts] = useState([product])
  const [editing, setEditing] = useState({ rowIndex: null, columnId: null });
  const [editValue, setEditValue] = useState('');


  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleEdit = (rowIndex, columnId, value) => {
    setEditing({ rowIndex, columnId });
    setEditValue(value); 
  };

  const handleSave = (rowIndex, columnId) => {
    const updatedProducts = [...products];
    updatedProducts[rowIndex] = { ...updatedProducts[rowIndex], [columnId]: editValue };
    setProducts(updatedProducts);
    setEditing({ rowIndex: null, columnId: null });
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
            {products
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, rowIndex) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={rowIndex}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      const isEditing = editing.rowIndex === rowIndex && editing.columnId === column.id;

                      return (
                        <TableCell
                          key={column.id}
                          align={column.align}
                          onClick={() => column.editable && handleEdit(rowIndex, column.id)}
                        >
                          {isEditing ? (
                            <input
                              type="text"
                              value={editValue}
                              onChange={(e) => setEditValue(e.target.value)} 
                              onBlur={() => handleSave(rowIndex, column.id)} 
                              autoFocus
                            />
                          ) : (
                            column.format && typeof value === 'number'
                              ? column.format(value)
                              : value
                          )}
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
