import { Box, Button, TextField, Typography, Grid } from '@mui/material';
import { useDropzone } from 'react-dropzone';
import FormDropzoneBox from '../../components-ui-basic/Form/FormDropzoneBox';

const FillDataForm: React.FC = () => {
  const { getRootProps: getPhotosRootProps, getInputProps: getPhotosInputProps } = useDropzone();
  const { getRootProps: getRecordsRootProps, getInputProps: getRecordsInputProps } = useDropzone();
  const { getRootProps: getProvesRootProps, getInputProps: getProvesInputProps } = useDropzone();

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 0 },
        width: '100%',
      }}
      noValidate
      autoComplete="off"
    >
      <Typography variant="h4" component="div" sx={{ mb: 2 }}>
        Contact Us
      </Typography>
      <TextField
        required
        id="name"
        label="Name"
        variant="outlined"
        fullWidth
        sx={{ mb: 2 }}
      />
      <Typography variant="h6" component="div" sx={{ mt: 2 }}>
        Dynamic Data
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            id="dynamic-status"
            label="Payment Status"
            placeholder="Add Link"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="dynamic-history"
            label="Payment History"
            placeholder="Add Link"
            variant="outlined"
            fullWidth
          />
        </Grid>
      </Grid>
      <Typography variant="h6" component="div" sx={{ mt: 2 }}>
        Static Data
      </Typography>
      <Grid container spacing={2}>
        {Array.from({ length: 8 }).map((_, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <TextField
              id={`field-${index}`}
              label={`Payment ${index % 2 === 0 ? 'Status' : 'History'}`}
              placeholder="Add Link"
              variant="outlined"
              fullWidth
            />
          </Grid>
        ))}
      </Grid>
      <Typography variant="h6" component="div" sx={{ mt: 2 }}>
        Photos
      </Typography>
      <FormDropzoneBox getRootProps={getPhotosRootProps} getInputProps={getPhotosInputProps} />
      <Typography variant="h6" component="div" sx={{ mt: 2 }}>
        Ownership Records
      </Typography>
      <FormDropzoneBox getRootProps={getRecordsRootProps} getInputProps={getRecordsInputProps} />
      <Typography variant="h6" component="div" sx={{ mt: 2 }}>
        Proves
      </Typography>
      <FormDropzoneBox getRootProps={getProvesRootProps} getInputProps={getProvesInputProps} />
      <Button variant="contained" color="primary" type="submit" sx={{ mt: 2 }}>
        Submit
      </Button>
    </Box>
  );
};

export default FillDataForm;
