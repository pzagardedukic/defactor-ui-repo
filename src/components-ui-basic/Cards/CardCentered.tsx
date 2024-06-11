import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

interface TemplateCardProps {
  title: string;
  description: string;
  imageUrl?: string;
  mainBenefits1: string;
  mainBenefits2: string;
  mainBenefits3: string;
}

const CardCentered: React.FC<TemplateCardProps> = ({ title, description, imageUrl, mainBenefits1, mainBenefits2, mainBenefits3 }) => {
  return (
    <Card sx={{
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

        <Box sx={{ background: '#D1D5DB', padding: 2, borderRadius: 2, marginTop: 2 }}>
          <Typography variant="h6" component="h6" sx={{ marginBottom: 1, fontSize: 14, fontWeight: 600 }}>MAIN BENEFITS</Typography>
          <List sx={{ padding: 0 }}>
            <ListItem sx={{ padding: 0 }}>
              <ListItemText primary={mainBenefits1} primaryTypographyProps={{ fontSize: 12, color: '#111827' }} />
            </ListItem>
            <ListItem sx={{ padding: 0 }}>
              <ListItemText primary={mainBenefits2} primaryTypographyProps={{ fontSize: 12, color: '#111827' }} />
            </ListItem>
            <ListItem sx={{ padding: 0 }}>
              <ListItemText primary={mainBenefits3} primaryTypographyProps={{ fontSize: 12, color: '#111827' }} />
            </ListItem>
          </List>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CardCentered;
