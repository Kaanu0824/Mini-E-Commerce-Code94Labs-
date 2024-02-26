import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Avatar, Box, Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaPen, FaStar, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';


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

  const createEdit = (productId) => {
    // Navigate to the update product page using the product ID
    window.location.href = `/update/${productId}`;
  };

  const deleteProductById = (productId) => {
    // Navigate to the update product page using the product ID
    axios.delete(`http://localhost:3000/api/products/${productId}`)
        .then(response => {
            // Redirect to the home page after successful deletion
            window.location.href = "/";
        })
        .catch(error => console.log(error));
};


//Favourite 
const addFav = (productId) => {

  const updatedProducts = products.map(product => {
    if (product._id === productId) {
      product.favorites = !product.favorites;
      axios.put(`http://localhost:3000/api/products/favorites/${productId}`, {
        favorites: product.favorites
      })
      .then(response => {
        console.log("updated")
      })
      .catch(error => {
        console.error(error);
      });
    }
  });
}



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
                label="Search for product"
                variant="outlined"
                size="small"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                sx={{ marginRight: 1, width: '400px', backgroundColor: '#F7F7F7' }}
              />
              {/* <Button
                variant="contained"
                color="primary"
                onChange={(e) => setSearchTerm(e.target.value)}
              >
                Search
              </Button> */}


            <Link to="/create" style={{ textDecoration: 'none' }}>
                <Button  variant="contained" sx={{ backgroundColor: '#001EB9', marginRight: '40px' ,  borderRadius: '10px' }}>
                     New Product
                </Button>
            </Link>

            <Link to="/favorites" style={{ textDecoration: 'none' }}>
              <Button variant="contained" sx={{ backgroundColor: '#001EB9', marginRight: '40px' ,  borderRadius: '10px' }} >
                Favorites
              </Button>
            </Link>
         </Box>

       

      
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell style={{ color: '#001EB9' }} >SKU</TableCell>
              <TableCell style={{ color: '#001EB9' }}>Image</TableCell>
              <TableCell style={{ color: '#001EB9' }}>Product Name</TableCell>
              <TableCell style={{ color: '#001EB9' }}>quantity</TableCell>
              {/* <TableCell>Product Description</TableCell> */}
              {/* <TableCell>Action</TableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredProducts.map(product => (
              <TableRow key={product._id}>
                  <TableCell>{product.sku}</TableCell>
                  <TableCell><img src='product.imageUrl'></img></TableCell>
                  <TableCell>{product.productName}</TableCell>
                  <TableCell>{product.quantity} </TableCell> 
                  {/* <TableCell>{product.productDescription}</TableCell> */}
                  <TableCell>

                      <button style={{ marginRight: '10px' }}  onClick={()=>deleteProductById(product._id)}>
                        <FaTrash style={{ color: '#001EB9' }}  />
                      </button>

                      <button style={{ marginRight: '10px' }}  onClick={() => createEdit(product._id)} > 
                         <FaPen  style={{ color: '#001EB9' }}  />
                      </button>

                      <button  style={{ marginRight: '10px' }}  onClick={() => addFav(product._id)} > 
                        <FaStar  style={{ color: '#001EB9' }} />
                      </button>

                  </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );

};

export default ProductList;