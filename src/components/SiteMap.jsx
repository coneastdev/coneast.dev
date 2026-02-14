import '../styles/global.css';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import Link from '@mui/material/Link';

import GitHubIcon from '@mui/icons-material/GitHub';
import BookIcon from '@mui/icons-material/Book';
import HandymanIcon from '@mui/icons-material/Handyman';
import LinkIcon from '@mui/icons-material/Link';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';

export default function InsetList() {
  return (
    <div>
      <p className="text-center"><b>Site Map</b></p>
      <List
        sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
        aria-label="contacts"
      >
        
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <GitHubIcon />
            </ListItemIcon>
            <Link href="https://github.coneast.dev">
              <ListItemText primary="github.coneast.dev" />
            </Link>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <BookIcon />
            </ListItemIcon>
            <Link href="https://blogs.coneast.dev">
              <ListItemText primary="blogs.coneast.dev" />
            </Link>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <HandymanIcon />
            </ListItemIcon>
            <Link href="https://tools.coneast.dev">
              <ListItemText primary="tools.coneast.dev" />
            </Link>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <LinkIcon />
            </ListItemIcon>
            <Link href="https://links.coneast.dev">
              <ListItemText primary="links.coneast.dev" />
            </Link>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <AdminPanelSettingsIcon />
            </ListItemIcon>
            <Link href="https://admin.coneast.dev">
              <ListItemText primary="admin.coneast.dev" />
            </Link>
          </ListItemButton>
        </ListItem>
      </List>
    </div>
  );
}