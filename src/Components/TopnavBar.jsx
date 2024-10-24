import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SelectLabels from './Dropdown/Dropdown';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function SearchAppBar() {
  return (
    <Box sx={{ flexGrow: 1,backgroundColor:"white" }}>
      <AppBar position="static" sx={{backgroundColor:"white",boxShadow:"none",borderBottom:"2px solid gainsboro",height:"50px",display:"flex",justifyContent:"center"}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <div style={{borderRadius:"100%",backgroundColor:"gainsboro",height:"24px",width:"24px",display:"flex",justifyContent:"center",alignItems:"center"}}>
            <ArrowBackIosNewIcon  sx={{color:"black",height:"15px"}}/>
            </div>
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            fontSize={"16px"}
            font-family = "Nunito Sans" sans-serif

 
            fontWeight={600}
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' },color:"black" }}
          >
            Create Quotation To Existing Lead
          </Typography>
          <SelectLabels/>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
