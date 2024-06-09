import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CommunityTemplateCard from './CommunityTemplateCard';

const CommunityFlexWrapper: React.FC = () => {
    const items = Array(9).fill(<CommunityTemplateCard />);
    
    return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-start', gap: 2 }}>
            <Grid container spacing={2}>
                {items.map((item, index) => (
                    <Grid item key={index} xs={12} sm={6} md={4}>
                        {item}
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default CommunityFlexWrapper;
