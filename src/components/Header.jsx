import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Alert from '@mui/material/Alert';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import { useState } from 'react';

export default function SimplePaper() {
    const [isVisible, setIsVisible] = useState(true);

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
        { isVisible && <Alert id='AlertNotice' severity="info" sx={{width: '50%', position: 'absolute', left: '25%', top: '2.5%'}} onClose={() => setIsVisible(false)}>This website is still under development, please be aware that some things may be place holders or incomplete.</Alert>}
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