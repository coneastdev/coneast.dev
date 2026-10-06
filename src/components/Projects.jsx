import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Github from '@mui/icons-material/GitHub';
import List from '@mui/material/List';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { useState } from 'react';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent'

export default function SimplePaper() {
  const MaxProjects = 4;
  const [currentProjects, setCurrentProjects] = useState(MaxProjects);

  return (
    <Box id="project-container" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: 'auto', backgroundColor: '#111' }}>
      <Container sx={{width: '50%', margin: '0 auto'}}>
        <Timeline position="alternate" >
          {projects.slice(0, currentProjects).map(({ name, description, tags, links, date }, index) => (
            <TimelineItem>
              <TimelineOppositeContent
                sx={{
                  color: '#aaa',
                }}
              >
                Created: {date}
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Card sx={{ minWidth: 275, backgroundColor: '#333', color: '#fffefe', textAlign: 'left' }}>
                  <CardContent>
                    <Typography variant="h4" gutterBottom>
                      {name}
                    </Typography>
                    <Typography variant="h6" component="div">
                      {description}
                    </Typography>
                    <Typography variant="h6" component="div">
                      {tags.map((tag) => (
                        <Chip key={tag[0]} label={tag[0]} sx={{color: tag[1]}} />
                      ))}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    {links.map((ref) => (
                      <Link size="small" href={ref[1]} target="_blank" rel="noopener noreferrer"><Button >{ref[0]}</Button></Link>
                    ))}
                  </CardActions>
                </Card>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
        <Container sx={{width: '45%', margin: '0 auto'}}>
          <Button sx={{width: '100%'}} onClick={() => setCurrentProjects((count) => count + MaxProjects)}>
            show more
          </Button>
        </Container>
      </Container>
    </Box>
  );
}

const projects = [
  {
    name: "coneast.dev ",
    description: "My portfolio website, your on it right now; it uses an astro js backend with react and MUI for the front.",
    tags: [["JS", "#F0DB4F"], ["React", "#0081A3"], ["Astro js", "#fffefe"]],
    links: [["Github", "https://github.com/coneastdev/coneast.dev"], ["Site", "https://coneast.dev/"]],
    date: "7 Feb 2026"
  },
  {
    name: "Circle Functions",
    description: "A simple win forms app for calculating the stat's of a circle based on radius.",
    tags: [["c#", "#9179E4"], ["WinForms", "#9179E4"]],
    links: [["Github", "https://github.com/coneastdev/CircleFunctions"]],
    date: "29 Sep 2026"
  },
  {
    name: "cli rng",
    description: "A cli tool for generating random numbers and outcomes.",
    tags: [["c++", "#659AD2"]],
    links: [["Github", "https://github.com/coneastdev/cli-rng"]],
    date: "17 Sep 2026"
  },
  {
    name: "cmdbk",
    description: "A collection of cli commands written in markdown.",
    tags: [["md", "#aaa"]],
    links: [["Github", "https://github.com/coneastdev/cmdbk"]],
    date: "16 Sep 2026"
  },
  {
    name: "Area Calc",
    description: "A winforms area size calculator.",
    tags: [["c#", "#9179E4"], ["WinForms", "#9179E4"]],
    links: [["Github", "https://github.com/coneastdev/AreaCalc"]],
    date: "16 Sep 2026"
  },
  {
    name: "Course Work",
    description: "A collection of course work from my time at middlesbrough college.",
    tags: [["JS", "#F0DB4F"], ["Py", "#0081A3"]],
    links: [["Github", "https://github.com/coneastdev/course-work"], ["site", "https://github.coneast.dev/course-work/"]],
    date: "12 Jan 2026"
  },
  {
    name: "Py Snips",
    description: "A collection of python algorithms.",
    tags: [["Py", "#0081A3"]],
    links: [["Github", "https://github.com/coneastdev/py-snips"]],
    date: "23 Mar 2026"
  },
  {
    name: "Py Geo Cli",
    description: "A python cli for getting historic weather data via an api.",
    tags: [["Py", "#0081A3"]],
    links: [["Github", "https://github.com/coneastdev/py-geo-cli"]],
    date: "2 Mar 2026"
  },
  {
    name: "py data analysis",
    description: "A collection of data analyst scripts in python.",
    tags: [["Py", "#0081A3"], ["Pandas", "#0081A3"], ["MatPlotLib", "#0081A3"]],
    links: [["Github", "https://github.com/coneastdev/py-data-analysis"]],
    date: "20 Jan 2026"
  },
  {
    name: "py ffmpeg gui",
    description: "A simple gui for ffmpeg that lets you convert between video formats with ease.",
    tags: [["Py", "#0081A3"], ["Beautiful soup", "#0081A3"], ["qt", "#007808"], ["ffmpeg", "#007808"]],
    links: [["Github", "https://github.com/coneastdev/py-ffmpeg-gui"]],
    date: "11 Jan 2026"
  },
  {
    name: "gift recommendation system",
    description: "A collaboration with a fellow pupil in a christmas competition.",
    tags: [["Py", "#0081A3"], ["SQLite", "#aaa"]],
    links: [["Github", "https://github.com/coneastdev/Christmas-college-comp-Santa-s-Intelligent-Gift-Recommendation-System"]],
    date: "15 Dec 2025"
  },
  {
    name: "oss licencer",
    description: "What was supposed to be a submission for a hackathon, it is a simple app for importing oss licences.",
    tags: [["Py", "#0081A3"], ["Beautiful soup", "#0081A3"], ["qt", "#007808"]],
    links: [["Github", "https://github.com/coneastdev/oss-licencer"]],
    date: "18 Oct 2025"
  },
  {
    name: "is it down?",
    description: "A simple TKinter app for checking the status of websites.",
    tags: [["Py", "#0081A3"], ["Beautiful soup", "#0081A3"], ["tk", "#0081A3"]],
    links: [["Github", "https://github.com/coneastdev/is-it-down"]],
    date: "8 Oct 2025"
  },
  {
    name: "give me the lyrics",
    description: "A customtkinter webscarper to get lyrics to songs.",
    tags: [["Py", "#0081A3"], ["Beautiful soup", "#0081A3"], ["customtk", "#0081A3"]],
    links: [["Github", "https://github.com/coneastdev/give-me-the-lyrics"]],
    date: "1 Oct 2025"
  },
  {
    name: "tedex (ted-dex)",
    description: "A simple website for viewing random ted talks. This was made for a college project.",
    tags: [["JS", "#F0DB4F"], ["Py", "#0081A3"]],
    links: [["Github", "https://github.com/coneastdev/tedex"], ["Site", "https://github.coneast.dev/tedex/"]],
    date: "20 Sep 2025"
  },
  {
    name: "py report",
    description: "A small TKinter app for reporting incidents",
    tags: [["Py", "#0081A3"], ["SQLite", "#aaa"]],
    links: [["Github", "https://github.com/coneastdev/pyreport"]],
    date: "25 Dec 2024"
  },
  {
    name: "py playlist",
    description: "A python cli for making, managing and recommending playlists. Made for my GCSE in computer science.",
    tags: [["Py", "#0081A3"]],
    links: [["Github", "https://github.com/coneastdev/pyplaylist"]],
    date: "22 Dec 2024"
  }
];