// src/components/ProductDetails.js
import { Button, Container, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Fetch product details from the backend API based on the ID
    axios.get(`http://localhost:3000/api/products/${id}`)
      .then(response => setProduct(response.data))
      .catch(error => console.error(error));
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Product Details
      </Typography>
      <Typography variant="h5" component="div">
        {product.productName}
      </Typography>
      <Typography color="text.secondary">
        SKU: {product.sku}
      </Typography>
      {/* Display other product details as needed */}
      <Button
        component={Link}
        to="/"
        variant="contained"
        color="primary"
        style={{ marginTop: '8px' }}
      >
        Back to Product List
      </Button>
    </Container>
  );
};

export default ProductDetails;