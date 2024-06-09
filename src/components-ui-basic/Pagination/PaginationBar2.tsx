import { Box } from '@mui/material';

interface PaginationBar2Props {
  children: React.ReactNode;
}

const PaginationBar2: React.FC<PaginationBar2Props> = ({ children }) => {
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
        boxShadow: 1,
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

export default PaginationBar2;
