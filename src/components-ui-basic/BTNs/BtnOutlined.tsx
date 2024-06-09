import Button from '@mui/material/Button';

interface BtnOutlinedProps {
  children: React.ReactNode;
}

const BtnOutlined: React.FC<BtnOutlinedProps> = ({ children }) => {
  return (
    <Button
      variant="text"
      sx={{
        gap: 1,
        border: '1px solid gray',
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
        },
      }}
    >
      {children}
    </Button>
  );
};

export default BtnOutlined;
