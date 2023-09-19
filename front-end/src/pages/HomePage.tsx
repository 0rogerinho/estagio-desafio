import { Box } from '@mui/material';
import Banner from '../components/banner/Banner';
import Carousel from '../components/newProducts/Carousel';

const HomePage = () => {
  return (
    <Box>
      <Banner />
      <Carousel />
    </Box>
  );
};

export default HomePage;
