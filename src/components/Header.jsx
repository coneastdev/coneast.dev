import '../styles/global.css';

import Profile from './Profile'
import SiteMap from './SiteMap';
import Contents from './Contents';
import Contacts from './Contacts'
import Socials from './Socials'
import Skills from './Skills'

import Paper from '@mui/material/Paper';

export default function InsetList() {
  return (
    <div className="md:flex bg-linear-to-tr from-slate-200 via-slate-50 to-slate-200 dark:from-stone-950 dark:via-stone-900 dark:to-stone-950">
      <div className="md:w-32 flex-7 m-5">
        <Paper elevation={3} className="m-5">
          <Profile />
        </Paper>
        <div className="md:flex">
          <Paper className="m-5 flex-1">
            <Contacts />
          </Paper>
          <Paper className="m-5 flex-1">
            <Socials />
          </Paper>
        </div>
        <Paper elevation={3} className="m-5">
          <Skills />
        </Paper>
      </div>
      <div className="md:flex-1 md:w-32"></div>
      {/* <div className="md:w-32 flex-3 m-5">
        <Paper elevation={3} className="m-7">
          <SiteMap />
        </Paper>
        <Paper elevation={3} className="m-7">
          <Contents />
        </Paper>
      </div> */}
      <div className="md:flex-1 md:w-32"></div>
    </div>
  );
}
