import Button from '@mui/material/Button';

interface BtnBaseProps {
  children: React.ReactNode;
}

const BtnBase: React.FC<BtnBaseProps> = ({ children }) => {
  return (
    <Button
      variant="text"
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
        color: 'gray',
        textTransform: 'none',
        '&:hover': {
          opacity: 0.8,
          background: 'transparent',
        },
      }}
    >
      {children}
    </Button>
  );
};

export default BtnBase;
