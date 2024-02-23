import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import StarIcon from '@mui/icons-material/Star';
import { Avatar, Box, Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Fetch products from the backend API
    axios.get('http://localhost:3000/api/products')
      .then(response => setProducts(response.data))
      .catch(error => console.error(error));
  }, []);

  // Assuming admin details are fetched from somewhere
  const admin = {
    name: "Admin",
    logoUrl: "admin-logo-url.png" // Provide the URL for the admin logo image
  };

  // Function to filter products based on search term
  const filteredProducts = products.filter(product =>
    product.productName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container>

      {/* First Line */}
      <Box display="flex" alignItems="center" justifyContent="space-between" mb={2}>
      <Typography variant="h4" gutterBottom>
        
      </Typography>
      <Box display="flex" alignItems="center">
        <Typography variant="h6">{admin.name}</Typography>
        <KeyboardArrowDownIcon /> 
        <Avatar src={admin.logoUrl} alt={admin.name} sx={{ width: 60, height: 60, marginLeft: 2, backgroundColor: '#001EB9' }} />
       
      </Box>
    </Box>

       {/* SECOUND LINE  */}
      <Box display="flex" alignItems="center" justifyContent="space-between" mb={2}>
      <Typography variant="h4"> PRODUCT </Typography>
        <Box></Box>
      </Box>

      {/* THIRD LINE  */}
        <Box display="flex" alignItems="center" mb={2} >
            <TextField
                label="Search for product "
                variant="outlined"
                size="small"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                sx={{ marginRight: 1 , width : '500px', backgroundColor: '#F7F7F7'}}
            />
  
            <Button  variant="contained" sx={{ backgroundColor: '#001EB9', marginRight: '200px' ,  borderRadius: '10px' }}>
                <IconButton size="small" style={{ color: '#FFFFFF' }}>
                <SearchIcon />
                </IconButton>
                Search
            </Button>

            <Button variant="contained" sx={{ backgroundColor: '#001EB9' , width: '200px', height: '48px'  }}> 
                New Product
            </Button>

            <div style={{ position: 'relative', display: 'inline-block' }}>
                <StarIcon style={{ color: '#001EB9', marginLeft: '4px', width: '200px', height: '48px' }} />
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' , width: '50px', height: '50px', borderRadius: '10PX', border: '2px solid #001EB9' }}> </div>
            </div>


        </Box>

      
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>SKU</TableCell>
              <TableCell>Image</TableCell>
              <TableCell>Product Name</TableCell>
              <TableCell>Product Description</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredProducts.map(product => (
              <TableRow key={product._id}>
                <TableCell>{product.sku}</TableCell>
                <TableCell>{product.imageUrl}</TableCell>
                <TableCell>{product.productName}</TableCell>
                <TableCell>{product.productDescription}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default ProductList;