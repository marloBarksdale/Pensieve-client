import { Camera, CameraAlt, Clear } from '@mui/icons-material';
import {
  Box,
  Button,
  CardMedia,
  Container,
  Grid,
  IconButton,
  Input,
} from '@mui/material';
import React, { useState } from 'react';

const ImageUpload = ({ imageUrl }) => {
  const [file, setFile] = useState(imageUrl || null);

  return (
    <Grid
      width={'100%'}
      display='flex'
      item
      justifyContent={'center'}
      flexDirection='column'
    >
      <Button variant='contained' component='label'>
        <CameraAlt /> Select Image
        <input type='file' hidden />
      </Button>
      <Box
        component={Container}
        position={'relative'}
        disableGutters
        sx={{ width: { xs: '100%', md: '60%' } }}
      >
        <CardMedia
          component='img'
          sx={{ maxHeight: '300px' }}
          src={file && file}
          image={file}
        />
        {file && (
          <IconButton
            sx={{ margin: '1rem', position: 'absolute', top: 0, right: 0 }}
          >
            {' '}
            <Clear color='error' />
          </IconButton>
        )}
      </Box>
    </Grid>
  );
};

export default ImageUpload;
