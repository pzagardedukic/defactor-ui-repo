import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';

interface TemplateCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const TemplateCard: React.FC<TemplateCardProps> = ({ title, description, imageUrl }) => {
  return (
    <Card sx={{
      backgroundColor: '#fff',
      borderRadius: 2,
      padding: '20px',
      maxWidth: { xs: '100%' }
    }}>

      <CardMedia
        component="img"
        height="40px"
        width="40px"
        image={imageUrl}
        alt="Icon Plus"
        sx={{ width: 'auto' }}

      />
   <CardContent
  sx={{ padding: '0', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}
  className="MuiCardContent-root"
>



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
