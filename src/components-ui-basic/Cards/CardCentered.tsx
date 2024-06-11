import React from 'react';
import { Box, Typography, Card, CardContent, CardHeader, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

interface TemplateCardProps {
  title: string;
  description: string;
  imageUrl?: string;
  mainBenefits: string[];
}

const CardCentered: React.FC<TemplateCardProps> = ({ title, description, imageUrl, mainBenefits }) => {
  return (
    <Card sx={{
      borderRadius: 2,
      border: 1,
      borderColor: '#f6f8fb',
      padding: 2,
      width: '100%',
      maxWidth: { xs: '415px' },
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <CardHeader
        title={<img src={imageUrl} alt="Avatar" style={{ width: 48, height: 48, borderRadius: '50%' }} />}
        sx={{ alignSelf: 'center', textAlign: 'center', fontFamily: 'DM Sans, sans-serif', paddingBottom: '0px' }}
      />
      <CardContent sx={{ textAlign: 'center', fontFamily: 'DM Sans, sans-serif', maxWidth: '391px' }}>
        <Typography variant="h6" component="h2" sx={{
          fontSize: 16,
          fontWeight: 600,
          lineHeight: '25.6px',
          color: '#111827',
          fontFamily: 'DM Sans, sans-serif'
        }}>
          {title}
        </Typography>
        <Typography variant="body2" sx={{
          fontSize: 14,
          fontWeight: 400,
          lineHeight: '16.8px',
          color: '#6B7280',
          marginTop: 2,
          fontFamily: 'DM Sans, sans-serif',
          maxWidth: '300px',
          margin: '0 auto',
          paddingTop: '10px',
          paddingBottom: '10px'
        }}>
          {description}
        </Typography>
        <Box sx={{ background: '#f4f5f6', mt: 2, padding: 2, borderRadius: 2, fontFamily: 'DM Sans, sans-serif'}}>
          <Typography
            variant="h6"
            component="h6"
            sx={{ marginBottom: 1, fontSize: 12, fontWeight: 700, textTransform: 'uppercase', color: '#000000', textAlign: 'left', fontFamily: 'DM Sans, sans-serif' }}
          >
            Main Benefits
          </Typography>
          <List sx={{ padding: 0, fontFamily: 'DM Sans, sans-serif' }}>
            {mainBenefits.map((benefit, index) => (
              <ListItem key={index} sx={{ padding: 0 }}>
                <ListItemIcon sx={{ minWidth: 'auto', marginRight: 1 }}>
                  <FiberManualRecordIcon sx={{ fontSize: 5, color: '#6B7280' }} />
                </ListItemIcon>
                <ListItemText
                  primary={benefit}
                  primaryTypographyProps={{ fontSize: 14, fontWeight: '400', color: '#6B7280', fontFamily: 'DM Sans, sans-serif' }}
                />
              </ListItem>
            ))}
          </List>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CardCentered;
