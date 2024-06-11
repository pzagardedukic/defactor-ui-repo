import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';

interface TemplateCardProps {
    title: string;
    description: string;
    imageUrl?: string; 
  }

const CardCentered: React.FC<TemplateCardProps> = ({ title, description, imageUrl }) => {
  return (
    <Card sx={{ 
      backgroundColor: '#fff', 
      borderRadius: 2, 
      border: 1, 
      borderColor: '#f6f8fb', 
      padding: 2, 
      width: '100%', 
      maxWidth: { xs: '100%' },
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <CardHeader
        title={<img src={imageUrl} alt="Avatar" style={{ width: 48, height: 48, borderRadius: '50%' }} />}
        sx={{ alignSelf: 'center', textAlign: 'center' }}
      />
      <CardContent sx={{ textAlign: 'center' }}>
        <Typography variant="h6" component="h2" sx={{ 
          fontSize: 16, 
          fontWeight: 600, 
          lineHeight: '25.6px', 
          color: '#111827' 
        }}>
          {title}
        </Typography>
        <Typography variant="body2" sx={{ 
          fontSize: 12, 
          fontWeight: 400, 
          lineHeight: '15.62px', 
          color: '#6B7280', 
          marginTop: 2 
        }}>
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardCentered;
