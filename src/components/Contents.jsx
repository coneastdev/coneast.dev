import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import Link from '@mui/material/Link'
import CodeIcon from '@mui/icons-material/Code';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import BookIcon from '@mui/icons-material/Book';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';

import ListIcon from '@mui/icons-material/List';

export default function InsetList() {
  return (
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      aria-label="contacts"
    >
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <ListIcon />
          </ListItemIcon>
          <Link href="#">
            <ListItemText primary="Header" />
          </Link>
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <CodeIcon />
          </ListItemIcon>
          <Link href="#">
            <ListItemText primary="projects" />
          </Link>
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <AccountBoxIcon />
          </ListItemIcon>
          <Link href="#">
            <ListItemText primary="about" />
          </Link>
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <BookIcon />
          </ListItemIcon>
          <Link href="#">
            <ListItemText primary="blogs" />
          </Link>
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <SchoolIcon />
          </ListItemIcon>
          <Link href="#">
            <ListItemText primary="education" />
          </Link>
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <WorkIcon />
          </ListItemIcon>
          <Link href="#">
            <ListItemText primary="experience" />
          </Link>
        </ListItemButton>
      </ListItem>
    </List>
  );
}