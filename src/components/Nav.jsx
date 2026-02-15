import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import DarkModeIcon from '@mui/icons-material/DarkMode';

export default function ButtonAppBar() {
  const toggleDarkMode = () => {
    const htmlElement = document.getElementsByTagName("html")[0];
    if (htmlElement.className === "dark") {
      htmlElement.className = "";
      localStorage.setItem("darkMode", false)
    } else {
      htmlElement.className = "dark";
      localStorage.setItem("darkMode", true)
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            coneast.dev
          </Typography>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDarkMode}
          >
            <DarkModeIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}