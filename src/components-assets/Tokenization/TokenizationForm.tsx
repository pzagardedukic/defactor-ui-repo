import { useState, ChangeEvent } from 'react';
import { TextField, Button, Tooltip, Typography, Box, Grid, Paper } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import InfoIcon from '@mui/icons-material/Info';
import ButtonPublish from '../../components-ui-basic/Buttons/ButtonPublish';
import FormDropzoneBoxOneFile from '../../components-ui-basic/Form/FormDropzoneBoxOneFile';

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
            <Typography variant="caption">Taken Icon</Typography>
            <FormDropzoneBoxOneFile files={files} setFiles={setFiles} />
          </Grid>

          <Grid item xs={12}>
            <Typography variant="h6">
              Link{' '}
              <Tooltip title="You can add multiple links">
                <InfoIcon fontSize="small" />
              </Tooltip>
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
            <Typography variant="h6">Price</Typography>
            <TextField fullWidth type="number" margin="normal" />
          </Grid>

          <Grid item xs={12}>
            <Typography variant="h6">Token Numbers</Typography>
            <TextField fullWidth type="number" margin="normal" />
          </Grid>

          <Grid item xs={12}>
            <Typography variant="h6">Description</Typography>
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
