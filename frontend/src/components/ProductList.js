// src/components/ProductList.js
import { Card, CardContent, Container, Grid, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from the backend API
    axios.get('http://localhost:3000/api/products')
      .then(response => setProducts(response.data))
      .catch(error => console.error(error));
  }, []);

  console.log(products,"show products")

  return (
    <Container>
      <Grid container spacing={3}>
        {products.map(product => (
          <Grid item key={product._id} xs={12} sm={6} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="div">
                  {product.productName}
                </Typography>
                <Typography color="text.secondary">
                  SKU: {product.sku}
                </Typography>
                <Typography color="text.secondary">
                  SKU: {product.sku}
                </Typography>

                <Typography color="text.secondary">
                productDescription: {product.productDescription}
                </Typography>
               
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ProductList;