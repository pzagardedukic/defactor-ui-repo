import { Card, CardContent, CardMedia, Typography, CardActions, Box, Paper } from '@mui/material';
import BtnContained from '../../components-ui-basic/BTNs/BtnContained';
import BtnBase from '../../components-ui-basic/BTNs/BtnBase';

interface NewCardProps {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
}

const TemplateModal: React.FC<NewCardProps> = ({ title, description, imageUrl, imageAlt }) => {
  return (
    <Paper style={{ padding: 16, boxShadow: 'none', border: 'none' }}>
      <Card style={{ boxShadow: 'none', border: 'none' }}>
        <Box display="flex" justifyContent="center">
          <CardMedia
            component="img"
            style={{ width: 40, height: 40 }}
            image={imageUrl}
            alt={imageAlt}
          />
        </Box>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" align="center">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary" align="center">
            {description}
          </Typography>
        </CardContent>
        <CardActions style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <BtnContained>NEKI 333</BtnContained>
          <BtnBase>basic neki</BtnBase>
        </CardActions>
      </Card>
    </Paper>
  );
}

export default TemplateModal;
