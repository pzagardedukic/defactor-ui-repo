import { Box, Grid, Typography } from '@mui/material';
import GridViewIcon from '@mui/icons-material/GridView';
import NewTemplateCard from './MyTemplatesNewTemplateCard';

const MyTemplatesNewTemplateBox: React.FC = () => {
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-start', gap: 2 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <GridViewIcon />
        <Typography
          variant="h2"
          sx={{
            fontFamily: 'DM Sans',
            fontSize: '16px',
            fontWeight: 700,
            lineHeight: '16px',
            textAlign: 'left',
          }}
        >
          My Templates
        </Typography>
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <NewTemplateCard />
        </Grid>
      </Grid>
    </Box>
  );
};

export default MyTemplatesNewTemplateBox;