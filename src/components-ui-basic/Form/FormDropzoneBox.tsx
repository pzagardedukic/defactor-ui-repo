import { Box, Typography } from '@mui/material';
  
interface DropzoneBoxProps {
  getRootProps: () => any;
  getInputProps: () => any;
}

const FormDropzoneBox: React.FC<DropzoneBoxProps> = ({ getRootProps, getInputProps }) => {
  return (
    <Box
      {...getRootProps()}
      sx={{
        border: '2px dashed #ccc',
        padding: '20px',
        textAlign: 'center',
        cursor: 'pointer',
        mt: 2,
        mb: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <input {...getInputProps()} />
      <img src="#" alt="ikona"/>
      <Typography sx={{ mb: 1 }}>Upload a file or drag and drop</Typography>
      <Typography variant="body2" color="textSecondary">PDF, DOC, JPG up to 10MB</Typography>
    </Box>
  );
};

export default FormDropzoneBox;
