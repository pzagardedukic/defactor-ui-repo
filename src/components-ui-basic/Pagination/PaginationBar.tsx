import { Box } from '@mui/material';

interface PaginationBarProps {
  children: React.ReactNode;
}

const PaginationBar: React.FC<PaginationBarProps> = ({ children }) => {
  return (
    <Box
      sx={{

        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        backgroundColor: 'white',
        borderRadius: '20px',
        p: 2,
        boxShadow: 'none',
        flexDirection: 'row',
        '@media (max-width: 600px)': {
          flexDirection: 'column',
          justifyContent: 'center',
          '& > *': {
            mb: 2,
          },
        },
      }}
    >
      {children}
    </Box>
  );
};

export default PaginationBar;
