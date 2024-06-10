import { useState } from 'react';
import { Box, Button, Grid, MenuItem, Select, FormControl, Typography, SelectChangeEvent, useMediaQuery, Theme } from '@mui/material';

const VerificationForm: React.FC = () => {
  const [auditCompany, setAuditCompany] = useState('Provider1');
  const isDesktop = useMediaQuery((theme: Theme) => theme.breakpoints.up('sm'));

  const handleChange = (event: SelectChangeEvent<string>) => {
    setAuditCompany(event.target.value as string);
  };

  return (
    <Box
      component="form"
      sx={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: 2,
        mt: 2,
      }}
      noValidate
      autoComplete="off"
    >
      <Grid container spacing={2} alignItems="center" justifyContent="center">
        <Grid item xs={12} sm={6} sx={{ p: "16px" }}>
          <Typography
            sx={{
              fontFamily: 'DM Sans',
              fontSize: '12px',
              fontWeight: 400,
              lineHeight: '15.62px',
              textAlign: 'left',
              color: 'black',
              mb: 1,
            }}
          >
            Audit Company
          </Typography>
          <FormControl fullWidth required variant="outlined">
            <Select
              labelId="audit-company-label"
              id="audit-company"
              value={auditCompany}
              onChange={handleChange}
              sx={{
                lineHeight: '1.5em',
                color: 'black',
                '.MuiSelect-icon': {
                  color: 'black',
                },
              }}
            >
              <MenuItem value="Provider1">Provider 1</MenuItem>
              <MenuItem value="Provider2">Provider 2</MenuItem>
              <MenuItem value="Provider3">Provider 3</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6} sx={{ display: 'flex', justifyContent: 'flex-start', p: "16px", mt: isDesktop ? "26px" : 0 }}>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            sx={{
              minWidth: '167px',
              height: '59px',
              padding: '8px 24px',
              borderRadius: '100px',
              backgroundColor: '#5F66FF',
              color: 'white',
              borderColor: 'transparent',
              textTransform: 'capitalize',
              fontFamily: 'DM Sans',
              fontSize: '14px',
              fontWeight: 700,
              lineHeight: '22.4px',
              textAlign: 'center',
              '&:hover': {
                backgroundColor: '#4e54cc',
              },
            }}
          >
            Send to verifying
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default VerificationForm;
