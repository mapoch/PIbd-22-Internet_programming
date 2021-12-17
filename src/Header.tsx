import React from 'react';
import { useState } from 'react';
import { Box, AppBar, Toolbar, Typography, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

interface HeaderProps {
	nickname: string;
};

var Header = (props: HeaderProps) => {
    return (
		<AppBar sx={{
			bgcolor: '#c5dced',
			color: '#000000',
			height: '54px',
			position: 'fixed',
		}}>
			<Toolbar>
				<Button color="inherit">Главная</Button>
				<Button color="inherit">Обращения</Button>
				<Button color="inherit">Службы</Button>
				<Button color="inherit">Новости</Button>
				<Button color="inherit">Поддержка</Button>
				<Button color="inherit">Личный кабинет</Button>
				<Box sx={{ flexGrow: 10 }}></Box>
				<Typography variant="h6" component="div" sx={{ flexGrow: 0 }}>{props.nickname}</Typography>
			</Toolbar>
		</AppBar>
    );
};
export default Header;