import { Card, CardContent, CardMedia, Typography, CardActions, Box, Paper, Button } from '@mui/material';

interface NewCardProps {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
}

const TemplateModal: React.FC<NewCardProps> = ({ title, description, imageUrl, imageAlt }) => {
  return (
    <Paper style={{ padding: 30, boxShadow: 'none', border: 'none', maxWidth: '520px', margin: '0 auto'}}>
      <Card style={{ boxShadow: 'none', border: 'none' }}>
        <Box display="flex" justifyContent="center">
          <CardMedia
            component="img"
            style={{ width: 80, height: 64, objectFit: 'contain' }}
            image={imageUrl}
            alt={imageAlt}
          />
        </Box>
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            align="center"
            style={{
              fontFamily: 'DM Sans',
              fontSize: '24px',
              fontWeight: 600,
              lineHeight: '28.8px',
              textAlign: 'center',
              maxWidth: '300px',
              margin: '0 auto',
              paddingBottom: '16px',
              paddingTop: '16px'
            }}
          >
            {title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            align="center"
            style={{
              fontFamily: 'DM Sans',
              fontSize: '14px',
              fontWeight: 400,
              lineHeight: '16.8px',
              textAlign: 'center',
              color: '#6B7280',
              maxWidth: '300px',
              margin: '0 auto'
            }}
          >
            {description}
          </Typography>
        </CardContent>
        <CardActions style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingBottom: '0px' }}>
        <Button
            variant="contained"
            color="primary"
            type="submit"
            sx={{
              padding: '14px 24px',
              borderRadius: '100px',
              backgroundColor: '#5F66FF',
              color: 'white',
              borderColor: 'transparent',
              textTransform: 'capitalize',
              fontFamily: 'DM Sans',
              fontSize: '14px',
              fontWeight: 700,
              lineHeight: '22.4px',
              textAlign: 'center',
              '&:hover': {
                backgroundColor: '#4e54cc',
              },
            }}
          >
            Go to Dashboard
          </Button>
          <Button
            sx={{
              fontFamily: 'DM Sans',
              fontSize: '14px',
              fontWeight: 500,
              color: '#848B97',
              lineHeight: '22.4px',
              textAlign: 'center',
              textTransform: 'capitalize',
              padding: '12px 24px 0px 24px',
              '&:hover': {
                backgroundColor: 'transparent',
                color: '#848B97'
              }
            }}
          >
            Cancel verifying
          </Button>
        </CardActions>
      </Card>
    </Paper>
  );
}

export default TemplateModal;
