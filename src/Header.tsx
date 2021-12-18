import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

var Header = () => {
    return (
		<AppBar sx={{
			bgcolor: '#c5dced',
			color: '#000000',
			height: '54px',
			position: 'fixed',
		}}>
			<Toolbar>
				<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>Репозиторий пользователя vladdy_moses</Typography>
			</Toolbar>
		</AppBar>
    );
};
export default Header;