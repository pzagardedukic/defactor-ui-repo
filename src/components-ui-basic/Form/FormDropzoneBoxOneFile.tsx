import { useDropzone } from 'react-dropzone';
import { Typography } from '@mui/material';

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
    <div {...getRootProps()} style={{ width: '265px', border: '1px dashed #ccc', padding: '20px', textAlign: 'center', cursor: 'pointer' }}>
      <input {...getInputProps()} />
      {files.length > 0 ? (
        files.map((file, index) => (
          <Typography key={index} variant="body2">
            {file.name}
          </Typography>
        ))
      ) : (
        <>
          <Typography variant="body2">Upload a file</Typography>
          <Typography variant="body2">or drag and drop here</Typography>
        </>
      )}
    </div>
  );
};

export default FormDropzoneBoxOneFile;
