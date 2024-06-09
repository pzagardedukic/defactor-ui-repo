import { Box, Button, TextField, Grid } from '@mui/material';
import BtnOutlined from '../../components-ui-basic/BTNs/BtnOutlined';

const VerificationForm: React.FC = () => {
  
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
        <Grid item xs={12} sm={8}>
          <TextField
            fullWidth
            id="audit-company"
            label="Audit Company"
            variant="outlined"
            required
          />
        </Grid>
        <Grid item xs={12} sm={4} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button variant="outlined" color="primary" type="submit">
            Submit
          </Button>
          <BtnOutlined>Send to verifying</BtnOutlined>
        </Grid>
      </Grid>
    </Box>
  );
};

export default VerificationForm;




