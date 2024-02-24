import { Button, Container, CssBaseline } from '@mui/material';
import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import CreateProduct from './CreateProduct';
import ProductList from './ProductList';
import UpdateProduct from './UpdateProduct';


export default function Header() {
  return (
  <BrowserRouter>
    <Container component="main" maxWidth="md">
      <CssBaseline />
      <Link to="/create" style={{ textDecoration: 'none' }}>
        <Button variant="contained" color="primary" style={{ marginBottom: '16px' }}>
          Create New Product
        </Button>
      </Link>
      <Routes>
        <Route path="/create" element={<CreateProduct />} />
        <Route path="/update/:id" element={<UpdateProduct />} />
        <Route index element={<ProductList />} />
      </Routes>
    </Container>
    </BrowserRouter>
  )
}
