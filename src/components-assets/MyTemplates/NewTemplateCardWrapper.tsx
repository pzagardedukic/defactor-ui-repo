import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CreateNewTemplateCard from './CreateNewTemplateCard';

const NewTemplateCardWrapper: React.FC = () => {
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-start', gap: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <CreateNewTemplateCard />
        </Grid>
      </Grid>
    </Box>
  );
};

export default NewTemplateCardWrapper;
