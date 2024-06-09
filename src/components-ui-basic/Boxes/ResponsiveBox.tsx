import { Box, Grid, Typography, Tooltip } from '@mui/material';
//import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';


const ResponsiveBox: React.FC = () => {
    const titles = ["Invoice Amount", "Debtor details", "Creditor detailsi", "Payment Due Date", "Invoice ID", "Creditor details "];
    const paragraphs = ["1000000", "details", "details", "12/03/2025", "1231215684DT", "21/08/2023"];

    return (
        <Box sx={{ flexGrow: 1, p: 2, backgroundColor: 'white', borderRadius: '16px', border: '1px solid #ccc' }}>
            <Grid container spacing={2}>
                {titles.map((title, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Box sx={{ p: 2 }}>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <Typography variant="h6">{title}</Typography>
                                {/**
                  *   <Tooltip title={title} arrow>
                    <InfoOutlinedIcon sx={{ ml: 1, cursor: 'pointer' }} />
                  </Tooltip>
                  */}
                            </Box>
                            <Typography>{paragraphs[index]}</Typography>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default ResponsiveBox;


