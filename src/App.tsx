import React from 'react';
import './App.css';
import { useState } from 'react';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import { Box } from '@mui/material';

function App() {
    return (
        <Box sx={{ flexGrow: 1}}>
			<Header/>
            <Body/>
			<Footer/>
        </Box>
    );
}

export default App;
