import '../styles/global.css';

import Avatar from '@mui/material/Avatar';


export default function InsetList() {
  return (
    <div className="dark:bg-stone-800 dark:text-white">
        <div className="flex">
          <Avatar
            alt="Profile Picture"
            src="/josh.jpg"
            sx={{ width: 128, height: 128 }}
            className="m-5"
            />
          <div className="flex-2 m-5">
            <p className="text-5xl">Connor Eastwood</p>
            <p className="text-4xl">Software Developer</p>
            <p className="text-2xl">Student at Middlesbrough college</p>
          </div>
        </div>
        
    </div>
  );
}