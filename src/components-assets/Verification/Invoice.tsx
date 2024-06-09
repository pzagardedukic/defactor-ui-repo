import { Box, Grid, Typography } from '@mui/material';


const Invoice: React.FC = () => {
  return (
    <Box sx={{ flexGrow: 1, pt: 3, pb: 3 }}>
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <Box sx={{ pt: 3 }}>
            <Typography variant="h6" >Invoice</Typography>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box sx={{ display: 'flex', alignItems: 'center', pt: 3 }}>
          <img src='#' alt='pdf-icon'/>
            <Box sx={{ ml: 1 }}>
              <Typography>Invoice</Typography>
              <Typography>100K</Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Invoice;
