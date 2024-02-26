import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {
  Avatar,
  Box,
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography
} from '@mui/material';
import Button from '@mui/material/Button';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaAngleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Favorites() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const admin = {
    name: "Admin",
    logoUrl: "admin-logo-url.png" // Provide the URL for the admin logo image
  };

  useEffect(() => {
    // Fetch favorite products from the backend API
    axios.get('http://localhost:3000/api/products')
      .then(response => {
        const favoriteProducts = response.data.filter(product => product.favorites === true);
        setProducts(favoriteProducts);
      })
      .catch(error => console.error(error));
  }, []);


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

       {/* SECOUND LINE  */}
       <Box display="flex" alignItems="center">

            <Link to="/ProductList" style={{ textDecoration: 'none' }} sx={{ marginRight: 2}} >
                <Typography variant="h4"  sx={{ width: 125, height: 60 , color: '#162427' }}> Product </Typography>   
            </Link>

            <Typography variant="h4" gutterBottom  sx={{ marginRight: 2}} >
                <Typography variant="h4" >  <FaAngleRight/> FAVOURITE PRODUCT </Typography> 
            </Typography>

        </Box>  

      
        <Box display="flex" alignItems="center" mb={2} >
           
            <TextField
                label="Search for product"
                variant="outlined"
                size="small"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                sx={{ marginRight: 1, width: '400px', backgroundColor: '#F7F7F7' }}
              />
            <Link to="/create" style={{ textDecoration: 'none' }}>
                <Button  variant="contained" sx={{ backgroundColor: '#001EB9', marginRight: '40px' ,  borderRadius: '10px' }}>
                     New Product
                </Button>
            </Link>
       </Box>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell style={{ color: '#001EB9' }}>SKU</TableCell>
              <TableCell style={{ color: '#001EB9' }}>Image</TableCell>
              <TableCell style={{ color: '#001EB9' }}>Product Name</TableCell>
              <TableCell style={{ color: '#001EB9' }}>Quantity</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map(product => (
              <TableRow key={product._id}>
                <TableCell>{product.sku}</TableCell>
                <TableCell>
                  <img src={product.imageUrl} alt="Product" width="50px" height="50px" />
                </TableCell>
                <TableCell>{product.productName}</TableCell>
                <TableCell>{product.quantity}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
