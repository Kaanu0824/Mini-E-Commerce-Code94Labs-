import { Container, CssBaseline } from '@mui/material';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CreateProduct from './components/CreateProduct';
import Favorites from './components/Favorites';
import ProductList from './components/ProductList';
import UpdateProduct from './components/UpdateProduct';

function App() {
  return (
    <BrowserRouter>
      <Container component="main" maxWidth="md">
        <CssBaseline />
        {/* <Link to="/create" style={{ textDecoration: 'none' }}>
          <Button variant="contained" color="primary" style={{ marginBottom: '16px' }}>
            Create New Product
          </Button>
        </Link> */}
        <Routes>
          <Route path="/create" element={<CreateProduct />} />
          <Route path="/ProductList" element={<ProductList/>} />
          <Route path="/update/:id" element={<UpdateProduct />} />
          <Route index element={<ProductList />} />
          <Route path="/favorites" element={ <Favorites/>} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;