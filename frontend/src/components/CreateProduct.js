import { Button, Container, TextField, Typography } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
const CreateProduct = () => {
  const [productName, setProductName] = useState('');
  const [sku, setSku] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [imageUrl,setImageUrl]=useState('')
  const[quantity,setQuantity]=useState('')


  const handleCreateProduct = async () => {
    try {
      const response = await axios.post('http://localhost:3000/api/products', {
        productName,
        sku,
        productDescription,
        imageUrl,
        quantity
      });
      window.location.href = "/";
    } catch (error) {
      console.error('Error creating product:', error);
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Create New Product
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
              <TextField
          label="QTY"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          margin="normal"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
              
        <TextField
          label="Image"
          variant="outlined"
          fullWidth
          multiline
          rows={5}
          margin="normal"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleCreateProduct}
        >
          Create Product
        </Button>
      </form>
    </Container>
  );
};

export default CreateProduct;