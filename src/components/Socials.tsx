import '../styles/global.css';

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Link from '@mui/material/Link';

import CredlyLogo from '../assets/images/credly-svgrepo-com.svg';
import DevpostLogo from '../assets/images/devpost-svgrepo-com.svg';

export default function StandardImageList() {
  return (
    <div className="dark:bg-stone-800 dark:text-white">
      <p className="text-center"><b>Socials</b></p><br />
      <ImageList cols={3}>
        <ImageListItem key="GitHub" className="m-1">
          <Link href="https://github.com/coneastdev" target="_blank">
            <img
              srcSet="https://github.com/edent/SuperTinyIcons/raw/refs/heads/master/images/svg/github.svg?w=164&h=164&fit=crop&auto=format&dpr=2 2x"
              src="https://github.com/edent/SuperTinyIcons/raw/refs/heads/master/images/svg/github.svg?w=164&h=164&fit=crop&auto=format"
              alt="GitHub"
              loading="lazy"
            />
          </Link>
        </ImageListItem>
        <ImageListItem key="Credly" className="m-1">
          <Link href="https://www.credly.com/users/connor-eastwood/badges" target="_blank">
            <img
              src={CredlyLogo.src}
              alt="Credly"
              loading="eager"
            />
          </Link>
        </ImageListItem>
        <ImageListItem key="Dev Post" className="m-1">
          <Link href="https://devpost.com/coneastdev" target="_blank">
            <img
              src={DevpostLogo.src}
              alt="Dev Post"
              loading="eager"
            />
          </Link>
        </ImageListItem>
      </ImageList>
    </div>
  );
}