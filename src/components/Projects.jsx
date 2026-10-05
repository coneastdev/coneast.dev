import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';

export default function SimplePaper() {
  return (
    <Container maxWidth="sm">
        <Box
        sx={{
            display: 'flex',
            flexWrap: 'wrap',
            '& > :not(style)': {
            m: 1,
            width: 128,
            height: 128,
            },
        }}
        >
        <Paper elevation={1} />
        </Box>
    </Container>
  );
}