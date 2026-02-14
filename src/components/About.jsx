import '../styles/global.css'

import SiteMap from './SiteMap';

import Paper from '@mui/material/Paper';

export default function InsetList() {
  return (
    <div className="flex">
      <div className="w-32 flex-1 m-5">
        <Paper elevation={3}>
          <h3>test</h3>
        </Paper>
      </div>
      <div className="w-32 flex-1 m-5">
        <Paper elevation={3}>
          <SiteMap />
        </Paper>
      </div>
    </div>
  );
}