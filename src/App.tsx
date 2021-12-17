import React from 'react';
import './App.css';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import { Box, AppBar, IconButton, Toolbar, Typography, Button, Container, Card, CardContent } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

function App() {
    return (
        <Box sx={{ flexGrow: 1}}>
			<Header nickname="СЕЯЛОВ ДМИТРИЙ ПАНУФИЕВИЧ"/>
            <Body/>
			<Footer/>
        </Box>
    );
}

export default App;
