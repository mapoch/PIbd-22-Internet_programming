import React from 'react';
import DataTable from './DataTable';
import { Container } from '@mui/material';

var Body = () => {
    return (
		<Container maxWidth={false} sx={{
			position: 'relative',
			top: '54px',
			width: '100%',
			bgcolor: '#eff7fd',
		}}>
			<DataTable/>
		</Container>
    );
};
export default Body;