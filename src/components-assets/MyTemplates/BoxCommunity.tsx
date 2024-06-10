import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography'; 
import CommunityTemplateCard from './CommunityTemplateCard';

const BoxCommunity: React.FC = () => {
    return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-start', gap: 2, marginTop: 5 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Typography
                    variant="h2"
                    sx={{
                        fontFamily: 'DM Sans',
                        fontSize: '16px',
                        fontWeight: 700,
                        lineHeight: '16px',
                        textAlign: 'left'
                    }}
                >
                    Community Templates
                </Typography>
            </Box>
            <Grid container spacing={2}>
                {Array.from({ length: 9 }).map((_, index) => (
                    <Grid item key={index} xs={12} sm={6} md={4}>
                        <CommunityTemplateCard />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default BoxCommunity;
