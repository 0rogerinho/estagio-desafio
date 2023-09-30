import { Box, Typography } from '@mui/material';
import getFinancials from '../../api/getFinancials';

const Dashboard = () => {
  const { financials } = getFinancials();

  return (
    <Box display="flex" flexDirection={'column'} gap={2} margin={5}>
      <Typography variant="h6" color="initial">
        Shopping: {financials?.shopping}
      </Typography>
      <Typography variant="h6" color="initial">
        Sales: {financials?.sales}
      </Typography>
    </Box>
  );
};

export default Dashboard;
