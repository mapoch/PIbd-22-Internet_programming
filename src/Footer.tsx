import React from 'react';
import { useState } from 'react';
import { AppBar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

var Footer = () => {
    return (
		<AppBar className="header" sx={{
			bgcolor: '#c5dced',
			color: '#000000',
			top: '54px',
			height: '64px',
			position: 'relative',
		}}>
			<Typography>
				<h3>ВСЕ ПРАВА ЗАЩИЩЕНЫ © 2021</h3>
			</Typography>
		</AppBar>
    );
};
export default Footer;