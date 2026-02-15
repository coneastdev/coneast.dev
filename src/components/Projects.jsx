import '../styles/global.css';

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

export default function AlternateTimeline() {
  return (
    <div className="bg-linear-to-tl from-slate-200 via-slate-50 to-slate-200 dark:from-stone-950 dark:via-stone-900 dark:to-stone-950">
        <br />
        <Typography>
            <p className="text-center dark:text-white text-4xl">Projects</p>
        </Typography>
        <br /><br />
        <Timeline position="alternate">
        <TimelineItem>
            <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
                <Card sx={{ maxWidth: 500 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image="https://astro.build/_astro/cover.CebdgvR7_22T2Je.webp?dpl=6991a1cdec80e1000870680f"
                        title="coneast.dev"
                        loading="lazy"
                    />
                    <CardContent className="dark:bg-stone-800 dark:text-stone-200">
                        <Typography gutterBottom variant="h5" component="div">
                        coneast.dev
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        <p className="dark:text-stone-300">My personal website, made in astro-js, react, tailwind and mui.</p>
                        </Typography>
                    </CardContent>
                    <CardActions  className="dark:bg-stone-800">
                        <a href="https://github.com/coneastdev/coneast.dev" target="_blank"><Button size="small">GitHub</Button></a>
                        <Button size="small" disabled>blog</Button>
                    </CardActions>
                    </Card>
            </TimelineContent>
        </TimelineItem>
        <TimelineItem>
            <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent className="flex justify-end">
                <Card sx={{ maxWidth: 500 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/FFmpeg_Logo_new.svg/3840px-FFmpeg_Logo_new.svg.png"
                        title="py-ffmpeg-gui"
                        loading="lazy"
                    />
                    <CardContent className="dark:bg-stone-800 dark:text-stone-200 text-left">
                        <Typography gutterBottom variant="h5" component="div">
                        py ffmpeg gui
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        <p className="dark:text-stone-300">A simple python QT app for compressing and converting videos via ffmpeg.</p>
                        </Typography>
                    </CardContent>
                    <CardActions  className="dark:bg-stone-800">
                        <a href="https://github.com/coneastdev/py-ffmpeg-gui" target="_blank"><Button size="small">GitHub</Button></a>
                        <Button size="small" disabled>blog</Button>
                    </CardActions>
                    </Card>
            </TimelineContent>
        </TimelineItem>
        <TimelineItem>
            <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
                <Card sx={{ maxWidth: 500 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/The_Sounds_of_Earth_-_GPN-2000-001976.jpg/1920px-The_Sounds_of_Earth_-_GPN-2000-001976.jpg"
                        title="give-me-the-lyrics"
                        loading="lazy"
                    />
                    <CardContent className="dark:bg-stone-800 dark:text-stone-200">
                        <Typography gutterBottom variant="h5" component="div">
                        give me the lyrics
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        <p className="dark:text-stone-300">Web scraper for song lyrics, I made the function myself but collaborated with my friends on other aspects like the UI.</p>
                        </Typography>
                    </CardContent>
                    <CardActions  className="dark:bg-stone-800">
                        <a href="https://github.com/coneastdev/give-me-the-lyrics/" target="_blank"><Button size="small">GitHub</Button></a>
                        <Button size="small" disabled>blog</Button>
                    </CardActions>
                    </Card>
            </TimelineContent>
        </TimelineItem>
        </Timeline>
    </div>
  );
}