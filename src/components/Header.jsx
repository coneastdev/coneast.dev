import '../styles/global.css';

import Profile from './Profile'
import SiteMap from './SiteMap';
import Contents from './Contents';

import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';

export default function InsetList() {
  return (
    <div className="flex">
      <div className="w-32 flex-1 m-10">
        <Paper elevation={3}>
          <Profile />
        </Paper>
      </div>
      <div className="w-32 flex-1 m-5">
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