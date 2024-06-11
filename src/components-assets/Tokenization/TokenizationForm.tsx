import { useState, ChangeEvent } from 'react';
import { TextField, Button, Tooltip, Typography, Box, Grid, Paper, IconButton, useMediaQuery } from '@mui/material';
import ButtonPublish from '../../components-ui-basic/Buttons/ButtonPublish';
import FormDropzoneBoxOneFile from '../../components-ui-basic/Form/FormDropzoneBoxOneFile';
import TokenizationCard from './TokenizationCard';

const iconAdd = `${process.env.PUBLIC_URL}/icons/icon-add.svg`;
const iconTooltip = `${process.env.PUBLIC_URL}/icons/icon-tooltip.svg`;

const TokenizationForm: React.FC = () => {
  const [links, setLinks] = useState<string[]>(['']);
  const [files, setFiles] = useState<File[]>([]);
  const isMobile = useMediaQuery('(max-width:600px)');

  const handleLinkChange = (index: number, event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const newLinks = [...links];
    newLinks[index] = event.target.value;
    setLinks(newLinks);
  };

  const addLinkField = () => {
    setLinks([...links, '']);
  };

  const createSPF = () => {
    // Add functionality for creating SPF here
    console.log('Create SPF clicked');
  };

  return (
    <Paper style={{ backgroundColor: 'transparent', padding: '32px' }}>
      <form>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography
              variant="h6"
              sx={{
                fontFamily: 'DM Sans',
                fontSize: '12px',
                fontWeight: 400,
                lineHeight: '3em',
                letterSpacing: '0.01em',
                textAlign: 'left',
                color: '#444E5F'
              }}
            >
              Token Icon
            </Typography>
            <FormDropzoneBoxOneFile files={files} setFiles={setFiles} />
          </Grid>

          <Grid item xs={12}>
            <Typography
              variant="h6"
              sx={{
                fontFamily: 'DM Sans',
                fontSize: '12px',
                fontWeight: 400,
                lineHeight: '3em',
                letterSpacing: '0.01em',
                textAlign: 'left',
                color: '#444E5F'
              }}
            >
              Link
              <Tooltip title="Info about this field">
                <IconButton size="small" sx={{ paddingBottom: '7px' }}>
                  <Box component="img" src={iconTooltip} alt="Tooltip icon" sx={{ width: 'auto', height: 'auto' }} />
                </IconButton>
              </Tooltip>
            </Typography>
            <Grid container spacing={2} alignItems="flex-start">
              <Grid item xs={12} sm={6}>
                {links.map((link, index) => (
                  <Box key={index} display="flex" alignItems="center" width="100%">
                    <TextField
                      fullWidth
                      value={link}
                      onChange={(event) => handleLinkChange(index, event)}
                      margin="normal"
                      sx={{ mt: 0 }}
                    />
                  </Box>
                ))}
              </Grid>
              <Grid item xs={12} sm={6} display="flex" alignItems="flex-start" justifyContent="flex-start">
                <Button
                  variant="text"
                  startIcon={
                    <Box component="img" src={iconAdd} alt="Add icon" sx={{ width: 'auto', height: 'auto' }} />
                  }
                  onClick={addLinkField}
                  sx={{
                    color: '#5F66FF',
                    fontFamily: 'DM Sans',
                    fontSize: '14px',
                    fontWeight: 400,
                    lineHeight: '22.4px',
                    textAlign: 'center',
                    border: 'none',
                    textTransform: 'capitalize',
                    padding: 0,
                    margin: '16px'                    
                  }}
                >
                  Add Link
                </Button>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <Typography
              variant="h6"
              sx={{
                fontFamily: 'DM Sans',
                fontSize: '12px',
                fontWeight: 400,
                lineHeight: '3em',
                letterSpacing: '0.01em',
                textAlign: 'left',
                color: '#444E5F',
                marginBottom: '10px'
              }}
            >
              Chain
              <Tooltip title="Info about this field">
                <IconButton size="small" sx={{ paddingBottom: '7px' }}>
                  <Box component="img" src={iconTooltip} alt="Tooltip icon" sx={{ width: 'auto', height: 'auto' }} />
                </IconButton>
              </Tooltip>
            </Typography>
            <TokenizationCard />
          </Grid>

          <Grid item xs={12} container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Typography
                variant="h6"
                sx={{
                  fontFamily: 'DM Sans',
                  fontSize: '12px',
                  fontWeight: 400,
                  lineHeight: '3em',
                  letterSpacing: '0.01em',
                  textAlign: 'left',
                  color: '#444E5F'
                }}
              >
                Price
                <Tooltip title="Info about this field">
                  <IconButton size="small" sx={{ paddingBottom: '7px' }}>
                    <Box component="img" src={iconTooltip} alt="Tooltip icon" sx={{ width: 'auto', height: 'auto' }} />
                  </IconButton>
                </Tooltip>
              </Typography>
              <TextField fullWidth type="number" margin="normal" sx={{ mt: 0 }} />
            </Grid>

            <Grid item xs={12} sm={6}>
              <Typography
                variant="h6"
                sx={{
                  fontFamily: 'DM Sans',
                  fontSize: '12px',
                  fontWeight: 400,
                  lineHeight: '3em',
                  letterSpacing: '0.01em',
                  textAlign: 'left',
                  color: '#444E5F'
                }}
              >
                Token Numbers
                <Tooltip title="Info about this field">
                  <IconButton size="small" sx={{ paddingBottom: '7px' }}>
                    <Box component="img" src={iconTooltip} alt="Tooltip icon" sx={{ width: 'auto', height: 'auto' }} />
                  </IconButton>
                </Tooltip>
              </Typography>
              <TextField fullWidth type="number" margin="normal" sx={{ mt: 0 }} />
            </Grid>
          </Grid>

          <Grid item xs={12} spacing={0}>
            <Grid container alignItems="center" spacing={0}>
              <Grid item>
                <Button
                  variant="text"
                  startIcon={
                    <Box component="img" src={iconAdd} alt="Create icon" sx={{ width: 'auto', height: 'auto' }} />
                  }
                  onClick={createSPF}
                  sx={{
                    color: '#5F66FF',
                    fontFamily: 'DM Sans',
                    fontSize: '14px',
                    fontWeight: 400,
                    lineHeight: '22.4px',
                    textAlign: 'center',
                    border: 'none',
                    textTransform: 'capitalize',
                    padding: '0px'
                  }}
                >
                  Create SPF
                </Button>
              </Grid>
              <Grid item>
                <Tooltip title="Info about this field">
                  <IconButton size="small" sx={{ paddingBottom: '7px' }}>
                    <Box component="img" src={iconTooltip} alt="Tooltip icon" sx={{ width: 'auto', height: 'auto' }} />
                  </IconButton>
                </Tooltip>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <Typography
              variant="h6"
              sx={{
                fontFamily: 'DM Sans',
                fontSize: '12px',
                fontWeight: 400,
                lineHeight: '3em',
                letterSpacing: '0.01em',
                textAlign: 'left',
                color: '#444E5F'
              }}
            >
              Description
            </Typography>
            <TextField fullWidth multiline rows={4} margin="normal" sx={{ mt: 0 }} />
          </Grid>



          <Grid item xs={12}>
            <ButtonPublish />
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
};

export default TokenizationForm;
