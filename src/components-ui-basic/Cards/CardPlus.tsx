import { Card, CardContent, CardMedia, Typography, Grid } from '@mui/material';

interface TemplateCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const CardPlus: React.FC<TemplateCardProps> = ({ title, description, imageUrl }) => {
  return (
    <Card sx={{ maxWidth: 345, boxShadow: 'none', borderRadius: '16px', backgroundColor: 'rgba(90, 91, 235, 0.1)' }} elevation={0}>
      <CardContent>
        <Grid container spacing={2} alignItems="center">
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
          <Grid item xs={12} sx={{ marginTop: '36px' }}>
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
        </Grid>
      </CardContent>
    </Card>
  );
};

export default CardPlus;
