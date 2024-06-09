import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';

interface TemplateCardProps {
  title: string;
  description: string;
}

const TemplateCard: React.FC<TemplateCardProps> = ({ title, description }) => {
  return (
    <Card sx={{ 
      backgroundColor: '#fff', 
      borderRadius: 2, 
      border: 1, 
      borderColor: '#f6f8fb', 
      padding: 2, 
      width: '100%', 
      maxWidth: { xs: '100%'} 
    }}>
      <CardHeader
        avatar={<Avatar src="#" sx={{ width: 40, height: 40 }} />}
      />
      <CardContent>
        <Typography variant="h6" component="h2" sx={{ 
          fontSize: 16, 
          fontWeight: 600, 
          lineHeight: '25.6px', 
          textAlign: 'left', 
          color: '#111827' 
        }}>
          {title}
        </Typography>
        <Typography variant="body2" sx={{ 
          fontSize: 12, 
          fontWeight: 400, 
          lineHeight: '15.62px', 
          textAlign: 'left', 
          color: '#6B7280', 
          marginTop: 2 
        }}>
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default TemplateCard;
