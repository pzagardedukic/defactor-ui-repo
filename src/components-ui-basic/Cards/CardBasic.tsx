import { Box, Typography, Button } from '@mui/material';

const iconCopyUrl = `${process.env.PUBLIC_URL}/icons/icon-copy.svg`;

interface TemplateCardProps {
  title: string;
  description: string;
  imageUrl?: string;
}

const CardBasic: React.FC<TemplateCardProps> = ({ title, description, imageUrl }) => {
  return (
    <Box
      sx={{
        boxShadow: 'none',
        borderRadius: '16px',
        background: '#ffffff',
        border: 'none',
        '&:hover .hover-it': {
          display: 'block'
        }
      }}
    >
      <Box sx={{ padding: '16px', cursor: 'pointer' }}>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          minHeight={170}
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mb={2}
          >
            {imageUrl && (
              <Box
                component="img"
                height="40"
                width="40"
                src={imageUrl}
                alt={title}
                sx={{ width: 'auto' }}
              />
            )}
            <Box
              className='hover-it'
              component="img"
              height="32"
              width="32"
              src={iconCopyUrl}
              alt={title}
              sx={{ width: 'auto', display: 'none' }}
            />
          </Box>
          <Box>
            <Typography
              variant="h5"
              component="div"
              sx={{
                fontFamily: 'DM Sans',
                fontSize: '16px',
                fontWeight: 500,
                lineHeight: '36px',
                textAlign: 'left',
                color: '#111827',
              }}
            >
              {title}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontFamily: 'DM Sans',
                fontSize: '12px',
                fontWeight: 400,
                lineHeight: '15.62px',
                textAlign: 'left',
                color: '#6B7280',
              }}
            >
              {description}
            </Typography>
          </Box>
          <Box
            className="hover-it"
            sx={{
              display: 'none',
              width: '100%',
              mt: 2
            }}
          >
            <Button
              variant="contained"
              color="primary"
              sx={{
                width: '100%',
                borderRadius: '100px',
                backgroundColor: "#5A5BEB",
                textTransform: 'capitalize',
                fontSize: '12px'
              }}
            >
              Preview Template
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CardBasic;
