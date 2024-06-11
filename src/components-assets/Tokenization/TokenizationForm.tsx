import { useState, ChangeEvent } from 'react';
import { TextField, Button, Tooltip, Typography, Box, Grid, Paper, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import InfoIcon from '@mui/icons-material/Info';
import ButtonPublish from '../../components-ui-basic/Buttons/ButtonPublish';
import FormDropzoneBoxOneFile from '../../components-ui-basic/Form/FormDropzoneBoxOneFile';
import TokenizationCard from './TokenizationCard';

const TokenizationForm: React.FC = () => {
  const [links, setLinks] = useState<string[]>(['']);
  const [files, setFiles] = useState<File[]>([]);

  const handleLinkChange = (index: number, event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const newLinks = [...links];
    newLinks[index] = event.target.value;
    setLinks(newLinks);
  };

  const addLinkField = () => {
    setLinks([...links, '']);
  };

  return (
    <Paper sx={{ padding: 4 }}>
      <form>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography
              variant="h6"
              sx={{
                fontFamily: 'DM Sans',
                fontSize: '12px',
                fontWeight: 400,
                lineHeight: '1.8em',
                letterSpacing: '0.01em',
                textAlign: 'left',
                color: '#444E5F'
              }}
            >Taken Icon</Typography>
            <FormDropzoneBoxOneFile files={files} setFiles={setFiles} />
          </Grid>

          <Grid item xs={12}>
            <Typography
              variant="h6"
              sx={{
                fontFamily: 'DM Sans',
                fontSize: '12px',
                fontWeight: 400,
                lineHeight: '1.8em',
                letterSpacing: '0.01em',
                textAlign: 'left',
                color: '#444E5F'
              }}
            >
              Link
              <Tooltip title="Info about this field">
                <IconButton size="small" sx={{ paddingBottom: '7px' }}>
                  <InfoIcon fontSize="inherit" />
                </IconButton></Tooltip>
            </Typography>
            {links.map((link, index) => (
              <Box key={index} display="flex" alignItems="center">
                <TextField
                  fullWidth
                  value={link}
                  onChange={(event) => handleLinkChange(index, event)}
                  margin="normal"
                />
              </Box>
            ))}
            <Button
              variant="outlined"
              startIcon={<AddIcon />}
              onClick={addLinkField}
            >
              Add Link
            </Button>
          </Grid>

          <Grid item xs={12}>
            <Typography
              variant="h6"
              sx={{
                fontFamily: 'DM Sans',
                fontSize: '12px',
                fontWeight: 400,
                lineHeight: '1.8em',
                letterSpacing: '0.01em',
                textAlign: 'left',
                color: '#444E5F'
              }}
            >
              Chain
              <Tooltip title="Info about this field">
                <IconButton size="small" sx={{ paddingBottom: '7px' }}>
                  <InfoIcon fontSize="inherit" />
                </IconButton></Tooltip>
            </Typography>
            <TokenizationCard />
          </Grid>

          <Grid item xs={12}>
            <Typography
              variant="h6"
              sx={{
                fontFamily: 'DM Sans',
                fontSize: '12px',
                fontWeight: 400,
                lineHeight: '1.8em',
                letterSpacing: '0.01em',
                textAlign: 'left',
                color: '#444E5F'
              }}
            >Price</Typography>
            <TextField fullWidth type="number" margin="normal" />
          </Grid>

          <Grid item xs={12}>
            <Typography
              variant="h6"
              sx={{
                fontFamily: 'DM Sans',
                fontSize: '12px',
                fontWeight: 400,
                lineHeight: '1.8em',
                letterSpacing: '0.01em',
                textAlign: 'left',
                color: '#444E5F'
              }}
            >Token Numbers</Typography>
            <TextField fullWidth type="number" margin="normal" />
          </Grid>

          <Grid item xs={12}>
            <Typography
              variant="h6"
              sx={{
                fontFamily: 'DM Sans',
                fontSize: '12px',
                fontWeight: 400,
                lineHeight: '1.8em',
                letterSpacing: '0.01em',
                textAlign: 'left',
                color: '#444E5F'
              }}
            >Description</Typography>
            <TextField fullWidth multiline rows={4} margin="normal" />
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
