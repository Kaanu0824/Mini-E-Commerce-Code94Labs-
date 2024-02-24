import { Button, Container, TextField, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'; // Use useNavigate instead of useHistory

const UpdateProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [productName, setProductName] = useState('');
  const [sku, setSku] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  useEffect(() => {
    // Fetch product details from the backend API based on the ID
    axios.get(`http://localhost:3000/api/products/${id}`)
      .then(response => {
        setProduct(response.data);
        setProductName(response.data.productName);
        setSku(response.data.sku);
        setProductDescription(response.data.productDescription);
      })
      .catch(error => console.error(error));
  }, [id]);

  const handleUpdateProduct = async () => {
    try {
      const response = await axios.put(`http://localhost:3000/api/products/${id}`, {
        productName,
        sku,
        productDescription,
      });
      window.location.href = "/";
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Update Product
      </Typography>
      <form>
        <TextField
          label="Product Name"
          variant="outlined"
          fullWidth
          margin="normal"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
        <TextField
          label="SKU"
          variant="outlined"
          fullWidth
          margin="normal"
          value={sku}
          onChange={(e) => setSku(e.target.value)}
        />
        <TextField
          label="Product Description"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          margin="normal"
          value={productDescription}
          onChange={(e) => setProductDescription(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleUpdateProduct}
        >
          Update Product
        </Button>
      </form>
    </Container>
  );
};

export default UpdateProduct;