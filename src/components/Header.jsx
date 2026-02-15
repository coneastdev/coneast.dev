import '../styles/global.css';

import Profile from './Profile'
import SiteMap from './SiteMap';
import Contents from './Contents';
import Links from './Links'
import Skills from './Skills'

import Paper from '@mui/material/Paper';

export default function InsetList() {
  return (
    <div className="md:flex bg-linear-to-tr from-slate-200 via-slate-50 to-slate-200">
      <div className="md:w-32 flex-1 m-5">
        <Paper elevation={3} className="m-5">
          <Profile />
        </Paper>
        <Paper className="m-5">
          <Links />
        </Paper>
        <Paper className="m-5">
          <Skills />
        </Paper>
      </div>
      <div className="md:w-32 flex-1 m-5">
        <Paper elevation={3} className="m-5">
          <SiteMap />
        </Paper>
        <Paper elevation={3} className="m-5">
          <Contents />
        </Paper>
      </div>
    </div>
  );
}