import { Box, Grid, Typography, Tooltip, IconButton } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';

const BoxVerification: React.FC = () => {
    const titles = ["Invoice Amount", "Debtor details", "Creditor details", "Payment Due Date", "Invoice ID", "Creditor details "];
    const paragraphs = ["1000000", "details", "details", "12/03/2025", "1231215684DT", "21/08/2023"];

    return (
        <Box sx={{ flexGrow: 1, p: 3, backgroundColor: 'white', borderRadius: '16px' }}>
            <Grid container spacing={2}>
                {titles.map((title, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Box sx={{ p: 2 }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
                                <Typography
                                    variant="h6"
                                    sx={{
                                        fontFamily: 'DM Sans',
                                        fontSize: '12px',
                                        fontWeight: 400,
                                        lineHeight: '1.8em',
                                        letterSpacing: '0.01em',
                                        textAlign: 'left',
                                        color: '#444E5F'
                                    }}
                                >
                                    {title}
                                </Typography>
                                <Tooltip title="Info about this field">
                                    <IconButton size="small" sx={{paddingBottom: '7px'}}>
                                        <InfoIcon fontSize="inherit" />
                                    </IconButton>
                                </Tooltip>
                            </Box>
                            <Typography
                                sx={{
                                    fontFamily: 'DM Sans',
                                    fontSize: '12px',
                                    fontWeight: 500,
                                    lineHeight: '1.8em',
                                    letterSpacing: '0.01em',
                                    textAlign: 'left'
                                }}
                            >
                                {paragraphs[index]}
                            </Typography>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default BoxVerification;
