// src/components/ProductSearch.js
import { Box, Button, TextField } from '@mui/material';
import React, { useState } from 'react';

const ProductSearch = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <Box mb={3}>
      <TextField
        label="Search by Name"
        variant="outlined"
        fullWidth
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={handleSearch} style={{ marginTop: '8px' }}>
        Search
      </Button>
    </Box>
  );
};

export default ProductSearch;