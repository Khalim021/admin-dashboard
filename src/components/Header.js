import React from 'react';
import { Typography, Box, useTheme, } from '@mui/material';
import { tokens } from "../theme/theme";

const Header = ({ title, subtitle }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box>
      <Typography variant='h2' color={colors.grey[100]} fontWeight='bold' sx={{mb: '15px'}}>
        {title}
      </Typography>
      <Typography variant='h5' color={colors.greenAccent[400]}>
        {subtitle}
      </Typography>
    </Box>
  )
}

export default Header