import { useDropzone } from 'react-dropzone';
import { Typography, Box } from '@mui/material';

const iconImagePlus = `${process.env.PUBLIC_URL}/icons/icon-image-plus.svg`;

interface FormDropzoneBoxOneFileProps {
  files: File[];
  setFiles: React.Dispatch<React.SetStateAction<File[]>>;
}

const FormDropzoneBoxOneFile: React.FC<FormDropzoneBoxOneFileProps> = ({ files, setFiles }) => {
  const onDrop = (acceptedFiles: File[]) => {
    setFiles(acceptedFiles);
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <Box
      {...getRootProps()}
      sx={{
        width: '265px',
        border: '2px dashed #D1D5DB',
        borderRadius: '6px',
        padding: '20px',
        textAlign: 'center',
        cursor: 'pointer'
      }}
    >
      <input {...getInputProps()} />
      {files.length > 0 ? (
        files.map((file, index) => (
          <Typography
            key={index}
            variant="body2"
            style={{
              fontFamily: 'Inter',
              fontSize: '14px',
              fontWeight: 500,
              lineHeight: '20px',
              textAlign: 'left'
            }}
          >
            {file.name}
          </Typography>
        ))
      ) : (
        <>
          <Box component="img" src={iconImagePlus} alt="icon" sx={{ width: '50px' }} />
          <Typography
            variant="body2"
            style={{
              fontSize: '14px',
              fontWeight: 500,
              lineHeight: '1.7em',
              textAlign: 'center',
              color: '#4F46E5'
            }}
          >
            Upload a file
          </Typography>
          <Typography
            variant="body2"
            style={{
              fontSize: '12px',
              fontWeight: 500,
              lineHeight: '1.7em',
              textAlign: 'center',
              color: '#4B5563'
            }}
          >
            or drag and drop here
          </Typography>
        </>
      )}
    </Box>
  );
};

export default FormDropzoneBoxOneFile;
