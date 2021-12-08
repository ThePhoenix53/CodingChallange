import './App.css';
import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ContactList from './pages/ContactList';

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ContactList />}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
