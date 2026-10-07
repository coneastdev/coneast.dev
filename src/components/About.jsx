import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Alert from '@mui/material/Alert';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import { useState } from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Masonry from '@mui/lab/Masonry';
import { styled } from '@mui/material/styles';

import Bananas from '../assets/images/aboutme-bg/bananas.jpg';
import Ducks from '../assets/images/aboutme-bg/ducks.jpg';
import Edinburgh from '../assets/images/aboutme-bg/Edinburgh.jpg';
import Edinburgh2 from '../assets/images/aboutme-bg/Edinburgh-2.jpg';
import Edinburgh3 from '../assets/images/aboutme-bg/Edinburgh-3.jpg';
import Edinburgh4 from '../assets/images/aboutme-bg/Edinburgh-4.jpg';
import Edinburgh5 from '../assets/images/aboutme-bg/Edinburgh-5.jpg';
import Edinburgh6 from '../assets/images/aboutme-bg/Edinburgh-6.jpg';
import Halt from '../assets/images/aboutme-bg/halt.jpg';
import Harry from '../assets/images/aboutme-bg/harry.jpg'; 
import Iris from '../assets/images/aboutme-bg/iris.jpg';
import Iris2 from '../assets/images/aboutme-bg/iris-2.jpg';
import Josh from '../assets/images/aboutme-bg/josh.jpg';
import Kermit from '../assets/images/aboutme-bg/kermit.jpg';
import Loki from '../assets/images/aboutme-bg/loki.jpg';
import MbroSnow from '../assets/images/aboutme-bg/mbro-snow.jpg';
import NorthYorkHill from '../assets/images/aboutme-bg/north-york-hill.jpg';
import NorthYorkHill2 from '../assets/images/aboutme-bg/north-york-hill-2.jpg';
import PcBuild from '../assets/images/aboutme-bg/pc-build.jpg';
import Presentation from '../assets/images/aboutme-bg/presentation.jpeg';
import Josh2 from '../assets/images/josh.jpg';
import Robot from '../assets/images/aboutme-bg/robot.png';
import Unreal from '../assets/images/aboutme-bg/unreal.png';
import WhitbyViaDuct from '../assets/images/aboutme-bg/whitby-viaduct.jpg';
import WhitleyBayLightHouse from '../assets/images/aboutme-bg/whitly-bay-light-house.jpg';

const Label = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: 'center',
  color: (theme.vars || theme).palette.text.secondary,
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

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
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%', position: 'absolute' }}>
            <Paper elevation={13} sx={{
                width: '50%',
                height: '25%',
                margin: '0 auto',
                backgroundColor: 'rgba(15, 15, 15, 0.9)',
                color: '#fffefe',
            }}
            >
                <Typography variant="h4" gutterBottom sx={{margin: '1vw', textAlign: 'center'}}>
                    Hi, I'm Connor.<br /> A T-Level student interested in Engineering, cat's, art and photography. I'm not looking for work right now but feel free to message me via linked in or email.
                </Typography>
            </Paper>
        </Box>
        <Box sx={{ width: '100%', height: '100%', display: 'flex' }}>
            <Masonry columns={9} spacing={1}>
                {pictures.map((item, index) => (
                <div key={index}>
                    <Label sx={{backgroundColor: '#333', color: '#aaa'}}>{item.title}</Label>
                    <img
                    src={item.img.src}
                    alt={item.title}
                    loading="lazy"
                    style={{
                        borderBottomLeftRadius: 4,
                        borderBottomRightRadius: 4,
                        display: 'block',
                        width: '100%',
                    }}
                    />
                </div>
                ))}
            </Masonry>
        </Box>
    </Container>
    );
}

const pictures = [
  {
    img: Bananas,
    title: 'bananas',
  },
  {
    img: Ducks,
    title: 'ducks',
  },
  {
    img: Edinburgh,
    title: 'edinburgh',
  },
  {
    img: Edinburgh2,
    title: 'edinburgh',
  },
  {
    img: Edinburgh3,
    title: 'edinburgh',
  },
  {
    img: Edinburgh4,
    title: 'edinburgh',
  },
  {
    img: Edinburgh5,
    title: 'edinburgh',
  },
  {
    img: Edinburgh6,
    title: 'edinburgh',
  },
  {
    img: Halt,
    title: 'halt',
  },
  {
    img: Harry,
    title: 'harry',
  },
  {
    img: Iris,
    title: 'iris',
  },
  {
    img: Iris2,
    title: 'iris',
  },
  {
    img: Josh,
    title: 'josh',
  },
  {
    img: Kermit,
    title: 'kermit',
  },
  {
    img: Loki,
    title: 'loki',
  },
  {
    img: MbroSnow,
    title: 'mbro snow',
  },
  {
    img: NorthYorkHill,
    title: 'north york hill',
  },
  {
    img: NorthYorkHill2,
    title: 'north york hill',
  },
  {
    img: PcBuild,
    title: 'pc build',
  },
  {
    img: Presentation,
    title: 'presentation',
  },
  {
    img: Josh2,
    title: 'josh',
  },
  {
    img: Robot,
    title: 'robot',
  },
  {
    img: Unreal,
    title: 'unreal',
  },
  {
    img: WhitbyViaDuct,
    title: 'whitby',
  },
  {
    img: WhitleyBayLightHouse,
    title: 'Whitley bay',
  }
];