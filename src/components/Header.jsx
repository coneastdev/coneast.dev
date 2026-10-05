import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

export default function SimplePaper() {
  return (
    <Container maxWidth={false} 
    disableGutters 
    sx={{ 
        height: '100vh', 
        width: '100%',
        backgroundColor: '#222',
        textAlign: 'center',
    }}
    >
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '90%' }}>
            <Paper elevation={13} sx={{
                width: '40%',
                height: '60%',
                margin: '0 auto',
                backgroundColor: '#333',
            }}
            >
                <Avatar alt="Profile Picture" src='/src/assets/images/josh.jpg' />
            </Paper>
        </Box>
        <IconButton color="primary" aria-label="Scroll down arrow" size="large">
            <KeyboardDoubleArrowDownIcon fontSize="inherit" />
        </IconButton>
    </Container>
  );
}