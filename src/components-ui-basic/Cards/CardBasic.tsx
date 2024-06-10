import { Card, CardContent, Typography, Grid, Button, CardMedia } from '@mui/material';

interface TemplateCardProps {
  title: string;
  description: string;
  imageUrl?: string; 
}

const CardBasic: React.FC<TemplateCardProps> = ({ title, description, imageUrl }) => {
  return (
    <Card
      sx={{
        maxWidth: 345,
        boxShadow: 'none',
        borderRadius: '16px',
        '&:hover .hover-grid': {
          display: 'block'
        }
      }}
      elevation={0}
    >
      <CardContent sx={{ ':last-child': { paddingBottom: '16px', cursor: 'pointer' } }}>
        <Grid
          container
          spacing={2}
          alignItems="flex-start"
          sx={{
            minHeight: 180
          }}
        >
          <Grid item xs={12}>
          <CardMedia
              component="img"
              height="40"
              width="40"
              image={imageUrl}
              alt={title}
              sx={{ width: 'auto' }}
            />
          </Grid>
          <Grid item xs={12}>
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
          </Grid>
          <Grid
            item xs={12}
            className="hover-grid"
            sx={{
              display: 'none',
              width: '100%'
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
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default CardBasic;
