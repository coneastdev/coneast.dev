import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';

import ListIcon from '@mui/icons-material/List';
import CodeIcon from '@mui/icons-material/Code';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import BookIcon from '@mui/icons-material/Book';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';

import GitHubIcon from '@mui/icons-material/GitHub';
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
      <AppBar position="static" sx={{ bgcolor: "#4E9258" }}>
        <Toolbar>
          <div className="flex-1 text-2xl">
            <b>coneast.dev</b>
          </div>
          <div className="flex-1 text-center">
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              href="#"
              disabled
            >
              <ListIcon />
            </IconButton>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              href="#"
            >
              <CodeIcon />
            </IconButton>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              href="#"
            >
              <AccountBoxIcon />
            </IconButton>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              href="#"
            >
              <BookIcon />
            </IconButton>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              href="#"
            >
              <SchoolIcon />
            </IconButton>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              href="#"
            >
              <WorkIcon />
            </IconButton>
          </div>
          <div className="flex-1 text-right">
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              href="https://github.com/coneastdev/coneast.dev"
              target="_blank"
            >
              <GitHubIcon />
            </IconButton>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDarkMode}
            >
              <DarkModeIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}