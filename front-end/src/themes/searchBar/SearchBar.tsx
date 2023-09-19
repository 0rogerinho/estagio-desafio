import { Search } from '@mui/icons-material';
import { Box, IconButton, InputBase } from '@mui/material';

const SearchBar = () => {
  const classBox = {
    border: '1px solid #333333',
    borderRadius: '10px',
  };

  const classIconButton = { '&:hover': { background: '#0000' } };

  return (
    <Box height={40} display="flex" alignItems="center" sx={classBox}>
      <InputBase placeholder="search..." sx={{ padding: ' 0px 8px' }} />

      <IconButton aria-label="search" component="span" sx={classIconButton}>
        <Search />
      </IconButton>
    </Box>
  );
};

export default SearchBar;
