import { Box, Grid, Typography } from '@mui/material';

const iconPdf = `${process.env.PUBLIC_URL}/icons/icon-pdf.svg`;

const BoxInvoice: React.FC = () => {
  return (
    <Box sx={{ flexGrow: 1, pt: 1, pb: 1 }}>
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <Box sx={{ pt: 3 }}>
            <Typography
              variant="h6"
              sx={{
                fontFamily: 'DM Sans',
                fontSize: '12px',
                fontWeight: 400,
                lineHeight: '12px',
                letterSpacing: '0.01em',
                textAlign: 'left',
              }}
            >
              Invoice
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box sx={{ display: 'flex', alignItems: 'center', pt: 1  }}>
            <img src={iconPdf} alt="Invoice Icon" style={{ width: '30.73px', height: '30.73px' }} />
            <Box sx={{ ml: 1 }}>
              <Typography
                sx={{
                  fontFamily: 'DM Sans',
                  fontSize: '13px',
                  fontWeight: 700,
                  lineHeight: '15.6px',
                  letterSpacing: '0.01em',
                  textAlign: 'left',
                }}
              >
                Invoice
              </Typography>
              <Typography
                sx={{
                  fontFamily: 'DM Sans',
                  fontSize: '13px',
                  fontWeight: 400,
                  lineHeight: '15.6px',
                  letterSpacing: '0.01em',
                  textAlign: 'left',
                }}
              >
                100K
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default BoxInvoice;
