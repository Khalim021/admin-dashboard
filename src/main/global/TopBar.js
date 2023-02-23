import React, { useContext } from 'react';
import { Box, useTheme, IconButton } from "@mui/material";
import { ColorModeContext, tokens } from "../../theme/theme";
import InputBase from '@mui/material/InputBase';
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlinedIcon  from '@mui/icons-material/PersonOutlined';
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import NotificationOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';


const TopBar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext)


  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      <Box 
      display="flex" 
      backgroundColor={colors.primary[400]}
      borderRadius="3px">
        <InputBase sx={{ml: 2, flex: 1}} placeholder="Search" />
        <IconButton type="button" sx={{p: 1}}>
          <SearchIcon />
        </IconButton>
      </Box>
      <Box display="flex">
        <IconButton onClick={colorMode.toggleThemeMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ): (
            <LightModeOutlinedIcon />
          )}
        </IconButton>
        <IconButton>
          <NotificationOutlinedIcon />
        </IconButton>
        <IconButton>
          <SettingsOutlinedIcon />
        </IconButton>
        <IconButton>
          <PersonOutlinedIcon />
        </IconButton>
      </Box>
    </Box>
  )
}

export default TopBar