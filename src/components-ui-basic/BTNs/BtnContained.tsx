import Button from '@mui/material/Button';

interface BtnContainedProps {
  children: React.ReactNode;
}

const BtnContained: React.FC<BtnContainedProps> = ({ children }) => {
  return (
    <Button
      variant="contained"
      sx={{
        gap: 1,
        border: 'none',
        display: 'flex',
        cursor: 'pointer',
        fontSize: 16,
        lineHeight: '100%',
        fontStyle: 'normal',
        padding: '14px 24px',
        alignItems: 'center',
        borderRadius: '50px',
        letterSpacing: '0.2px',
        justifyContent: 'center',
        transitionDuration: '1s',
        backgroundColor: '#5F66FF',
        color: '#fff',
        textTransform: 'none',  
        '&:hover': {
          opacity: 0.8,
          backgroundColor: '#5F66FF',
        },
      }}
    >
      {children}
    </Button>
  );
};

export default BtnContained;
