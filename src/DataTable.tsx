import React from 'react';
import { useState } from 'react';
import { Box, Button, Container, Card, CardContent, Typography, Pagination, IconButton, Paper } from '@mui/material';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TablePagination, TableFooter } from '@mui/material';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import { useTheme } from '@mui/material/styles';

function createData(numb:any, name:any, phone:any, tag:any) {
	return { numb, name, phone, tag };
}

interface TablePaginationActionsProps {
  count: number;
  page: number;
  rowsPerPage: number;
  onPageChange: (
    event: React.MouseEvent<HTMLButtonElement>,
    newPage: number,
  ) => void;
}

function TablePaginationActions(props: TablePaginationActionsProps) {
	const theme = useTheme();
	const { count, page, rowsPerPage, onPageChange } = props;

	const handleFirstPageButtonClick = (
		event: React.MouseEvent<HTMLButtonElement>,
	) => {
		onPageChange(event, 0);
	};

	const handleBackButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		onPageChange(event, page - 1);
	};

	const handleNextButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		onPageChange(event, page + 1);
	};

	const handleLastPageButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
	};

	return (
		<Box sx={{ flexShrink: 0, ml: 2.5 }}>
			<IconButton
				onClick={handleFirstPageButtonClick}
				disabled={page === 0}
				aria-label="first page"
			>
				{theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
			</IconButton>
			<IconButton
				onClick={handleBackButtonClick}
				disabled={page === 0}
				aria-label="previous page"
			>
				{theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
			</IconButton>
			<IconButton
				onClick={handleNextButtonClick}
				disabled={page >= Math.ceil(count / rowsPerPage) - 1}
				aria-label="next page"
			>
				{theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
			</IconButton>
			<IconButton
				onClick={handleLastPageButtonClick}
				disabled={page >= Math.ceil(count / rowsPerPage) - 1}
				aria-label="last page"
			>
					{theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
			</IconButton>
		</Box>
	);
}

const rows = [
	createData(1, 'ФСН', '555-67-76', '@ФСН'),
	createData(2, 'СОС', '654-75-32', '@СОС'),
	createData(3, 'ОФН', '642-55-77', '@ОФН'),
	createData(4, 'ООН', '642-55-34', '@ООН'),
	createData(5, 'ДПС', '642-53-13', '@ДПС'),
	createData(6, 'ДПС', '642-53-13', '@ДПС'),
	createData(7, 'ДПС', '642-53-13', '@ДПС'),
	createData(8, 'ДПС', '642-53-13', '@ДПС'),
	createData(9, 'ДПС', '642-53-13', '@ДПС'),
	createData(10, 'ДПС', '642-53-13', '@ДПС'),
	createData(11, 'ДПС', '642-53-13', '@ДПС'),
	createData(12, 'ДПС', '642-53-13', '@ДПС'),
	createData(13, 'ДПС', '642-53-13', '@ДПС'),
	createData(14, 'ДПС', '642-53-13', '@ДПС'),
	createData(15, 'ДПС', '642-53-13', '@ДПС'),
	createData(16, 'ДПС', '642-53-13', '@ДПС'),
	createData(17, 'ДПС', '642-53-13', '@ДПС'),
	createData(18, 'ДПС', '642-53-13', '@ДПС'),
	createData(19, 'ДПС', '642-53-13', '@ДПС'),
	createData(20, 'ДПС', '642-53-13', '@ДПС'),
	createData(21, 'ДПС', '642-53-13', '@ДПС'),
	createData(22, 'ДПС', '642-53-13', '@ДПС'),
	createData(23, 'ДПС', '642-53-13', '@ДПС'),
	createData(24, 'ДПС', '642-53-13', '@ДПС'),
	createData(25, 'ДПС', '642-53-13', '@ДПС'),
	createData(26, 'ДПС', '642-53-13', '@ДПС'),
	createData(27, 'ДПС', '642-53-13', '@ДПС'),
	createData(28, 'ДПС', '642-53-13', '@ДПС'),
	createData(29, 'ДПС', '642-53-13', '@ДПС'),
	createData(30, 'ДПС', '642-53-13', '@ДПС'),
	createData(31, 'ДПС', '642-53-13', '@ДПС'),
	createData(32, 'ДПС', '642-53-13', '@ДПС'),
	createData(33, 'ДПС', '642-53-13', '@ДПС'),
	createData(34, 'ДПС', '642-53-13', '@ДПС'),
	createData(35, 'ДПС', '642-53-13', '@ДПС'),
	createData(36, 'ДПС', '642-53-13', '@ДПС'),
	createData(37, 'ДПС', '642-53-13', '@ДПС'),
	createData(38, 'ДПС', '642-53-13', '@ДПС'),
	createData(39, 'ДПС', '642-53-13', '@ДПС'),
	createData(40, 'ДПС', '642-53-13', '@ДПС'),
];

var DataTable = () => {
	const [page, setPage] = React.useState(0);
	const [rowsPerPage, setRowsPerPage] = React.useState(15);

	const emptyRows =
		page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

	const handleChangePage = (
		event: React.MouseEvent<HTMLButtonElement> | null,
		newPage: number,
	) => {
		setPage(newPage);
	};
	
	const handleChangeRowsPerPage = (
		event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		setRowsPerPage(parseInt(event.target.value, 10));
		setPage(0);
	};
	
    return (
		<TableContainer sx={{ bgcolor: '#ffffff' }}>
			<Table aria-lebel="simple table">
				<TableHead>
					<TableRow>
						<TableCell>№</TableCell>
						<TableCell>Служба</TableCell>
						<TableCell>Телефон</TableCell>
						<TableCell>Тэг</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{(rowsPerPage > 0
						? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
						: rows
					).map((row) => (
						<TableRow>
							<TableCell align="left">{row.numb}</TableCell>
							<TableCell align="left">{row.name}</TableCell>
							<TableCell align="left">{row.phone}</TableCell>
							<TableCell align="left">{row.tag}</TableCell>
						</TableRow>
					))}
						{emptyRows > 0 && (
							<TableRow style={{ height: 53 * emptyRows }}>
								<TableCell colSpan={6} />
							</TableRow>
						)}
				</TableBody>
				<TableFooter>
				    <TableRow>
						<TablePagination
							rowsPerPageOptions={[5, 10, 15, { label: 'All', value: -1 }]}
							colSpan={3}
							count={rows.length}
							rowsPerPage={rowsPerPage}
							page={page}
							SelectProps={{
								inputProps: {
									'aria-label': 'rows per page',
								},
								native: true,
							}}
							onPageChange={handleChangePage}
							onRowsPerPageChange={handleChangeRowsPerPage}
							ActionsComponent={TablePaginationActions}
						/>
					</TableRow>
				</TableFooter>
			</Table>
		</TableContainer>
    );
};
export default DataTable;