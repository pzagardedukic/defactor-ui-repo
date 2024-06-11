import { Button } from '@mui/material';

const ButtonPublish: React.FC = () => {
  return (
    <Button
      variant="contained"
      color="primary"
      type="submit"
      sx={{
        backgroundColor: '#5A5BEB',
        padding: '12px 32px',
        borderRadius: '100px',
        textTransform: 'capitalize',
        opacity: 1, 
        ':hover': {
          backgroundColor: '#4b4cdf', 
        },
      }}
    >
      Publish
    </Button>
  );
};

export default ButtonPublish;
