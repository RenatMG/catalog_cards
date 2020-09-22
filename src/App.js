import React from 'react';
import './App.scss'
import Catalog from "./Pages/Catalog/Catalog";
import Container from "./Layouts/Container/Container";
import CatalogContextProvider from "./Pages/Catalog/context/catalogContext";


function App() {
    return (
        <Container>
            <CatalogContextProvider>
                <Catalog/>
            </CatalogContextProvider>
        </Container>
    );
}

export default App;
