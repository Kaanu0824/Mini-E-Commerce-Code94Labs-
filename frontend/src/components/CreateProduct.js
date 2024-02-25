import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Avatar, Box, Button, Container, TextField, Typography } from '@mui/material';
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

  const admin = {
    name: "Admin",
    logoUrl: "admin-logo-url.png" // Provide the URL for the admin logo image
  };

  return (
    <Container>

        <Box display="flex" alignItems="center" justifyContent="space-between" mb={2}>
          <Typography variant="h4" gutterBottom>
          </Typography>
          <Box display="flex" alignItems="center">
            <Typography variant="h6">{admin.name}</Typography>
            <KeyboardArrowDownIcon /> 
            <Avatar src={admin.logoUrl} alt={admin.name} sx={{ width: 60, height: 60, marginLeft: 2, backgroundColor: '#001EB9' }} />
          
         </Box>
        </Box>
      <Typography variant="h4" gutterBottom>
        Add New Product
      </Typography>
      
     
        <TextField
            label="SKU"
            variant="outlined"
            fullWidth
            margin="normal"
            value={sku}
            sx={{ width: 395, height: 60}}
            onChange={(e) => setSku(e.target.value)}
          /> 

          <Box display="flex" alignItems="center">
                  <TextField
                    label="Product Name"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                    sx={{ marginRight: 2 }}
                  />
                  <TextField
                    label="QTY"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                  />
                </Box>
       
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
      
    </Container>
  );
};

export default CreateProduct;